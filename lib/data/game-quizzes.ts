export type SiteLocale = 'zh' | 'en' | 'ja' | 'ko';

export type LocalizedText = Record<SiteLocale, string>;

export interface GameQuizAsset {
  src: string;
  alt: LocalizedText;
  prompt: string;
}

export interface GameQuizOption {
  label: LocalizedText;
  resultId: string;
}

export interface GameQuizQuestion {
  id: string;
  text: LocalizedText;
  options: GameQuizOption[];
  illustration?: GameQuizAsset;
}

export interface GameQuizResult {
  id: string;
  title: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
  traits: Record<SiteLocale, string[]>;
  image?: GameQuizAsset;
}

export interface GameQuiz {
  slug: string;
  title: LocalizedText;
  shortTitle: string;
  genre: LocalizedText;
  deck: LocalizedText;
  description: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  keywords: Record<SiteLocale, string[]>;
  accent: 'primary' | 'secondary' | 'accent' | 'info';
  popularity: LocalizedText;
  logo?: GameQuizAsset;
  cover?: GameQuizAsset;
  questions: GameQuizQuestion[];
  results: GameQuizResult[];
}

const l = (zh: string, en: string, ja: string, ko: string): LocalizedText => ({zh, en, ja, ko});

const traits = (
  zh: string[],
  en: string[],
  ja: string[],
  ko: string[],
): Record<SiteLocale, string[]> => ({zh, en, ja, ko});

const quiz = (game: Omit<GameQuiz, 'questions'>, questions: GameQuizQuestion[]): GameQuiz => ({
  ...game,
  questions,
});

const option = (label: LocalizedText, resultId: string): GameQuizOption => ({label, resultId});

const asset = (src: string, alt: LocalizedText, prompt: string): GameQuizAsset => ({src, alt, prompt});

const image2Style =
  'GPT Image 2, playful bold editorial quiz illustration, no readable text, no logos, no copyrighted game characters, energetic abstract gaming scene, mint green #10B981, amber #F59E0B, electric purple #8B5CF6, crisp composition, high contrast, shareable social-card finish';

const logoAsset = (game: GameQuiz): GameQuizAsset =>
  asset(
    `/game-logos/${game.slug}.png`,
    l(
      `${game.shortTitle} 官方 Logo`,
      `${game.shortTitle} official logo`,
      `${game.shortTitle} 公式ロゴ`,
      `${game.shortTitle} 공식 로고`,
    ),
    `Official ${game.shortTitle} logo sourced from the publisher or official storefront asset library.`,
  );

