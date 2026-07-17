import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'pubg-battlegrounds',
  title: {
    zh: 'PUBG 绝地求生',
    en: 'PUBG: Battlegrounds',
    ja: 'PUBG: バトルグラウンズ',
    ko: 'PUBG: 배틀그라운즈',
  },
  deck: {
    zh: '你是哪种绝地求生玩家？',
    en: 'What kind of PUBG player are you?',
    ja: 'あなたはどんなPUBGプレイヤー？',
    ko: '당신은 어떤 배그 플레이어인가요?',
  },
  description: {
    zh: '30 道题，测出你的 PUBG 求生风格。8 种原型、6 维雷达、专属玩家身份码——从物资会计师到落地刚枪喜剧人，总有一型说中你。',
    en: '30 questions to reveal your PUBG survival style. 8 archetypes, 6-axis radar, a player code — from loot accountant to hot-drop comedian. Find out which one you actually are.',
    ja: '30問でPUBGのサバイバルスタイルを診断。8タイプ・6軸レーダー・6文字コード付き。物資会計士からホットドロップ喜劇人まで、あなたのタイプを見つけよう。',
    ko: '30문항으로 배그 생존 스타일 진단. 8가지 유형·6축 레이더·플레이어 코드 포함. 루팅 회계사부터 핫드랍 코미디언까지, 당신의 유형을 찾아보세요.',
  },
  dominantAxes: ['Tempo', 'Nerve', 'Flair'] as const,
  archetypes: [
    // ── 1. loot-accountant ──────────────────────────────────────────────────────
    {
      slug: 'loot-accountant',
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'low',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '包裹分拣员',
        en: 'The Parcel Sorter',
        ja: '荷物仕分け人',
        ko: '가방 강박러',
      },
      oneLiner: {
        zh: '背包要按逻辑摆放，舔包前先分拣，比正经快递站还讲究',
        en: 'Loot gets sorted before it gets touched — tidier than an actual warehouse floor',
        ja: '拾う前に仕分けする。本物の仕分け場より几帳面',
        ko: '줍기 전에 분류부터. 진짜 물류센터보다 깐깐하다',
      },
      description: {
        zh: '你的背包按分区摆放：头盔和防弹衣在上层，弹药和手雷在下层，跟真正的快递分拣员没什么两样——甚至更龟毛。捡东西前你会先做一次"分拣"：这把枪值不值得带，这发子弹配不配你现在的武器。你不算贪，你只是见不得混乱。你不太在乎吃鸡，你在乎每一次撤退背后都有据可查。你信奉一件事：死在装备比你好的人手里没关系，只要你自己的包是对的。',
        en: 'Your inventory is zoned like a distribution center: armor up top, meds sorted by heal speed, grenades after ammo, junk attachments never. You don\'t grab loot — you sort it. Every pickup gets a pass-fail check: worth the weight, or worth leaving on the shelf. You\'re not chasing the chicken dinner so much as running quality control on your own survival. Dying to a better-geared player stings less when your own bag was, at least, correctly organized.',
        ja: 'バッグは物流センターみたいに区分されている。アーマーは上段、回復アイテムは回復量順、弾薬の後に手榴弾、使わない付属品は最初から拾わない。拾うのではなく仕分けするんだ。荷物ひとつひとつに「持つ価値があるか、棚に残すべきか」を判定する。ドン勝が目的というより、自分の生存の品質管理をしている感覚に近い。もっと強い装備の相手に負けても、自分のバッグが正しく整理されていたなら悔いは少ない。',
        ko: '가방은 물류센터처럼 구역이 나뉘어 있다. 방어구는 위쪽, 회복템은 회복량 순서, 탄약 다음에 수류탄, 못 쓰는 부착물은 애초에 안 줍는다. 줍는 게 아니라 분류하는 거다. 뭘 집을 때마다 "들고 다닐 가치가 있나, 두고 가야 하나" 판정한다. 치킨이 목표라기보다 자기 생존에 대한 품질 관리를 하는 느낌이다. 더 좋은 장비 가진 상대한테 져도, 최소한 내 가방은 제대로 정리돼 있었다는 게 위안이 된다.',
      },
      symptoms: [
        {
          zh: '舔包时会把用不上的配件扔掉，以便对背包进行"最优化"',
          en: 'You drop attachments you can\'t use because an untidy bag distracts you mid-fight',
          ja: '使えないアタッチメントは捨てる。戦闘中のバッグの乱れが気になるから',
          ko: '못 쓰는 부착물은 버린다. 전투 중에 가방이 지저분하면 신경 쓰이니까',
        },
        {
          zh: '三级头就算打坏了也不换二级头，死也要戴着三级头死',
          en: 'A damaged Level 3 helmet stays on — you\'d rather die wearing it than swap down to Level 2',
          ja: '壊れたレベル3ヘルメットはそのまま。レベル2に落とすくらいなら被ったまま死ぬ',
          ko: '부서진 3레벨 헬멧 그대로 쓴다. 2레벨로 교체하느니 3레벨 쓰고 죽겠다',
        },
        {
          zh: '看到队友乱舔包就身体不舒服，忍不住要帮他整理',
          en: 'Watching a teammate loot randomly produces a physical discomfort you can\'t fully explain',
          ja: 'チームメイトが無秩序に漁るのを見ると、なぜか体が不快になる',
          ko: '팀원이 무작위로 루팅하는 거 보면 몸이 불편해진다. 설명하기 어렵다',
        },
        {
          zh: '决赛圈前要确认：弹药充足、有两个医疗包、手雷至少一个',
          en: 'You run a pre-final-circle checklist: meds, ammo count, at least one grenade',
          ja: '最終サークル前にチェックリストを確認する：回復、弾薬、手榴弾は最低1個',
          ko: '최종 원 전에 체크리스트 돌린다: 회복템, 탄약량, 수류탄 최소 하나',
        },
        {
          zh: '死于毒圈时的第一反应不是骂，而是回想有没有一个医疗包可以多撑一秒',
          en: 'When you die to the blue zone, your first thought is whether one more bandage could have saved you',
          ja: 'ブルーゾーンで死ぬと、まず「包帯一枚あれば助かったか」と考える',
          ko: '블루존에 죽으면 첫 번째 생각이 "붕대 하나 더 있었으면 버텼을까"다',
        },
      ],
      rivalSlug: 'hot-drop-comedian',
      bestSquadSlug: 'safezone-ferry',
    },

    // ── 2. circle-aesthete ──────────────────────────────────────────────────────
    {
      slug: 'circle-aesthete',
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'low',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '圈边作死摄影师',
        en: 'The Near-Death Photographer',
        ja: 'デスゾーン写真家',
        ko: '인생샷 헌터',
      },
      oneLiner: {
        zh: '为了拍到毒圈边的落日，宁愿掉两条血',
        en: 'Takes the sunset shot at the zone edge — two health bars is a fair price',
        ja: 'ブルーゾーンの夕日を撮るためなら、体力バー2本くらい安いものだ',
        ko: '인생샷 한 장 위해 자기장 데미지 두 번은 감수한다',
      },
      description: {
        zh: '毒圈对别人是恐慌，对你是"这机位绝了"。你喜欢贴着圈边走，一边扣血一边找角度——不折不扣的圈边作死自拍现场。你知道毒圈伤害公式，也算过在外面多待一分钟要扣几管血，但你还是会为了一张"决赛圈落日"截图，故意晚半拍撤离。队友问你"跑起来了没"，你说"快了快了"，手指其实还在调镜头角度。绝地求生对你来说是一款战地摄影游戏，顺便有人在打枪。',
        en: 'Everyone else panics when the circle shrinks. You check the lighting. You\'ve done the math on blue zone damage — you know exactly how many meds one extra minute outside costs — and you spend it anyway, chasing a "final circle sunset" screenshot. Teammates ask if you\'re moving. You say "almost there" while your thumb is still adjusting the camera angle. Other people call it reckless. You call it content.',
        ja: 'みんながサークル縮小でパニックになる中、あなたは光の当たり方を確認している。ブルーゾーンのダメージ計算はできていて、あと1分外にいると回復アイテムが何個必要かも分かっている。それでも「最終サークルの夕日」ショットのために、その代償を払う。チームメイトに「移動した？」と聞かれると「もうすぐ」と答えながら、指はまだカメラ角度を調整している。周りは無謀と呼ぶ。あなたはそれをコンテンツと呼ぶ。',
        ko: '다들 자기장 줄어들면 패닉인데, 당신은 조명부터 확인한다. 블루존 데미지 공식은 이미 계산 끝났다 — 1분 더 밖에 있으면 회복템 몇 개 드는지도 안다 — 그래도 "최종 원 노을" 인생샷 한 장을 위해 그 값을 치른다. 팀원이 "이동했어?" 물으면 "거의 다 왔어" 하면서 손가락은 아직 카메라 각도 만지고 있다. 남들은 무모하다고 한다. 당신은 그걸 "인생샷"이라고 부른다.',
      },
      symptoms: [
        {
          zh: '每把游戏至少一次靠着圈边扣血走，队友以为你在测试极限，其实你只是在欣赏',
          en: 'At least once per match, you take blue zone ticks by choice. Teammates think you\'re being reckless; you\'re being aesthetic',
          ja: '毎試合1回は意図的にブルーゾーンでダメージを受ける。リスクではなく美学として',
          ko: '매 판 한 번은 일부러 블루존 데미지 맞는다. 무모한 게 아니라 미학적 선택이다',
        },
        {
          zh: '你的高光片段有一半是死于毒圈前最后那几秒的截图',
          en: 'Half your highlight clips end with you dying three steps from the safe zone circle',
          ja: 'ハイライトの半分は、セーフゾーンまであと数歩のところで死んでいるシーン',
          ko: '하이라이트 클립 절반이 안전 구역 몇 걸음 앞에서 죽는 장면이다',
        },
        {
          zh: '"最后一次了"是你每次贴圈边走的内心想法，但下一把依然如此',
          en: '"Just this once" is a phrase you\'ve used every single match for three months',
          ja: '「今回だけ」を3ヶ月間、毎試合言い続けている',
          ko: '"이번 한 번만"을 3개월 동안 매 판 말하고 있다',
        },
        {
          zh: '决赛圈之所以能进到，不是因为你打赢了，而是因为你比其他圈边玩家多一个医疗包',
          en: 'You reach the final circle not because you outfought anyone, but because you had one more bandage than the other edge player',
          ja: '最終サークルに入れるのは戦闘が強いからではなく、他のエッジプレイヤーより包帯が1枚多かったからだ',
          ko: '최종 원에 들어가는 건 싸움을 잘해서가 아니라 다른 가장자리 플레이어보다 붕대 하나 더 있어서다',
        },
      ],
      rivalSlug: 'hot-drop-cfo',
      bestSquadSlug: 'loot-accountant',
    },

    // ── 3. ridge-sniper ─────────────────────────────────────────────────────────
    {
      slug: 'ridge-sniper',
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'high',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '山脊狙击士',
        en: 'Ridge Sniper',
        ja: '稜線スナイパー',
        ko: '능선 저격수',
      },
      oneLiner: {
        zh: '慢热激进独狼，400 米开外才是战场',
        en: 'Climbed Miramar\'s highest ridge at minute three and hasn\'t moved since',
        ja: '3分でミラマーの最高点に登り、そこから動いていない',
        ko: '3분에 미라마 최고점 올라가서 아직도 거기 있다',
      },
      description: {
        zh: '你认为 400 米以内的交战距离都叫近战。你喜欢 Miramar 的山脊，因为视野开阔、可以看清所有人；你讨厌 Sanhok，因为那里距离太近，看不出技术高下。你花了三分钟爬上最高点，然后在那里等圈。Kar98k 架好，等一个脑袋出现。你听声辨位的本事比大多数人的瞄准还准——一声枪响，你已经在算方位角了。"Peek and heal"是你的生活哲学——开一枪、进掩体、上药、再重复。',
        en: 'Four hundred meters is your comfort zone. Closer than that and it\'s a brawl; you don\'t do brawls. You chose your ridge before the first minute and built a nest. AWM or Kar98k — anything with a bolt is acceptable. Your ear for gunshot direction is sharper than most players\' aim — one shot rings out and you\'ve already triangulated the angle. The peek-and-heal loop is so ingrained that you do it in real life: act, retreat, recover, repeat. You take shots that other players don\'t see coming, which is the point.',
        ja: '400メートルがコンフォートゾーン。それより近いのは乱闘で、乱闘はしない。1分以内に稜線を決めて、陣地を構築した。AWMかKar98k——ボルトアクションなら何でもいい。銃声の方向を聞き分ける耳は、たいていの人の照準より正確だ——一発鳴った瞬間、もう角度を計算している。ピーク&ヒールのループは生活哲学になっている。行動→撤退→回復→繰り返し。他のプレイヤーには見えない距離から撃つ。それが目的だ。',
        ko: '400미터가 편안한 거리다. 그보다 가까우면 난전이고, 난전은 안 한다. 1분 안에 능선 자리 잡고 진지 구축했다. AWM이나 Kar98k — 볼트액션이면 뭐든 된다. 사플(소리로 위치 잡기) 실력이 웬만한 사람 에임보다 정확하다 — 총소리 한 번 울리면 이미 각도 계산 끝났다. 피크-힐 루프가 생활 철학이 됐다. 행동→후퇴→회복→반복. 다른 플레이어가 볼 수 없는 거리에서 쏜다. 그게 포인트다.',
      },
      symptoms: [
        {
          zh: '每场的第一个动作是找地图上的最高点，不管圈在不在那',
          en: 'Your first in-game action is locating the map\'s highest elevation, regardless of where the circle is',
          ja: '試合開始後の最初の行動は地図の最高地点を探すこと。サークルがどこかは関係ない',
          ko: '게임 시작 후 첫 행동은 지도에서 최고 고도 찾기다. 원이 어디 있든 상관없다',
        },
        {
          zh: '被人近身打死后会在观战模式里研究对方怎么接近你的',
          en: 'After dying to someone who flanked close, you spend observer mode studying their approach route',
          ja: '近距離フランクで倒された後は、相手のアプローチルートを観戦モードで研究する',
          ko: '근접 플랭크에 죽으면 관전 모드에서 상대 접근 루트를 연구한다',
        },
        {
          zh: '你的击杀数不多，但每次击杀你都记得距离',
          en: 'Your kill count is modest, but you remember the exact meter distance of every one',
          ja: 'キル数は多くないが、すべてのキルの正確な距離を覚えている',
          ko: '킬 수는 많지 않지만, 모든 킬의 정확한 거리를 기억한다',
        },
        {
          zh: 'Sanhok 地图你打得漫不经心，因为"这地图不适合正常人玩"',
          en: 'Sanhok maps feel wrong. The trees are too close. There\'s no room to be correct.',
          ja: 'サノックは好きじゃない。木が近すぎる。技術を発揮する空間がない。',
          ko: '사녹 맵은 이상하다. 나무가 너무 가깝다. 실력 발휘할 공간이 없다.',
        },
        {
          zh: '听见 AWM 枪声你会立刻趴下，并开始算对方可能在哪个方位',
          en: 'AWM shot rings out — you\'re already prone, already calculating the shooter\'s position from the bullet travel time',
          ja: 'AWMの発砲音が聞こえると即座に伏せ、弾の飛行時間から射手の位置を計算する',
          ko: 'AWM 발사음 들리면 바로 엎드리고, 탄환 비행시간으로 저격수 위치 계산한다',
        },
      ],
      rivalSlug: 'hot-drop-comedian',
      bestSquadSlug: 'safezone-ferry',
    },

    // ── 4. prone-philosopher ────────────────────────────────────────────────────
    {
      slug: 'prone-philosopher',
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'high',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '决赛圈伏地哲学家',
        en: 'Prone Philosopher',
        ja: '最終サークル伏せ哲学者',
        ko: '최종 원 눕기 철학자',
      },
      oneLiner: {
        zh: '"草丛里有尊严"——伏地魔不是战术，是人生态度',
        en: '"There is dignity in this grass." The prone position as a philosophy, not a tactic',
        ja: '「この草むらには品格がある」——伏せは戦術ではなく哲学だ',
        ko: '"이 풀밭에는 품격이 있다." 눕기는 전술이 아니라 철학이다',
      },
      description: {
        zh: '你已经在这片草丛趴了八分钟了。你不认为这叫"龟缩"，你认为这叫"占据战略要点"。伏地魔是别人给你的标签，老六是它的进阶版，你全盘接受，但你有自己的哲学：最后站起来的人才是对的。你不急，你不慌，你相信时间和草丛是你的盟友。等到决赛圈只剩两个人，你会站起来，优雅地换上你最喜欢的皮肤，然后出击——或者继续趴着，这也是一种艺术。',
        en: 'Eight minutes face-down in the same patch of grass. Not camping — position management. You\'ve watched four firefights happen around you, taken none of them, and you have no regrets about any of it. The "伏地魔" label doesn\'t bother you, and neither does getting called the sixth man nobody saw coming. You have a counterargument ready: of the players who rushed, how many made it to the final circle? Exactly. The grass is not cover. The grass is a statement.',
        ja: '同じ草むらに8分間伏せている。キャンプではなく、ポジション管理だ。周りで4回の交戦を目撃したが、どれにも参加しなかった。後悔はない。「伏地魔」というレッテルも、誰も気づかない六人目と呼ばれることも気にしない。反論の準備もできている：突撃したプレイヤーは何人最終サークルに残っているか？その通り。草むらは隠れ場所ではなく、声明だ。',
        ko: '같은 풀밭에 8분째 엎드려 있다. 캠핑이 아니라 포지션 관리다. 주변에서 교전 4번 봤고, 하나도 참여 안 했다. 후회 없다. 존버라는 말이 좀 없어 보이게 들리는 거 알지만 신경 안 쓴다. 반론 준비됐다: 돌격한 플레이어 중 최종 원까지 온 사람이 몇 명이냐고? 맞다. 풀밭은 은폐물이 아니라 선언이다.',
      },
      symptoms: [
        {
          zh: '你在游戏内的 crouch/prone 键磨损速度明显高于其他所有按键',
          en: 'Your prone key has more wear than any other key on the keyboard',
          ja: '伏せキーが他のどのキーより消耗している',
          ko: '눕기 키가 다른 모든 키보다 마모가 심하다',
        },
        {
          zh: '当别人问你在哪里时，你会说方向，不说具体建筑，因为你从来不在建筑里',
          en: 'When asked where you are, you give a compass bearing, never a building name — you\'re never in a building',
          ja: '「どこにいる？」と聞かれると方角で答える。建物の名前は言わない。建物にいることがないから',
          ko: '"어디 있어?" 물으면 방향으로 답한다. 건물 이름은 안 말한다. 건물에 있는 일이 없으니까',
        },
        {
          zh: '你打过胜率最高的地图是 Erangel，因为草最多',
          en: 'Your best win-rate map is Erangel. The grass density is not a coincidence.',
          ja: '勝率が一番高いマップはエランゲル。草が多いのは偶然ではない。',
          ko: '승률 가장 높은 맵이 에란겔이다. 풀이 많다는 건 우연이 아니다.',
        },
        {
          zh: '你对别人说"他在草丛里"感到莫名的荣誉感',
          en: 'Hearing "he\'s in the grass" during final circle gives you a quiet sense of prestige',
          ja: '最終サークルで「草むらにいる」と言われると、静かな誇りを感じる',
          ko: '최종 원에서 "풀밭에 있어"라는 말 들으면 조용한 자부심이 생긴다',
        },
        {
          zh: '你的吃鸡截图几乎全是趴着的视角，偶尔有站起来换皮肤那一刻',
          en: 'Your chicken dinner screenshots are all from ground level. One is you standing up to change outfits.',
          ja: 'チキン（ドン勝）のスクリーンショットはすべて地面の高さから。1枚だけ衣装替えで立っている。',
          ko: '치킨 스크린샷이 전부 지면 높이에서 찍혔다. 한 장만 옷 갈아입으려고 일어선 거다.',
        },
      ],
      rivalSlug: 'hot-drop-cfo',
      bestSquadSlug: 'circle-aesthete',
    },

    // ── 5. safezone-ferry ───────────────────────────────────────────────────────
    {
      slug: 'safezone-ferry',
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'low',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '安全区收件员',
        en: 'The Safezone Courier',
        ja: '圏内配達人',
        ko: '자기장 부동산업자',
      },
      oneLiner: {
        zh: '舔包 30 秒封顶，收快递才是正经事',
        en: 'Loots on a 30-second timer — the real skill is arriving right after the fight ends',
        ja: '漁りは30秒まで。本当の仕事は交戦が終わった直後に現れることだ',
        ko: '루팅은 30초 컷. 진짜 실력은 자기장 미리 찜해두는 부동산 감각이다',
      },
      description: {
        zh: '你的求生逻辑很简单：安全的地方永远在圈里，不在战场上。别人还在打枪的时候，你已经在"收件"路上了。你舔包设了硬性时限——30 秒内搞定，超时就走，你不是在逃跑，你是提前占好下一个圈的位置。等两组人打完，你才姗姗来迟，捡起地上那份"包裹"。这不叫捡漏，这叫准时收件。',
        en: 'Your survival logic is simple: the safe place is always inside the circle, never in the middle of a fight. While everyone else is still shooting, you\'re already moving toward the next one. Looting runs on a hard thirty-second timer — over that, you leave, gear be damned. It\'s not running away, it\'s early positioning. You let two squads exhaust each other, then show up right on schedule to collect what\'s left. Call it opportunism if you want. You call it a delivery window.',
        ja: '生存の論理はシンプルだ。安全な場所は常にサークルの中で、戦闘の真ん中じゃない。みんながまだ撃ち合っている間に、もう次のサークルへ移動している。漁りには厳格な30秒タイマーがあって、超えたら装備がどうであれ離脱する。逃げているんじゃない、早めのポジショニングだ。2チームが消耗し合うのを待って、ちょうどいいタイミングで残ったものを回収する。日和見と呼びたければ呼べばいい。あなたはそれを「配達の時間厳守」と呼ぶ。',
        ko: '생존 논리는 간단하다. 안전한 곳은 항상 원 안이지, 교전 한복판이 아니다. 다들 아직 총 쏘는 동안 당신은 이미 다음 원으로 이동 중이다. 루팅에는 엄격한 30초 타이머가 있고, 넘으면 장비고 뭐고 이탈한다. 도망이 아니라 미리 자리 잡는 거다. 두 팀이 서로 소모할 때까지 기다렸다가, 딱 맞는 타이밍에 나타나 남은 걸 챙긴다. 기회주의라고 부르고 싶으면 불러도 좋다. 당신은 그걸 "부동산 타이밍"이라고 부른다.',
      },
      symptoms: [
        {
          zh: '你永远是第一个说"先转移"的人，而且永远是对的',
          en: 'You\'re always first to call "let\'s move" and always right about the timing',
          ja: '「移動しよう」と最初に言うのは常にあなたで、タイミングも常に正しい',
          ko: '"이동하자" 항상 제일 먼저 말하고, 타이밍도 항상 맞다',
        },
        {
          zh: '到了安全圈之后，你会蹲在掩体后面开始规划下一个圈的路线',
          en: 'The moment you\'re in the safe zone, you\'re already scoping the route to the next one',
          ja: 'セーフゾーンに入った瞬間、次のサークルへのルートを計画し始める',
          ko: '안전 지대 들어오는 순간, 바로 다음 원 루트 계획 시작한다',
        },
        {
          zh: '你 clean up 了很多对局，但你不喜欢别人这么叫你，你称之为"战术耐心"',
          en: 'You\'ve cleaned up more fights than you\'ve started, but "clean up" sounds opportunistic — you prefer "tactical patience"',
          ja: '始めた交戦より拾った交戦の方が多いが、「クリーンアップ」という言い方は好きじゃない。「戦術的忍耐」と呼ぶ',
          ko: '시작한 교전보다 뒤처리한 교전이 더 많지만, "클린업"이라는 표현은 싫다. "전술적 인내"라고 부른다',
        },
        {
          zh: '队友卡在圈外打枪，你把车开到圈边等他，超过 10 秒就走',
          en: 'A teammate is stuck outside looting — you park the car at the safe zone edge, wait ten seconds, then drive',
          ja: 'チームメイトが外で戦っている——車をセーフゾーンの端に止めて10秒待ち、それから走る',
          ko: '팀원이 밖에서 교전 중 — 차를 안전 지대 끝에 세우고 10초 기다린 다음 출발한다',
        },
      ],
      rivalSlug: 'prone-philosopher',
      bestSquadSlug: 'loot-accountant',
    },

    // ── 6. final-pose ───────────────────────────────────────────────────────────
    {
      slug: 'final-pose',
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'low',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '决赛圈换装癖',
        en: 'Chicken Dinner Couture',
        ja: '決勝サークル衣装チェンジ癖',
        ko: '치킨 각 코디',
      },
      oneLiner: {
        zh: '赢之前先换装，皮肤比战术更重要的那五秒',
        en: 'Gear check, then wardrobe check — the skin matters more than the strategy for about five seconds',
        ja: '装備より先に衣装チェック。この5秒だけはスキンの方が戦略より大事だ',
        ko: '장비보다 옷부터 체크. 이 5초만큼은 전략보다 스킨이 중요하다',
      },
      description: {
        zh: '你打 PUBG 有一套完整仪式：落地搜物资，进圈找机会，但真正关键的一步，是决赛圈前打开装扮界面，换上你专属的"吃鸡皮肤"。这就是换装癖——吃鸡是结果，造型才是目的。你会在结算画面前调整视角，确保角色站在最好看的光线下。别人问"怎么赢"，你问"赢了之后好不好看"。',
        en: 'You have a full pre-win ritual. Land, loot, survive to the final circle — and then, the real ceremony: open the inventory, equip the skin you\'ve been saving all game. Not the one you wore the whole match. The one for this exact moment. The chicken dinner is fine. The screenshot is the deliverable. You\'ve adjusted your character\'s stance in the end screen to catch better light. Other players ask how to win more. You ask how to win better-lit.',
        ja: 'PUBGには一連の儀式がある。着地して漁り、サークルでチャンスを探す。でも本当に重要なのは、最終サークル前にインベントリを開いて、このために取っておいたスキンに着替えることだ。ゲーム中ずっと着ていたやつじゃない。この瞬間のためのやつだ。ドン勝自体はいい。でもスクリーンショットこそが成果物だ。勝利画面でより良いライティングを捉えるためにキャラクターの向きを変えたことがある。他のプレイヤーは「どう勝つか」を聞く。あなたは「どう綺麗に勝つか」を聞く。',
        ko: 'PUBG에는 완전한 의식이 있다. 착지해서 루팅하고, 원에서 기회를 찾는다. 근데 진짜 중요한 단계는, 최종 원 전에 인벤토리를 열어서 이 순간을 위해 아껴둔 스킨으로 갈아입는 거다. 게임 내내 입던 거 말고, 딱 이 순간을 위한 거. 치킨 각이 왔다는 건 좋은 일이지만, 스크린샷이야말로 진짜 결과물이다. 결산 화면에서 조명 더 잘 받으려고 캐릭터 자세 바꾼 적 있다. 다른 사람은 "어떻게 더 이기냐"고 묻는다. 당신은 "어떻게 더 예쁘게 이기냐"고 묻는다.',
      },
      symptoms: [
        {
          zh: '你有一套只在决赛圈换的皮肤组合，它存在专门的收藏夹里',
          en: 'You maintain a dedicated "chicken dinner outfit" that you never wear outside the final circle',
          ja: '最終サークル専用の「ドン勝コスチューム」を用意していて、他では絶対に着ない',
          ko: '최종 원 전용 "치킨 코스튬"이 따로 있고, 다른 때는 절대 안 입는다',
        },
        {
          zh: '吃鸡后的第一件事不是对队友说 "GG"，是截图',
          en: 'First thing after winning: screenshot. GG can wait.',
          ja: '勝利後の最初の行動：スクリーンショット。GGは後でいい。',
          ko: '이긴 후 첫 번째 행동: 스크린샷. GG는 나중에 해도 된다.',
        },
        {
          zh: '你有一个截图文件夹，里面的照片比你的手机相册还整洁',
          en: 'Your PUBG screenshot folder is better organized than your phone gallery',
          ja: 'PUBGのスクリーンショットフォルダは携帯の写真アルバムより整理されている',
          ko: 'PUBG 스크린샷 폴더가 휴대폰 갤러리보다 정리가 잘 돼 있다',
        },
        {
          zh: '你曾经因为吃鸡时"没有换皮肤"而感到有什么事没做完',
          en: 'Winning without changing into the proper skin leaves you with a feeling of incompleteness',
          ja: 'コスチュームチェンジなしで勝利すると、何かをやり忘れた感じがする',
          ko: '코스튬 교체 없이 이기면 뭔가 안 한 것 같은 느낌이 든다',
        },
        {
          zh: '你对 PUBG 皮肤的审美有一套系统，能说清楚每套皮肤适合什么地图、什么天气',
          en: 'You have an opinion on which skin works best per map and per time of day',
          ja: 'マップや時間帯ごとにどのスキンが最適かについて、明確な意見がある',
          ko: '맵별, 시간대별로 어떤 스킨이 최고인지 명확한 의견이 있다',
        },
      ],
      rivalSlug: 'ridge-sniper',
      bestSquadSlug: 'hot-drop-cfo',
    },

    // ── 7. hot-drop-cfo ─────────────────────────────────────────────────────────
    {
      slug: 'hot-drop-cfo',
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'high',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '落地刚枪精算师',
        en: 'Hot-Drop CFO',
        ja: 'ホットドロップ精算士',
        ko: '핫드랍 CFO',
      },
      oneLiner: {
        zh: '热门点能活下来的那种，落地刚枪靠的不是运气',
        en: 'Lands at Pochinki and makes it out — the calculation, not the luck',
        ja: 'ポチンキに降りて生き残る。運ではなく計算で',
        ko: '포치인키 내려서 살아나오는 사람. 운이 아니라 계산이다',
      },
      description: {
        zh: '你去热门区不是为了刺激，是因为你计算过：那里物资最多，击杀会给你最快的装备优势。你落地的时候已经看好了最近的枪在哪里、逃跑路线是什么，以及如果建筑里有两个人你先打哪个。别人落地热门区是赌，你落地是在执行方案。你不是每次都活下来，但你活下来的时候会在接下来 20 分钟里每隔五分钟提一次。',
        en: 'You don\'t hot drop for the rush. You do it because the math works: highest loot density, fastest gear-up, first mover advantage on the kill leaderboard. You land with a pre-planned route — nearest gun, exit path, priority target if two players are in the same building. Other people call it gambling. You call it pre-positioning. You don\'t always survive. When you do, the squad hears about it for the next twenty minutes.',
        ja: 'ホットドロップするのはスリルのためではない。数学的に正しいからだ：最高のルート密度、最速のギアアップ、キルリーダーボードでのファーストムーバー優位。事前計画されたルートで降りる——最寄りの銃、脱出路、同じ建物に2人いる場合の優先ターゲット。他の人はギャンブルと呼ぶ。あなたはプレポジショニングと呼ぶ。毎回生き残るわけではない。生き残ったとき、その後20分間スクワッドはそれを聞かされる。',
        ko: '핫드랍하는 건 짜릿함 때문이 아니다. 수학적으로 맞아서다: 최고 루팅 밀도, 최속 장비 확보, 킬 리더보드 선점. 사전 계획된 루트로 내려간다 — 가장 가까운 총, 탈출 경로, 같은 건물에 두 명 있으면 누구 먼저. 다른 사람은 도박이라고 한다. 당신은 사전 포지셔닝이라고 한다. 매번 살아남지는 않는다. 살아남으면, 다음 20분 동안 스쿼드가 그 얘기를 듣게 된다.',
      },
      symptoms: [
        {
          zh: '你知道每张地图每个热门区的平均物资刷新数量，能说出来',
          en: 'You can recite the average loot count of your preferred hot-drop zone on each map',
          ja: 'マップごとのお気に入りホットドロップゾーンの平均ルート数を諳んじることができる',
          ko: '각 맵 선호 핫드랍 존의 평균 루팅 개수를 외워서 말할 수 있다',
        },
        {
          zh: '落地成功活到中期之后，你会花五分钟找队友复盘"落地路线选得有多准"',
          en: 'Surviving a hot drop earns you the right to debrief the squad on your drop line choice for the next five minutes',
          ja: 'ホットドロップを生き残ると、次の5分間スクワッドにドロップラインの選択について説明する権利を得たと感じる',
          ko: '핫드랍 생존하면 다음 5분 동안 스쿼드한테 드랍 라인 선택이 얼마나 정확했는지 설명할 권리 생겼다고 느낀다',
        },
        {
          zh: '你每次落地都有备用方案，即使备用方案通常是"跑"',
          en: 'Every landing has a backup plan. The backup plan is usually "run," but it exists.',
          ja: '毎回の着地にバックアッププランがある。バックアッププランはたいてい「走る」だが、存在はする。',
          ko: '매번 착지에 백업 플랜이 있다. 백업 플랜은 보통 "뛰어"지만, 존재하긴 한다.',
        },
        {
          zh: '热门区死了你会说"情报失误"，而不是"运气不好"',
          en: 'Dying in a hot drop is "intel failure," not bad luck — the distinction matters to you',
          ja: 'ホットドロップで死んでも「インテル失敗」であって「運が悪い」ではない。その区別はあなたにとって重要だ',
          ko: '핫드랍에서 죽으면 "정보 실패"지, 운이 나쁜 게 아니다. 그 구분이 당신에게는 중요하다',
        },
      ],
      rivalSlug: 'circle-aesthete',
      bestSquadSlug: 'final-pose',
    },

    // ── 8. hot-drop-comedian ────────────────────────────────────────────────────
    {
      slug: 'hot-drop-comedian',
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'high',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
      name: {
        zh: '落地刚枪喜剧人',
        en: 'Hot-Drop Comedian',
        ja: 'ホットドロップ喜劇人',
        ko: '핫드랍 코미디언',
      },
      oneLiner: {
        zh: '30 秒挂机不后悔，下一把还是热门区见',
        en: 'Dead at 0:28, queuing again — same spot next game, no notes',
        ja: '開始28秒で死亡、即再キュー——次も同じ場所、反省なし',
        ko: '28초에 죽고 바로 재큐. 다음 판도 같은 자리, 반성 없음',
      },
      description: {
        zh: '你今天第 11 次落在 Pochinki 了。你知道结果大概率是"落地成盒"，三十秒内的事，但你就是停不下来。朋友说你是典型暴躁老哥——热门区对你来说是一种实验，测试手速、测试落地角度、测试这把有没有可能比别人先摸到枪。死了没关系，"下一把"有无限可能。队友看着你选落点时的表情，你都懂，你选择无视。吃鸡对你来说不是目标，而是个意外惊喜。',
        en: 'Pochinki, again — your eleventh time today. You know what happens next: dead within thirty seconds, somebody else\'s loot before you\'ve even seen the whole building. Friends have a name for this — the guy who sends it every single game, no exceptions. The first ten seconds of a hot drop contain more decisions, more chaos, more pure gamer experience than the entire middle section of a cautious game. You died. You\'re already in the drop plane. The chicken dinner, if it happens, is a surprise. The squad has learned to queue separately.',
        ja: 'またポチンキ。今日11回目だ。次に何が起きるかわかっている——30秒とかからず画面が暗転する。友達からは「絶対に全力で突っ込む奴」で通っている。ホットドロップの最初の10秒には、慎重なゲームの中盤全体より多くの決断、混乱、純粋なゲーマー体験が詰まっているから。死んだ。もうドロップ機にいる。ドン勝は、もし起きたら、サプライズだ。スクワッドは別々にキューに入ることを学んだ。',
        ko: '또 포치인키다. 오늘만 열한 번째. 다음에 뭐가 일어날지 안다 — 30초 안에 로그아웃이다. 친구들은 당신을 여포라고 부른다, 그것도 유독 심한 버전으로. 핫드랍 처음 10초에는 신중한 게임의 중반 전체보다 더 많은 결정, 혼돈, 순수한 게이머 경험이 담겨 있으니까. 죽었다. 이미 낙하 비행기 안이다. 치킨은, 만약 일어난다면, 서프라이즈다. 스쿼드는 따로 큐 잡는 법을 배웠다.',
      },
      symptoms: [
        {
          zh: '你"最近学到的教训"和"下一把的计划"之间没有任何区别',
          en: 'The gap between "lesson learned" and "plan for next game" is zero seconds',
          ja: '「学んだ教訓」と「次の試合の計画」の間に差がない',
          ko: '"배운 교훈"과 "다음 판 계획" 사이에 차이가 없다',
        },
        {
          zh: '你对 Pochinki 或者 Military Base 的建筑布局比游戏里任何圈内区域都熟悉',
          en: 'You know Pochinki\'s building layout better than any other location on any map',
          ja: 'ポチンキの建物レイアウトを他のどのマップのどの場所よりも熟知している',
          ko: '포치인키 건물 레이아웃을 다른 어떤 맵의 어떤 지역보다 잘 안다',
        },
        {
          zh: '你的总体游戏时长里，有相当大比例是落地到死的那段时间',
          en: 'A meaningful percentage of your total playtime is the window between landing and dying',
          ja: 'プレイ時間の中で、着地から死亡までの時間が意味のある割合を占めている',
          ko: '총 플레이 타임에서 착지부터 죽기까지의 시간이 의미 있는 비율을 차지한다',
        },
        {
          zh: '朋友组队时会提前说"他喜欢热门区"，以便其他人有心理准备',
          en: 'Friends pre-warn new squadmates: "he goes hot drop" — they say it the way someone warns about a medical condition',
          ja: '友達は新しいスクワッドメイトに「彼はホットドロップが好き」と事前に警告する。まるで持病を告げるように',
          ko: '친구들이 새 스쿼드 멤버한테 미리 알린다: "얘 핫드랍 가는 거 좋아함" — 지병 알리듯이 말한다',
        },
        {
          zh: '你在平均 30 秒死亡的记录后，依然对自己落地路线充满信心',
          en: 'Average survival time under 60 seconds, confidence in your drop line at 100%',
          ja: '平均生存時間60秒未満、ドロップラインへの自信100%',
          ko: '평균 생존 시간 60초 미만, 드랍 라인 자신감 100%',
        },
      ],
      rivalSlug: 'loot-accountant',
      bestSquadSlug: 'hot-drop-cfo',
    },
  ],
  questions: [
    // ════════════════════════════════════════════════════════════════════════
    // ANCHOR QUESTIONS (12) — one axis per option
    // ════════════════════════════════════════════════════════════════════════

    // ── pubg-a01: Tempo ──────────────────────────────────────────────────────
    {
      id: 'pubg-a01',
      kind: 'anchor',
      text: {
        zh: '安全区刷新了，还在上一个圈里的你，怎么动？',
        en: 'New safe zone just dropped. You\'re still sitting in the old one. First move?',
        ja: '新しいセーフゾーンが出た。まだ前のサークルにいるあなた、次の行動は？',
        ko: '새 안전 구역이 떴다. 아직 이전 원 안에 있는 당신, 다음 행동은?',
      },
      options: [
        {
          label: {
            zh: '立刻起跑，能早到就早到',
            en: 'Move now. Arrive early, pick the spot.',
            ja: '即座に移動。早く着けば陣地が選べる。',
            ko: '바로 출발. 일찍 도착할수록 자리 선점이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先把这栋楼搜完再走',
            en: 'Clear this building first, then move.',
            ja: 'この建物を漁り終えてから移動する。',
            ko: '이 건물 다 뒤지고 나서 이동한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '看一下毒圈时间，还有三分钟，不着急',
            en: 'Three minutes on the clock. No rush.',
            ja: 'タイマー3分。急がなくていい。',
            ko: '타이머 3분 남았다. 급할 거 없다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '你其实已经在跑了，手比脑子快',
            en: 'Already running — legs moved before the brain caught up.',
            ja: 'もう走っている。頭より体が先に動いた。',
            ko: '이미 달리는 중이다. 머리보다 발이 먼저 움직였다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },

    // ── pubg-a02: Tempo ──────────────────────────────────────────────────────
    {
      id: 'pubg-a02',
      kind: 'anchor',
      text: {
        zh: '队友还在楼里舔包，你在楼外等他，此时毒圈开始收。',
        en: 'Your teammate is still looting upstairs. You\'re outside. The circle starts closing.',
        ja: 'チームメイトがまだ建物で漁っている。あなたは外にいる。サークルが縮まり始めた。',
        ko: '팀원이 아직 건물 안에서 루팅 중이다. 당신은 밖이다. 자기장이 줄어들기 시작했다.',
      },
      options: [
        {
          label: {
            zh: '已经把车开到路边等了，10 秒不出来就走',
            en: 'Car\'s at the curb. Ten seconds or you\'re leaving.',
            ja: '車は道端に用意してある。10秒以内に出なければ出発する。',
            ko: '차는 길가에 세워뒀다. 10초 안에 안 나오면 출발한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '进去帮他搜，效率翻倍',
            en: 'Go in and help — double the loot speed.',
            ja: '中に入って手伝う。速度が倍になる。',
            ko: '들어가서 같이 루팅한다. 속도가 두 배다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '在外面帮他放哨，他搜得安心些',
            en: 'Keep watch outside so he can loot in peace.',
            ja: '外で見張りをする。安心して漁れるように。',
            ko: '밖에서 망을 본다. 편하게 루팅하라고.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经在移动了，一边跑一边喊他快点',
            en: 'Moving already — shouting for him to catch up.',
            ja: 'もう移動中。後から来るよう声をかけながら走っている。',
            ko: '이미 이동 중이다. 뛰면서 빨리 오라고 외치는 중.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },

    // ── pubg-a03: Nerve ──────────────────────────────────────────────────────
    {
      id: 'pubg-a03',
      kind: 'anchor',
      text: {
        zh: '跳伞时，飞机路过 Pochinki 正上方。你选？',
        en: 'Plane passes directly over Pochinki. What do you do?',
        ja: '飛行機がポチンキの真上を通過している。あなたは？',
        ko: '비행기가 포치인키 바로 위를 지나고 있다. 어떻게 할 거야?',
      },
      options: [
        {
          label: {
            zh: '跳，反正先到的有枪',
            en: 'Jump. First one down gets the gun.',
            ja: '飛び降りる。最初に降りた人に銃がある。',
            ko: '뛰어내린다. 먼저 내리는 사람이 총을 가진다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '飞过去，找个小村落地，省心',
            en: 'Fly past. Land at a quiet village instead.',
            ja: '飛び過ぎて、静かな村に降りる。',
            ko: '그냥 지나친다. 조용한 마을에 내린다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '数了一下，只有两个人跳了，可以考虑',
            en: 'Two people jumped. That\'s manageable — maybe.',
            ja: '2人しか降りていない。対処できるかも。',
            ko: '두 명만 뛰어내렸다. 감당 가능할 것 같기도.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '跳了，落地后发现有五个人，但你已经拿到枪了',
            en: 'Jumped, found five people on the ground — gun already in hand.',
            ja: '飛び降りた。地上に5人いたが、もう銃を持っていた。',
            ko: '뛰어내렸다. 바닥에 다섯 명인데 이미 총 들었다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── pubg-a04: Nerve ──────────────────────────────────────────────────────
    {
      id: 'pubg-a04',
      kind: 'anchor',
      text: {
        zh: '眼前两组人刚打完，只剩一个残血的家伙，装备齐全，背对着你站在空地上，40 米开外——教科书级"收快递"时机。',
        en: 'Two squads just finished wiping each other out. One half-health survivor is left standing in the open, fully geared, back turned, forty meters out. Textbook delivery pickup.',
        ja: '目の前で2チームが潰し合ったばかり。残ったのは装備満載、体力半分の一人。背中を向けて開けた場所に立っている。40メートル先。まさに漁夫の利のタイミングだ。',
        ko: '눈앞에서 두 팀이 방금 서로 다 죽였다. 남은 건 풀 장전에 체력 절반인 한 명. 등 돌리고 개활지에 서 있다. 40미터 거리. 어부지리 그 자체인 타이밍이다.',
      },
      options: [
        {
          label: {
            zh: '先不动，等他先反应，快递不会自己跑',
            en: 'Hold. Let him react first — the delivery isn\'t going anywhere.',
            ja: '動かない。相手が先に動くのを待つ。獲物はどこにも逃げない。',
            ko: '일단 안 움직인다. 상대가 먼저 반응하게 둔다. 저건 어차피 안 도망간다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '先检查一下自己的血量和弹药，再决定要不要动',
            en: 'Check your own health and ammo first. Decide after.',
            ja: 'まず自分の体力と弾薬を確認してから決める。',
            ko: '일단 자기 체력이랑 탄약부터 확인하고 나서 결정한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接上前收了，这波不去等于白瞎',
            en: 'Walk up and take it. Passing on this would be a waste.',
            ja: 'そのまま近づいて回収する。これを逃したらもったいない。',
            ko: '바로 다가가서 정리한다. 이걸 놓치면 아깝다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '扔颗雷试探，万一附近还有第三组混战',
            en: 'Cook a grenade first, just in case a third squad is still lurking.',
            ja: '手榴弾を投げて様子を見る。近くに三番目のチームが潜んでいるかもしれない。',
            ko: '일단 수류탄부터 던져본다. 혹시 근처에 세 번째 팀 있을 수도.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── pubg-a05: Flair ──────────────────────────────────────────────────────
    {
      id: 'pubg-a05',
      kind: 'anchor',
      text: {
        zh: '吃鸡了。结算画面出来之前，你做什么？',
        en: 'Chicken dinner locked in. Before the results screen loads, what are you doing?',
        ja: 'チキン（ドン勝）確定。結果画面が出る前、何をしている？',
        ko: '치킨 확정됐다. 결산 화면 나오기 전에 뭐 하고 있어?',
      },
      options: [
        {
          label: {
            zh: '截图，把背景收拾到最好看再截',
            en: 'Screenshot — angle the camera until the lighting is right.',
            ja: 'スクリーンショット。ライティングが良くなるまでカメラを調整する。',
            ko: '스크린샷. 조명이 잘 나올 때까지 카메라 각도 조정.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先对队友说 GG，然后等系统统计',
            en: 'Say GG to the squad first, then watch the stats roll in.',
            ja: '先にチームにGGと言い、それから集計を見る。',
            ko: '팀원들한테 GG 먼저 치고, 통계 나오기 기다린다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '换上存好的吃鸡皮肤，这局赢得值',
            en: 'Swap to the chicken dinner outfit you\'ve been saving.',
            ja: '取っておいたドン勝コスチュームに着替える。',
            ko: '아껴뒀던 치킨 코스튬으로 갈아입는다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '看一下自己的击杀数，核实数据就行',
            en: 'Check kill count. Numbers don\'t lie.',
            ja: 'キル数を確認する。数字は嘘をつかない。',
            ko: '킬 수 확인한다. 숫자는 거짓말 안 한다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── pubg-a06: Flair ──────────────────────────────────────────────────────
    {
      id: 'pubg-a06',
      kind: 'anchor',
      text: {
        zh: '跑毒路上遇到一辆越野车，但你目前骑着摩托。要不要换？',
        en: 'Running the zone. You\'re on a motorcycle. There\'s a UAZ sitting right there.',
        ja: 'サークルへ走る途中、バイクに乗っているが、UAZが目の前にある。乗り換えるか？',
        ko: '자기장 달리는 중에 오토바이 타고 있는데 지프 한 대가 저기 있다. 바꿀까?',
      },
      options: [
        {
          label: {
            zh: '换，肯定换，UAZ 稳',
            en: 'Switch — UAZ is always the right call.',
            ja: '乗り換える。UAZは正解だ。',
            ko: '바꾼다. 지프가 무조건 맞다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '不换，摩托够快，何必停下',
            en: 'Keep the bike. Stopping wastes time.',
            ja: 'そのままにする。バイクは速い。止まる必要はない。',
            ko: '안 바꾼다. 오토바이 충분히 빠르다. 멈출 이유 없다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '换，顺手用 UAZ 压一个躲在草丛里的人',
            en: 'Switch — and use the UAZ to run over whoever\'s hiding in that bush.',
            ja: '乗り換える。そしてUAZで草むらに隠れている人を轢く。',
            ko: '바꾼다. 그리고 지프로 저 풀밭에 숨은 놈 밟아버린다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '摩托跳车冲上去用手雷，这段必须录下来',
            en: 'Bail off the motorcycle mid-jump, throw a grenade — this needs to be recorded.',
            ja: 'バイクから飛び降りながら手榴弾を投げる。これは録画が必要だ。',
            ko: '오토바이에서 뛰어내리면서 수류탄 던진다. 이건 녹화해야 한다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-a07: Bond ───────────────────────────────────────────────────────
    {
      id: 'pubg-a07',
      kind: 'anchor',
      text: {
        zh: '队友倒地了，你离他有 80 米。现在正在被人压制。',
        en: 'Teammate is down 80 meters away. You\'re pinned.',
        ja: 'チームメイトが80メートル先で倒れた。あなたは制圧されている。',
        ko: '팀원이 80미터 앞에 쓰러졌다. 당신은 압제당하고 있다.',
      },
      options: [
        {
          label: {
            zh: '先解决压制，再去救',
            en: 'Kill the threat first, then rescue.',
            ja: '先に脅威を排除してから救助する。',
            ko: '압제 먼저 처리하고 나서 구한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '扔烟雾弹掩护自己冲过去拉',
            en: 'Pop smoke, sprint to the revive.',
            ja: 'スモークを炊いて駆け寄り、蘇生する。',
            ko: '연막탄 터뜨리고 전력 질주해서 살린다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '跟他说"等一下"，但你实际在找安全路线',
            en: 'Tell him "hold on" while figuring out a safe route for yourself.',
            ja: '「待ってて」と言いながら、自分の安全ルートを探している。',
            ko: '"잠깐만" 하면서 본인 안전한 루트 찾는 중이다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '告诉他你救不了，让他观战',
            en: 'Tell him it\'s not happening — watch from the sky.',
            ja: '救助は無理だと伝える。空から観戦してて。',
            ko: '못 살린다고 말한다. 하늘에서 구경해.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── pubg-a08: Bond ───────────────────────────────────────────────────────
    {
      id: 'pubg-a08',
      kind: 'anchor',
      text: {
        zh: '队友说"我想去军事基地"，但你觉得应该去 Erangel 农场。',
        en: 'Teammate wants Military Base. You\'d rather farm Erangel\'s south fields.',
        ja: 'チームメイトは軍事基地に行きたいと言う。あなたはエランゲルの南の農場がいい。',
        ko: '팀원이 군기를 가고 싶다고 한다. 당신은 에란겔 남쪽 농장이 좋은데.',
      },
      options: [
        {
          label: {
            zh: '跟着他去军事基地，队伍在一起就行',
            en: 'Follow him to Military Base. Team stays together.',
            ja: '彼について軍事基地に行く。チームは一緒にいればいい。',
            ko: '그냥 따라서 군기 간다. 팀이 같이 있으면 되지.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '分头走，后期会合',
            en: 'Split up, meet mid-game.',
            ja: '別れて、中盤で合流する。',
            ko: '따로 간다. 나중에 합류.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '分析两个落点，然后让他决定',
            en: 'Break down both spots — let him decide.',
            ja: '2つのスポットを比較して、彼に決めてもらう。',
            ko: '두 곳 다 분석해주고, 팀원한테 결정하게 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '去农场，军事基地风险太高，自己知道就行',
            en: 'Head to the farm. Military Base is a bad gamble. You don\'t need their buy-in.',
            ja: '農場に行く。軍事基地はリスクが高い。彼らの同意は必要ない。',
            ko: '농장 간다. 군기는 도박이다. 동의 안 받아도 된다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── pubg-a09: Intel ──────────────────────────────────────────────────────
    {
      id: 'pubg-a09',
      kind: 'anchor',
      text: {
        zh: '听到远处有枪声。你的反应是？',
        en: 'Gunshots in the distance. Your move?',
        ja: '遠くで銃声がした。あなたの行動は？',
        ko: '멀리서 총소리가 난다. 어떻게 할 거야?',
      },
      options: [
        {
          label: {
            zh: '在地图上标记方位，推算人数和武器',
            en: 'Mark the direction on the map. Estimate player count from the shot pattern.',
            ja: '地図に方角をマークする。射撃パターンから人数を推定する。',
            ko: '지도에 방향 표시한다. 사격 패턴으로 인원 수 추산한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '靠直觉感觉，那边应该有两个人',
            en: 'Gut says two players over there.',
            ja: '直感的に、あそこには2人いる気がする。',
            ko: '직감상 거기 두 명인 것 같다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '数了一下每秒射速，是 M416，全自动模式',
            en: 'Counted the fire rate — M416, full-auto.',
            ja: '発射速度を数えた。M416、フルオートモードだ。',
            ko: '발사 속도 세어봤다. M416, 풀오토 모드.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"感觉不对劲"就够了，不用分析',
            en: '"Something feels off" is enough information.',
            ja: '「何かおかしい」という感覚で十分。分析不要。',
            ko: '"뭔가 이상하다"는 느낌으로 충분하다. 분석 필요 없다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── pubg-a10: Intel ──────────────────────────────────────────────────────
    {
      id: 'pubg-a10',
      kind: 'anchor',
      text: {
        zh: '你在房顶架枪等人。等了很久，一个人出现了。你怎么判断出手时机？',
        en: 'You\'re holding an angle from a rooftop. Someone finally appears. How do you time the shot?',
        ja: '屋上で角度を取って待っていた。ようやく誰かが現れた。タイミングをどう判断する？',
        ko: '옥상에서 각도 잡고 기다리는 중이다. 드디어 누가 나타났다. 타이밍을 어떻게 판단해?',
      },
      options: [
        {
          label: {
            zh: '算了对方的移动速度和你的弹道下坠，然后出枪',
            en: 'Calculate movement speed against bullet drop, then fire.',
            ja: '相手の移動速度と弾道落下を計算してから発砲する。',
            ko: '상대 이동 속도와 탄도 하강 계산하고 나서 쏜다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '"手感来了"，直接开枪',
            en: '"The aim is there." Fire.',
            ja: '「感覚がある」。発砲する。',
            ko: '"에임 왔다." 쏜다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '跟着他走了几步，算出移速，再瞄准',
            en: 'Track him for two steps, clock the speed, lead the shot.',
            ja: '2歩分追跡して速度を把握し、先行きを読んで撃つ。',
            ko: '두 걸음 추적해서 속도 파악하고, 선행 조준해서 쏜다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '眼睛已经在他落脚点上了，脑子还没想完',
            en: 'Eyes on where he\'s landing before the brain finishes the sentence.',
            ja: '脳が思考を終える前に、すでに目は着地点に合っている。',
            ko: '뇌가 생각 끝내기 전에 눈이 이미 착지 지점에 가 있다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── pubg-a11: Mental ─────────────────────────────────────────────────────
    {
      id: 'pubg-a11',
      kind: 'anchor',
      text: {
        zh: '趴在草丛里十分钟没动静的家伙，一枪把你的三级头打没了——你被老六了。第一反应？',
        en: 'The guy who\'s been dead-still in that bush for ten minutes just deleted your Level 3 helmet in one shot. Never saw him. First reaction?',
        ja: '10分間微動だにしなかった草むらの奴に、油断していた角度から一発でレベル3ヘルメットを割られた。まんまと後ろを取られた。最初の反応は？',
        ko: '십 분째 풀숲에서 존버하던 놈한테 한 방에 3레벨 헬멧 날아갔다. 방금 그 각도, 어떻게 알고 쐈지 싶다. 첫 반응은?',
      },
      options: [
        {
          label: {
            zh: '已经开始分析他刚才卡的是哪个角度，下一步反制',
            en: 'Already working out which angle he was holding — planning the counter.',
            ja: 'すでにどの角度から撃たれたか分析している。次の反撃を考え中。',
            ko: '이미 어느 각도였는지 분석 중이다. 다음 반격 방법 생각하고 있다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂了句"好家伙"，然后继续游戏',
            en: 'One "well played, asshole" under your breath, then you carry on.',
            ja: '「やられた」と一言つぶやいて、ゲームを続ける。',
            ko: '욕 한마디("잘 숨었네") 하고 게임 계속한다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '观战模式研究他到底是怎么趴进那片草丛的，甚至有点佩服',
            en: 'Spectate mode, studying exactly how he got into that bush undetected. A little impressed, honestly.',
            ja: '観戦モードで、彼がどうやってあの草むらに気づかれず入ったのか研究する。正直、少し感心している。',
            ko: '관전 모드로 저 풀밭에 어떻게 들어갔는지 연구한다. 솔직히 좀 인정한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂了三分钟伏地魔战术不讲武德，然后开了下一把，还是这张图',
            en: 'Three-minute rant about how prone-camping isn\'t real skill, then you queue again on the same map.',
            ja: '3分間、伏せ戦術は卑怯だと文句を言って、同じマップでまた並ぶ。',
            ko: '3분 동안 존버 전술 비겁하다고 욕하고, 같은 맵으로 다시 큐 잡는다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ── pubg-a12: Mental ─────────────────────────────────────────────────────
    {
      id: 'pubg-a12',
      kind: 'anchor',
      text: {
        zh: '决赛圈，你的手开始抖。',
        en: 'Final circle. Your hands are shaking.',
        ja: '最終サークル。手が震えている。',
        ko: '최종 원이다. 손이 떨린다.',
      },
      options: [
        {
          label: {
            zh: '正常，打了一口气，稳住',
            en: 'Normal. Take a breath. Steady.',
            ja: '普通のこと。深呼吸して落ち着く。',
            ko: '정상이다. 숨 한 번 쉬고 안정시킨다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '手抖不影响手感，反而更灵敏',
            en: 'Shaking doesn\'t hurt the aim. If anything, it sharpens.',
            ja: '手の震えはエイムに影響しない。むしろ鋭くなる。',
            ko: '손 떨려도 에임에 영향 없다. 오히려 예민해지는 것 같다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '手抖就是抖了，失误就失误了，下把',
            en: 'Hands shake. Mess it up. Whatever, next game.',
            ja: '手が震えたら震えたまま。ミスしたらミスした。次の試合。',
            ko: '손 떨리면 떨리는 거지. 실수하면 실수한 거고. 다음 판.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '抖得更厉害了，还没出枪就先出了一身汗',
            en: 'Got worse once you noticed it. Sweating before the first shot.',
            ja: '気づいたら余計に震えてきた。最初の一発を撃つ前に汗だくだ。',
            ko: '알아챈 순간 더 심해졌다. 첫 발 쏘기 전에 이미 식은땀이다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // COMPOUND QUESTIONS (18) — two axes per option
    // ════════════════════════════════════════════════════════════════════════

    // ── pubg-c01: Tempo + Nerve ──────────────────────────────────────────────
    {
      id: 'pubg-c01',
      kind: 'compound',
      text: {
        zh: '落地刚枪，第一栋楼进去发现没枪。下一步？',
        en: 'Hot drop. First building. No gun. Next move?',
        ja: 'ホットドロップ。最初の建物に入ったが銃がない。次の行動は？',
        ko: '핫드랍. 첫 번째 건물. 총 없다. 다음 행동은?',
      },
      options: [
        {
          label: {
            zh: '立刻冲向下一栋，用速度弥补',
            en: 'Sprint to the next building. Speed covers the gap.',
            ja: '即座に次の建物へ走る。速さでカバーする。',
            ko: '바로 다음 건물로 달린다. 속도로 커버한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '找掩体先蹲着，等有枪的人出来自己拿',
            en: 'Find cover. Wait for the armed player to leave — then loot.',
            ja: '隠れて、武装したプレイヤーが出てくるのを待つ。そしてルートする。',
            ko: '엄폐물 찾고 숨는다. 무장한 플레이어가 나가면 루팅한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '徒手追枪的人想赌一赌',
            en: 'Chase the armed player with your fists. It\'s a bet.',
            ja: '素手で武装したプレイヤーを追いかける。賭けだ。',
            ko: '맨손으로 무장한 플레이어 쫓는다. 도박이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '在地图上标记刚才看到枪的楼，规划最短路线',
            en: 'Mark the building where you spotted a gun, plot the shortest route.',
            ja: '銃を見かけた建物を地図にマークして、最短ルートを計算する。',
            ko: '총 봤던 건물 지도에 마크하고 최단 루트 계산한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },

    // ── pubg-c02: Tempo + Nerve ──────────────────────────────────────────────
    {
      id: 'pubg-c02',
      kind: 'compound',
      text: {
        zh: '学校刚枪开始了，四面都有枪声。你选哪条出路？',
        en: 'School fight kicked off — gunshots from all four sides. Which way do you go?',
        ja: '学校での戦闘が始まった。四方から銃声が聞こえる。どのルートを選ぶ？',
        ko: '학교 전투 시작됐다. 사방에서 총소리. 어느 방향으로 가?',
      },
      options: [
        {
          label: {
            zh: '往枪声最密集的方向冲，枪打赢了就能拿最好的物资',
            en: 'Head into the thickest gunfire — win the fight, take the loot.',
            ja: '銃声が最も激しい方向へ突進する。勝てば最高の装備が手に入る。',
            ko: '총소리 제일 많은 방향으로 돌진. 이기면 최고 루팅이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '躲在教室里等大家打完，出来捡枪',
            en: 'Hide in a classroom until the shooting stops, then emerge.',
            ja: '教室に隠れて、射撃が止むまで待ち、その後出る。',
            ko: '교실에 숨어서 총소리 멈출 때까지 기다렸다가 나온다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '往最安静的方向撤，出了学校再想下一步',
            en: 'Exit through the quietest side. Figure it out from the field.',
            ja: '最も静かな方向から脱出する。学校の外に出てから考える。',
            ko: '제일 조용한 방향으로 빠진다. 학교 나가서 다음 생각한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '观察一下交火位置，等其中一方清场再进',
            en: 'Clock the fight. Enter when one side wipes the other.',
            ja: '交戦位置を観察する。一方が全滅してから入る。',
            ko: '교전 위치 파악한다. 한 쪽이 다 죽으면 들어간다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },

    // ── pubg-c03: Tempo + Nerve ──────────────────────────────────────────────
    {
      id: 'pubg-c03',
      kind: 'compound',
      text: {
        zh: '蓝圈开始收，你还差 200 米进不了安全区，路上有一组人在打架。',
        en: 'Blue zone closing. You\'re 200m outside. Two squads are fighting on your path.',
        ja: 'ブルーゾーンが縮まり始めた。あと200メートルでセーフゾーンに入れない。道中に2チームが戦っている。',
        ko: '블루존 줄어들기 시작했다. 200미터 밖이다. 경로 위에서 두 팀이 싸우고 있다.',
      },
      options: [
        {
          label: {
            zh: '绕开他们，多跑 50 米也无所谓，保命为主',
            en: 'Detour around them. Fifty extra meters is fine.',
            ja: '迂回する。50メートル余分に走っても構わない。',
            ko: '우회한다. 50미터 더 뛰는 거 상관없다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '直接穿过交火区，利用他们的混乱跑圈',
            en: 'Run straight through the fight. Use their chaos as cover.',
            ja: '交戦区域を真っすぐ走り抜ける。混乱を利用する。',
            ko: '교전 구역 직통으로 뚫는다. 혼란을 엄폐물로 삼는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '停下来等他们分出胜负，清一组再跑圈',
            en: 'Stop and wait for a winner. Kill the survivor and then enter the zone.',
            ja: '止まって勝者が出るのを待つ。生存者を倒してからゾーンに入る。',
            ko: '멈추고 승자 나오기 기다린다. 생존자 잡고 나서 원 들어간다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '打烟雾跑，输出中间的混乱当掩护',
            en: 'Throw smoke into the fight and run through it.',
            ja: 'スモークをフィールドに投げ込んで走り抜ける。',
            ko: '연막 던져서 교전 중에 뚫는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },

    // ── pubg-c04: Tempo + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c04',
      kind: 'compound',
      text: {
        zh: '你开着车找到了一个正在跑圈的敌人。你会？',
        en: 'You\'re driving and you spot a solo player sprinting for the zone. What do you do?',
        ja: '車を運転中に、サークルに向かって走っている孤独なプレイヤーを見つけた。どうする？',
        ko: '차 몰고 가다가 혼자 원으로 달리는 플레이어 발견했다. 어떻게 해?',
      },
      options: [
        {
          label: {
            zh: '直接开车压过去',
            en: 'Run him over.',
            ja: '車で轢く。',
            ko: '그냥 차로 밟아버린다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '下车追枪，近距离才有感觉',
            en: 'Get out and engage on foot — close range feels better.',
            ja: '降りて徒歩で追う。近距離の方が感覚がある。',
            ko: '내려서 총으로 추격한다. 근거리가 더 느낌 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先绕圈拦截他的前进路线',
            en: 'Loop around to cut off his route to the zone.',
            ja: '迂回してサークルへのルートを塞ぐ。',
            ko: '돌아서 원으로 가는 루트를 차단한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '无视，你有更重要的事情要做',
            en: 'Ignore him. You have somewhere more important to be.',
            ja: '無視する。もっと大事なことがある。',
            ko: '무시한다. 더 중요한 일이 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── pubg-c05: Tempo + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c05',
      kind: 'compound',
      text: {
        zh: '你找到了 AWM 和 8 倍镜。下一步是？',
        en: 'You found an AWM with an 8x scope. What\'s the plan?',
        ja: 'AWMと8倍スコープを見つけた。次は何をする？',
        ko: 'AWM에 8배율 스코프 찾았다. 다음은?',
      },
      options: [
        {
          label: {
            zh: '立刻找制高点，开始收人',
            en: 'Find the nearest high ground immediately — start hunting.',
            ja: '即座に制高点を探す。狩りを始める。',
            ko: '바로 제고점 찾는다. 사냥 시작이다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '先把物资搜完，AWM 配好再上山',
            en: 'Finish looting first, gear up the AWM properly, then climb.',
            ja: '先に漁りを終え、AWMの準備を整えてから山に登る。',
            ko: '루팅 먼저 다 끝내고 AWM 세팅 다 갖추고 나서 산 오른다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '马上拿出来对着近处的队友瞄准吓一吓',
            en: 'Immediately scope in on your teammate\'s head as a joke.',
            ja: '即座にチームメイトの頭に照準を合わせてからかう。',
            ko: '바로 팀원 머리에 조준해서 겁준다. 농담이야.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '安静地把它收进包，等决赛圈出场',
            en: 'Stash it quietly. Wait for the final circle entrance.',
            ja: '静かにしまっておく。最終サークルのための出し番を待つ。',
            ko: '조용히 챙겨둔다. 최종 원 때 꺼내기 위해서.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-c06: Tempo + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c06',
      kind: 'compound',
      text: {
        zh: '你趴在草丛里已经有 10 分钟了，身边路过了三批人没看见你。',
        en: 'You\'ve been prone in the same grass for ten minutes. Three squads walked past without spotting you.',
        ja: '同じ草むらに10分間伏せている。3チームが気づかずに通り過ぎた。',
        ko: '같은 풀밭에 10분째 엎드려 있다. 세 팀이 당신을 못 보고 지나갔다.',
      },
      options: [
        {
          label: {
            zh: '继续趴，稳，不需要行动',
            en: 'Stay prone. This is working. No action needed.',
            ja: 'このまま伏せ続ける。うまくいっている。行動不要。',
            ko: '계속 엎드린다. 잘 되고 있다. 행동 불필요.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '够了，现在站起来，打这三批里面还活着的',
            en: 'Enough. Stand up. Hunt whichever of those three squads is still alive.',
            ja: '十分だ。立ち上がって、3チームのうちまだ生きている方を狩る。',
            ko: '충분하다. 일어나서 세 팀 중 아직 살아있는 놈 사냥한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '从草丛里弹出来偷袭最后一批，那个角度必须录',
            en: 'Pop out and ambush the last squad. The angle is worth recording.',
            ja: '飛び出して最後のチームを奇襲する。その角度は録画する価値がある。',
            ko: '뛰어나와서 마지막 팀 기습한다. 그 각도는 녹화할 가치 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '趴着等到决赛圈，时机成熟了才有意义',
            en: 'Stay for the final circle. The moment has to be worth it.',
            ja: '最終サークルまで伏せ続ける。そこまで待って意味がある。',
            ko: '최종 원까지 엎드린다. 그때까지 기다려야 의미가 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-c07: Nerve + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c07',
      kind: 'compound',
      text: {
        zh: '捡到一把卡缸八，倍镜位是空的，什么都没有。',
        en: 'You loot a Kar98k. The scope slot is empty. Nothing attached.',
        ja: 'Kar98kを拾った。スコープ枠は空っぽ。何も付いていない。',
        ko: '카구팔을 주웠다. 스코프 자리가 비어있다. 아무것도 안 달려 있다.',
      },
      options: [
        {
          label: {
            zh: '装个红点就冲近战，卡缸八当步枪用，谁规定不行',
            en: 'Slap a red dot on it and push close range. Who says a bolt-action can\'t be a brawling rifle?',
            ja: 'レッドドットを付けて近距離に突っ込む。ボルトアクションを近接ライフルにして何が悪い。',
            ko: '그냥 도트 하나 달고 근접전 들어간다. 볼트액션을 돌격소총으로 쓰면 안 되나.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先别用，找到配得上它的倍镜再说',
            en: 'Leave it alone for now. Wait for a scope that actually deserves it.',
            ja: '今は使わない。ふさわしいスコープが見つかるまで待つ。',
            ko: '일단 안 쓴다. 어울리는 스코프 찾을 때까지 기다린다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '先收进包里，但已经开始跟队友吹嘘捡到卡缸八了',
            en: 'Stash it in the bag — but you\'re already bragging to the squad about finding a Kar98k.',
            ja: 'とりあえずバッグにしまう。でもチームには「Kar98k拾った」ってもう自慢している。',
            ko: '일단 가방에 넣는다. 근데 벌써 팀원한테 카구팔 주웠다고 자랑 중이다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不装镜，直接铁瞄拼一枪，这才是味儿',
            en: 'No scope, iron sights only, take the shot anyway. That\'s the whole point.',
            ja: 'スコープなし、アイアンサイトのまま一発賭ける。それでこそ意味がある。',
            ko: '스코프 없이 그냥 철조준으로 한 발 건다. 이게 진짜 재미다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-c08: Nerve + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c08',
      kind: 'compound',
      text: {
        zh: '你找到了载具可以跑圈，但路线要经过一片开阔地，对面有人在山上架枪。',
        en: 'You have a vehicle but the route crosses open ground. Someone\'s holding a ridge.',
        ja: '車があるが、ルートは開けた場所を横切る。稜線に人がいる。',
        ko: '차 있는데 루트가 개방 지형을 가로질러야 한다. 능선에 누가 자리 잡고 있다.',
      },
      options: [
        {
          label: {
            zh: '踩油门冲过去，开车够快',
            en: 'Floor it. Speed beats the shot.',
            ja: 'アクセルを踏み込む。速さで勝る。',
            ko: '액셀 밟고 뚫는다. 속도가 이긴다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '下车步行，保持低姿态，绕山脊',
            en: 'Ditch the car, go on foot — circle around the ridge.',
            ja: '車を降りて歩く。低い姿勢を保ちながら稜線を迂回する。',
            ko: '차에서 내려서 걸어간다. 낮은 자세로 능선 우회.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '在车里打烟雾弹，遮住对面视线再冲',
            en: 'Throw smoke from the car to block his line of sight, then drive.',
            ja: '車内からスモークを投げて視界を遮り、走る。',
            ko: '차 안에서 연막 던져서 시야 막고 나서 달린다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '开车冲上山去打那个人，顺手拿他的物资',
            en: 'Drive up the ridge, fight him, take his loot.',
            ja: '稜線まで車で突進して戦い、装備を奪う。',
            ko: '차 몰고 능선까지 올라가서 싸우고 루팅한다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-c09: Nerve + Flair ──────────────────────────────────────────────
    {
      id: 'pubg-c09',
      kind: 'compound',
      text: {
        zh: '你在决赛圈发现了一件三级甲，但需要站起来捡，而且你趴的位置已经很好了。',
        en: 'A Level 3 vest is 8 meters away. You have to stand to reach it. Your current position is solid.',
        ja: 'レベル3ベストが8メートル先にある。取るには立ち上がる必要がある。今のポジションは完璧だ。',
        ko: '3레벨 방어구가 8미터 앞이다. 줍려면 일어서야 한다. 현재 포지션은 완벽하다.',
      },
      options: [
        {
          label: {
            zh: '不捡，现有的就够，位置比装备更重要',
            en: 'Leave it. Position beats gear.',
            ja: '拾わない。現在のもので十分。ポジションが装備より重要だ。',
            ko: '안 줍는다. 현재 것으로 충분하다. 포지션이 장비보다 중요하다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '爬过去捡，趴着移动慢但安全',
            en: 'Crawl to it — slow but safe.',
            ja: 'ほふく前進で取りに行く。遅いが安全だ。',
            ko: '기어서 줍는다. 느리지만 안전하다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '快速站起来捡，立刻趴下，赌一下没人盯着',
            en: 'Quick stand, grab, drop back prone — bet nobody\'s watching.',
            ja: '素早く立ち上がって取り、すぐ伏せる。誰も見ていないと賭ける。',
            ko: '빠르게 일어나서 줍고 바로 엎드린다. 아무도 안 보고 있을 거라고 도박한다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '站起来把三级甲换上，顺手换个皮肤',
            en: 'Stand up, equip the vest — and swap to a better skin while you\'re at it.',
            ja: '立ち上がってベストを装備する。ついでにいいスキンに着替える。',
            ko: '일어나서 방어구 입는다. 그 김에 더 좋은 스킨으로 바꾼다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },

    // ── pubg-c10: Tempo + Bond ───────────────────────────────────────────────
    {
      id: 'pubg-c10',
      kind: 'compound',
      text: {
        zh: '安全区变了，你比队友先看到路线。你会？',
        en: 'Safe zone shifted. You spotted the route before your teammates. You?',
        ja: 'セーフゾーンが変わった。チームメイトより先にルートを確認した。あなたは？',
        ko: '안전 구역이 바뀌었다. 팀원들보다 먼저 루트를 봤다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '先跟队友分享路线，一起走',
            en: 'Share the route with the team. Move together.',
            ja: 'チームにルートを共有してから一緒に動く。',
            ko: '팀원들한테 루트 공유하고 같이 이동한다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '自己先走，他们跟上来就行',
            en: 'Move yourself first — they\'ll follow.',
            ja: '自分が先に動く。彼らはついてくるだろう。',
            ko: '내가 먼저 간다. 따라오면 된다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '等大家看完地图确认一致了再走',
            en: 'Wait until everyone\'s checked the map and agreed.',
            ja: 'みんなが地図を確認して合意するまで待つ。',
            ko: '모두가 지도 확인하고 동의할 때까지 기다린다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '标记了一下圈的位置，然后继续搜这栋楼',
            en: 'Mark the zone on the map and finish looting this building.',
            ja: 'ゾーンをマークして、この建物の漁りを続ける。',
            ko: '원 위치 마크하고 이 건물 루팅 계속한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── pubg-c11: Tempo + Bond ───────────────────────────────────────────────
    {
      id: 'pubg-c11',
      kind: 'compound',
      text: {
        zh: '队友说"我们打这组"，但你觉得时机不对。',
        en: 'Teammate calls "let\'s push this squad." Your read says the timing\'s off.',
        ja: 'チームメイトが「このチームを攻めよう」と言う。あなたのタイミング判断では時期尚早だ。',
        ko: '팀원이 "이 팀 밀자" 한다. 당신 생각엔 타이밍이 안 맞는다.',
      },
      options: [
        {
          label: {
            zh: '跟进，配合比时机更重要',
            en: 'Go with it. Team sync beats perfect timing.',
            ja: 'ついていく。チームの連携はタイミングより重要だ。',
            ko: '따라간다. 팀 호흡이 타이밍보다 중요하다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '不跟，告诉他时机不对，等一等',
            en: 'Don\'t go. Tell him the timing is off and hold.',
            ja: 'ついていかない。タイミングが悪いと伝え、待つよう言う。',
            ko: '안 간다. 타이밍 안 맞다고 말하고 기다리라고 한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '自己先偷一枪试探，不影响队友的行动',
            en: 'Poke first to test — doesn\'t commit the team.',
            ja: '先に1発撃って様子を見る。チームのコミットには影響しない。',
            ko: '먼저 한 발 찔러서 테스트한다. 팀 전체 커밋은 아니다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '等对面先动，你才有把握',
            en: 'Wait until they move first. You need that read.',
            ja: '相手が先に動くのを待つ。それを見てから判断する。',
            ko: '상대가 먼저 움직일 때까지 기다린다. 그걸 봐야 확신이 생긴다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Bond', delta: -1 }],
        },
      ],
    },

    // ── pubg-c12: Nerve + Intel ──────────────────────────────────────────────
    {
      id: 'pubg-c12',
      kind: 'compound',
      text: {
        zh: '你和对面隔着一扇门较劲，两个人都肩膀抵着门框卡视角，卡了快一分钟，谁都不想先推门。',
        en: 'You and the enemy are locked in a doorway standoff, both shoulder-peeking the same frame for almost a minute. Neither of you wants to push first.',
        ja: '敵とドア越しに睨み合っている。二人とも同じ枠を肩越しに覗き込んで、もう1分近く経つ。どちらも先には押さない。',
        ko: '적이랑 문 하나 사이에 두고 대치 중이다. 둘 다 같은 문틀에 어깨 붙이고 코너 각도 재는 중, 벌써 1분 다 됐다. 서로 먼저 밀고 들어가기 싫다.',
      },
      options: [
        {
          label: {
            zh: '推门，感觉他已经先撑不住走了',
            en: 'Push the door. Gut says he cracked first and left.',
            ja: 'ドアを押す。相手がもう先に折れて離れた気がする。',
            ko: '문을 민다. 상대가 먼저 못 버티고 갔을 것 같은 느낌.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '继续贴着，没听到脚步声就不能确定他走了',
            en: 'Keep holding. No footsteps heard — that\'s not proof he\'s gone.',
            ja: 'そのまま張り付く。足音が聞こえない以上、離れたとは言い切れない。',
            ko: '계속 붙어 있는다. 발소리 안 들렸다고 갔다는 증거는 아니다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '绕远路换个角度，用脚步声重新定位他',
            en: 'Circle around to a new angle. Relocate him by sound instead.',
            ja: '遠回りして別の角度を取る。足音でもう一度位置を特定する。',
            ko: '멀리 돌아서 다른 각도를 잡는다. 발소리로 위치를 다시 잡는다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '直接冲，赌他比你先绷不住',
            en: 'Just rush it. Bet he\'s more tilted than you are.',
            ja: 'そのまま突っ込む。相手の方が先に我慢の限界だと賭ける。',
            ko: '그냥 돌진한다. 상대가 당신보다 먼저 못 버틸 거라는 데 건다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── pubg-c13: Nerve + Intel ──────────────────────────────────────────────
    {
      id: 'pubg-c13',
      kind: 'compound',
      text: {
        zh: '你已经掌握了对面的方位和血量。但需要站起来才能开枪。',
        en: 'You know their position and rough health from the last exchange. Standing up is required to take the shot.',
        ja: '相手の位置と前の交戦でのおおよその体力を把握している。撃つには立ち上がる必要がある。',
        ko: '상대 위치와 직전 교전에서 대략적인 체력을 파악했다. 쏘려면 일어서야 한다.',
      },
      options: [
        {
          label: {
            zh: '站起来，数据已经支持这一枪了',
            en: 'Stand up and take it — data says the shot is justified.',
            ja: '立ち上がって撃つ。データがその一発を支持している。',
            ko: '일어나서 쏜다. 데이터가 이 한 발을 지지한다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不站，找一个不需要站起来的角度',
            en: 'Find an angle that doesn\'t require exposing yourself.',
            ja: '立ち上がらなくても撃てる角度を探す。',
            ko: '일어서지 않아도 되는 각도를 찾는다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '快速出头，打完立刻下蹲',
            en: 'Pop up, fire, drop back down — quick peek.',
            ja: '素早く顔を出して撃ち、すぐしゃがむ。クイックピーク。',
            ko: '빠르게 올라가서 쏘고 바로 웅크린다. 퀵 피크.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '等他移动，用他的脚步声更新数据',
            en: 'Wait for him to move. Update the data with new footsteps.',
            ja: '彼が動くのを待つ。新しい足音でデータを更新する。',
            ko: '움직일 때까지 기다린다. 발소리로 데이터를 업데이트한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },

    // ── pubg-c14: Flair + Mental ─────────────────────────────────────────────
    {
      id: 'pubg-c14',
      kind: 'compound',
      text: {
        zh: '你跳车跑路的时候，被自己的车压死了。',
        en: 'You bailed out of a moving vehicle and got run over by it.',
        ja: '走行中の車から飛び降りて、自分の車に轢かれた。',
        ko: '달리는 차에서 뛰어내렸다가 그 차에 치여서 죽었다.',
      },
      options: [
        {
          label: {
            zh: '这种事就是会发生，没什么大不了',
            en: 'These things happen. Not a big deal.',
            ja: 'こういうことは起こる。大したことじゃない。',
            ko: '이런 일은 있을 수 있다. 별거 아니다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经截图了，这个死法值得记录',
            en: 'Already screenshotted. That death deserves a record.',
            ja: 'もうスクリーンショットした。この死に方は記録に値する。',
            ko: '이미 스크린샷 찍었다. 이 죽음은 기록할 가치 있다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂了自己一句，发誓再也不跳车',
            en: 'Called yourself an idiot. Swore never to bail from a moving car again.',
            ja: '自分を罵倒した。二度と走行中の車から飛び降りないと誓った。',
            ko: '자신한테 욕 한마디 했다. 다시는 달리는 차에서 안 뛰어내리겠다 맹세했다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '对队友说"你看到刚才那个吗"，开始讲这段经历',
            en: 'Told the squad "did you see that?" Then narrated the entire event.',
            ja: 'チームに「今の見た？」と言い、出来事を一から話し始めた。',
            ko: '팀원한테 "저거 봤어?" 하고 전체 경위를 설명하기 시작했다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ── pubg-c15: Flair + Mental ─────────────────────────────────────────────
    {
      id: 'pubg-c15',
      kind: 'compound',
      text: {
        zh: '决赛圈只剩你一个人了，吃鸡在望。手开始抖了。',
        en: 'You\'re the last one alive. Chicken dinner is right there. Hands are shaking.',
        ja: 'あなただけが残った。ドン勝は目の前だ。手が震えている。',
        ko: '당신만 남았다. 치킨이 눈앞이다. 손이 떨린다.',
      },
      options: [
        {
          label: {
            zh: '趁手抖换一下皮肤，心里稳一点',
            en: 'Swap into the victory skin while waiting — it helps with the nerves.',
            ja: '震えを落ち着かせるために勝利スキンに着替える。',
            ko: '떨리는 동안 승리 스킨으로 갈아입는다. 마음이 좀 안정된다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '专注，不管手抖不抖',
            en: 'Focus. Ignore the hands.',
            ja: '集中する。手の震えは無視する。',
            ko: '집중한다. 손 떨리는 거 무시한다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '打出去，手抖就手抖，输了再来',
            en: 'Shoot and see. Shaky hands are fine. If you lose, queue again.',
            ja: '撃って確かめる。震え手でも大丈夫。負けたらまた並ぶ。',
            ko: '쏘고 본다. 손 떨려도 괜찮다. 지면 다시 큐.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '在决赛圈里找一个好看的角度，最后这一枪要好看',
            en: 'Find the right position for the final shot. This one needs to look good.',
            ja: '最後の一発のために、見栄えの良いポジションを探す。',
            ko: '마지막 한 발을 위해 보기 좋은 포지션을 찾는다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },

    // ── pubg-c16: Bond + Intel ───────────────────────────────────────────────
    {
      id: 'pubg-c16',
      kind: 'compound',
      text: {
        zh: '你的队友正在被人追着打，你远远看着。现在你能判断出对方的位置吗？',
        en: 'Your teammate is getting chased and you have a distant view of the fight. Can you read the enemy\'s position?',
        ja: 'チームメイトが追いかけられており、あなたは遠くから戦闘を見ている。敵の位置を読めているか？',
        ko: '팀원이 쫓기고 있고, 당신은 멀리서 전투를 보고 있다. 상대 위치를 파악할 수 있어?',
      },
      options: [
        {
          label: {
            zh: '可以，已经锁定了，正在调整角度',
            en: 'Yes — locked in, adjusting the angle.',
            ja: 'できる。ロックオンして角度を調整中だ。',
            ko: '가능하다. 이미 잡았고 각도 조정 중이다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '看大概方向，靠感觉判断他在哪',
            en: 'Rough direction, then gut read from there.',
            ja: 'おおよその方向を見て、直感で場所を判断する。',
            ko: '대략적인 방향 보고, 거기서 직감으로 판단한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '在地图上标记，让队友知道敌人方位',
            en: 'Ping the map — let the teammate track the enemy themselves.',
            ja: 'マップにマークして、チームメイトが自分で敵の位置を追えるようにする。',
            ko: '지도에 핑 찍어서 팀원이 직접 추적할 수 있게 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '不管，他自己跑不就行了',
            en: 'Not my problem. He can run.',
            ja: '関係ない。自分で逃げればいい。',
            ko: '상관없다. 혼자 뛰면 되지.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },

    // ── pubg-c17: Bond + Mental ──────────────────────────────────────────────
    {
      id: 'pubg-c17',
      kind: 'compound',
      text: {
        zh: '队友做了一个让你们全队团灭的决定。你怎么应对？',
        en: 'Your teammate made the call that got the whole squad wiped. What do you do?',
        ja: 'チームメイトの判断でチーム全体が全滅した。どう対応する？',
        ko: '팀원의 판단 하나로 팀 전체가 전멸했다. 어떻게 대응해?',
      },
      options: [
        {
          label: {
            zh: '下一把给他解释一下，一起复盘',
            en: 'Next game, explain what went wrong together — debrief.',
            ja: '次の試合で、何が悪かったか一緒に振り返る。',
            ko: '다음 판에 뭐가 잘못됐는지 같이 복기한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂了一句，然后直接开下一把',
            en: 'One comment in chat, then queue.',
            ja: 'チャットで一言言って、すぐ並ぶ。',
            ko: '채팅에 한마디 하고 바로 큐 잡는다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '不说话，自己想清楚了再玩',
            en: 'Silence. Process it on your own before queuing again.',
            ja: '無言。次の試合に入る前に自分の中で整理する。',
            ko: '침묵. 다시 큐 잡기 전에 혼자 정리한다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '连骂三把，一直提这件事',
            en: 'Bring it up for the next three games. It\'s still fresh.',
            ja: '次の3試合ずっとそれを持ち出す。まだ新鮮だ。',
            ko: '다음 세 판 동안 계속 그 얘기를 꺼낸다. 아직 생생하다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },

    // ── pubg-c18: Intel + Mental (shareable closer) ──────────────────────────
    {
      id: 'pubg-c18',
      kind: 'compound',
      text: {
        zh: '你今天第 7 次死于毒圈了。结算界面上，这次死亡跟"误杀队友"用的是同一个图标——你没死在人手里，游戏却把你和判自杀的人归在一起。',
        en: 'Seventh death to the blue zone today. The results screen files it under the same icon as a team-kill — you didn\'t die to a person, but the game scores it like you gave up.',
        ja: '今日7回目のブルーゾーン死。リザルト画面では、これが「チームキル」と同じアイコンで表示される。誰にも撃たれていないのに、自滅扱いだ。',
        ko: '오늘 블루존 사망 일곱 번째. 결산 화면에는 이게 "팀킬"이랑 똑같은 아이콘으로 뜬다. 아무한테도 안 맞았는데, 게임은 이걸 자살 판정이랑 똑같이 취급한다.',
      },
      options: [
        {
          label: {
            zh: '没事，反正每次都是"差一点"，下次能跑过',
            en: 'Whatever. Always "just barely." Next time you\'ll outrun it.',
            ja: '別にいい。毎回「あと少し」だ。次は勝てる。',
            ko: '상관없다. 매번 "아슬아슬"이다. 다음엔 이긴다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '复盘一下，确认哪一步耽误了跑圈时间',
            en: 'Review the run. Figure out which step burned the time.',
            ja: '振り返る。どのステップが移動時間を無駄にしたか確認する。',
            ko: '복기한다. 어느 단계에서 이동 시간을 낭비했는지 파악한다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '骂了一句，死于毒圈和送人头算一个图标本来就不合理',
            en: 'You said it out loud: dying to the storm shouldn\'t share an icon with feeding a kill.',
            ja: '声に出して言った。ストームで死ぬのとキルを献上するのが同じアイコンなのはおかしい。',
            ko: '소리 내서 말했다. 자기장 사망이랑 헌킬이 같은 아이콘인 게 말이 안 된다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '用计时器测了一下毒圈追上你的速度，下次心里有数，图标怎么标不重要',
            en: 'Timed the zone\'s travel speed on you instead. What icon it uses doesn\'t matter — the numbers do.',
            ja: 'ゾーンの速度を計測した。アイコンがどうなろうと、数字の方が大事だ。',
            ko: '자기장 속도를 직접 측정했다. 아이콘이야 어떻든, 숫자가 중요하다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;
