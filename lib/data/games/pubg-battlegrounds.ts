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
        zh: '物资会计师',
        en: 'Loot Accountant',
        ja: '物資会計士',
        ko: '루팅 회계사',
      },
      oneLiner: {
        zh: '背包整理强迫症，舔包前要先分类',
        en: 'Inventory sorted by ammo type before the fight is even over',
        ja: '戦闘が終わる前にインベントリを弾薬ごとに整理する',
        ko: '전투 끝나기 전에 탄약별로 인벤토리 정리하는 사람',
      },
      description: {
        zh: '你的背包永远按逻辑排列：头盔、防弹衣、医疗包在上层，弹药、手雷在下层。遇到物资你不会直接拿，你要先快速做一次"ROI 评估"——这个枪值不值得带，这发子弹是不是配我现有的枪。你不在乎吃鸡，你在乎每一个撤退决定有没有充分的物资支撑。你信奉一件事：死在物资充足的玩家手里，至少死得有尊严。',
        en: 'Your inventory has a system. Armor on top, meds sorted by heal speed, grenades after ammo, spare attachments never. You don\'t grab loot — you audit it. Every building gets a pass-fail check: "worth the time or worth the risk?" You\'re not chasing the chicken dinner so much as running a low-overhead survival operation. Dying to a better-geared player hurts less when you know your own loadout was optimal.',
        ja: 'バッグには秩序がある。アーマーは上段、回復アイテムは回復量順、弾薬の後に手榴弾。拾うのではなく、監査する。建物に入るたびに「時間とリスクに見合うか？」と自問する。ドン勝が目標ではなく、最適な装備で生き残ることが目標だ。より強い装備の相手に負けても、自分のロードアウトが完璧だったなら悔いはない。',
        ko: '가방에는 체계가 있다. 방어구 위, 회복템 회복량 순서, 탄약 다음에 수류탄. 루팅이 아니라 감사(審查)하는 거다. 건물마다 "시간이랑 리스크 값어치 있나?" 체크한다. 치킨을 목표로 하는 게 아니라 최적 장비로 버티는 게 목표다. 더 좋은 장비 가진 상대한테 지더라도, 내 로드아웃이 완벽했으면 후회 없다.',
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
        zh: '圈边美学家',
        en: 'Circle Aesthete',
        ja: 'サークルエッジ美学家',
        ko: '자기장 가장자리 미학자',
      },
      oneLiner: {
        zh: '永远卡圈边走位，为了风景愿意扣血',
        en: 'Plays the circle edge deliberately — the view is worth the damage tick',
        ja: 'わざとサークルギリギリを攻める。景色のためならダメージくらい気にしない',
        ko: '일부러 자기장 끝에 붙어서 다닌다. 풍경 보려고 데미지 맞는 거 각오한다',
      },
      description: {
        zh: '毒圈对别人是恐慌，对你是美学边界。你喜欢贴着圈边走，一边扣血一边欣赏地图视野。你知道毒圈关闭时间，但你偶尔会故意晚一步——只是为了看最后一眼那个方向的风景。队友问你"跑起来了没"，你说"快了快了"，但你其实还在截图。绝地求生对你来说是一款移动摄影游戏，顺便有人在打枪。',
        en: 'Everyone else panics when the circle shrinks. You check the map, note the edge, and decide you have about twelve more seconds of scenic play. You know the blue zone damage formula. You\'ve done the math on how many meds it costs to stay outside one extra minute. Sometimes the math is wrong. You call that "a calculated risk." Others call it "dying to the zone again."',
        ja: 'みんながサークル縮小でパニックになる中、あなたは地図を確認して「あと12秒はいける」と判断する。ブルーゾーンのダメージ計算は頭に入っている。あと1分外にいるのに何個の回復アイテムが必要か、計算済みだ。たまに計算が外れる。それを「計算されたリスク」と呼ぶ。周りは「またゾーンで死んだ」と言う。',
        ko: '다들 자기장 줄어들면 패닉인데, 당신은 지도 보고 "12초 더 있어도 되겠다" 판단한다. 블루존 데미지 공식은 외워뒀다. 1분 더 밖에 있으려면 회복템 몇 개 필요한지 계산했다. 가끔 계산이 틀린다. 그걸 "계산된 리스크"라고 한다. 팀원들은 "또 블루존에 죽었냐"고 한다.',
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
        zh: '你认为 400 米以内的交战距离都叫近战。你喜欢 Miramar 的山脊，因为视野开阔、可以看清所有人；你讨厌 Sanhok，因为那里距离太近，看不出技术高下。你花了三分钟爬上最高点，然后在那里等圈。Kar98k 架好，等一个脑袋出现。"Peek and heal"是你的生活哲学——开一枪、进掩体、上药、再重复。',
        en: 'Four hundred meters is your comfort zone. Closer than that and it\'s a brawl; you don\'t do brawls. You chose your ridge before the first minute and built a nest. AWM or Kar98k — anything with a bolt is acceptable. The peek-and-heal loop is so ingrained that you do it in real life: act, retreat, recover, repeat. You take shots that other players don\'t see coming, which is the point.',
        ja: '400メートルがコンフォートゾーン。それより近いのは乱闘で、乱闘はしない。1分以内に稜線を決めて、陣地を構築した。AWMかKar98k——ボルトアクションなら何でもいい。ピーク&ヒールのループは生活哲学になっている。行動→撤退→回復→繰り返し。他のプレイヤーには見えない距離から撃つ。それが目的だ。',
        ko: '400미터가 편안한 거리다. 그보다 가까우면 난전이고, 난전은 안 한다. 1분 안에 능선 자리 잡고 진지 구축했다. AWM이나 Kar98k — 볼트액션이면 뭐든 된다. 피크-힐 루프가 생활 철학이 됐다. 행동→후퇴→회복→반복. 다른 플레이어가 볼 수 없는 거리에서 쏜다. 그게 포인트다.',
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
        zh: '你已经在这片草丛趴了八分钟了。你不认为这叫"龟缩"，你认为这叫"占据战略要点"。伏地魔是别人给你的标签，你接受它，但你有自己的哲学：最后站起来的人才是对的。你不急，你不慌，你相信时间和草丛是你的盟友。等到决赛圈只剩两个人，你会站起来，优雅地换上你最喜欢的皮肤，然后出击——或者继续趴着，这也是一种艺术。',
        en: 'Eight minutes face-down in the same patch of grass. Not camping — position management. You\'ve watched four firefights happen around you, taken none of them, and you have no regrets about any of it. The 伏地魔 label doesn\'t bother you. You have a counterargument ready: of the players who rushed, how many made it to the final circle? Exactly. The grass is not cover. The grass is a statement.',
        ja: '同じ草むらに8分間伏せている。キャンプではなく、ポジション管理だ。周りで4回の交戦を目撃したが、どれにも参加しなかった。後悔はない。「伏地魔」というレッテルは気にしない。反論の準備もできている：突撃したプレイヤーは何人最終サークルに残っているか？その通り。草むらは隠れ場所ではなく、声明だ。',
        ko: '같은 풀밭에 8분째 엎드려 있다. 캠핑이 아니라 포지션 관리다. 주변에서 교전 4번 봤고, 하나도 참여 안 했다. 후회 없다. "눕기 전문가" 소리 들어도 신경 안 쓴다. 반론 준비됐다: 돌격한 플레이어 중 최종 원까지 온 사람이 몇 명이냐고? 맞다. 풀밭은 은폐물이 아니라 선언이다.',
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
        zh: '安全区摆渡者',
        en: 'Safezone Ferry',
        ja: 'セーフゾーン渡し守',
        ko: '안전 지대 페리',
      },
      oneLiner: {
        zh: '舔包但不恋战，把每次撤离算得刚刚好',
        en: 'Loots clean, leaves early — arrives at the safe zone before the panic starts',
        ja: '素早く漁り、早めに離脱。パニックが始まる前にセーフゾーンに着く',
        ko: '빠르게 루팅하고 일찍 이탈. 패닉 시작 전에 안전 지대 도착한다',
      },
      description: {
        zh: '你的求生逻辑是：最安全的地方永远在圈里，而不是战场上。你比任何人都早知道安全圈在哪里，你在别人还在打枪的时候已经在移动了。你不是在逃跑，你是在"提前部署"。你舔包，但你设了时间上限：30 秒内搞定，超时就走。在你的意识里，"clean up"不是策略，是结果——你等别人打完再去捡。',
        en: 'You read the next safe zone before anyone\'s finished looting. While the first firefight of the game is happening, you\'re already moving. It\'s not running — it\'s positioning. You loot on a timer (30 seconds max, then out), and you never start a fight you can\'t end in six seconds. The "clean up" reputation is real: you let others exhaust each other, then you arrive, practical as ever. Your presence in a squad is basically insurance.',
        ja: '誰もがまだ漁っている間に、あなたは次のセーフゾーンを確認済みだ。最初の交戦が起きている間、すでに移動している。逃げているのではなく、ポジショニングしている。漁りにはタイムリミット（最大30秒）を設けて、それを超えたら離脱。6秒で終わらない戦闘は始めない。「クリーンアップ」の評判は本物だ——他の人が消耗し合うのを待って、実用的に到着する。スクワッドでの存在は保険みたいなものだ。',
        ko: '다들 루팅할 때 이미 다음 안전 지대 확인했다. 첫 교전 시작할 때 이미 이동 중이다. 도망이 아니라 포지셔닝이다. 루팅에 타이머 설정(최대 30초), 넘으면 이탈. 6초 안에 끝날 수 없는 교전은 안 시작한다. "클린업" 평판은 진짜다 — 다른 플레이어들이 서로 소모하도록 두고 나서 실용적으로 도착한다. 스쿼드에서의 존재는 보험 같은 거다.',
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
        zh: '决赛圈造型师',
        en: 'Final Pose',
        ja: '最終サークルスタイリスト',
        ko: '최종 원 스타일리스트',
      },
      oneLiner: {
        zh: '吃鸡前要换皮肤，胜利的仪式感比吃鸡本身更重要',
        en: 'Changes outfit before the final two engage — the chicken dinner deserves the right costume',
        ja: '最後の2人が対決する前に衣装チェンジ。ドン勝は正しいコスチュームで迎えるべきだ',
        ko: '마지막 두 명이 붙기 전에 의상 교체. 치킨은 올바른 코스튬으로 맞이해야 한다',
      },
      description: {
        zh: '你打 PUBG 有一套完整的仪式：落地搜物资，进圈找机会，但最关键的步骤是决赛圈前打开装扮界面换上你的"吃鸡专属皮肤"。吃鸡（ドン勝/치킨）是结果，截图才是目的。你会在结算画面前调整视角，确保你的角色站在最好看的光线下。别人的问题是"怎么赢"，你的问题是"赢了之后画面好不好看"。',
        en: 'You have a pre-dinner ritual. Final circle: open inventory, equip the good skin. Not the one you wore all game — the one you saved for this moment. The chicken dinner itself is fine, but the screenshot is the deliverable. You\'ve repositioned your character in the end screen to catch better lighting. Other players ask "how do I win more?" Your version is "how do I frame the win correctly?"',
        ja: '決戦前の儀式がある。最終サークル：インベントリを開き、特別なスキンを装備する。ゲーム中ずっと着ていたやつじゃなく、このために取っておいたやつ。ドン勝自体は良いが、スクリーンショットが目的だ。勝利画面でより良いライティングを捉えるためにキャラクターを動かしたことがある。他のプレイヤーは「どうすれば勝てるか？」と聞く。あなたの問いは「どうすれば勝利を正しくフレームに収めるか？」だ。',
        ko: '결전 전 의식이 있다. 최종 원: 인벤토리 열고, 특별한 스킨 장착. 게임 내내 입던 거 말고, 이 순간을 위해 아껴둔 거. 치킨 자체는 좋지만, 스크린샷이 목적이다. 결산 화면에서 더 좋은 조명 잡으려고 캐릭터 이동시킨 적 있다. 다른 플레이어는 "어떻게 더 많이 이기냐"고 묻는다. 당신의 질문은 "어떻게 승리를 제대로 담냐"다.',
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
        zh: '你今天第 11 次落在 Pochinki 了。你知道结果大概率是 30 秒内下线，但你就是停不下来。热门区对你来说是一种实验——你在测试手速、测试落地角度、测试这把有没有可能那把枪先被你捡到。死了没关系，"下一把"有无限可能。队友看着你选落点时的表情，你都懂，你选择无视。吃鸡对你来说不是目标，而是个意外惊喜。',
        en: 'Pochinki, again. You know what happens next — the numbers say thirty seconds, give or take. You do it anyway because the first ten seconds of a hot drop contain more decisions, more chaos, more pure gamer experience than the entire middle section of a cautious game. You died. You\'re already in the drop plane. The chicken dinner, if it happens, is a surprise. The squad has learned to queue separately.',
        ja: 'またポチンキ。次に何が起きるかわかっている——30秒前後で終わる。それでもやる。ホットドロップの最初の10秒には、慎重なゲームの中盤全体より多くの決断、混乱、純粋なゲーマー体験が詰まっているから。死んだ。もうドロップ機にいる。ドン勝は、もし起きたら、サプライズだ。スクワッドは別々にキューに入ることを学んだ。',
        ko: '또 포치인키다. 다음에 뭐가 일어날지 안다 — 30초 내외로 끝난다. 그래도 한다. 핫드랍 처음 10초에는 신중한 게임의 중반 전체보다 더 많은 결정, 혼돈, 순수한 게이머 경험이 담겨 있으니까. 죽었다. 이미 낙하 비행기 안이다. 치킨은, 만약 일어난다면, 서프라이즈다. 스쿼드는 따로 큐 잡는 법을 배웠다.',
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
  questions: [],
};

export default game;