const standardQuestions = (
  idPrefix: string,
  gameName: LocalizedText,
  objective: LocalizedText,
  resource: LocalizedText,
): GameQuizQuestion[] => [
  {
    id: `${idPrefix}-q1`,
    text: l(
      `进入一局 ${gameName.zh}，你最先盯住什么？`,
      `A ${gameName.en} match starts. What do you watch first?`,
      `${gameName.ja} の試合開始。まず何を見る？`,
      `${gameName.ko} 매치가 시작됩니다. 먼저 보는 것은?`,
    ),
    options: [
      option(l(`节奏、位置和 ${objective.zh}。`, `Tempo, positioning, and ${objective.en}.`, `テンポ、位置、${objective.ja}。`, `템포, 위치, ${objective.ko}.`), 'planner'),
      option(l('我能不能把局面打穿。', 'Whether I can crack the match open.', '自分が試合を壊せるか。', '내가 판을 터뜨릴 수 있는지.'), 'carry'),
      option(l('谁需要我兜底。', 'Who needs me to cover them.', '誰を支えるべきか。', '누구를 받쳐줘야 하는지.'), 'support'),
      option(l('哪里最像会出节目效果。', 'Where the funniest disaster might happen.', '一番ネタになりそうな場所。', '어디서 가장 웃긴 사고가 날지.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q2`,
    text: l('队友开始互相甩锅，你的反应是？', 'Teammates start blaming each other. Your reaction?', '味方が責任を押し付け合う。反応は？', '팀원들이 서로 탓하기 시작합니다. 반응은?'),
    options: [
      option(l('先把下一波怎么打讲清楚。', 'Clarify the next play first.', '次の動きを先に整理する。', '다음 플레이부터 정리함.'), 'planner'),
      option(l('少说两句，我来打回来。', 'Say less. I will win it back.', '喋るより取り返す。', '말 줄이고 내가 복구함.'), 'carry'),
      option(l('稳一下语气，顺手补信息。', 'Calm the tone and add useful info.', '空気を落ち着かせて情報を足す。', '분위기 낮추고 정보 보탬.'), 'support'),
      option(l('默默记下金句。', 'Quietly save the quote.', '名言を静かに保存。', '명언을 조용히 저장.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q3`,
    text: l(
      `${resource.zh} 快到关键节点，你会怎么选？`,
      `${resource.en} is reaching a key moment. What is your call?`,
      `${resource.ja} が大事な局面。どう判断する？`,
      `${resource.ko} 가 중요한 순간입니다. 선택은?`,
    ),
    options: [
      option(l('算风险，不打没把握的交换。', 'Count risk and avoid bad trades.', 'リスクを計算し、悪い交換を避ける。', '리스크 계산 후 나쁜 교환은 피함.'), 'planner'),
      option(l('给我机会，我能终结。', 'Give me the window and I can end it.', '隙をくれれば終わらせる。', '기회만 주면 끝낼 수 있음.'), 'carry'),
      option(l('我先把队伍状态补齐。', 'I stabilize the team first.', 'まずチームを整える。', '팀 상태부터 안정시킴.'), 'support'),
      option(l('这波不打，人生少一页素材。', 'If we skip this, life loses a page of material.', 'これを避けたら人生のネタが減る。', '이걸 피하면 인생 소재 하나 잃음.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q4`,
    text: l('残局只剩你和一个队友，你最像哪种语音？', 'Only you and one teammate remain. What does your comm sound like?', '残りは自分と味方1人。VCはどんな感じ？', '당신과 팀원 한 명만 남았습니다. 보이스는?'),
    options: [
      option(l('报信息，少情绪。', 'Clean info, little emotion.', '情報だけ、感情少なめ。', '정보 위주, 감정 적게.'), 'planner'),
      option(l('跟我，别怕。', 'Follow me. Do not fear.', 'ついてきて、怖がらないで。', '따라와, 겁내지 마.'), 'carry'),
      option(l('你先活着，我来补。', 'Stay alive. I will cover.', 'まず生きて、こちらが補う。', '일단 살아, 내가 커버함.'), 'support'),
      option(l('如果输了，也要输得好看。', 'If we lose, make it cinematic.', '負けても絵になるように。', '져도 멋있게 져야 함.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q5`,
    text: l(`打完 ${gameName.zh} 后，你最容易复盘什么？`, `After ${gameName.en}, what do you replay in your head?`, `${gameName.ja} の後、何を一番振り返る？`, `${gameName.ko} 후에 가장 복기하는 것은?`),
    options: [
      option(l('关键决策到底赚不赚。', 'Whether the key call was actually worth it.', '重要判断が本当に得だったか。', '중요 판단이 정말 이득이었는지.'), 'planner'),
      option(l('我那波差一点就帅完了。', 'That one play was almost perfect.', 'あのプレイ、あと少しで完璧だった。', '그 플레이 거의 완벽했는데.'), 'carry'),
      option(l('哪一秒没照顾到队友。', 'The one second I failed to cover someone.', '味方を見切れなかった一秒。', '팀원을 못 봐준 1초.'), 'support'),
      option(l('最离谱的一幕能不能发给朋友。', 'Whether the funniest moment can be sent to friends.', '一番変な場面を友達に送れるか。', '가장 웃긴 장면을 친구에게 보낼 수 있는지.'), 'chaos'),
    ],
  },
];

const supplementalQuestions = (idPrefix: string, gameName: LocalizedText): GameQuizQuestion[] => [
  {
    id: `${idPrefix}-q6`,
    text: l(
      `${gameName.zh} 里队伍突然顺风，你最怕谁开始飘？`,
      `Your ${gameName.en} squad suddenly gets ahead. Who scares you most?`,
      `${gameName.ja} で急に有利。誰が調子に乗ると怖い？`,
      `${gameName.ko} 에서 갑자기 유리해졌습니다. 누가 들뜨면 가장 무섭나요?`,
    ),
    options: [
      option(l('怕没人继续算下一波节奏。', 'Anyone who stops thinking about the next tempo.', '次のテンポを誰も考えなくなること。', '다음 템포를 아무도 생각 안 하는 것.'), 'planner'),
      option(l('怕我自己，优势太香了。', 'Me. Advantage smells too good.', '自分。優勢は甘すぎる。', '나 자신. 유리함은 너무 달콤함.'), 'carry'),
      option(l('怕队友开始各玩各的。', 'Teammates splitting into five solo stories.', '味方が全員別ゲームを始めること。', '팀원이 각자 다른 게임을 시작하는 것.'), 'support'),
      option(l('怕没人录屏，名场面会过期。', 'Nobody recording the moment before it expires.', '名場面を誰も録画しないこと。', '명장면을 아무도 녹화 안 하는 것.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q7`,
    text: l(
      '最像你的一句赛前心理建设是？',
      'Which pre-match self-talk sounds most like you?',
      '試合前の自己暗示で一番近いのは？',
      '경기 전 자기암시에 가장 가까운 말은?',
    ),
    options: [
      option(l('这局按计划来，别让情绪接管方向盘。', 'Play the plan and keep emotion away from the wheel.', '計画通り、感情にハンドルを渡さない。', '계획대로, 감정에게 핸들을 주지 않기.'), 'planner'),
      option(l('只要给我一个窗口，我能把剧情改写。', 'Give me one window and I can rewrite the plot.', '一つ隙があれば物語を書き換える。', '기회 하나면 내가 이야기를 바꿀 수 있음.'), 'carry'),
      option(l('大家正常说话，这局已经赢一半。', 'If everyone speaks normally, we are halfway there.', '全員が普通に話せたら半分勝ち。', '다들 정상적으로 말하면 반은 이김.'), 'support'),
      option(l('输赢先放一边，素材一定要有。', 'Winning can wait. The material must exist.', '勝敗よりまずネタ。', '승패보다 소재가 먼저.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q8`,
    text: l(
      '遇到一个明显不合理但可能很好笑的打法，你会？',
      'You see a clearly unreasonable play that might be hilarious. What do you do?',
      '明らかに変だけど面白そうな動き。どうする？',
      '분명 이상하지만 웃길 것 같은 플레이를 봅니다. 어떻게 하나요?',
    ),
    options: [
      option(l('先算代价，亏太多就别演。', 'Calculate cost first; no performance if it throws too hard.', '代償を計算。損が大きすぎるならやめる。', '대가부터 계산. 너무 손해면 안 함.'), 'planner'),
      option(l('我来试，成了就是教学。', 'I will try it. If it works, it becomes a tutorial.', '自分がやる。成功すれば教材。', '내가 해봄. 성공하면 강의임.'), 'carry'),
      option(l('我兜底，你们别同时上头。', 'I will cover it. Just do not all overheat at once.', '自分が支えるから全員同時に燃えないで。', '내가 커버할 테니 다 같이 흥분하지 마.'), 'support'),
      option(l('这就是我上线的意义。', 'This is why I logged in.', 'そのためにログインした。', '이걸 보려고 접속함.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q9`,
    text: l(
      '朋友让你用一句话概括自己的玩家风格，你会说？',
      'A friend asks for your playstyle in one line. Your answer?',
      '友達にプレイスタイルを一言で聞かれたら？',
      '친구가 플레이 스타일을 한 줄로 묻습니다. 답은?',
    ),
    options: [
      option(l('看起来慢，其实在排雷。', 'Looks slow, actually defusing future problems.', '遅く見えるが地雷処理中。', '느려 보이지만 미래 문제를 제거 중.'), 'planner'),
      option(l('风险越高，手越热。', 'The higher the risk, the warmer my hands.', 'リスクが高いほど手が温まる。', '위험할수록 손이 뜨거워짐.'), 'carry'),
      option(l('不一定最亮，但会让队伍别灭灯。', 'Not always brightest, but keeps the team lights on.', '一番派手ではないがチームの明かりを守る。', '가장 빛나진 않아도 팀 불은 꺼지지 않게 함.'), 'support'),
      option(l('合理只是下限，节目效果才是上限。', 'Reasonable is the floor; comedy is the ceiling.', '合理性は下限、ネタが上限。', '합리는 하한선, 예능은 상한선.'), 'chaos'),
    ],
  },
  {
    id: `${idPrefix}-q10`,
    text: l(
      '最后一题：如果这局必须被做成表情包，主角是谁？',
      'Final question: if this match becomes a meme, who is the main character?',
      '最後の質問。この試合がミームになるなら主役は誰？',
      '마지막 질문: 이 판이 밈이 된다면 주인공은 누구인가요?',
    ),
    options: [
      option(l('那个提前一分钟提醒大家的人。', 'The person warning everyone one minute early.', '1分前から注意していた人。', '1분 전부터 경고한 사람.'), 'planner'),
      option(l('那个敢冲进去改命的人。', 'The person who dashed in to change fate.', '運命を変えに突っ込んだ人。', '운명을 바꾸러 들어간 사람.'), 'carry'),
      option(l('那个把烂摊子缝起来的人。', 'The person stitching the mess back together.', '混乱を縫い合わせた人。', '엉망진창을 다시 꿰맨 사람.'), 'support'),
      option(l('那个让所有人笑到忘记输赢的人。', 'The person who made everyone laugh past the scoreboard.', '勝敗を忘れるほど笑わせた人。', '승패를 잊을 만큼 웃긴 사람.'), 'chaos'),
    ],
  },
];

const RESULT_NAME_OVERRIDES: Record<string, Partial<Record<string, LocalizedText>>> = {
  'league-of-legends': {
    planner: l('龙魂账房先生', 'The Dragon Ledger Keeper', 'ドラゴン帳簿係', '용 영수증 관리자'),
    carry: l('逆风保研 C 位', 'The Late-Game Scholarship Carry', '逆転奨学生キャリー', '역전 장학생 캐리'),
    support: l('峡谷情绪保安', 'The Rift Morale Guard', '峡谷メンタル警備員', '협곡 멘탈 경비원'),
    chaos: l('嚎哭深渊段子王', 'The Howling Abyss Bitmaker', 'ハウリングアビス芸人', '칼바람 드립 장인'),
  },
  'counter-strike-2': {
    planner: l('半起局财务总监', 'The Half-Buy CFO', '半買いCFO', '반강제 CFO'),
    carry: l('中门尊严狙击手', 'The Mid-Door Dignity Sniper', 'ミッド尊厳スナイパー', '미드 존엄 저격수'),
    support: l('烟闪雷火勤务长', 'The Full-Utility Quartermaster', '投げ物補給係長', '유틸 보급 반장'),
    chaos: l('Mirage 论文答辩人', 'The Mirage Thesis Defender', 'Mirage論文発表者', 'Mirage 논문 발표자'),
  },
  valorant: {
    planner: l('战术白板上头人', 'The Whiteboard IGL', '白板IGL', '화이트보드 IGL'),
    carry: l('秒锁进点新闻人', 'The Instalock Headline Entry', '即ピック突入ニュース係', '즉픽 진입 뉴스메이커'),
    support: l('技能档案馆馆长', 'The Utility Archive Curator', 'スキル資料館長', '스킬 아카이브 관장'),
    chaos: l('警长一发玄学家', 'The Sheriff One-Tap Mystic', 'シェリフ一発神秘家', '셰리프 원탭 신봉자'),
  },
  'delta-force': {
    planner: l('撤离路线精算师', 'The Extraction Route Actuary', '撤退ルート精算人', '탈출 루트 계리사'),
    carry: l('高价值交火承包商', 'The High-Value Fight Contractor', '高価値戦闘請負人', '고가치 교전 계약자'),
    support: l('耳机里的风控员', 'The Headset Risk Controller', 'ヘッドセット危機管理係', '헤드셋 리스크 매니저'),
    chaos: l('装甲车公路片导演', 'The Armored Road-Movie Director', '装甲車ロードムービー監督', '장갑차 로드무비 감독'),
  },
  'honor-of-kings': {
    planner: l('野区税务稽查员', 'The Jungle Tax Auditor', 'ジャングル税務監査員', '정글 세무 감사관'),
    carry: l('对线压迫艺术家', 'The Lane Pressure Artist', 'レーン圧アーティスト', '라인 압박 예술가'),
    support: l('五排关系修复师', 'The Five-Stack Relationship Repairer', '5人関係修復士', '5인큐 관계 수리공'),
    chaos: l('十人团建主持人', 'The Ten-Player Teamfight Host', '10人集団戦司会者', '10인 한타 진행자'),
  },
  'overwatch-2': {
    planner: l('大招预算审计员', 'The Ult Budget Auditor', 'Ult予算監査員', '궁극기 예산 감사관'),
    carry: l('击杀回放主演', 'The Killcam Lead Actor', 'キルカム主演', '킬캠 주연배우'),
    support: l('推车监护人', 'The Payload Guardian', 'ペイロード見守り人', '화물 보호자'),
    chaos: l('C9 创伤策展人', 'The C9 Trauma Curator', 'C9トラウマ学芸員', 'C9 트라우마 큐레이터'),
  },
  'pubg-battlegrounds': {
    planner: l('背包空间规划师', 'The Backpack Space Planner', 'バック容量設計士', '가방 공간 설계자'),
    carry: l('落地钢枪急先锋', 'The Hot-Drop Vanguard', '激戦区先鋒', '핫드롭 선봉장'),
    support: l('毒边救援队长', 'The Blue-Zone Rescue Captain', 'ブルーゾーン救援隊長', '블루존 구조대장'),
    chaos: l('决赛圈草丛哲学家', 'The Final-Circle Grass Philosopher', '終盤草むら哲学者', '막자기장 풀숲 철학자'),
  },
  'apex-legends': {
    planner: l('安全区气象台台长', 'The Ring Weather Chief', 'リング気象台長', '링 기상대장'),
    carry: l('滑铲高光传教士', 'The Slide-Jump Highlight Preacher', 'スライドジャンプ布教者', '슬라이딩 하이라이트 전도사'),
    support: l('标记系统吟游诗人', 'The Ping Bard', 'ピン吟遊詩人', '핑 음유시인'),
    chaos: l('第三方风暴猎人', 'The Third-Party Storm Hunter', '漁夫ストームハンター', '제3자 폭풍 사냥꾼'),
  },
};

const coverAsset = (game: GameQuiz): GameQuizAsset =>
  asset(
    `/game-quizzes/${game.slug}/cover.png`,
    l(
      `${game.title.zh} 封面插图`,
      `${game.title.en} cover illustration`,
      `${game.title.ja} カバーイラスト`,
      `${game.title.ko} 커버 일러스트`,
    ),
    `${image2Style}, 16:9 cover art for a ${game.shortTitle} gamer personality quiz, abstract multiplayer energy, ${game.genre.en}, no official logos or characters`,
  );

const questionAsset = (game: GameQuiz, question: GameQuizQuestion, index: number): GameQuizAsset =>
  asset(
    `/game-quizzes/${game.slug}/cover.png`,
    l(
      `${game.shortTitle} 第 ${index + 1} 题插图`,
      `${game.shortTitle} question ${index + 1} illustration`,
      `${game.shortTitle} 第${index + 1}問イラスト`,
      `${game.shortTitle} ${index + 1}번 문항 일러스트`,
    ),
    `${image2Style}, 16:9 quiz question illustration for ${game.shortTitle}, scenario: ${question.text.en}, expressive abstract players, readable mood but no text`,
  );

const resultAsset = (game: GameQuiz, result: GameQuizResult): GameQuizAsset =>
  asset(
    `/game-quizzes/${game.slug}/results/${result.id}.png`,
    l(
      `${result.title.zh} 结果插图`,
      `${result.title.en} result illustration`,
      `${result.title.ja} 結果イラスト`,
      `${result.title.ko} 결과 일러스트`,
    ),
    `${image2Style}, square result-card avatar illustration for ${game.shortTitle} player archetype "${result.title.en}", badge mood "${result.badge.en}", abstract humorous gamer identity, no text`,
  );

const enhanceGame = (game: GameQuiz): GameQuiz => {
  const questions =
    game.questions.length >= 10
      ? game.questions.slice(0, 10)
      : [...game.questions, ...supplementalQuestions(game.slug, game.title)].slice(0, 10);
  const results = game.results.map((result) => {
    const renamed = {
      ...result,
      title: RESULT_NAME_OVERRIDES[game.slug]?.[result.id] ?? result.title,
    };

    return {
      ...renamed,
      image: renamed.image ?? resultAsset(game, renamed),
    };
  });

  return {
    ...game,
    logo: game.logo ?? logoAsset(game),
    cover: game.cover ?? coverAsset(game),
    questions: questions.map((question, index) => ({
      ...question,
      illustration: question.illustration ?? questionAsset(game, question, index),
    })),
    results,
  };
};

export const GAME_QUIZZES: GameQuiz[] = [
  quiz(
    {
      slug: 'league-of-legends',
      shortTitle: 'LoL',
      title: l('英雄联盟玩家人格测试', 'League of Legends Player Type Quiz', 'League of Legends プレイヤー診断', '리그 오브 레전드 플레이어 유형 테스트'),
      genre: l('MOBA / 单排情绪管理', 'MOBA / solo queue psychology', 'MOBA / ソロキュー心理', 'MOBA / 솔랭 심리전'),
      deck: l('测测你是峡谷里的哪种经典队友。', 'Find your classic Summoner’s Rift teammate identity.', 'サモナーズリフトでの定番ポジションを診断。', '협곡에서 당신이 어떤 팀원인지 확인하세요.'),
      description: l(
        '围绕分路、打野节奏、团战决策和红温瞬间设计，最后给你一个玩家圈一眼懂的身份。',
        'Answer lane, jungle, macro, and tilt questions to get a player-culture identity LoL friends will recognize instantly.',
        'レーン、ジャングル、マクロ、メンタル崩壊の瞬間から、LoL民に通じるタイプを出します。',
        '라인, 정글, 운영, 멘탈 상황으로 롤 유저라면 바로 알아보는 유형을 보여줍니다.',
      ),
      seoTitle: l('英雄联盟人格测试 | 你是哪种 LOL 玩家？', 'League of Legends Personality Quiz | What LoL Player Type Are You?', 'League of Legends 性格診断 | あなたはどのLoLプレイヤー？', '롤 성격 테스트 | 당신은 어떤 LoL 유저인가요?'),
      seoDescription: l(
        '免费英雄联盟玩家类型测试，10 道题测出你是龙魂账房先生、逆风保研 C 位、峡谷情绪保安还是嚎哭深渊段子王。',
        'Take a free League of Legends player type quiz. In 10 questions, discover whether you are the dragon ledger keeper, late-game carry, morale guard, or ARAM bitmaker.',
        '無料のLoLプレイヤー診断。10問でドラゴン帳簿係、逆転キャリー、メンタル警備員、ARAM芸人を判定します。',
        '무료 롤 플레이어 유형 테스트. 10문항으로 용 영수증 관리자, 역전 캐리, 멘탈 경비원, 칼바람 드립 장인을 확인하세요.',
      ),
      keywords: {
        zh: ['英雄联盟人格测试', 'LOL玩家类型', '你是哪种英雄联盟玩家', '本命英雄测试'],
        en: ['League of Legends personality quiz', 'LoL player type', 'which LoL player are you', 'LoL role quiz'],
        ja: ['League of Legends 性格診断', 'LoL プレイヤータイプ', 'LoL ロール診断'],
        ko: ['롤 성격 테스트', 'LoL 플레이어 유형', '롤 포지션 테스트', '나는 어떤 롤 유저'],
      },
      accent: 'primary',
      popularity: l('韩国 PC 房长期第一梯队，Twitch 与 Newzoo 信号都强。', 'Top-tier Korea PC bang, Twitch, and Newzoo signal.', '韓国PCバン、Twitch、Newzooで強い信号。', '한국 PC방, Twitch, Newzoo 신호가 모두 강한 타이틀.'),
      results: [
        {
          id: 'planner',
          title: l('资源刷新会计', 'The Objective Accountant', 'オブジェクト会計係', '오브젝트 회계사'),
          badge: l('龙魂账本常驻', 'Dragon timer resident', 'ドラゴンタイマー常駐', '드래곤 타이머 상주'),
          description: l('你不是不打架，你是在等地图给你开会。先锋、龙、塔皮、兵线，全都在你脑内排队报销。', 'You are not avoiding fights. You are waiting for the map to finish its meeting. Dragons, waves, plates, and tempo all file expense reports in your head.', '戦わないのではなく、マップ会議の終了待ち。ドラゴン、ウェーブ、プレート、テンポが全部頭の中で精算されます。', '싸움을 피하는 게 아니라 맵 회의가 끝나길 기다리는 타입. 용, 웨이브, 포탑 골드, 템포가 머릿속에서 정산됩니다.'),
          traits: traits(
            ['小龙前 45 秒开始 ping', '看到空大比看到漏刀更难受', '输赢都要复盘视野'],
            ['Pings 45 seconds before dragon', 'Hates wasted ultimates and wasted waves', 'Reviews vision even after wins'],
            ['ドラゴン45秒前にping', '空振りultと腐ったウェーブが苦手', '勝っても視界を反省'],
            ['용 45초 전부터 핑', '헛궁과 버린 웨이브를 못 참음', '이겨도 시야 복기'],
          ),
        },
        {
          id: 'carry',
          title: l('0/3 天命 C 位', 'The 0/3 Destiny Carry', '0/3運命のキャリー', '0/3 운명형 캐리'),
          badge: l('第六件装备前别投', 'Do not FF before item six', '6コア前に降参禁止', '6코어 전 서렌 금지'),
          description: l('前期的你像事故现场，后期的你像事故调查组。只要基地还没爆，你就认为自己还差一波神迹。', 'Your early game looks like an incident report. Your late game thinks it can become the investigation committee. If the Nexus stands, the miracle is pending.', '序盤は事故現場、終盤は事故調査委員会。ネクサスが残っている限り奇跡待ちです。', '초반은 사고 현장, 후반은 사고 조사단. 넥서스가 살아 있으면 아직 기적 한타가 남았다고 믿습니다.'),
          traits: traits(
            ['补刀是信仰', '逆风先看装备栏', '最爱说“能打能打”'],
            ['CS is religion', 'Checks items before morale', 'Says “winnable” too often'],
            ['CSは信仰', '不利でもまず装備確認', '「まだいける」を多用'],
            ['CS는 신앙', '불리하면 아이템부터 봄', '“할만해”를 자주 말함'],
          ),
        },
        {
          id: 'support',
          title: l('单排苦主辅助', 'The Solo Queue Martyr Support', 'ソロキュー受難サポート', '솔랭 순교자 서포터'),
          badge: l('队友情绪垃圾桶', 'Team emotion container', '味方メンタル受け皿', '팀 멘탈 수거함'),
          description: l('你插的不是眼，是队伍最后的理智。ADC 犯病、打野迷路、中单红温，你都能把“没事”打出来。', 'Your wards are not wards. They are the team’s last remaining sanity. ADC spirals, jungle disappears, mid tilts, and you still type “all good.”', 'ワードではなく最後の理性を置いています。ADCが荒れ、jgが迷い、midが燃えても「大丈夫」と打てる人。', '와드는 시야가 아니라 팀의 마지막 이성. 원딜이 흔들리고 정글이 사라져도 “괜찮아”를 칩니다.'),
          traits: traits(
            ['视野分高得离谱', '嘴上说没事，心里已截图', '救人比收头快乐'],
            ['Vision score is suspiciously holy', 'Says fine, screenshots quietly', 'Enjoys saving more than killing'],
            ['視界スコアが神域', '大丈夫と言いながら心で保存', 'キルより救出が好き'],
            ['시야 점수가 성스럽다', '괜찮다면서 마음속 캡처', '킬보다 세이브가 즐거움'],
          ),
        },
        {
          id: 'chaos',
          title: l('大乱斗心理医生', 'The ARAM Therapist', 'ARAMセラピスト', '칼바람 상담가'),
          badge: l('快乐比段位贵', 'Joy over LP', 'LPより楽しさ', '점수보다 재미'),
          description: l('你知道上分很重要，但你更知道五个人在桥上同时上头才是生活。你负责把输赢都讲成段子。', 'You respect ranked, but five people losing judgment on a bridge is where life becomes literature. You turn every outcome into a bit.', 'ランクも大事。でも橋の上で5人が同時に壊れる瞬間こそ人生。勝敗を全部ネタにします。', '랭크도 중요하지만 다섯 명이 다리 위에서 동시에 흥분하는 순간이 인생입니다. 결과를 전부 밈으로 바꿉니다.'),
          traits: traits(
            ['先笑再复活', '奇怪出装收藏家', '能把投降票讲成相声'],
            ['Laughs before respawn', 'Collects suspicious builds', 'Turns surrender votes into comedy'],
            ['復活前にまず笑う', '謎ビルド収集家', '降参投票もネタ化'],
            ['부활 전에 먼저 웃음', '수상한 빌드 수집가', '서렌 투표도 예능으로 만듦'],
          ),
        },
      ],
    },
    [
      {
        id: 'lol-q1',
        text: l('开局 6 分钟，下路小龙快刷了，你第一反应是？', 'At minute 6, dragon is about to spawn. What do you do first?', '6分、ドラゴンが湧きそう。まず何をする？', '6분, 용이 곧 나옵니다. 먼저 뭘 하나요?'),
        options: [
          option(l('开始 ping 时间，顺手看两路线权。', 'Ping timer and check lane priority.', 'タイマーをpingしてレーン主導権確認。', '타이머 찍고 라인 주도권 확인.'), 'planner'),
          option(l('问一句“能打吗”，其实已经往龙坑走了。', 'Ask “can fight?” while already walking there.', '「戦える？」と言いつつもう向かう。', '“싸움 가능?” 하면서 이미 가는 중.'), 'carry'),
          option(l('先补真眼，避免队友脸探草。', 'Buy control vision before someone face-checks.', 'フェイスチェック防止に視界を買う。', '얼굴 체크 방지용 시야부터 챙김.'), 'support'),
          option(l('觉得不如大乱斗，至少桥上没人装运营。', 'Miss ARAM, where nobody pretends to macro.', 'ARAMなら誰もマクロのふりをしないのに。', '칼바람이면 운영 척 안 해도 되는데.'), 'chaos'),
        ],
      },
      {
        id: 'lol-q2',
        text: l('队友 0/4 还在打字，你会怎么处理？', 'A teammate is 0/4 and typing. Your move?', '味方が0/4でチャット中。どうする？', '팀원이 0/4인데 채팅 중입니다. 어떻게 하나요?'),
        options: [
          option(l('静音，然后继续算下一波资源。', 'Mute and calculate the next objective.', 'ミュートして次のオブジェクト計算。', '뮤트하고 다음 오브젝트 계산.'), 'planner'),
          option(l('告诉自己：他吸引火力，我来收割。', 'Tell yourself they draw pressure so you can carry.', '彼が圧を吸って自分が回収すると信じる。', '어그로는 그가 끌고 내가 캐리한다고 믿음.'), 'carry'),
          option(l('打“稳住”，同时给他补视野。', 'Type “steady” and ward for them anyway.', '「落ち着いて」と打って視界も置く。', '“천천히” 치고 시야도 깔아줌.'), 'support'),
          option(l('截图。以后朋友群素材有了。', 'Screenshot. The group chat needs material.', 'スクショ。後で友達に送る素材。', '스크린샷. 단톡방 소재 확보.'), 'chaos'),
        ],
      },
      {
        id: 'lol-q3',
        text: l('你最无法忍受哪种输法？', 'Which loss hurts most?', '一番つらい負け方は？', '가장 못 참는 패배는?'),
        options: [
          option(l('纳什刷新没人来。', 'Baron spawns and nobody comes.', 'バロン湧きに誰も来ない。', '바론 나왔는데 아무도 안 옴.'), 'planner'),
          option(l('我六神了但家没了。', 'I hit full build and the base vanished.', 'フルビルドになったら本陣が消えた。', '풀템 찍었는데 넥서스가 사라짐.'), 'carry'),
          option(l('我保了四个人，没人保我心态。', 'I protected four people; nobody protected my mental.', '4人守ったのに心は誰も守らない。', '네 명 지켰는데 내 멘탈은 아무도 안 지킴.'), 'support'),
          option(l('一点节目效果都没有，纯坐牢。', 'No comedy value. Just prison.', 'ネタにもならない監獄試合。', '예능도 없고 그냥 감옥.'), 'chaos'),
        ],
      },
      {
        id: 'lol-q4',
        text: l('如果你是打野，最像你的节奏是？', 'If you jungle, what is your tempo?', 'ジャングルならどんなテンポ？', '정글이라면 어떤 템포인가요?'),
        options: [
          option(l('三路线权、两组野、一个计划。', 'Three lane states, two camps, one plan.', '3レーン状況、2キャンプ、1プラン。', '세 라인 상황, 두 캠프, 하나의 계획.'), 'planner'),
          option(l('三级抓下，成了就起飞，没成也说赚。', 'Level-three bot gank. If it works, launch. If not, still “worth.”', '3レベbotガンク。成功なら飛ぶ、失敗でも得と言う。', '3렙 바텀갱. 성공하면 비상, 실패해도 이득이라 함.'), 'carry'),
          option(l('哪里快炸了我去哪。', 'I go wherever is about to explode.', '爆発寸前の場所へ行く。', '터지기 직전인 곳으로 감.'), 'support'),
          option(l('我迷路，但迷得很有气势。', 'I am lost, but with authority.', '迷子だけど威厳はある。', '길 잃었지만 기세는 있음.'), 'chaos'),
        ],
      },
      {
        id: 'lol-q5',
        text: l('赢下比赛后，你最可能说什么？', 'After a win, what do you say?', '勝ったあと何と言う？', '이기고 나서 뭐라고 하나요?'),
        options: [
          option(l('第三条龙那波其实最关键。', 'The third dragon fight was the real key.', '3ドラの集団戦が実は核心。', '세 번째 용 한타가 핵심이었음.'), 'planner'),
          option(l('我就说能打吧。', 'I told you it was winnable.', 'まだいけるって言ったでしょ。', '할만하다 했잖아.'), 'carry'),
          option(l('大家都打得很好。', 'Everyone played well.', 'みんな良かった。', '다들 잘했어요.'), 'support'),
          option(l('这局必须保存录像。', 'This match must be preserved.', 'この試合は保存必須。', '이 판은 저장해야 함.'), 'chaos'),
        ],
      },
    ],
  ),
  quiz(
    {
      slug: 'counter-strike-2',
      shortTitle: 'CS2',
      title: l('Counter-Strike 2 玩家人格测试', 'Counter-Strike 2 Player Type Quiz', 'Counter-Strike 2 プレイヤー診断', '카운터 스트라이크 2 플레이어 유형 테스트'),
      genre: l('战术 FPS / 经济学课堂', 'Tactical FPS / economy class', 'タクティカルFPS / 経済学', '전술 FPS / 경제 수업'),
      deck: l('十道题看你是烟闪雷火勤务长还是 Mirage 论文答辩人。', 'Ten questions to find your CS2 economy-and-utility identity.', '10問でCS2の経済・投げ物タイプを診断。', '10문항으로 CS2 경제와 유틸 유형을 확인하세요.'),
      description: l('从 eco、force buy、道具、残局到报点习惯，测出你在服务器里的经典身份。', 'From eco calls and force buys to utility and clutch habits, this quiz gives you a recognizable server identity.', 'eco、force buy、投げ物、クラッチ、報告癖からサーバー内タイプを出します。', 'eco, 강제 구매, 유틸, 클러치, 브리핑 습관으로 서버 안의 유형을 보여줍니다.'),
      seoTitle: l('CS2 人格测试 | 你是哪种 Counter-Strike 玩家？', 'CS2 Personality Quiz | What Counter-Strike Player Are You?', 'CS2 性格診断 | あなたはどのCounter-Strikeプレイヤー？', 'CS2 성격 테스트 | 당신은 어떤 카스 유저인가요?'),
      seoDescription: l('免费 CS2 玩家类型测试，测出你是 eco 经济学家、道具圣人、AWP 自尊保护者还是 Mirage 哲学家。', 'Take a free CS2 player type quiz and discover whether you are the eco economist, utility saint, AWP ego guardian, or Mirage philosopher.', '無料CS2診断。eco経済学者、投げ物聖人、AWP自尊心守護者、Mirage哲学者を判定。', '무료 CS2 유저 유형 테스트. eco 경제학자, 유틸 성자, AWP 자존심 수호자, Mirage 철학자 중 어디인지 확인하세요.'),
      keywords: {
        zh: ['CS2人格测试', '反恐精英玩家类型', 'Counter-Strike 2 quiz', 'CS2位置测试'],
        en: ['CS2 personality quiz', 'Counter-Strike player type', 'CS2 role quiz', 'what CS2 player are you'],
        ja: ['CS2 性格診断', 'Counter-Strike プレイヤータイプ', 'CS2 ロール診断'],
        ko: ['CS2 성격 테스트', '카운터 스트라이크 플레이어 유형', 'CS2 역할 테스트'],
      },
      accent: 'secondary',
      popularity: l('Steam 当前玩家第一梯队，Twitch 电竞观看强势。', 'Top Steam concurrency and elite Twitch esports attention.', 'Steam同接上位、Twitch競技シーンも強い。', 'Steam 동접 최상위권, Twitch e스포츠 관심도 강함.'),
      results: [
        {
          id: 'planner',
          title: l('Eco 回合经济学家', 'The Eco Round Economist', 'Ecoラウンド経済学者', '에코 라운드 경제학자'),
          badge: l('存钱也是战术', 'Saving is strategy', '節約も戦術', '세이브도 전략'),
          description: l('你看见的不是手枪局，是未来三回合的财政预算。队友想强起，你已经开始算失败概率。', 'You do not see a pistol round. You see a three-round budget forecast. When teammates force buy, your spreadsheet flinches.', 'ピストルラウンドではなく3ラウンド先の予算表を見ています。強制購入を見ると表計算が震えます。', '권총 라운드가 아니라 3라운드 예산표를 봅니다. 팀원이 강제 구매하면 스프레드시트가 흔들립니다.'),
          traits: traits(['会劝人 save', '买甲比买梦重要', '输赢先看经济'], ['Saves without shame', 'Armor before dreams', 'Reads economy first'], ['saveを恥じない', '夢よりアーマー', 'まず経済を見る'], ['세이브에 부끄러움 없음', '꿈보다 방탄복', '경제부터 봄']),
        },
        {
          id: 'carry',
          title: l('AWP 自尊保护者', 'The AWP Ego Guardian', 'AWP自尊心守護者', 'AWP 자존심 수호자'),
          badge: l('枪一响，尊严到账', 'One shot, dignity restored', '一発で尊厳回復', '한 발에 존엄 회복'),
          description: l('你不是爱起狙，你是相信世界需要一个能把中门讲清楚的人。空枪只是宇宙延迟。', 'You do not merely buy the AWP. You believe the world needs someone to explain mid control with a single shot. Misses are cosmic lag.', 'AWPを買うのではなく、一発でmidを説明する係です。外したら宇宙の遅延。', 'AWP를 사는 게 아니라 한 발로 미드를 설명하는 사람입니다. 빗나감은 우주의 지연입니다.'),
          traits: traits(['残局想英雄', '喜欢架最危险的角', '空枪后沉默三秒'], ['Wants hero clutches', 'Holds dangerous angles', 'Silent three seconds after a whiff'], ['英雄クラッチを狙う', '危険な角を張る', '外すと3秒無言'], ['영웅 클러치를 원함', '위험한 각을 잡음', '빗나가면 3초 침묵']),
        },
        {
          id: 'support',
          title: l('道具圣人', 'The Utility Saint', '投げ物聖人', '유틸 성자'),
          badge: l('烟闪雷火全勤', 'Smoke-flash-molly complete', '煙フラモリ完備', '연막 섬광 화염 완비'),
          description: l('别人上分靠枪，你靠把敌人变成盲人和烤肉。你的击杀数不一定高，但没有你大家都像裸奔。', 'Others climb with aim. You climb by turning enemies blind or crispy. Your kill count may be modest; your absence is immediately obvious.', 'エイムではなく敵を盲目か焼き物にして勝つ人。キル数は控えめでも、いないと全員むき出し。', '남들은 에임으로 올리고 당신은 적을 장님이나 구이로 만듭니다. 킬은 적어도 없으면 바로 티 납니다.'),
          traits: traits(['会背投掷物', '进点先交闪', '最讨厌白给烟'], ['Knows lineups', 'Flashes before entry', 'Despises wasted smokes'], ['投げ物を覚える', 'エントリー前にフラッシュ', '無駄煙が嫌い'], ['라인업을 외움', '진입 전 섬광', '낭비 연막 싫어함']),
        },
        {
          id: 'chaos',
          title: l('Mirage 哲学家', 'The Mirage Philosopher', 'Mirage哲学者', 'Mirage 철학자'),
          badge: l('A 点 B 点都像人生', 'A and B are both life', 'AもBも人生', 'A와 B 모두 인생'),
          description: l('你每次死在同一个位置，却每次都能讲出不同道理。战术可以输，赛后论文必须赢。', 'You die in the same place and produce a different theory every time. The round may be lost; the post-round essay must win.', '同じ場所で死んでも毎回違う理論が出ます。ラウンドは負けても反省文は勝つ。', '같은 곳에서 죽어도 매번 다른 이론이 나옵니다. 라운드는 져도 사후 논문은 이겨야 합니다.'),
          traits: traits(['热爱复盘', '嘴上说随便其实很在意', '地图理解像玄学'], ['Loves postmortems', 'Says “whatever” and cares deeply', 'Map reads become metaphysics'], ['反省会が好き', 'どうでもいいと言いつつ気にする', 'マップ理解が形而上学'], ['복기를 사랑함', '상관없다며 매우 신경 씀', '맵 이해가 철학적']),
        },
      ],
    },
    [
      {id: 'cs2-q1', text: l('队伍连续输了两回合，钱刚好尴尬，你会？', 'You lost two rounds and money is awkward. What now?', '2ラウンド連敗、金が微妙。どうする？', '두 라운드 지고 돈이 애매합니다. 어떻게 하나요?'), options: [option(l('认真劝 eco，下一回合再做人。', 'Call eco and become human next round.', 'ecoを提案して次で人間に戻る。', 'eco 하자고 하고 다음 라운드에 사람 되기.'), 'planner'), option(l('我有感觉，给我起狙。', 'I have a feeling. Buy me the AWP.', '予感がある、AWPをください。', '느낌 왔어요. AWP 주세요.'), 'carry'), option(l('半起可以，但道具要齐。', 'Half-buy, but keep utility clean.', '半買いでも投げ物は整える。', '반강제는 가능, 유틸은 챙김.'), 'support'), option(l('沙鹰一发能改变命运。', 'One Deagle shot can rewrite destiny.', 'Deagle一発で運命は変わる。', '데글 한 발이 운명을 바꿀 수 있음.'), 'chaos')]},
      {id: 'cs2-q2', text: l('你最喜欢哪种赢法？', 'Your favorite way to win?', '好きな勝ち方は？', '가장 좋아하는 승리 방식은?'), options: [option(l('经济滚起来，对面每回合都难受。', 'Economy snowballs until the other side suffers.', '経済を回して相手を苦しめる。', '경제 굴려서 상대를 계속 괴롭힘.'), 'planner'), option(l('残局 1v3，全队安静。', '1v3 clutch, entire team silent.', '1v3クラッチで全員無言。', '1v3 클러치, 팀 전체 침묵.'), 'carry'), option(l('一套道具进点，像排练过。', 'A site hit so clean it looks rehearsed.', '練習済みみたいなセットプレイ。', '연습한 듯한 사이트 진입.'), 'support'), option(l('对面自己怀疑人生。', 'The other team starts questioning life.', '相手が人生を疑う。', '상대가 인생을 의심함.'), 'chaos')]},
      {id: 'cs2-q3', text: l('队友白给首杀，你第一句话是？', 'A teammate donates first blood. Your first line?', '味方が開幕デス。最初の一言は？', '팀원이 첫 킬을 헌납했습니다. 첫마디는?'), options: [option(l('别补枪了，先保枪线。', 'Do not chase trade; hold structure.', 'トレードより形を保とう。', '트레이드보다 구조 유지.'), 'planner'), option(l('没事，我能补回来。', 'It is fine. I can get it back.', '大丈夫、取り返す。', '괜찮아, 내가 복구함.'), 'carry'), option(l('我闪你，别急。', 'I will flash you. Slow down.', 'フラッシュするから急がないで。', '섬광 줄게, 천천히.'), 'support'), option(l('这出生点有风水问题。', 'This spawn has bad feng shui.', 'このスポーンは風水が悪い。', '이 스폰은 풍수가 안 좋음.'), 'chaos')]},
      {id: 'cs2-q4', text: l('你在语音里最常出现的内容是？', 'What do you say most often in voice?', 'VCでよく言うことは？', '보이스에서 자주 하는 말은?'), options: [option(l('钱够不够？下回合怎么买？', 'Do we have money? What is next buy?', '金ある？次どう買う？', '돈 돼? 다음 라운드 구매는?'), 'planner'), option(l('给我架一下，我 peek。', 'Hold me while I peek.', '見てて、peekする。', '봐줘, 내가 peek함.'), 'carry'), option(l('三秒后闪，别看。', 'Flash in three, do not look.', '3秒後フラッシュ、見ないで。', '3초 뒤 섬광, 보지 마.'), 'support'), option(l('他怎么又在那里？', 'Why is he there again?', 'なんでまたそこにいるの？', '왜 또 거기 있어?'), 'chaos')]},
      {id: 'cs2-q5', text: l('赛后你最在意？', 'After the match, what matters most?', '試合後に気になるのは？', '경기 후 가장 신경 쓰는 것은?'), options: [option(l('关键回合是不是买错了。', 'Whether the key buy round was wrong.', '重要ラウンドの購入ミス。', '중요 라운드 구매가 맞았는지.'), 'planner'), option(l('那把 AWP highlight。', 'That AWP highlight.', 'あのAWPハイライト。', '그 AWP 하이라이트.'), 'carry'), option(l('道具有没有一起交。', 'Whether utility was coordinated.', '投げ物が合っていたか。', '유틸을 같이 썼는지.'), 'support'), option(l('谁写一篇这图为什么玄学。', 'Who writes the map-is-haunted essay?', 'このマップがなぜ呪われてるか論文。', '이 맵이 왜 미신인지 논문.'), 'chaos')]},
    ],
  ),
  quiz(
    {
      slug: 'valorant',
      shortTitle: 'VALORANT',
      title: l('无畏契约玩家人格测试', 'VALORANT Player Type Quiz', 'VALORANT プレイヤー診断', '발로란트 플레이어 유형 테스트'),
      genre: l('战术 FPS / 特工执念', 'Tactical FPS / agent identity', 'タクティカルFPS / エージェント性', '전술 FPS / 요원 정체성'),
      deck: l('你是秒锁决斗，还是阵容最后的良心？', 'Are you the instalock duelist or the final conscience of the comp?', '即ピックデュエリストか、構成の最後の良心か。', '즉픽 듀얼리스트인가, 조합의 마지막 양심인가.'),
      description: l('围绕特工、技能、包点、残局和语音协作，生成一个瓦/VAL 圈能秒懂的玩家身份。', 'Agent picks, utility, sites, clutches, and comms decide your VALORANT player identity.', 'エージェント、スキル、サイト、クラッチ、VCからVALORANTタイプを判定します。', '요원, 스킬, 사이트, 클러치, 브리핑으로 발로란트 유형을 보여줍니다.'),
      seoTitle: l('无畏契约人格测试 | 你是哪种 VALORANT 玩家？', 'VALORANT Personality Quiz | Which Agent-Type Player Are You?', 'VALORANT 性格診断 | あなたはどのエージェントタイプ？', '발로란트 성격 테스트 | 당신은 어떤 요원형 유저인가요?'),
      seoDescription: l('免费无畏契约玩家类型测试，测出你是秒锁决斗、道具图书馆、咖啡因指挥还是警长信徒。', 'Take a free VALORANT player type quiz and find out whether you are an instalock duelist, lineup librarian, caffeinated IGL, or Sheriff believer.', '無料VALORANT診断。即ピックデュエリスト、ラインアップ司書、カフェインIGL、シェリフ信者を判定。', '무료 발로란트 유저 유형 테스트. 즉픽 듀얼리스트, 라인업 사서, 카페인 IGL, 셰리프 신자 중 어디인지 확인하세요.'),
      keywords: {
        zh: ['无畏契约人格测试', '瓦罗兰特玩家类型', 'VALORANT特工测试', '你是哪个特工'],
        en: ['VALORANT personality quiz', 'which Valorant agent are you', 'Valorant player type', 'Valorant role quiz'],
        ja: ['VALORANT 性格診断', 'Valorant エージェント診断', 'Valorant プレイヤータイプ'],
        ko: ['발로란트 성격 테스트', '나는 어떤 요원', '발로란트 플레이어 유형', '발로란트 포지션 테스트'],
      },
      accent: 'accent',
      popularity: l('韩国 PC 房与 Twitch 信号都强，角色/定位搜索意图天然存在。', 'Strong Korea PC bang and Twitch signal with natural agent-search intent.', '韓国PCバンとTwitchの信号が強く、エージェント検索意図も自然。', '한국 PC방과 Twitch 신호가 강하고 요원 검색 의도가 자연스럽습니다.'),
      results: [
        {id: 'planner', title: l('咖啡因 IGL', 'The Caffeinated IGL', 'カフェインIGL', '카페인 IGL'), badge: l('五秒给三套方案', 'Three plans in five seconds', '5秒で3案', '5초에 세 계획'), description: l('你不是话多，是队伍没人说话就会原地蒸发。你把回合讲成 PPT，把失败讲成下一回合素材。', 'You are not talkative. The team evaporates when nobody speaks. You turn rounds into slides and losses into next-round material.', '話しすぎではなく、誰も喋らないとチームが消えるだけ。ラウンドを資料化します。', '말이 많은 게 아니라 아무도 말 안 하면 팀이 증발합니다. 라운드를 PPT처럼 정리합니다.'), traits: traits(['报点密度高', '喜欢默认开局', '输完立刻改战术'], ['Dense comms', 'Default setup enjoyer', 'Adjusts instantly after losses'], ['報告密度高め', 'デフォルト配置好き', '負けたら即修正'], ['브리핑 밀도 높음', '디폴트 선호', '지면 바로 전술 수정'])},
        {id: 'carry', title: l('秒锁决斗后悔人', 'The Instalock Duelist With Regrets', '即ピック後悔デュエリスト', '즉픽 후회 듀얼리스트'), badge: l('先锁再忏悔', 'Lock first, repent later', '先ロック後悔', '먼저 픽하고 반성'), description: l('你相信进点要有人先变成新闻。坏消息是那个人经常是你。好消息是偶尔真的很帅。', 'You believe someone must become breaking news on entry. Bad news: it is often you. Good news: sometimes it looks incredible.', 'エントリーには誰かがニュースになる必要がある。悪い知らせ、それはよく自分。良い知らせ、たまに超かっこいい。', '진입에는 누군가 뉴스가 되어야 합니다. 문제는 그게 자주 당신이라는 점. 가끔은 진짜 멋있습니다.'), traits: traits(['进点最快', '死后最会报点', '高光和白给交替出现'], ['Fastest entry', 'Best comms after death', 'Highlights and throws alternate'], ['突入最速', '死後報告がうまい', 'ハイライトと事故が交互'], ['진입 최속', '죽고 나서 브리핑 잘함', '하이라이트와 헌납 반복'])},
        {id: 'support', title: l('道具图书馆', 'The Lineup Librarian', 'ラインアップ司書', '라인업 사서'), badge: l('技能比枪更准', 'Utility sharper than aim', 'エイムよりスキル正確', '총보다 스킬이 정확'), description: l('你脑子里有一座技能档案馆。队友说“随便封个烟”，你已经听到了自己的血压声。', 'Your brain is a utility archive. When someone says “just smoke something,” you can hear your blood pressure rise.', '頭の中はスキル資料館。「適当にスモーク」と言われると血圧が上がる。', '머릿속은 스킬 아카이브. “대충 연막”이라는 말에 혈압이 오릅니다.'), traits: traits(['记 lineups', '补烟补闪补心态', '最怕队友不等技能'], ['Knows lineups', 'Covers smokes, flashes, morale', 'Fears teammates who will not wait'], ['ラインアップ記憶', '煙もフラッシュも心も補う', '待てない味方が怖い'], ['라인업 기억', '연막 섬광 멘탈 보충', '스킬 안 기다리는 팀원 무서움'])},
        {id: 'chaos', title: l('警长信徒', 'The Sheriff Believer', 'シェリフ信者', '셰리프 신자'), badge: l('一发入魂未遂', 'One-tap pending', 'ワンタップ未遂', '원탭 대기 중'), description: l('你经济局的灵魂不在胜率，在那一声清脆的可能性。每次只差一点，每次都值得。', 'Your eco-round soul is not about odds. It is about the crisp possibility of one perfect shot. Always almost. Always worth it.', 'ecoの魂は勝率ではなく、一発の可能性。いつも惜しい、でも価値あり。', 'eco 라운드의 영혼은 확률이 아니라 한 발의 가능성. 늘 아깝고 늘 가치 있음.'), traits: traits(['相信手感', '残局会膨胀', '买不起也要帅'], ['Trusts feel', 'Gets bold in clutches', 'Stylish even broke'], ['感覚を信じる', '残局で膨らむ', '金欠でもかっこよく'], ['감각을 믿음', '클러치에서 커짐', '돈 없어도 멋있게'])},
      ],
    },
    standardQuestions('valorant', l('无畏契约', 'VALORANT', 'VALORANT', '발로란트'), l('包点控制', 'site control', 'サイト管理', '사이트 장악'), l('技能和经济', 'utility and economy', 'スキルと経済', '스킬과 경제')),
  ),
  quiz(
    {
      slug: 'delta-force',
      shortTitle: 'Delta Force',
      title: l('三角洲行动玩家人格测试', 'Delta Force Player Type Quiz', 'Delta Force プレイヤー診断', '델타포스 플레이어 유형 테스트'),
      genre: l('战术射击 / 摸金账本', 'Tactical shooter / extraction ledger', 'タクティカルシューター / 回収帳簿', '전술 슈터 / 익스트랙션 장부'),
      deck: l('看看你是摸金指挥官还是载具观光客。', 'Find out whether you are an extraction commander or vehicle tourist.', '回収指揮官かビークル観光客かを診断。', '익스트랙션 지휘관인지 차량 관광객인지 확인하세요.'),
      description: l('围绕 Warfare、Operations、装备价值、撤离判断和战场沟通设计，适合三角洲热度起来后的第一批内容。', 'Built around Warfare, Operations, gear value, extraction calls, and battlefield comms for the current Delta Force wave.', 'Warfare、Operations、装備価値、撤退判断、戦場VCからタイプを判定します。', 'Warfare, Operations, 장비 가치, 탈출 판단, 전장 브리핑으로 유형을 보여줍니다.'),
      seoTitle: l('三角洲行动人格测试 | 你是哪种 Delta Force 玩家？', 'Delta Force Personality Quiz | What Operator Type Are You?', 'Delta Force 性格診断 | あなたはどのオペレーター？', '델타포스 성격 테스트 | 당신은 어떤 오퍼레이터인가요?'),
      seoDescription: l('免费三角洲行动玩家类型测试，测出你是摸金账本指挥官、载具观光客、仓库价值主义者还是战场段子手。', 'Take a free Delta Force player type quiz and discover your extraction, operator, gear-value, and battlefield identity.', '無料Delta Force診断。回収指揮官、ビークル観光客、倉庫価値主義者、戦場ネタ担当を判定。', '무료 델타포스 유저 유형 테스트. 익스트랙션 지휘관, 차량 관광객, 창고 가치주의자, 전장 예능러를 확인하세요.'),
      keywords: {
        zh: ['三角洲行动人格测试', '三角洲行动玩家类型', 'Delta Force operator quiz', '摸金玩家类型'],
        en: ['Delta Force personality quiz', 'Delta Force operator quiz', 'extraction shooter player type', 'Delta Force player type'],
        ja: ['Delta Force 性格診断', 'Delta Force オペレーター診断', '抽出シューター タイプ'],
        ko: ['델타포스 성격 테스트', '델타포스 오퍼레이터 테스트', '익스트랙션 슈터 유형'],
      },
      accent: 'info',
      popularity: l('Steam/SteamDB 当前并发强，用户点名优先。', 'Strong Steam/SteamDB concurrency and explicitly requested by the user.', 'Steam/SteamDBの同接が強く、ユーザー指定タイトル。', 'Steam/SteamDB 동접이 강하고 사용자가 직접 지목한 게임.'),
      results: [
        {id: 'planner', title: l('摸金账本指挥官', 'The Extraction Spreadsheet Commander', '回収スプレッドシート指揮官', '익스트랙션 스프레드시트 지휘관'), badge: l('撤离前先算 ROI', 'ROI before extract', '撤退前ROI計算', '탈출 전 ROI 계산'), description: l('你不是贪，你是在做资产配置。每个背包格子都要对得起撤离路线。', 'You are not greedy. You are allocating assets. Every backpack slot must justify the extraction route.', '欲張りではなく資産配分。バックパックの各枠に撤退理由が必要です。', '욕심이 아니라 자산 배분입니다. 가방 한 칸도 탈출 루트에 값해야 합니다.'), traits: traits(['撤离路线优先', '会算装备价值', '不被枪声诱惑'], ['Extract route first', 'Calculates gear value', 'Not baited by gunfire'], ['撤退ルート優先', '装備価値を計算', '銃声に釣られない'], ['탈출 루트 우선', '장비 가치 계산', '총소리에 낚이지 않음'])},
        {id: 'carry', title: l('战场突破承包商', 'The Boss-Fight Contractor', 'ボス戦請負人', '보스전 계약자'), badge: l('哪里响去哪里', 'Runs toward thunder', '音のする方へ', '소리 나는 곳으로 감'), description: l('你相信装备是拿来打出新闻的。风险越高，你越觉得这局终于开始了。', 'You believe gear exists to create headlines. The higher the risk, the more the match finally feels alive.', '装備はニュースを作るためにある。リスクが高いほど試合が始まった気がします。', '장비는 뉴스를 만들기 위해 존재합니다. 위험할수록 이제 게임이 시작된 느낌입니다.'), traits: traits(['敢接硬仗', '看见高价值就眼亮', '撤离前还想再打一队'], ['Takes hard fights', 'Eyes light up at high value', 'Wants one more fight before extract'], ['硬い戦闘を受ける', '高価値で目が光る', '撤退前にもう一戦'], ['어려운 싸움 수락', '고가치 보면 눈빛 변함', '탈출 전 한 팀 더'])},
        {id: 'support', title: l('侦察耳机人', 'The Recon Listener', '偵察ヘッドセット係', '정찰 헤드셋 담당'), badge: l('脚步声法官', 'Footstep judge', '足音裁判官', '발소리 판사'), description: l('你用耳朵打游戏。队友还在看箱子，你已经听出隔壁有人在犯错。', 'You play with your ears. While teammates stare at crates, you already hear someone making a mistake next door.', '耳で戦います。味方が箱を見ている間に隣のミスを聞き取ります。', '귀로 게임합니다. 팀원이 상자를 보는 동안 옆방의 실수를 듣습니다.'), traits: traits(['信息洁癖', '喜欢架枪', '撤离时最冷静'], ['Info hygiene', 'Holds angles', 'Calmest at extract'], ['情報潔癖', '角待ちが得意', '撤退時に冷静'], ['정보 깔끔함', '각 잡기 좋아함', '탈출 때 가장 침착'])},
        {id: 'chaos', title: l('载具观光客', 'The Warfare Vehicle Tourist', 'ビークル観光客', '차량 관광객'), badge: l('方向盘改变命运', 'Steering wheel destiny', 'ハンドルで運命変更', '핸들이 운명 바꿈'), description: l('你的战术很简单：先上车，剩下交给地形和运气。输赢另说，节目效果从不迟到。', 'Your tactic is simple: get in the vehicle and let terrain plus luck write the script. Results vary; entertainment arrives on time.', '戦術は単純。乗って、地形と運に脚本を書かせる。結果は別、ネタは確実。', '전술은 단순합니다. 일단 타고 지형과 운에 맡깁니다. 결과는 몰라도 예능은 확실합니다.'), traits: traits(['爱开载具', '经常迷路但很快乐', '把撤离打成公路片'], ['Loves vehicles', 'Gets lost happily', 'Turns extraction into a road movie'], ['乗り物好き', '迷っても楽しい', '撤退がロードムービー'], ['차량 사랑', '길 잃어도 행복', '탈출을 로드무비로 만듦'])},
      ],
    },
    standardQuestions('delta-force', l('三角洲行动', 'Delta Force', 'Delta Force', '델타포스'), l('撤离窗口', 'extraction window', '撤退ウィンドウ', '탈출 창'), l('装备价值', 'gear value', '装備価値', '장비 가치')),
  ),
  quiz(
    {
      slug: 'honor-of-kings',
      shortTitle: 'HoK',
      title: l('王者荣耀玩家人格测试', 'Honor of Kings Player Type Quiz', 'Honor of Kings プレイヤー診断', '왕자영요 플레이어 유형 테스트'),
      genre: l('移动 MOBA / 五排社会学', 'Mobile MOBA / five-stack sociology', 'モバイルMOBA / 5人社会学', '모바일 MOBA / 5인 사회학'),
      deck: l('你是野区税务官，还是团战节庆策划？', 'Are you the jungle tax officer or the teamfight festival planner?', 'ジャングル税務官か集団戦フェス主催者か。', '정글 세무관인가 한타 축제 기획자인가.'),
      description: l('围绕对线、打野经济、推塔、皮肤活动和团战上头瞬间，生成王者玩家身份。', 'Lane pressure, jungle economy, towers, skins, and teamfight chaos decide your Honor of Kings identity.', 'レーン、ジャングル経済、タワー、スキン、集団戦からHoKタイプを判定。', '라인, 정글 경제, 타워, 스킨, 한타로 왕자영요 유형을 보여줍니다.'),
      seoTitle: l('王者荣耀人格测试 | 你是哪种王者玩家？', 'Honor of Kings Personality Quiz | What HoK Player Are You?', 'Honor of Kings 性格診断 | あなたはどのHoKプレイヤー？', '왕자영요 성격 테스트 | 당신은 어떤 유저인가요?'),
      seoDescription: l('免费王者荣耀玩家类型测试，测出你是对线压迫者、野区税务官、家庭群指挥还是团战节庆策划。', 'Take a free Honor of Kings player type quiz and find your lane, jungle, shotcalling, or teamfight identity.', '無料Honor of Kings診断。レーン圧、ジャングル税、指揮、集団戦タイプを判定。', '무료 왕자영요 유저 유형 테스트. 라인 압박, 정글 세금, 지휘, 한타 유형을 확인하세요.'),
      keywords: {
        zh: ['王者荣耀人格测试', '王者玩家类型', '你是哪个英雄', '本命英雄测试'],
        en: ['Honor of Kings personality quiz', 'Honor of Kings player type', 'which Honor of Kings hero are you'],
        ja: ['Honor of Kings 性格診断', 'HoK プレイヤータイプ', 'HoK ヒーロー診断'],
        ko: ['왕자영요 성격 테스트', '왕자영요 플레이어 유형', '모바일 MOBA 유형'],
      },
      accent: 'primary',
      popularity: l('中国移动 MOBA 与电竞现场规模极强，适合作为中文增长锚点。', 'A must-have zh-first mobile MOBA anchor with major esports scale.', '中国モバイルMOBAと競技規模が強い。', '중국 모바일 MOBA와 e스포츠 규모가 강한 성장 앵커.'),
      results: [
        {id: 'planner', title: l('野区经济税务官', 'The Jungle Economy Tax Officer', 'ジャングル経済税務官', '정글 경제 세무관'), badge: l('每一只野都有归属', 'Every camp has an owner', '全キャンプに所有者', '모든 캠프엔 주인이 있음'), description: l('你把野区当账本，把节奏当税法。谁乱吃经济，你心里已经开罚单。', 'You treat jungle as accounting and tempo as tax law. Anyone stealing farm has already received an invisible fine.', 'ジャングルは帳簿、テンポは税法。勝手に食べる人には心の罰金。', '정글은 장부, 템포는 세법. 몰래 먹는 사람에게 이미 마음속 벌금 부과.'), traits: traits(['控资源', '爱看小地图', '节奏感强'], ['Controls resources', 'Lives on minimap', 'Tempo focused'], ['資源管理', 'ミニマップ常駐', 'テンポ重視'], ['자원 관리', '미니맵 상주', '템포 중시'])},
        {id: 'carry', title: l('五分钟对线霸王', 'The Five-Minute Lane Tyrant', '5分レーン覇王', '5분 라인 폭군'), badge: l('塔下也要讲道理', 'Debates under tower', 'タワー下でも圧', '타워 밑에서도 압박'), description: l('你相信线上优势就是最朴素的正义。对面只要露头，你就觉得这是命运递来的邀请函。', 'You believe lane advantage is basic justice. If the opponent shows, destiny has sent an invitation.', 'レーン優位こそ素朴な正義。相手が見えたら運命からの招待状。', '라인 우위는 가장 단순한 정의. 상대가 보이면 운명이 보낸 초대장입니다.'), traits: traits(['爱压线', '敢越塔', '顺风声音变大'], ['Presses lane', 'Tower dives', 'Louder when ahead'], ['押し込み好き', 'タワーダイブ可', '有利で声が大きい'], ['라인 압박', '타워 다이브', '앞서면 목소리 커짐'])},
        {id: 'support', title: l('家庭群指挥官', 'The Family-Chat Shotcaller', '家族チャット指揮官', '가족톡 지휘관'), badge: l('团结比输出难', 'Unity is harder than damage', '火力より団結', '딜보다 단합이 어려움'), description: l('你负责把五个不同人生阶段的人拉回同一波团。你不是辅助，你是移动端关系修复师。', 'You pull five people from five life stages into one teamfight. You are not just support; you are mobile relationship repair.', '5人を同じ集団戦に戻す係。サポートではなく関係修復士。', '다섯 명을 한타로 다시 모으는 사람. 서포터가 아니라 관계 수리공입니다.'), traits: traits(['会劝架', '会补位', '最怕全员各玩各的'], ['De-escalates', 'Fills roles', 'Fears five solo stories'], ['仲裁が得意', '穴埋め可能', '全員別行動が怖い'], ['중재 가능', '포지션 보충', '각자 플레이 무서움'])},
        {id: 'chaos', title: l('团战节庆策划', 'The Teamfight Festival Organizer', '集団戦フェス主催者', '한타 축제 기획자'), badge: l('看见人多就快乐', 'Crowds mean joy', '人が多いほど楽しい', '사람 많으면 행복'), description: l('你的人生信条是：来都来了，不如开一波。胜负很重要，但十个人同屏更重要。', 'Your motto: since everyone is here, start something. Winning matters, but ten people on one screen matters spiritually.', 'せっかく集まったなら始めよう。勝敗も大事、10人同時画面はもっと大事。', '다 모였으면 한 번 열어야 합니다. 승패도 중요하지만 열 명이 한 화면에 있는 게 더 중요합니다.'), traits: traits(['爱开团', '不怕乱', '最会制造名场面'], ['Starts fights', 'Not afraid of chaos', 'Creates memorable moments'], ['開戦好き', '混乱に強い', '名場面製造'], ['한타 열기 좋아함', '혼란에 강함', '명장면 제조'])},
      ],
    },
    standardQuestions('honor-of-kings', l('王者荣耀', 'Honor of Kings', 'Honor of Kings', '왕자영요'), l('兵线和防御塔', 'waves and towers', 'ウェーブとタワー', '웨이브와 타워'), l('经济和团战时机', 'economy and teamfight timing', '経済と集団戦タイミング', '경제와 한타 타이밍')),
  ),
  quiz(
    {
      slug: 'overwatch-2',
      shortTitle: 'Overwatch',
      title: l('守望先锋玩家人格测试', 'Overwatch Player Type Quiz', 'Overwatch プレイヤー診断', '오버워치 플레이어 유형 테스트'),
      genre: l('英雄射击 / 负重心理学', 'Hero shooter / payload psychology', 'ヒーローシューター / ペイロード心理', '히어로 슈터 / 화물 심리학'),
      deck: l('你是推车家长，还是 DPS 主角病？', 'Are you the payload parent or the DPS main character?', 'ペイロード保護者かDPS主人公か。', '화물 보호자인가 DPS 주인공인가.'),
      description: l('围绕坦克、输出、辅助、团战大招和 C9 阴影，测出你的守望队友身份。', 'Tank, damage, support, ult economy, and C9 trauma decide your Overwatch teammate identity.', 'タンク、DPS、サポート、ult管理、C9の記憶から診断します。', '탱커, 딜러, 힐러, 궁극기 경제, C9 기억으로 유형을 보여줍니다.'),
      seoTitle: l('守望先锋人格测试 | 你是哪种 Overwatch 玩家？', 'Overwatch Personality Quiz | What Hero Shooter Player Are You?', 'Overwatch 性格診断 | あなたはどのOWプレイヤー？', '오버워치 성격 테스트 | 당신은 어떤 유저인가요?'),
      seoDescription: l('免费守望先锋玩家类型测试，测出你是推车家长、DPS 主角、坦克情绪吸收器还是大招会计。', 'Take a free Overwatch player type quiz and discover whether you are the payload parent, DPS main character, tank emotion absorber, or ult accountant.', '無料Overwatch診断。ペイロード保護者、DPS主人公、タンク感情吸収係、ult会計を判定。', '무료 오버워치 유저 유형 테스트. 화물 보호자, DPS 주인공, 탱커 감정 흡수기, 궁극기 회계사를 확인하세요.'),
      keywords: {
        zh: ['守望先锋人格测试', 'Overwatch玩家类型', '你是哪个英雄', 'OW角色测试'],
        en: ['Overwatch personality quiz', 'which Overwatch hero are you', 'Overwatch player type', 'Overwatch role quiz'],
        ja: ['Overwatch 性格診断', 'OW プレイヤータイプ', 'Overwatch ヒーロー診断'],
        ko: ['오버워치 성격 테스트', '나는 어떤 영웅', '오버워치 플레이어 유형', '오버워치 역할 테스트'],
      },
      accent: 'secondary',
      popularity: l('Twitch 与韩国 PC 房仍有强存在感，团队职责冲突非常适合测试。', 'Still visible on Twitch and Korea PC bang charts; team-role conflict is quiz gold.', 'Twitchと韓国PCバンで存在感があり、役割衝突が診断向き。', 'Twitch와 한국 PC방 존재감이 있고 역할 갈등이 테스트에 잘 맞습니다.'),
      results: [
        {id: 'planner', title: l('大招经济会计', 'The Ult Economy Accountant', 'Ult経済会計', '궁극기 경제 회계사'), badge: l('别交，下一波', 'Hold for next fight', '次まで温存', '다음 한타까지 아껴'), description: l('你不是扫兴，你只是知道五个大一起按完后，下一波会像裸奔。', 'You are not ruining fun. You just know that spending five ults at once leaves the next fight naked.', '水を差すのではなく、ult5枚吐いた次が裸になると知っている。', '분위기 깨는 게 아니라 궁 다 쓰면 다음 한타가 벌거벗는 걸 압니다.'), traits: traits(['会数大招', '爱喊 regroup', '不信奇迹单开'], ['Counts ults', 'Calls regroup', 'Distrusts solo miracles'], ['ultを数える', 'regroupを言う', '単独奇跡を信じない'], ['궁 카운트', '리그룹 외침', '혼자 기적 불신'])},
        {id: 'carry', title: l('DPS 队内主角', 'The DPS Main Character', 'DPS主人公', 'DPS 주인공'), badge: l('击杀镜头是呼吸权', 'Highlight as oxygen', 'ハイライトが酸素', '하이라이트가 산소'), description: l('你知道目标点很重要，但右上角出现你的名字也很重要。你在输出和自我叙事之间找平衡。', 'You know the objective matters. You also know your name in the kill feed matters. You balance damage with personal mythology.', '目標は大事。でもキルログの自分の名前も大事。火力と自己神話のバランス。', '거점도 중요하지만 킬로그의 내 이름도 중요합니다. 딜과 자기서사의 균형을 잡습니다.'), traits: traits(['高光敏感', '绕后有瘾', '很会说“差一点”'], ['Highlight sensitive', 'Flank habit', 'Says “almost” often'], ['ハイライト敏感', '裏取り癖', '「惜しい」多め'], ['하이라이트 민감', '뒤돌기 중독', '“아깝다” 자주 말함'])},
        {id: 'support', title: l('推车家长', 'The Payload Parent', 'ペイロード保護者', '화물 보호자'), badge: l('车上总得有人', 'Someone must touch', '誰かが触るべき', '누군가는 붙어야 함'), description: l('你像一个在景区数孩子的家长。别人追击、绕后、上头，你负责确认车还在动。', 'You are the parent counting children at a theme park. Everyone chases, flanks, and overheats; you make sure the payload moves.', '遊園地で子供を数える親。皆が追撃してもペイロードを動かす係。', '놀이공원에서 아이 세는 부모. 모두 추격해도 화물이 움직이는지 확인합니다.'), traits: traits(['会补位', '记得目标点', '治疗和情绪都要奶'], ['Fills roles', 'Remembers objective', 'Heals HP and morale'], ['穴埋め可能', '目標を忘れない', 'HPと心を回復'], ['포지션 보충', '목표 기억', '체력과 멘탈 힐'])},
        {id: 'chaos', title: l('C9 阴影收藏家', 'The C9 Trauma Collector', 'C9トラウマ収集家', 'C9 트라우마 수집가'), badge: l('人都在，点没人', 'Team alive, point empty', '皆生存、点は無人', '팀은 살아있고 거점은 비어있음'), description: l('你见过太多“马上赢了”变成“谁没踩点”。从此你对目标点有一种宗教般的警觉。', 'You have seen too many “we won” moments become “who left point?” Now the objective lives rent-free in your soul.', '「勝った」が「誰が離れた？」になる瞬間を見すぎた。目標点が魂に住んでいます。', '“이겼다”가 “누가 거점 안 밟음?”으로 바뀌는 걸 너무 많이 봤습니다. 거점이 영혼에 새겨졌습니다.'), traits: traits(['时刻看点', '笑中带痛', '最怕全员追击'], ['Always checks objective', 'Laughs with pain', 'Fears full-team chases'], ['常に点を見る', '笑いに痛み', '全員追撃が怖い'], ['항상 거점 확인', '웃음 속 통증', '전원 추격 무서움'])},
      ],
    },
    standardQuestions('overwatch-2', l('守望先锋', 'Overwatch', 'Overwatch', '오버워치'), l('目标点', 'the objective', '目標地点', '목표 지점'), l('大招经济', 'ult economy', 'ult経済', '궁극기 경제')),
  ),
  quiz(
    {
      slug: 'pubg-battlegrounds',
      shortTitle: 'PUBG',
      title: l('PUBG 玩家人格测试', 'PUBG Player Type Quiz', 'PUBG プレイヤー診断', '배틀그라운드 플레이어 유형 테스트'),
      genre: l('Battle Royale / 跳伞社会实验', 'Battle royale / parachute sociology', 'バトロワ / 降下社会実験', '배틀로얄 / 낙하 사회실험'),
      deck: l('你是刚枪速通，还是伏地哲学家？', 'Are you the hot-drop speedrunner or prone-circle philosopher?', '激戦区RTAか伏せ哲学者か。', '핫드롭 스피드러너인가 엎드린 철학자인가.'),
      description: l('从跳点、搜物资、转移、蓝圈和决赛圈选择，看你是哪种吃鸡玩家。', 'Drops, loot, rotations, blue zone pain, and final-circle choices reveal your PUBG identity.', '降下、物資、移動、ブルーゾーン、終盤円からPUBGタイプを判定。', '낙하, 파밍, 이동, 블루존, 마지막 자기장으로 배그 유형을 보여줍니다.'),
      seoTitle: l('PUBG 人格测试 | 你是哪种吃鸡玩家？', 'PUBG Personality Quiz | What Battle Royale Player Are You?', 'PUBG 性格診断 | あなたはどのバトロワプレイヤー？', '배그 성격 테스트 | 당신은 어떤 배틀그라운드 유저인가요?'),
      seoDescription: l('免费 PUBG 玩家类型测试，测出你是刚枪速通、物资会计、蓝圈浪漫主义者还是伏地决赛圈哲学家。', 'Take a free PUBG player type quiz and discover whether you are the hot-drop speedrunner, loot accountant, blue-zone romantic, or prone final-circle philosopher.', '無料PUBG診断。激戦区RTA、物資会計、ブルーゾーン浪漫家、伏せ終盤哲学者を判定。', '무료 배그 유저 유형 테스트. 핫드롭 스피드러너, 파밍 회계사, 블루존 낭만주의자, 엎드린 마지막 자기장 철학자를 확인하세요.'),
      keywords: {
        zh: ['PUBG人格测试', '吃鸡玩家类型', '绝地求生性格测试', 'Battle Royale player type'],
        en: ['PUBG personality quiz', 'battle royale player type', 'what PUBG player are you', 'PUBG quiz'],
        ja: ['PUBG 性格診断', 'バトロワ プレイヤータイプ', 'PUBG プレイヤー診断'],
        ko: ['배그 성격 테스트', '배틀그라운드 플레이어 유형', '배그 유저 유형'],
      },
      accent: 'primary',
      popularity: l('Steam 与韩国 PC 房都强，亚洲用户识别度高。', 'Strong Steam and Korea PC bang relevance, especially in Asia.', 'Steamと韓国PCバンで強く、アジア認知度が高い。', 'Steam과 한국 PC방에서 강하고 아시아 인지도가 높습니다.'),
      results: [
        {id: 'planner', title: l('物资会计', 'The Loot Accountant', '物資会計', '파밍 회계사'), badge: l('背包空间即宇宙真理', 'Backpack space is truth', 'バック容量は真理', '가방 공간은 진리'), description: l('你搜的不是房，是库存结构。每一颗子弹、每一个药包都要有生命周期管理。', 'You do not loot houses; you manage inventory architecture. Every bullet and med kit has a lifecycle.', '家を漁るのではなく在庫構造を管理します。弾も回復もライフサイクル管理。', '집을 터는 게 아니라 재고 구조를 관리합니다. 탄과 회복템 모두 수명 관리 대상입니다.'), traits: traits(['搜得干净', '药品配比精确', '转移前必整理'], ['Clean looter', 'Precise meds ratio', 'Sorts before rotation'], ['漁りが綺麗', '回復配分が正確', '移動前に整理'], ['파밍 깔끔', '회복템 비율 정확', '이동 전 정리'])},
        {id: 'carry', title: l('刚枪速通员', 'The Hot Drop Speedrunner', '激戦区RTA勢', '핫드롭 스피드러너'), badge: l('落地即决赛', 'Finals at landing', '降下即決勝', '내리자마자 결승'), description: l('你认为安稳发育是给别人看的。枪声一响，你就像收到了上班通知。', 'You think safe looting is for other people. When shots ring out, you clock in.', '安全な漁りは他人用。銃声が鳴ると出勤です。', '안전 파밍은 남의 이야기. 총소리 나면 출근합니다.'), traits: traits(['爱跳热门点', '落地找枪快', '死得快也不后悔'], ['Hot drops', 'Finds gun fast', 'Dies fast without regret'], ['激戦区好き', '武器探しが速い', '早死にも後悔なし'], ['핫드롭 선호', '총 빨리 찾음', '빨리 죽어도 후회 없음'])},
        {id: 'support', title: l('蓝圈浪漫主义者', 'The Blue Zone Romantic', 'ブルーゾーン浪漫家', '블루존 낭만주의자'), badge: l('救人和跑毒都要体面', 'Dignity in revives and zone runs', '蘇生も移動も品よく', '부활과 자기장 이동도 품격 있게'), description: l('你总是在毒边扶人、丢药、喊“来得及”。你对人类生命和摩托车都有过度信任。', 'You revive at zone edge, drop meds, and say “we have time.” You overtrust both human life and motorcycles.', 'ゾーン際で蘇生し、回復を落とし、「間に合う」と言う。命とバイクを信じすぎ。', '자기장 끝에서 살리고 약 주며 “시간 돼”라고 합니다. 생명과 오토바이를 너무 믿습니다.'), traits: traits(['爱救人', '会分物资', '转移时很忙'], ['Revive-first', 'Shares loot', 'Busy during rotations'], ['蘇生優先', '物資を分ける', '移動中忙しい'], ['부활 우선', '물자 나눔', '이동 중 바쁨'])},
        {id: 'chaos', title: l('伏地决赛圈哲学家', 'The Prone Final Circle Philosopher', '伏せ終盤哲学者', '엎드린 마지막 자기장 철학자'), badge: l('草里也有尊严', 'Dignity in grass', '草むらにも尊厳', '풀숲에도 존엄'), description: l('你不是怂，你是在和地形进行深度交流。决赛圈每一寸草都理解你。', 'You are not scared. You are in deep conversation with terrain. Every blade of final-circle grass understands you.', '臆病ではなく地形と対話中。終盤円の草は全部あなたを理解している。', '겁먹은 게 아니라 지형과 깊은 대화 중입니다. 마지막 자기장의 풀잎은 당신을 이해합니다.'), traits: traits(['耐心很强', '喜欢贴圈边', '一动不动但心跳很快'], ['Patient', 'Loves zone edge', 'Still body, loud heartbeat'], ['忍耐強い', '円端が好き', '体は静止、心拍は速い'], ['인내심 강함', '자기장 끝 선호', '몸은 가만히 심장은 빠름'])},
      ],
    },
    standardQuestions('pubg-battlegrounds', l('PUBG', 'PUBG', 'PUBG', '배틀그라운드'), l('安全区和地形', 'zone and terrain', '安地と地形', '안전구역과 지형'), l('物资和转移窗口', 'loot and rotation timing', '物資と移動タイミング', '물자와 이동 타이밍')),
  ),
  quiz(
    {
      slug: 'apex-legends',
      shortTitle: 'Apex',
      title: l('Apex 英雄玩家人格测试', 'Apex Legends Player Type Quiz', 'Apex Legends プレイヤー診断', '에이펙스 레전드 플레이어 유형 테스트'),
      genre: l('Battle Royale / 机动上头学', 'Battle royale / movement overconfidence', 'バトロワ / 移動技術過信', '배틀로얄 / 무빙 과신학'),
      deck: l('你是跳伞背锅侠还是第三方气象员？', 'Are you the dropmaster blame collector or third-party meteorologist?', 'ジャンプマスター責任者か漁夫気象予報士か。', '점프마스터 책임 수집가인가 제3자 기상캐스터인가.'),
      description: l('从跳点、护甲、转点、标记和劝架本能，看你的 Apex 小队身份。', 'Drops, shields, rotations, pings, and third-party instincts decide your Apex squad identity.', '降下、アーマー、移動、ピン、漁夫本能からApexタイプを判定。', '낙하, 실드, 이동, 핑, 제3자 본능으로 에이펙스 유형을 보여줍니다.'),
      seoTitle: l('Apex 人格测试 | 你是哪种传奇玩家？', 'Apex Legends Personality Quiz | What Legend Player Are You?', 'Apex Legends 性格診断 | あなたはどのレジェンドタイプ？', '에이펙스 성격 테스트 | 당신은 어떤 레전드 유저인가요?'),
      seoDescription: l('免费 Apex 玩家类型测试，测出你是跳伞背锅侠、标记诗人、第三方追风者还是换甲极简主义者。', 'Take a free Apex Legends player type quiz and find out whether you are the dropmaster blame collector, ping poet, third-party storm chaser, or shield-swap minimalist.', '無料Apex診断。ジャンプマスター責任者、ピン詩人、漁夫追跡者、アーマー交換ミニマリストを判定。', '무료 에이펙스 유저 유형 테스트. 점프마스터 책임 수집가, 핑 시인, 제3자 추격자, 실드 스왑 미니멀리스트를 확인하세요.'),
      keywords: {
        zh: ['Apex人格测试', 'Apex玩家类型', '你是哪个传奇', 'Apex Legends quiz'],
        en: ['Apex personality quiz', 'which Apex legend are you', 'Apex player type', 'Apex Legends quiz'],
        ja: ['Apex 性格診断', 'Apex レジェンド診断', 'Apex プレイヤータイプ'],
        ko: ['에이펙스 성격 테스트', '나는 어떤 레전드', '에이펙스 플레이어 유형'],
      },
      accent: 'accent',
      popularity: l('Steam 与 Twitch 均有稳定热度，移动/劝架梗足够强。', 'Stable Steam and Twitch signal with strong movement and third-party culture.', 'SteamとTwitchで安定し、移動技術と漁夫文化が濃い。', 'Steam과 Twitch 신호가 안정적이고 무빙/제3자 문화가 강함.'),
      results: [
        {id: 'planner', title: l('转点天气预报员', 'The Rotation Meteorologist', '移動気象予報士', '로테이션 기상캐스터'), badge: l('圈会说话', 'The ring speaks', 'リングは語る', '링이 말한다'), description: l('你读圈像读天气。别人看枪声，你看下一分钟哪里会变成修罗场。', 'You read ring like weather. Others hear shots; you see where the next minute becomes a disaster zone.', 'リングを天気のように読む。銃声より次の修羅場を見ます。', '링을 날씨처럼 읽습니다. 총소리보다 다음 재난 구역을 봅니다.'), traits: traits(['爱提前转', '地图意识强', '不迷信硬劝'], ['Rotates early', 'Map-aware', 'Distrusts bad third parties'], ['早め移動', 'マップ意識高い', '無理な漁夫を信じない'], ['일찍 이동', '맵 의식 강함', '무리한 제3자 불신'])},
        {id: 'carry', title: l('身法布道者', 'The Movement Tech Evangelist', '移動技術伝道師', '무빙 기술 전도사'), badge: l('滑铲改变人生', 'Slide-jump worldview', 'スライディング人生観', '슬라이딩 인생관'), description: l('你相信操作上限可以治愈一切。哪怕倒地，也要倒得像教学片。', 'You believe mechanical ceiling can heal everything. Even when downed, you want it to look educational.', '操作上限ですべて治ると信じる。倒れても教材のように倒れたい。', '피지컬 한계치가 모든 걸 치료한다고 믿습니다. 눕더라도 강의처럼 눕고 싶습니다.'), traits: traits(['爱练身法', '敢追残血', '高光欲很强'], ['Practices movement', 'Chases cracked enemies', 'Highlight hunger'], ['移動練習好き', '割れた敵を追う', 'ハイライト欲高め'], ['무빙 연습', '피 빠진 적 추격', '하이라이트 욕심'])},
        {id: 'support', title: l('标记系统诗人', 'The Ping System Poet', 'ピン詩人', '핑 시스템 시인'), badge: l('不用麦也很懂', 'Understood without mic', 'マイクなしでも伝わる', '마이크 없어도 통함'), description: l('你能用 ping 写一首小队叙事诗。敌人、物资、撤退、别去，全部有节奏。', 'You can write a squad poem with pings: enemy, loot, retreat, do-not-go-there. Everything has rhythm.', 'ピンだけで部隊叙事詩を書く。敵、物資、撤退、行くな、全部リズムあり。', '핑으로 분대 서사시를 씁니다. 적, 물자, 후퇴, 가지 마, 전부 리듬이 있습니다.'), traits: traits(['信息清楚', '会照顾队友装备', '不吵但存在感强'], ['Clear info', 'Shares gear', 'Quiet but present'], ['情報明快', '装備を分ける', '静かでも存在感'], ['정보 명확', '장비 나눔', '조용하지만 존재감'])},
        {id: 'chaos', title: l('第三方追风者', 'The Third-Party Storm Chaser', '漁夫ストームチェイサー', '제3자 폭풍 추격자'), badge: l('枪声就是导航', 'Gunfire is GPS', '銃声がGPS', '총소리가 GPS'), description: l('你对枪声有候鸟一样的迁徙本能。哪里打得最乱，你的心就往哪里飞。', 'You migrate toward gunfire like a seasonal bird. The messier the fight, the more your heart flies there.', '銃声へ渡り鳥のように向かう。乱れるほど心が飛ぶ。', '총소리를 따라 철새처럼 이동합니다. 싸움이 혼란할수록 마음이 그쪽으로 갑니다.'), traits: traits(['爱劝架', '不怕混乱', '常说“这波能收”'], ['Third-parties often', 'Chaos tolerant', 'Says “we clean this”'], ['漁夫好き', '混乱に強い', '「回収できる」を多用'], ['제3자 선호', '혼란에 강함', '“이거 정리 가능” 자주 말함'])},
      ],
    },
    standardQuestions('apex-legends', l('Apex 英雄', 'Apex Legends', 'Apex Legends', '에이펙스 레전드'), l('安全区和高点', 'ring and high ground', 'リングと高所', '링과 고지대'), l('护甲和转点时机', 'shields and rotation timing', 'アーマーと移動タイミング', '실드와 이동 타이밍')),
  ),
];

const EXTRA_GAME_QUIZZES: GameQuiz[] = [];

export const ALL_GAME_QUIZZES = [...GAME_QUIZZES, ...EXTRA_GAME_QUIZZES].map(enhanceGame);

export const GAME_SLUGS = ALL_GAME_QUIZZES.map((game) => game.slug);

export function isSiteLocale(locale: string): locale is SiteLocale {
  return locale === 'zh' || locale === 'en' || locale === 'ja' || locale === 'ko';
}

export function localize<T>(value: Record<SiteLocale, T>, locale: string): T {
  return value[isSiteLocale(locale) ? locale : 'en'];
}

export function getGameQuiz(slug: string) {
  return ALL_GAME_QUIZZES.find((game) => game.slug === slug);
}
