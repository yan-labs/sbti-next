import type { GameQuizV2 } from './types';

const game: GameQuizV2 = {
  slug: 'overwatch-2',
  title: {
    zh: '守望先锋2',
    en: 'Overwatch 2',
    ja: 'オーバーウォッチ2',
    ko: '오버워치 2',
  },
  deck: {
    zh: '你是哪种OW2玩家？',
    en: 'Which Overwatch hero are you?',
    ja: 'あなたはどんなOW2プレイヤー？',
    ko: '당신은 어떤 오버워치 영웅인가요?',
  },
  description: {
    zh: '30 道题，测出你的守望先锋2玩家类型。一键计算官还是击杀镜头主演？8 种原型、6 维雷达、专属玩家身份码，截图发群用的那种。',
    en: '30 questions about how you actually play — how long you sit on your ult, when you peel off to flank, who you blame after a loss — and you get the hero you already are. Eight heroes across tank, damage and support, a 6-axis playstyle radar and a code you can paste into chat.',
    ja: '30問でOW2プレイヤータイプを診断。ワンクリック計算士からC9トラウマまで8タイプ、6軸レーダー付き。次のマッチ前にシェアしよう。',
    ko: '30문제로 뽑는 오버워치 영웅 테스트. 궁을 얼마나 아끼는지, 언제 뒷치기로 빠지는지, 지고 나서 누구 탓을 하는지까지 보고 아나부터 겐지까지 8명 중 당신이랑 제일 닮은 영웅을 찾아준다. 탱커·딜러·힐러 전부 포함, 6축 플레이 스타일 레이더와 공유용 코드까지.',
  },
  dominantAxes: ['Bond', 'Tempo', 'Mental'] as const,
  archetypes: [
    // ── 1. ana ─────────────────────────────────────────────────────
    {
      slug: 'ana',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '一键计算官',
        en: 'Ana',
        ja: 'ワンクリック計算士',
        ko: '아나',
      },
      oneLiner: {
        zh: '"一键就能解决的事，你干嘛靠手感？"',
        en: '"Nano goes to whoever can end the fight, not whoever asks for it."',
        ja: '"ワンクリックで終わる話を、なんで感覚でやるの？"',
        ko: '"나노는 달라는 사람이 아니라 끝낼 수 있는 사람한테 준다"',
      },
      description: {
        zh: '你脑子里同时挂着五条实时的大招进度条，五个队友现在充到多少你门儿清。但真正的天赋在后面：这一下按下去到底赚不赚，你能在半秒内算完。对面奶妈的纳米大招按晚了三秒？那三秒造成的价值差，你已经算清楚了。你不生气，只是把它归类成"本可避免的损失"，然后重新排队。看到韩国职业战队的大招分配表，你会觉得莫名安心，这不就是天经地义的事吗。',
        en: 'You keep five health bars, two cooldowns and one Nano running in your head at all times, and you decided who deserves it about thirty seconds ago. Not the one spamming for it in voice. The one who can actually close the fight. That\'s the whole job. You hold the sleep dart for eleven seconds because their tank hasn\'t ulted yet; you hold the grenade because somebody is going to get dived and it won\'t be you. You don\'t flame, you don\'t tilt, and you don\'t die out of position, which is exactly why nobody notices you until the game where you aren\'t there. Ana players don\'t get POTG. Ana players get the fight.',
        ja: 'ウルトゲージを5人分、頭の中で常にリアルタイム管理している。誰が何パーセント溜まっているか、いつも分かってる。でも本当の才能はその先にある。「今この一押しが得か損か」を0.5秒で計算し終える。相手のアナがナノを3秒遅れて押した？その3秒で生まれた価値差はもう計算済みだ。怒らない。ただ「防げたはずの損失」に分類して、また次のキューを回す。韓国プロチームのウルト配分表を見ると、妙に安心する。これが本来当たり前のことだったんじゃないかと思って。',
        ko: '머릿속에 체력바 다섯 개, 쿨 두 개, 나노 하나가 항상 떠 있고, 그걸 누구한테 줄지는 이미 30초 전에 정해놨다. 팀보에서 나노 달라고 외치는 사람 말고, 한타를 끝낼 수 있는 사람한테 준다. 그게 일의 전부다. 상대 탱커가 아직 궁을 안 썼으니까 수면총을 11초째 들고 있고, 언젠가 뒤가 뚫릴 걸 아니까 수류탄도 남겨둔다. 욕 안 하고, 틸트 안 오고, 어긋난 자리에서 안 죽는다. 그래서 당신이 없는 판에서만 사람들이 당신을 알아본다. 아나는 최고의 플레이에 안 뽑힌다. 대신 한타를 가져온다.',
      },
      symptoms: [
        {
          zh: '队友喊"大招用了"，你第一反应是"几点按下去的？"',
          en: 'You held the sleep dart for eleven seconds because their tank hadn\'t ulted yet.',
          ja: 'チームメイトが「ウルト使った」と言うと、まず「何パーセントで押したの？」と思う',
          ko: '상대 탱커가 아직 궁을 안 썼다는 이유로 수면총을 11초째 들고 있다',
        },
        {
          zh: '复盘时看的不是击杀数，是"节奏权到底在谁手上"',
          en: 'Someone types "nano me." That\'s usually a reason not to.',
          ja: 'リプレイで確認するのはキル数じゃなくて「主導権を握っていたのは誰か」だ',
          ko: '채팅에 "나노 좀" 치는 사람한테는 보통 안 준다',
        },
        {
          zh: '看到有人在团战外按大招，你沉默五秒。那五秒是在算价值损失。',
          en: 'You know every teammate\'s ult percentage. You just don\'t say it out loud.',
          ja: 'チームファイト外でウルトを押す人を見ると5秒黙る。その5秒は価値損失の計算時間だ。',
          ko: '팀원 다섯 명 궁 퍼센트를 전부 알고 있다. 말만 안 할 뿐이다.',
        },
        {
          zh: '大招满了还是不按，理由是"时机还没到"',
          en: 'Your worst games are the ones where you healed the most, and you can explain why.',
          ja: 'ウルトが溜まっても押さない。「まだそのタイミングじゃない」',
          ko: '힐량이 제일 많이 나온 판이 제일 못한 판이고, 그 이유를 설명할 수 있다',
        },
        {
          zh: '每次输掉，你都能精确说出对面大招价值从哪一分钟开始反超',
          en: 'You\'ve never been in a POTG. You\'ve decided that\'s a compliment.',
          ja: '負けるたびに、相手のウルト価値が何分から上回ったか正確に言える',
          ko: '최고의 플레이에 한 번도 안 뽑혀봤고, 그걸 칭찬으로 받아들이기로 했다',
        },
      ],
      rivalSlug: 'reinhardt',
      bestSquadSlug: 'lucio',
    },

    // ── 2. mercy ─────────────────────────────────────────────────
    {
      slug: 'mercy',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: 'C9阴影策展人',
        en: 'Mercy',
        ja: 'C9トラウマ学芸員',
        ko: '메르시',
      },
      oneLiner: {
        zh: '永远盯着推车点，因为那段历史没法忘',
        en: '14k healing, zero deaths, and chat still found something to say about you',
        ja: 'ペイロードから目を離さない。あの歴史が忘れられないから',
        ko: '힐 1만 4천에 데스 0인데도 채팅에는 또 한 마디가 올라온다',
      },
      description: {
        zh: '你知道C9是什么。不是因为你查过，而是因为你亲身经历过——胜负已定，队友追击到底，推车点空了三十秒，对面回来了。从那以后，"赢了团战就碰车"成了你的游戏信仰。你不是悲观主义者，你只是拥有了其他人还没来得及学会的教训。你会在语音里轻声说："有人在车上吗？"即使你们明显在赢。',
        en: 'You picked the hero everyone calls free, then spent two thousand hours proving the hard part was never the mouse. You\'re tracking five cooldowns, three flank routes and one DPS who has never once looked behind him. Guardian Angel out, damage boost onto the one person actually hitting shots, and the entire time you\'re doing the thing the scoreboard doesn\'t score: staying alive so the team has something to come back to. It does get to you. You remember the exact wording of every "heals?" that arrived while you were mid-rez, usually from someone standing behind a wall. You don\'t type back. You just remember.',
        ja: 'C9が何か、説明されなくても分かる。実際に経験したから。チームファイト制圧、全員が追撃に走り、ペイロードが31秒放置されて、相手が復活してオーバータイムに入った。あの日から「ファイト勝ったらカートに乗れ」が神経系に刻まれた。悲観じゃない、歴史の教訓だ。4人有利の状況でも「誰かカートいる？」と聞いてしまう。',
        ko: '다들 쉽다고 하는 영웅을 골라서, 어려운 건 마우스가 아니었다는 걸 2천 시간 동안 증명하는 중이다. 상대 쿨 다섯 개, 뒷치기 길 세 개, 그리고 뒤를 한 번도 안 돌아보는 딜러 한 명을 동시에 보고 있다. 수호천사로 빠지고, 진짜로 맞히고 있는 한 명한테 딜 강화를 걸고, 그러는 내내 점수판에 안 찍히는 일을 한다. 살아남아서 팀이 돌아올 자리를 남겨두는 일. 그래도 상처는 받는다. 부활 쓰는 중에 날아온 "힐 좀"이라는 문장 하나하나를 다 기억한다. 보통 엄폐물 뒤에 서 있는 사람이 친 거다. 답장은 안 한다. 기억만 한다.',
      },
      symptoms: [
        {
          zh: '胜势时你比输势时更焦虑，因为"赢局最容易被翻"',
          en: '"Heals?" always arrives from the person standing behind a wall.',
          ja: '勝っている時のほうが負けている時より不安になる。逆転はリードしてる側から起きるから',
          ko: '"힐 좀"은 항상 엄폐물 뒤에 서 있는 사람한테서 날아온다',
        },
        {
          zh: '你能说出C9事件的完整经过，包括那场比赛的地图名',
          en: 'You damage boost the one player who is actually hitting shots and quietly hope they notice.',
          ja: '元祖C9インシデントの詳細を、マップ名も含めて語れる',
          ko: '진짜로 잘 맞히는 한 명한테 딜 강화를 걸어두고 알아주기를 조용히 기다린다',
        },
        {
          zh: '团战打完第一件事是看推车进度条，而不是看KDA',
          en: 'You\'ve never been thanked for a rez, and yes, you\'ve counted.',
          ja: 'ファイト後に最初に確認するのはキルフィードじゃなくてペイロードの進捗だ',
          ko: '부활 해주고 고맙다는 말 들어본 적이 없다. 세어봤다.',
        },
        {
          zh: '遇到Sigma大招就立刻想到Sig9，心跳加快',
          en: 'You know your DPS\'s flank route better than he does. You\'ve watched him die on it four times.',
          ja: 'シグマのグラヴィティックフラックスを見るたびにSig9のフラッシュバックで心拍が上がる',
          ko: '우리 딜러 뒷치기 동선을 본인보다 잘 안다. 거기서 네 번 죽는 걸 봤으니까.',
        },
        {
          zh: '游戏结束画面出来前你已经在想"有没有C9的可能"',
          en: 'After a loss you open the scoreboard, look at your own row, and say nothing.',
          ja: '試合が終わる前にC9になるシナリオをシミュレートし終えている',
          ko: '지고 나면 점수판 열어서 본인 기록만 보고 아무 말도 안 한다',
        },
      ],
      rivalSlug: 'dva',
      bestSquadSlug: 'ana',
    },

    // ── 3. lucio ────────────────────────────────────────────────────
    {
      slug: 'lucio',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '蹭车匠人',
        en: 'Lúcio',
        ja: 'カートこすり職人',
        ko: '루시우',
      },
      oneLiner: {
        zh: '"别吵，先蹭"',
        en: '"Speed on, everyone moves, and somehow you\'re the one on the cart again."',
        ja: '"揉める前に、まずこすれ"',
        ko: '"스피드 켜면 팀이 움직인다. 그리고 화물 위엔 또 혼자 서 있다."',
      },
      description: {
        zh: '你不是来打团的，你是来推车的。所以队友还在庆祝击杀的时候，你已经一个人站在车上了。理由很简单，你见过太多次因为没人蹭点而错过加时的惨案。不蹭车，是新手最藏不住的标志。你自己犯过一次这个错，然后当成毕生教训记住了。输了不骂人，只是轻声问一句："刚才怎么没人蹭啊？"',
        en: 'Nobody voted you in charge of the tempo. You just are. Speed out of spawn so the regroup actually happens, swap to heals the second the first shot lands, and while the team argues about who should have peeled, you\'re already standing on the payload with three enemies looking at you. Half of what you do shows up nowhere: the boop that put their tank off the ledge, the eight seconds you stalled alone, the fight that never happened because for once everyone arrived together. You don\'t argue in chat. You wall ride past the argument.',
        ja: 'チームファイトをしに来たわけじゃない。ペイロードを押しに来た。だからチームがキルを喜んでいる間に、もう一人でカートに乗っている。理由は単純だ。誰もこすらなかったせいでオーバータイムを逃す場面を、何度も見てきたから。カートをこすらないことこそ、初心者だとバレる一番の証拠だ。自分も一度その失敗をして、それを一生の教訓にした。負けても怒らない。ただ静かに聞くだけだ。「さっき、なんで誰もこすらなかったの？」',
        ko: '아무도 당신한테 템포를 맡긴 적 없는데, 어쩌다 보면 매번 당신이 잡고 있다. 리스폰에서 스피드 켜서 리그룹을 실제로 성사시키고, 첫 총성 나는 순간 힐로 바꾸고, 팀이 "누가 봐줬어야 했냐"로 싸우는 동안 당신은 이미 화물 위에서 적 셋이랑 눈을 맞추고 있다. 당신이 한 일의 절반은 어디에도 안 찍힌다. 상대 탱커를 낭떠러지로 밀어버린 거, 혼자 8초 버틴 거, 모처럼 다 같이 들어가서 아예 안 열린 한타. 채팅으로는 안 싸운다. 그냥 벽 타고 지나간다.',
      },
      symptoms: [
        {
          zh: '开局第一件事是看推车路线，不是看英雄配置',
          en: 'You speed out of spawn so the regroup actually happens instead of trickling in.',
          ja: '試合前に最初に確認するのはチームコンプじゃなくてペイロードのルートだ',
          ko: '리스폰에서 스피드부터 켠다. 그래야 한 명씩 트리클링 안 하고 리그룹이 진짜로 된다.',
        },
        {
          zh: '团战打到一半，你一个人跑去车上蹭。队友以为你跑路了，其实你在干活。',
          en: 'Your favorite kill this season was a boop, not a shot.',
          ja: 'ファイトの途中で一人カートへ行ってこする。チームメイトは逃げたと思う。本人は仕事してるつもりだ。',
          ko: '이번 시즌 제일 마음에 든 킬이 총이 아니라 밀어서 떨어뜨린 킬이다',
        },
        {
          zh: '"推车diff"是你最常用的赛后总结',
          en: 'You break off mid-fight to touch the point and let everyone assume you ran.',
          ja: '試合後に一番よく打つのは「ペイロード diff」だ',
          ko: '한타 중에 혼자 거점 밟으러 빠진다. 팀은 도망간 줄 안다.',
        },
        {
          zh: '看别人直播时也会对着屏幕喊"蹭啊！"，一局至少三次',
          en: 'Someone is arguing in chat. You\'re on the cart. Those two facts are related.',
          ja: '配信を見ながらでも画面に向かって「こすれ！」と、1試合で最低3回は叫ぶ',
          ko: '채팅에서 싸움이 붙었다. 당신은 화물 위에 있다. 둘은 관련이 있다.',
        },
      ],
      rivalSlug: 'dva',
      bestSquadSlug: 'mercy',
    },

    // ── 4. reinhardt ───────────────────────────────────────────────
    {
      slug: 'reinhardt',
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '嘚瑟语音虫',
        en: 'Reinhardt',
        ja: 'イキりボイスライン虫',
        ko: '라인하르트',
      },
      oneLiner: {
        zh: '"死之前来一句语音，赢了之后再嘚瑟一下"',
        en: '"Shield up, shield down, charge. You have never once regretted the charge."',
        ja: '"死ぬ前に一言、勝ったらイキる"',
        ko: '"방벽 올리고, 내리고, 돌진. 돌진을 후회한 적은 한 번도 없다."',
      },
      description: {
        zh: '暴雪就给了你一个按键，你却把它变成了心理战武器。一句掐点精准的"Hello!"比打字骂五句还伤人。但这还不是全部。击杀之后你会原地停顿一下嘚瑟：跳一下，放个表情，再走向下一个目标。你知道这个动作完全没必要。但你已经验证过好几次，那半秒钟对敌方心态的打击有多大。朋友说你"欠揍"，你管这叫"赛前心理准备"。',
        en: 'The second an enemy shows, you\'re already lining up the charge, and you know how that usually ends because it has ended that way about four hundred times. Doesn\'t matter. Rein is the one hero where being loud is a mechanic: the shield is a promise, the hammer is a conversation, and when the shatter lands the whole lobby hears about it. You take it personally when someone walks in front of your shield. You take it personally when nobody walks behind it either. Everything about you is volume, and roughly half the time the volume is correct.',
        ja: 'ブリザードがくれたのはボタン一つだったのに、あなたはそれを心理戦の武器に変えた。タイミングの合った「Hello!」一言は、チャットでの罵倒5行より効く。でもそれだけじゃない。キルした後、その場で少し止まってイキる。その場ジャンプ一回、エモート一回、それから次のターゲットへ。その動きが完全に不要だってことは分かってる。でもその0.5秒が相手のメンタルに与えるダメージを、あなたはもう何度も確認済みだ。友達は「うざい」と言う。あなたはそれを「試合前の心理準備」と呼ぶ。',
        ko: '적이 보이는 순간 이미 돌진각을 잡고 있다. 그게 보통 어떻게 끝나는지도 안다. 지금까지 한 사백 번쯤 똑같이 끝났으니까. 상관없다. 라인하르트는 시끄러운 게 성능인 유일한 영웅이다. 방벽은 약속이고, 망치는 대화고, 대지 분쇄가 들어가면 로비 전체가 그 얘기를 듣는다. 누가 방벽 앞으로 나가면 기분이 상한다. 아무도 방벽 뒤로 안 와도 기분이 상한다. 당신을 이루는 건 전부 볼륨이고, 그 볼륨이 맞을 때가 대충 절반은 된다.',
      },
      symptoms: [
        {
          zh: '你的"Hello!"是算好的选择，不是手滑',
          en: 'An enemy appears. You\'re lining up the charge before you\'ve decided anything.',
          ja: '「Hello!」は計算された選択だ。指が滑ったことは一度もない',
          ko: '적이 보인다. 아무것도 결정하기 전에 이미 돌진각부터 잡는다.',
        },
        {
          zh: '你会根据局势切换不同的语音和表情动作，你真心相信这是战术',
          en: 'You\'ve pinned somebody into their own spawn door and called it a good trade.',
          ja: '状況に応じてボイスラインもエモートも使い分ける。それが戦術だと本気で思っている',
          ko: '상대 리스폰 문 앞까지 밀어 박아놓고 "이득 봤다"고 친 적 있다',
        },
        {
          zh: '"需要治疗！"是你最频繁使用的社交工具，不是求救信号',
          en: 'The shield isn\'t an ability to you. It\'s a job description.',
          ja: '「回復が必要！」は一番よく使うコミュニケーション手段で、救難信号じゃない',
          ko: '방벽은 당신한테 스킬이 아니라 직업이다',
        },
        {
          zh: '你至少能背出三个英雄的嘲讽语音和嘚瑟动作，还排出了使用时机的优先级',
          en: 'Your team walked in front of the shield again and you said so, at length.',
          ja: '少なくとも3体のヒーローの挑発ボイスとイキりモーションを暗記していて、使いどころのランキングまである',
          ko: '또 방벽 앞으로 나간 팀원한테 한마디 했고, 한마디로 안 끝났다',
        },
        {
          zh: '有人说你"很烦"，你把这解读为"很有效"',
          en: 'One clean shatter and the entire match is forgiven.',
          ja: '「うざい」と言われたら「効いてる」と解釈する',
          ko: '대지 분쇄 한 번 깔끔하게 들어가면 그 판 전체를 용서한다',
        },
        {
          zh: '死亡后两秒内选好下一句语音，复活瞬间要不要嘚瑟一下也想好了',
          en: 'You\'re still holding the shield for people who already left the point.',
          ja: 'デスから2秒で次のボイスラインが決まっていて、復活した瞬間にイキるかどうかまで決めてある',
          ko: '이미 거점에서 빠진 사람들을 위해 아직도 방벽을 들고 서 있다',
        },
      ],
      rivalSlug: 'orisa',
      bestSquadSlug: 'lucio',
    },

    // ── 5. orisa ─────────────────────────────────────────────
    {
      slug: 'orisa',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '坦克抗争队长',
        en: 'Orisa',
        ja: 'タンク抗議隊長',
        ko: '오리사',
      },
      oneLiner: {
        zh: '"我知道。所以我锁了毛加。"',
        en: 'You held the choke for forty seconds, nobody said anything, and that\'s the arrangement',
        ja: '"知ってる。だからもうマウガをロックした。"',
        ko: '혼자 길목 40초 막았고, 아무도 아무 말 안 했고, 원래 그런 거다',
      },
      description: {
        zh: '5v5砍掉了一个坦克位，你就成了唯一的墙。对面喊"坦克diff"，队友也喊"坦克diff"。要是放在以前，你会默默打开数据面板，确认自己承伤全队第一，然后咽下去继续排位。现在不一样了。你看了从四月开始的坦克抗争，你算过当"乖乖挨骂的坦克"到底亏多少。奶妈开始阴阳怪气逼你换英雄，你不换。但你也不再死撑正统坦克了，直接锁毛加，走到没人的角落，跟对面坦克单挑。剩下八个人的4打4，让他们自己想办法。有人问你为什么，你只回一句"我知道"，然后继续做你在做的事。',
        en: 'You\'re the reason the team had anywhere to stand, and you\'ve made peace with the fact that this never shows up in the chat log. You walk in first, you eat the ult that was aimed at your support, you spin the javelin, you fortify, and you come out at 90 HP with the fight already won behind you. Everyone else gets to have opinions about that fight. You were in it. When "tank diff" shows up you don\'t argue, because arguing has never once added a health bar. You queue tank again, and you know exactly why that queue is instant.',
        ja: '5v5になってタンク枠が1つ消えて、気づけば自分が唯一の壁になっていた。相手は「タンクdiff」、チームメイトも「タンクdiff」。前のあなたなら、黙ってスタッツ画面を開いて被ダメージ吸収トップを確認して、そのまま飲み込んでいた。でも今は違う。4月から続くタンク抗議運動を見てきたし、大人しく耐えるタンクがどれだけ損をしているか、もう計算済みだ。サポートがピックに文句を言い出しても、スイッチはしない。かといって「正しい」タンクを律儀に握り続けることもやめた。マウガをロックして、誰もいない場所へ移動し、相手のタンクと1対1をしに行く。残り8人は勝手に4対4をやればいい。なぜかと聞かれたら、答えは一つ。「知ってる」。そして、さっきまでやっていたことを続ける。',
        ko: '팀이 설 자리가 있었던 건 당신 덕분인데, 그게 채팅창에는 절대 안 찍힌다는 것도 이미 받아들였다. 먼저 들어가고, 힐러한테 날아가던 궁을 대신 맞고, 창 돌리고, 버티고, 체력 90 남은 채로 걸어 나온다. 그 사이 뒤에서 한타는 이겨 있다. 다른 사람들은 그 한타에 대해 "의견"을 낼 수 있다. 당신은 그 안에 있었다. 채팅에 "탱커 차이"가 올라와도 반박 안 한다. 반박해서 체력이 늘어난 적이 없으니까. 그냥 다음 판도 탱커로 큐를 돌린다. 그 큐가 왜 바로 잡히는지도 정확히 안다.',
      },
      symptoms: [
        {
          zh: '这局两边又都喊了"坦克diff"，但这次你截的不是数据面板，是聊天记录。',
          en: 'You\'ve eaten an ult aimed at your support and considered it a good use of your body.',
          ja: '今回も両チームから「タンクdiff」と言われた。でも今回スクショしたのはスタッツ画面じゃなくてチャットログだ。',
          ko: '힐러한테 날아가던 궁을 몸으로 대신 맞고 "잘 썼다"고 생각한다',
        },
        {
          zh: '奶妈开始阴阳怪气逼你换人，你不吵，直接打一句"别整这套"，然后锁毛加。',
          en: '"Tank diff" shows up in chat. You keep walking.',
          ja: 'サポートが遠回しにスイッチを迫ってきても言い争わない。「その話はいい」と打って、マウガをロックする。',
          ko: '채팅에 "탱커 차이"가 올라온다. 당신은 그냥 계속 걷는다.',
        },
        {
          zh: '这周你在聊天里打了三次"我知道"，除此之外什么都没多说。',
          en: 'Nobody has ever thanked you for holding a choke and you stopped expecting it seasons ago.',
          ja: '今週だけでチャットに「知ってる」と3回打った。それ以上の意味は一切ない。',
          ko: '길목 막아준 걸로 고맙다는 말 들은 적 없고, 기대하는 건 예전 시즌에 접었다',
        },
        {
          zh: '你能精准说出"正派坦克"和"邪派坦克"的区别，最近还开始故意只选邪派。',
          en: 'Your queue pops instantly and you know exactly what that means about everyone else.',
          ja: '正派タンクと邪派タンクの違いを正確に説明できるし、最近はわざと邪派ばかり選んでいる。',
          ko: '당신 큐는 바로 잡힌다. 그게 나머지 사람들에 대해 무슨 뜻인지도 안다.',
        },
        {
          zh: '毛加喊"我知道"的语音一响，你就想笑。那个笑点只有同类人才懂。',
          en: 'Your best games look boring on the scoreboard and you can explain why.',
          ja: 'マウガの「知ってる」ボイスが鳴るたびに、ちょっと笑ってしまう。その意味が分かるのは同志だけだ。',
          ko: '제일 잘한 판일수록 점수판은 심심하고, 당신은 그 이유를 설명할 수 있다',
        },
      ],
      rivalSlug: 'hanzo',
      bestSquadSlug: 'ana',
    },

    // ── 6. hanzo ────────────────────────────────────────────────────────
    {
      slug: 'hanzo',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: 'DPS主角受害者',
        en: 'Hanzo',
        ja: 'DPS被害者',
        ko: '한조',
      },
      oneLiner: {
        zh: '"输出12000，奶妈不给补血，坦克没挡住"',
        en: '"Top damage, top elims, and the loss is somehow still your fault"',
        ja: '"ダメージ12000、回復なし、守ってもらえず——全部一人でやったグループ作業"',
        ko: '"딜 1등, 킬 1등, 그런데 진 건 또 당신 탓이다"',
      },
      description: {
        zh: '你打得很高，但队友的问题更高。你不是在甩锅，你只是在陈述事实：你的输出数字排全场第一，你的死法都是被夹击，你的大招每次都在最需要的时候充到了，而你的奶妈不是在补血就是在看风景。你相信自己是被最差的随机匹配算法永久标记的那种玩家，每次组到的队友都是倒霉抽奖结果。',
        en: 'You out-damaged the rest of your team combined and your name is still the one in post-game chat. That\'s the Hanzo experience and you signed up knowing. People think he\'s a sniper. He isn\'t, and the ones typing at you have never checked. So you hold the angle, storm arrow the choke, and take the blame for a fight you were never invited to. The wall climb into a one-shot is still the cleanest feeling this game has, and it keeps pulling you back through every round of being everybody\'s default explanation for losing.',
        ja: 'ダメージを出した。それでもチームは負けた。この2つの事実が頭の中で一文になっている。スタッツは12Kダメージとキルトップ——そして、タンクが別の場所にいる間にアナにフランクされての死亡。誰かを責めてるわけじゃない。スコアボードを報告してるだけだ。マッチングアルゴリズムが毎試合、考えられる中で最悪の5人をあなたに当ててくる。データがある。',
        ko: '나머지 팀원 합친 것보다 딜을 많이 넣었는데 경기 끝나고 채팅에 올라오는 건 당신 아이디다. 그게 한조를 고른 대가고, 알면서 골랐다. 사람들은 한조를 저격수로 안다. 저격수가 아닌데, 채팅 치는 쪽은 한 번도 확인해본 적이 없다. 그래서 각 잡고, 길목에 폭풍 화살 박고, 부르지도 않은 한타의 책임을 뒤집어쓴다. 고인물들은 아직도 "겐트위한"이라는 말을 기억하고, 그 네 글자의 마지막이 당신이다. 그래도 벽 타고 올라가서 한 발에 눕히는 감각은 이 게임에서 아직도 제일 깔끔하다.',
      },
      symptoms: [
        {
          zh: '你在死亡后5秒内说出这局输的完整原因，精确到技能层面',
          en: 'You out-damaged the whole team and your name is still the one in post-game chat.',
          ja: 'デスから5秒以内に、スキルレベルまで含めた完全な死因分析が出る',
          ko: '팀 전체보다 딜을 많이 넣었는데 경기 후 채팅에 올라오는 건 당신 아이디다',
        },
        {
          zh: '"DPS diff"是你最常收到的消息，也是你最不认同的消息',
          en: 'Someone called Hanzo a sniper again. You\'ve stopped correcting them.',
          ja: '「DPS diff」は一番よく受け取るメッセージで、一番納得できないメッセージだ',
          ko: '누가 또 한조를 저격수라고 부른다. 이제 정정 안 한다.',
        },
        {
          zh: '输出数字旁边那个金牌图标，从没不亮过。截图你都存了好几张了。',
          en: 'The scoreboard is your closing argument, and nobody reads closing arguments.',
          ja: 'ダメージ数字の横に出る金メダルアイコン。出なかったことが一度もない。スクショはもう何枚も撮ってある。',
          ko: '점수판이 당신의 최후 변론인데, 최후 변론은 아무도 안 읽는다',
        },
        {
          zh: '你每次看到奶妈在攻击敌人而不是补血时，内心都有一小部分死去',
          en: 'You pre-aimed one choke for nine seconds and a single arrow paid for all of it.',
          ja: 'サポートが回復せずに攻撃しているのを見るたびに、ヒーローより先に心の一部が死ぬ',
          ko: '길목 하나에 9초 동안 조준 걸어놨고, 화살 한 발로 그걸 다 회수했다',
        },
        {
          zh: '你在游戏里和游戏外都有充分的证据证明自己被低估',
          en: 'You typed out the full reply, read it back once, and deleted it.',
          ja: 'ゲーム内外で、自分が過小評価されているという証拠がある',
          ko: '답장을 다 쳤다가, 한 번 다시 읽어보고, 지웠다',
        },
      ],
      rivalSlug: 'orisa',
      bestSquadSlug: 'mercy',
    },

    // ── 7. dva ──────────────────────────────────────────────────────
    {
      slug: 'dva',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '绕后僧侣',
        en: 'D.Va',
        ja: 'フランカー僧侶',
        ko: '디바',
      },
      oneLiner: {
        zh: '永远从地图边缘出现，完事就消失',
        en: '"Nerf this." The mech is already a crater and you already feel fine about it.',
        ja: 'マップの端から現れ、2キルして消える。説明なし',
        ko: '"이것도 너프해 보시지." 메카는 이미 크레이터가 됐고, 당신은 벌써 아무렇지 않다.',
      },
      description: {
        zh: '你不在推车，你在创造条件让推车变得可能。你选锋线绕后，选的是几何，不是冲动。那条路线你在训练模式里走过二十遍，你知道什么时候对面支援会回来，你知道那个角度对面支援看不到你。你消失45秒，杀两个，再出现，什么也不说。队友有时候会说你"不推车"，你把这个评价收入档案，继续去找下一个绕路。',
        en: 'You\'ve never apologized for where the mech ends up. Boosters in, Matrix up, and you\'re already past the line your team agreed to hold, hunting the one squishy who assumed the backline was safe tonight. Half of what you do never shows up on the scoreboard: eating an ultimate that was aimed at your healer, boosting a careless flanker clean off a ledge and filing it under map awareness instead of a kill. The other half is timing nobody else gets to touch — you decide when a two-ton mech becomes a bomb, and with Boosters still active you can steer that bomb into a fight from somewhere your team never saw you go. When it detonates wrong, you don\'t sit with it. Ninety seconds later you\'ve called down a fresh mech and you\'re running the same plan. Get knocked down to a pilot and a Light Gun, and you still don\'t fall back — baby D.Va finishes the guy who thought the fight was already over, because retreating was never actually in the kit. Your team keeps asking where the tank went. The tank went to go win this from an angle nobody voted on.',
        ja: 'ペイロードを無視してるわけじゃない。ペイロードが動ける状況を作っている。フランクルートは練習場で20回走った——相手サポートがローテするタイミングも、見えない角度も知ってる。45秒消えて、2キルして、戻る。何も言わない。「カートにいない」と言われることがある。そのコメントをファイルに収めて、次のルートを探しに行く。',
        ko: '메카가 어디까지 가 있든 사과한 적이 없다. 부스터 켜고 매트릭스 들고, 팀이 지키자던 라인은 이미 한참 지나서, 오늘 밤은 뒷라인이 안전하다고 믿은 그 딜러 한 명을 쫓고 있다. 하는 일의 절반은 점수판에 안 찍힌다. 우리 힐러한테 날아가던 궁을 매트릭스로 씹어 먹고, 부주의하게 빠진 적을 부스터로 밀어서 낭떠러지로 보내놓고는 킬이 아니라 지형 숙지라고 부른다. 나머지 절반은 아무도 못 건드리는 타이밍이다. 2톤짜리 메카를 언제 폭탄으로 만들지는 당신이 정하고, 부스터를 켠 채로 그 폭탄을 팀이 전혀 예상 못한 방향에서 조종해 꽂아 넣는다. 잘못 터뜨려도 오래 붙잡고 있지 않는다. 90초 뒤엔 새 메카를 불러다 놓고 똑같은 계획을 또 돌린다. 메카가 터지고 조종사에 라이트 건만 남아도 빠지지 않는다. 끝났다고 생각한 상대를 마저 눕힌다. 후퇴는 원래 이 캐릭터한테 없었던 선택지니까. 팀은 계속 탱커가 어디 갔는지 묻는다. 탱커는 아무도 콜하지 않은 각에서 한타를 이기러 갔다.',
      },
      symptoms: [
        {
          zh: '你在地图里找路的时间比团战的时间更长，这是你的核心优势',
          en: 'You\'ve boosted a full-health support clean off a ledge and logged it as map awareness, not a kill.',
          ja: '戦闘に参加するよりマップの地形を読む時間が長い。それが自分の強みだと受け入れている',
          ko: '풀피 힐러를 부스터로 밀어서 낭떠러지로 보내놓고, 킬이 아니라 지형 숙지라고 부른다',
        },
        {
          zh: '队友叫你"走丢了"，你叫自己"在执行战术"',
          en: 'Defense Matrix has eaten an ultimate meant for your healer, and you\'ve never once brought it up in chat.',
          ja: 'チームメイトは「迷子」と言う。あなたは「フランクを実行中」と言う。',
          ko: '우리 힐러한테 날아가던 궁을 매트릭스로 씹어 먹고, 채팅에는 한 마디도 안 남긴다',
        },
        {
          zh: '你玩Tracer/Genji不是因为帅，是因为他们有最好的绕路工具包',
          en: 'You\'ve detonated mid-flight and steered the wreck into the exact group your team spent ten minutes telling you to avoid.',
          ja: 'トレーサーやゲンジをプレイするのはカッコいいからじゃなく、フランクに最適なキットだから',
          ko: '부스터 켠 채로 자폭해서, 팀이 십 분 내내 피하라던 그 무리 한복판에 정확히 꽂아 넣는다',
        },
        {
          zh: '你会在死亡后立刻想"下一次从另一个方向来"而不是"我怎么死的"',
          en: 'Knocked down to a pilot and a Light Gun, you didn\'t fall back — you finished the guy who assumed you were done.',
          ja: 'デス後の最初の思考は「どうして死んだ」じゃなくて「次は別の角度から」だ',
          ko: '메카 터지고 조종사에 라이트 건만 남아도 안 빠진다. 끝났다고 생각한 상대를 마저 눕힌다',
        },
      ],
      rivalSlug: 'lucio',
      bestSquadSlug: 'genji',
    },

    // ── 8. genji ─────────────────────────────────────────────────
    {
      slug: 'genji',
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
      name: {
        zh: '击杀镜头主演',
        en: 'Genji',
        ja: 'キルカム主演俳優',
        ko: '겐지',
      },
      oneLiner: {
        zh: '右上角名字就是命，POTG才是胜利的真实定义',
        en: '"Blade was up, the play was there, and the POTG had better be yours"',
        ja: '右上の名前こそが命。POTGが勝利の本当の意味だ',
        ko: '"용검 차 있었고, 각 나왔고, 최고의 플레이는 당신 거여야 한다"',
      },
      description: {
        zh: '你不只想赢，你想赢得漂亮，漂亮到游戏给你播放POTG。你不是不在乎结果，你只是更在乎"谁造就了这个结果"。右上角那个名字你记得，你死在谁手里你记得，你已经在脑内预演了下一局的复仇路线。POTG出现你名字的那一刻，比胜利更让你满足。你的截图相册里有至少三张POTG画面，你不打算删。',
        en: 'Before the gate opens you\'re already wall climbing for no reason. That isn\'t a habit, it\'s a statement. Genji is the hero where the highlight and the throw are the same input, and you\'ve been on both ends of it inside one match. Blade goes off, you get three, the lobby says nothing, and you still check the end card to see whose name is on it. When it works there\'s no better feeling in this game. When it doesn\'t, you were "one dash away", and you will be mentioning that. Deflect is the real personality test and you pass it about sixty percent of the time.',
        ja: '勝つことは大事だ。格好よく勝つことはもっと大事だ。POTGが必要なんだ。浅いからじゃない——キルカムの右上の名前が、ゲームの本当の証明書だから。そこにいた、その判断をした、自分はリアルだったと証明される。POTGのアニメーションに自分の名前が出た瞬間が、来た甲斐のある瞬間だ。カメラロールにPOTGのスクリーンショットが3枚以上ある。消す気はない。',
        ko: '문 열리기도 전에 이미 이유 없이 벽을 타고 있다. 습관이 아니라 선언이다. 겐지는 하이라이트랑 트롤이 같은 입력인 영웅이고, 당신은 한 판 안에서 양쪽을 다 해봤다. 용검 켜서 셋 잡으면 로비는 조용하고, 당신은 그래도 끝 화면에서 누구 아이디가 올라갔는지 확인한다. 될 때는 이 게임에 이만한 기분이 없다. 안 될 때는 "질풍참 한 번만 더 있었으면"이고, 그 말은 꼭 한다. 진짜 시험은 튕겨내기고, 합격률은 한 60퍼센트 된다.',
      },
      symptoms: [
        {
          zh: '每局结束时你先看POTG是不是你，再看胜负',
          en: 'You wall climb in the spawn room before the doors open. No reason. Never stopped.',
          ja: '試合の終わりはいつも同じ：まずPOTGが自分か確認、それから勝敗を見る',
          ko: '문 열리기 전 대기실에서 벽부터 탄다. 이유는 없다. 한 번도 안 고쳤다.',
        },
        {
          zh: '你在击杀镜头里出现时会重播三遍，确认"打得好看"',
          en: '"I need healing" is a rhythm, not a request.',
          ja: '相手のキルカムに自分が映ると3回リプレイして「どう見えるか」を確認する',
          ko: '"치료가 필요하다"는 요청이 아니라 리듬이다',
        },
        {
          zh: '你的大招使用时机经常考虑"这个大招能不能进POTG"',
          en: 'Blade got you three and you still checked whose name was on the POTG card.',
          ja: 'ウルトを使うタイミングの判断に「POTGリプレイで映えるか」という考慮が入る',
          ko: '용검으로 셋 잡고도 최고의 플레이에 누구 아이디가 올라갔는지 확인했다',
        },
        {
          zh: '朋友知道你的POTG截图相册比大多数人的假期照片更多',
          en: 'You\'ve deflected a full ult and talked about it for a week.',
          ja: '自分のPOTGスクリーンショットのコレクションは、多くの人の旅行写真より多い',
          ko: '궁을 통째로 튕겨낸 적이 있고, 그 얘기를 일주일 했다',
        },
        {
          zh: '你曾经为了"这局没拿到POTG"感到比输球更遗憾',
          en: 'A dash that doesn\'t reset feels like a personal insult.',
          ja: '試合に負けるよりPOTGを取れなかったことのほうが悔しかったことがある',
          ko: '처치를 못 해서 질풍참이 초기화 안 되면 개인적인 모욕으로 받아들인다',
        },
      ],
      rivalSlug: 'ana',
      bestSquadSlug: 'dva',
    },
  ],
  questions: [
    // ── ANCHOR Q1: Bond (funniest opener) ───────────────────────────────────
    {
      id: 'ow2-a01',
      kind: 'anchor',
      text: {
        zh: '语音频道刚开，队友说"今天随便打打"。你？',
        en: 'Hero select. Two DPS lock instantly, nobody has touched tank or support. You?',
        ja: 'ボイスチャットが始まった。「今日は適当にやるだけ」と言われた。あなたは？',
        ko: '영웅 선택 화면. 딜러 둘이 순식간에 잠겼고 탱커도 힐러도 아무도 안 골랐다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '立刻开始分配站位，"随便"不在你的字典里',
            en: 'Fill whatever is missing and start calling the comp before the gate opens.',
            ja: 'すぐにポジションの割り振りを始める。「適当」は自分の辞書にない。',
            ko: '비는 자리 채우고 문 열리기 전에 조합 콜부터 친다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '"好，但我还是会报点的"',
            en: 'Take support. Somebody has to hold this thing together.',
            ja: '「了解、でも自分はコール続けるけど」',
            ko: '힐러 간다. 누군가는 이걸 붙잡고 있어야 한다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '静音，开打，输了也无所谓',
            en: 'Lock what you actually play. They can build around it.',
            ja: 'ミュートして自分のゲームをする。負けても別に。',
            ko: '원래 하던 거 고른다. 맞추는 건 팀이 하면 된다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '你其实也想随便打，但不好意思先说',
            en: 'You picked before the screen finished loading. Not your problem.',
            ja: 'あなたも気楽にやりたかったけど、言い出す勇気がなかった。',
            ko: '화면 다 뜨기도 전에 이미 골라놨다. 알 바 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q2: Bond ──────────────────────────────────────────────────────
    {
      id: 'ow2-a02',
      kind: 'anchor',
      text: {
        zh: '团战打赢了，队友在庆祝。你第一件事是什么？',
        en: 'You just won a fight 5-0. First thing you do?',
        ja: 'チームファイトを制して、チームメイトが喜んでいる。最初にすることは？',
        ko: '한타를 5대0으로 이겼다. 제일 먼저 하는 건?',
      },
      options: [
        {
          label: {
            zh: '先确认推车进度，庆祝等回程路上再说',
            en: 'Call the regroup and walk everyone onto the objective together.',
            ja: 'まずペイロードの進捗を確認する。お祝いは戻りながらで。',
            ko: '리그룹 콜 치고 다 같이 거점으로 올린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '跟着大家 gg，然后自己去找角度',
            en: 'Say gg, reload, go find your own angle.',
            ja: 'みんなに合わせてggと言い、自分は次の角度を探しに行く。',
            ko: 'gg 한 번 치고, 재장전하고, 혼자 각 보러 간다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
        {
          label: {
            zh: '你已经看完对面死亡计时器，开始催大家推车',
            en: 'You already counted their respawn timers and you\'re herding people onto the cart.',
            ja: '相手のリスポーンタイマーはもう確認済み。みんなをカートに向かわせている。',
            ko: '상대 리스폰 시간은 이미 세놨고, 사람들 화물 쪽으로 몰고 있다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }],
        },
        {
          label: {
            zh: '你不庆祝，你已经在想下一轮对面大招状态',
            en: 'No celebrating. You\'re checking which of their ults survived that.',
            ja: '祝わない。次のファイトに向けた相手のウルト状態を計算している。',
            ko: '축하는 없다. 상대 궁이 뭐가 남았는지 세고 있다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q3: Tempo (funniest zone) ─────────────────────────────────────
    {
      id: 'ow2-a03',
      kind: 'anchor',
      text: {
        zh: '第一波团战还没到，你觉得整个队都太慢了。你会？',
        en: 'The doors are open and nobody has moved out of spawn. You?',
        ja: '最初のチームファイトがまだ来ていないのに、チームが遅すぎると感じている。あなたは？',
        ko: '문은 열렸는데 아무도 리스폰 밖으로 안 나간다. 당신은?',
      },
      options: [
        {
          label: {
            zh: '自己先冲，队友总会跟上的',
            en: 'Already walking main. Someone will follow eventually.',
            ja: '自分から突撃する。チームはそのうちついてくる。',
            ko: '이미 정문 쪽으로 걸어가고 있다. 누군가는 따라온다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等大招充到 80%，再说开团',
            en: 'Wait until your ult is nearly there before you even look at them.',
            ja: 'ウルトが80%に達するまでエンゲージは考えない。',
            ko: '궁이 거의 찰 때까지는 상대를 쳐다보지도 않는다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '在语音里说"推一推"，但自己没动',
            en: 'Say "push" on voice. Don\'t move.',
            ja: 'ボイスで「押そう」と言うが、自分は動かない。',
            ko: '팀보로 "푸쉬"만 친다. 몸은 그대로다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经开大招了，原因是"手感到了"',
            en: 'Ult is already gone. The angle was there.',
            ja: 'もうウルトを使った。理由：「なんとなくそのタイミングだと思って」',
            ko: '궁은 이미 썼다. 각이 나왔으니까.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q4: Tempo ─────────────────────────────────────────────────────
    {
      id: 'ow2-a04',
      kind: 'anchor',
      text: {
        zh: '推车还差 5 米到终点，对面在重生中。你的节奏是？',
        en: 'Cart is five meters from the checkpoint and their team is respawning.',
        ja: 'ペイロードがゴールまで5メートル、相手はリスポーン中。どう動く？',
        ko: '화물이 경유지 5미터 앞이고 상대는 리스폰 중이다.',
      },
      options: [
        {
          label: {
            zh: '全速推，在他们回来之前结束',
            en: 'Full send. Finish it before they walk back.',
            ja: '全速で押す。戻ってくる前に終わらせる。',
            ko: '그냥 민다. 걸어오기 전에 끝낸다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '先建好防线，等大招再做最后一推',
            en: 'Set the hold first, push once ults are back.',
            ja: '防衛ラインを整えてから、ウルトが溜まったら最後の一押しをする。',
            ko: '자리부터 잡고, 궁 차면 그때 민다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '你早就在车上了，一直在车上',
            en: 'You never got off the cart. You have been pushing this whole time.',
            ja: 'ずっとカートにいた。最初からいた。',
            ko: '화물에서 내려온 적이 없다. 계속 밀고 있었다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '计算一下复活时间，告诉大家还有 10 秒，等等',
            en: 'Count the respawn out loud: "ten seconds, hold."',
            ja: 'リスポーンタイムを計算して「あと10秒待って」と全員に伝える。',
            ko: '"10초, 버텨"라고 말하면서 리스폰 시간을 센다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q5: Mental ────────────────────────────────────────────────────
    {
      id: 'ow2-a05',
      kind: 'anchor',
      text: {
        zh: '奶妈上局没给你纳米，你死了，这局你还好吗？',
        en: 'Your support let you die in the last fight. How is the next round going?',
        ja: 'アナが前のラウンドでナノを使ってくれなくて、あなたは死んだ。今ラウンドは大丈夫？',
        ko: '직전 한타에서 힐이 안 와서 죽었다. 다음 라운드는 어떤가?',
      },
      options: [
        {
          label: {
            zh: '完全没影响，该干嘛干嘛',
            en: 'Doesn\'t register. Same plan as before.',
            ja: '全く影響なし。同じプランで動く。',
            ko: '아무렇지도 않다. 하던 대로 한다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '有点难受，但你会憋着不说',
            en: 'It stings. You\'re keeping it off voice.',
            ja: '少しショックだけど、自分の中に収める。',
            ko: '기분은 상했다. 팀보로는 안 꺼낸다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '你在语音说了一句"下次注意纳米时机"，语气很平',
            en: 'You said "heals were a bit late there" in the flattest voice you own.',
            ja: '「次はナノのタイミング気をつけて」とボイスで平静に言った。',
            ko: '낼 수 있는 가장 평평한 목소리로 "힐이 좀 늦었어요"라고 했다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '你已经在聊天框里打了一半的"我的奶妈——"，但删掉了',
            en: 'You typed "my support didn\'t—" in match chat and deleted it.',
            ja: 'チャットに「アナが——」と打ちかけて、消した。',
            ko: '채팅에 "우리 힐러가—"까지 쳤다가 지웠다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q6: Mental ────────────────────────────────────────────────────
    {
      id: 'ow2-a06',
      kind: 'anchor',
      text: {
        zh: 'tank diff 出现在聊天框了，而且是你的队友发的。你的反应？',
        en: '"Tank diff" shows up in chat, and it was typed by your own teammate.',
        ja: '「タンクdiff」がチャットに出た。しかも自分のチームメイトから。どう反応する？',
        ko: '채팅에 "탱커 차이"가 올라왔다. 그걸 친 사람이 우리 팀이다.',
      },
      options: [
        {
          label: {
            zh: '打开数据面板，截图承伤第一，存档',
            en: 'Open the scoreboard, screenshot your damage blocked, move on.',
            ja: 'スタッツ画面を開いて、被ダメージ吸収トップのスクリーンショットを撮って保存する。',
            ko: '점수판 열어서 막은 피해량 스샷 찍어두고 넘어간다',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '当场回了一句，字数不多，但精准',
            en: 'You replied. Short, precise, and you meant every word.',
            ja: '短く、しかし的確に返した。',
            ko: '답장했다. 짧고 정확하게, 진심으로.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '没理，但你记住了这个 ID',
            en: 'Said nothing. Wrote the name down in your head.',
            ja: '何も言わなかった。でもIDは覚えた。',
            ko: '아무 말도 안 했다. 아이디만 머리에 적어놨다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '两边都说过 tank diff，你觉得这很正常',
            en: 'Somebody types that in every lobby. It\'s background noise.',
            ja: '両チームから「タンクdiff」が来るのはいつものことだ。それがこのフォーマット。',
            ko: '저 말은 어느 판에서나 누가 친다. 그냥 배경음이다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q7: Nerve ─────────────────────────────────────────────────────
    {
      id: 'ow2-a07',
      kind: 'anchor',
      text: {
        zh: '大招充到了，对面有护盾，胜率六四。你交不交？',
        en: 'Your ult is up, their barriers are up, and you would call it 60-40.',
        ja: 'ウルトが溜まった。相手はシールドあり、勝率は6対4くらい。使う？',
        ko: '궁은 찼고, 상대 방벽은 올라와 있고, 체감 승률은 6대4다.',
      },
      options: [
        {
          label: {
            zh: '不交，等更好的时机，60:40 不够',
            en: 'Hold it. 60-40 isn\'t a green light.',
            ja: '使わない。6対4では足りない。',
            ko: '아낀다. 6대4는 초록불이 아니다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '交了，60:40 够了，不用等',
            en: 'Send it. 60-40 is a good day.',
            ja: '使う。6対4で十分。考えすぎない。',
            ko: '쓴다. 6대4면 잘 나온 거다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '先看看奶妈的大招再决定',
            en: 'Ask what the supports have left, then decide.',
            ja: 'サポートのウルト状況を確認してから判断する。',
            ko: '힐러 궁이 뭐가 남았는지 물어보고 정한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '已经交了，分析是后来的事',
            en: 'Already used it. The replay can explain it later.',
            ja: 'もう使った。分析はその後でいい。',
            ko: '이미 썼다. 복기는 나중에 한다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q8: Nerve ─────────────────────────────────────────────────────
    {
      id: 'ow2-a08',
      kind: 'anchor',
      text: {
        zh: 'ECO 轮，你有 200 血，对面站在控制点。赌还是不赌？',
        en: '200 HP left, an enemy is standing on the point, the timer is bleeding out.',
        ja: 'リソースが少なく、HP200、敵がポイントにいる。コンテストする？それとも下がる？',
        ko: '체력 200에 상대는 거점 위에 있고 시간은 계속 깎인다.',
      },
      options: [
        {
          label: {
            zh: '赌，能拖一秒是一秒',
            en: 'Walk in and touch it. One more second is one more second.',
            ja: '行く。1秒でも稼ぐ。',
            ko: '들어가서 밟는다. 1초라도 벌면 번 거다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '退，保命留大招打下一波',
            en: 'Back off, keep the ult, open the next fight properly.',
            ja: '下がる。次のウルトのために生き残る。',
            ko: '빠진다. 궁 들고 다음 한타를 제대로 연다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '算一下时间差——赌的',
            en: 'Ran the numbers. Still contesting.',
            ja: '計算した——行く。',
            ko: '계산해봤다. 그래도 밟으러 간다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '退，不是因为怕，是因为不划算',
            en: 'Back off. Not fear, just bad math.',
            ja: '下がる。怖いからじゃない、割に合わないから。',
            ko: '빠진다. 무서워서가 아니라 계산이 안 나와서.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q9: Intel ─────────────────────────────────────────────────────
    {
      id: 'ow2-a09',
      kind: 'anchor',
      text: {
        zh: '复盘界面你最先看哪个数字？',
        en: 'Scoreboard after the match. Which line do you read first?',
        ja: '試合後のスタッツ画面が開いた。最初に見る数字は？',
        ko: '경기 끝나고 점수판. 제일 먼저 보는 줄은?',
      },
      options: [
        {
          label: {
            zh: '大招充能时间——交换效率从这里看',
            en: 'Ult charge and ult usage. That\'s where the fights were decided.',
            ja: 'ウルト充電時間。交換効率はここから分かる。',
            ko: '궁 충전이랑 궁 사용. 한타는 거기서 갈렸다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '我的输出数字，先看金牌图标亮没亮',
            en: 'Your damage. Whether it\'s top of the board.',
            ja: '自分のダメージ数字。まず金メダルが付いてるか確認する。',
            ko: '내 딜량. 1등인지부터 본다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '承伤量——我扛了多少对面的注意力',
            en: 'Damage blocked. How much attention did you actually eat?',
            ja: '被ダメージ量。どれだけ相手の注意を引いたか。',
            ko: '막은 피해량. 내가 어그로를 얼마나 먹었는지.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先不看数字，凭感觉判断这局打得咋样',
            en: 'Numbers later. How did it feel?',
            ja: '数字は後回し。まず感覚的にどうだったか。',
            ko: '숫자는 나중에. 감이 어땠는지가 먼저다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q10: Intel ────────────────────────────────────────────────────
    {
      id: 'ow2-a10',
      kind: 'anchor',
      text: {
        zh: '对面换了英雄，你怎么判断下一波打法？',
        en: 'They swapped to a hitscan the moment you started winning.',
        ja: '相手がヒーローを替えた。次のファイトにどう対応する？',
        ko: '우리가 이기기 시작하니까 상대가 히트스캔으로 바꿨다.',
      },
      options: [
        {
          label: {
            zh: '立刻分析新配置的弱点，推演三种打法',
            en: 'Break down what the new comp can\'t do and line up three answers.',
            ja: '新しいコンプの弱点をすぐ分析して、3つの対応策を考える。',
            ko: '바뀐 조합이 못 하는 걸 정리하고 대응책 세 개를 준비한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '感受一下——直觉会告诉我该怎么打',
            en: 'Play one fight by feel, then decide.',
            ja: 'まず感じる。直感が正解を教えてくれる。',
            ko: '한타 한 번 감으로 해보고 그다음에 정한다',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '看对面这局 timer，判断他们大招进度',
            en: 'Check which ults they burned and estimate their charge.',
            ja: '前のファイトからウルトタイマーを見て、チャージ量を推測する。',
            ko: '상대가 쓴 궁이 뭔지 확인하고 충전량을 추정한다',
          },
          scoring: [{ axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '照着之前的感觉打就好，应变能力比分析强',
            en: 'Nothing changes. Reading it live beats planning it.',
            ja: '前の感覚のまま行く。適応力は分析より強い。',
            ko: '바꿀 거 없다. 현장에서 읽는 게 준비보다 낫다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── ANCHOR Q11: Flair ────────────────────────────────────────────────────
    {
      id: 'ow2-a11',
      kind: 'anchor',
      text: {
        zh: '排位每赢一把攒 15 分，攒够 3000 分买了把金色武器皮肤。属性一点没变，你图啥？',
        en: 'You\'ve been saving competitive points all season and spent them on a gold weapon. Stats unchanged. Why?',
        ja: 'ランク戦で1勝ごとに15ポイント貯めて、3000ポイント貯まったところで金色の武器スキンを買った。ステータスは何も変わらない。なんで買ったの？',
        ko: '경쟁전 점수 한 시즌 내내 모아서 금무기를 샀다. 성능은 하나도 안 변한다. 왜 샀나?',
      },
      options: [
        {
          label: {
            zh: '因为得在击杀镜头里闪一下才有意义',
            en: 'Because it has to flash gold in the killcam.',
            ja: 'キルカムで光って見えないと意味がないから',
            ko: '킬캠에서 금색으로 번쩍여야 인정이니까',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '买都买了，现在想不起来当初为啥要买',
            en: 'You bought it. You genuinely don\'t remember deciding to.',
            ja: '買ったはいいけど、なんで買おうと思ったのかもう思い出せない',
            ko: '사긴 샀는데, 언제 사기로 했는지 기억이 안 난다',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '每把开局前都要掏出来转一圈看看',
            en: 'You spin it once in the hero gallery before every session.',
            ja: '毎試合の開始前に一回武器を回して見る',
            ko: '접속할 때마다 영웅 화면에서 한 바퀴 돌려본다',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '金色和白色伤害一样，纯粹是习惯了',
            en: 'Gold and grey do the same damage. Pure habit at this point.',
            ja: '金色でも白色でもダメージは同じ。もう習慣になっただけだ',
            ko: '금색이든 회색이든 딜은 똑같다. 이제 그냥 습관이다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── ANCHOR Q12: Flair (funniest zone) ───────────────────────────────────
    {
      id: 'ow2-a12',
      kind: 'anchor',
      text: {
        zh: 'Tracer 的 "Hello!" 你按过几次？',
        en: 'How many times have you mashed Tracer\'s "Hello!" in a single match?',
        ja: '一試合でトレーサーの「Hello!」を何回押した？',
        ko: '한 판에서 트레이서 "Hello!"를 몇 번이나 눌러봤나?',
      },
      options: [
        {
          label: {
            zh: '没数过，但是按得很有节奏感',
            en: 'Lost count, but there was definitely a rhythm to it.',
            ja: '数えてないけど、リズムがあった。',
            ko: '세다가 말았다. 근데 박자는 분명히 있었다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '零次，这是在浪费操作',
            en: 'Zero. It\'s a wasted button press.',
            ja: '0回。それはボタンの無駄遣いだ。',
            ko: '0번. 버튼 낭비다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '每次击杀后一次，这是基本礼仪',
            en: 'Once after each kill. That\'s just manners.',
            ja: 'キルごとに1回。それが礼儀というものだ。',
            ko: '킬 낼 때마다 한 번씩. 그 정도는 예의다.',
          },
          scoring: [{ axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不玩 Tracer，嘲讽语音不影响输赢',
            en: 'Don\'t play Tracer. Voice lines don\'t move the scoreboard.',
            ja: 'トレーサーはやらない。ボイスラインは勝敗に関係ない。',
            ko: '트레이서를 안 한다. 대사로 점수판이 바뀌지도 않는다.',
          },
          scoring: [{ axis: 'Flair', delta: -1 }],
        },
      ],
    },

    // ── COMPOUND Q1: Bond + Tempo ─────────────────────────────────────────────
    {
      id: 'ow2-c01',
      kind: 'compound',
      text: {
        zh: '控制点还剩 15 秒，你们人数优势，但队友没人喊。你？',
        en: 'Fifteen seconds left on the point, you have the numbers, nobody is calling anything.',
        ja: 'ポイントまで15秒、数的優位があるのに誰もコールしていない。あなたは？',
        ko: '거점 15초 남았고 인원 우위인데 아무도 콜을 안 한다.',
      },
      options: [
        {
          label: {
            zh: '立刻开语音喊全队压过去',
            en: 'Call everyone forward right now, on voice.',
            ja: 'すぐボイスで全員に突撃を呼びかける。',
            ko: '지금 바로 팀보로 다 같이 들어가자고 친다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '自己先压，边走边等队友',
            en: 'Walk in alone and let them read it.',
            ja: '一人で前へ出て、チームが読んでくれることを期待する。',
            ko: '혼자 먼저 들어간다. 보면 따라오겠지.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '发文字 ping 信号，等大家同步再行动',
            en: 'Ping it and wait until the team is actually synced.',
            ja: 'みんなにピンを打って、同期してから動く。',
            ko: '핑만 찍고 팀이 진짜로 모일 때까지 기다린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '等大招，人数优势不等于大招优势',
            en: 'Wait for ults. A numbers lead isn\'t an ult lead.',
            ja: 'ウルトを待つ。数的優位はウルト優位じゃない。',
            ko: '궁 찰 때까지 기다린다. 인원 우위가 궁 우위는 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q2: Bond + Tempo ─────────────────────────────────────────────
    {
      id: 'ow2-c02',
      kind: 'compound',
      text: {
        zh: '队友在回程路上，推车点快满了。你的行动是？',
        en: 'Teammates are still walking back and the point is nearly capped.',
        ja: 'チームメイトが戻る途中、ペイロードのポイントがほぼ取られそう。どうする？',
        ko: '팀은 아직 걸어오는 중이고 거점은 거의 다 넘어갔다.',
      },
      options: [
        {
          label: {
            zh: '一个人先去撑，叫队友快点',
            en: 'Hold it alone and tell them to hurry.',
            ja: '一人で行って、チームに急ぐよう呼びかける。',
            ko: '혼자 비비면서 빨리 오라고 친다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '等队友集合，集体再推更安全',
            en: 'Wait for them. Going in as one unit is safer.',
            ja: 'チームを待つ。まとまって行く方が安全だ。',
            ko: '기다린다. 같이 들어가는 게 안전하다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Tempo', delta: -1 }],
        },
        {
          label: {
            zh: '已经在车上了，一直没离开',
            en: 'Still on it. You never left.',
            ja: 'まだカートにいる。ずっと離れていなかった。',
            ko: '아직 거점 위에 있다. 내려간 적이 없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: 1 }],
        },
        {
          label: {
            zh: '算了，等下一波大招优势再推',
            en: 'Give it up. Take the next one with an ult lead.',
            ja: 'あきらめる。次のウルト優位でまた押す。',
            ko: '이번 건 버린다. 궁 모아서 다음 한타를 먹는다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Tempo', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q3: Bond + Mental ────────────────────────────────────────────
    {
      id: 'ow2-c03',
      kind: 'compound',
      text: {
        zh: '对面用 Sigma 大招把整个队伍举起来了，C9 警报响起。你？',
        en: 'One enemy ult launches your whole team off the point. This is exactly how a C9 starts.',
        ja: '相手シグマのウルトでチーム全員がポイントから浮いた。C9の危機。あなたは？',
        ko: '상대 궁 한 방에 팀 전체가 거점 밖으로 날아갔다. C9 나는 그림이다.',
      },
      options: [
        {
          label: {
            zh: '立刻呼叫队友回来踩点，声音很大',
            en: 'Yell at everyone to get back on point. Loudly.',
            ja: 'チームに大声でポイントに戻るよう叫ぶ。',
            ko: '다시 거점 밟으라고 팀보에 크게 지른다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '心里骂了三遍 Sig9，但没说出口',
            en: 'The word "C9" crossed your mind three times. You didn\'t say it.',
            ja: '心の中でSig9を3回呪った。声には出さなかった。',
            ko: '머릿속으로 "C9"를 세 번 떠올렸다. 입 밖으론 안 냈다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '落地第一件事：踩点，不管 C9 有多近',
            en: 'Land, step back on. Not today.',
            ja: '着地してすぐポイントを踏む。自分がいる限りC9はない。',
            ko: '착지하자마자 다시 밟는다. 오늘은 아니다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经踩点了，你根本没离开，Sigma 举不动你',
            en: 'You were already on the point. It lifted everyone else.',
            ja: 'すでにポイントにいた。シグマは他のみんなを浮かせた。',
            ko: '당신은 원래 거점 위에 있었다. 날아간 건 나머지다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q4: Bond + Mental ────────────────────────────────────────────
    {
      id: 'ow2-c04',
      kind: 'compound',
      text: {
        zh: '游戏里有人在语音骂队友，你怎么处理？',
        en: 'Someone in voice is flaming the team.',
        ja: 'ボイスチャットで誰かがチームを責めている。どう対処する？',
        ko: '팀보에서 한 명이 계속 팀원 욕을 하고 있다.',
      },
      options: [
        {
          label: {
            zh: '打断他，把话题引回战术',
            en: 'Cut in and steer it back to the next fight.',
            ja: '割り込んで、話を戦術に戻す。',
            ko: '중간에 끊고 다음 한타 얘기로 돌린다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '静音那个人，游戏继续',
            en: 'Mute, keep playing.',
            ja: 'ミュートして続ける。',
            ko: '차단하고 그냥 계속한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '你已经开始跟着骂了，一起骂比较舒服',
            en: 'You join in. Venting together hits different.',
            ja: '一緒に言い始めた。みんなで発散する方がスッキリする。',
            ko: '같이 깐다. 같이 하면 또 다르다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '直接不理，该打打该走走',
            en: 'Ignore it completely and play your own game.',
            ja: '完全に無視する。ただプレイする。',
            ko: '완전히 무시하고 내 게임만 한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q5: Bond + Nerve ─────────────────────────────────────────────
    {
      id: 'ow2-c05',
      kind: 'compound',
      text: {
        zh: '奶妈开始阴阳怪气地逼你换坦克英雄。你怎么办？',
        en: 'Your support starts guilt-tripping you into swapping your tank pick.',
        ja: 'サポートがあなたのタンクピックに難癖をつけて、遠回しにスイッチを迫ってきた。どうする？',
        ko: '힐러가 은근히 압박하면서 탱커 바꾸라고 한다.',
      },
      options: [
        {
          label: {
            zh: '乖乖换了',
            en: 'Swap. Fine.',
            ja: '大人しくスイッチする',
            ko: '바꿔준다. 그러자.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '憋着不吭声，继续正常打坦克',
            en: 'Swallow it and keep tanking in exactly the same way.',
            ja: '黙って飲み込んで、そのままタンクを続ける',
            ko: '삼키고, 하던 그대로 계속 탱킹한다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '锁毛加，拉到无人区跟对面坦克单挑，剩下八个人 4 打 4 自己看着办',
            en: 'Lock the off-meta pick you actually like and go 1v1 their tank in a side lane. The other eight can figure it out.',
            ja: 'マウガをロックして、誰もいない場所で相手タンクと1対1。残り8人は勝手に4対4すればいい',
            ko: '원래 좋아하던 비주류 픽 잡고 옆길에서 상대 탱커랑 1대1 뜬다. 나머지 여덟 명은 알아서 하겠지.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '打一句"我知道"，然后该干嘛干嘛',
            en: 'Type "I know" and keep doing precisely what you were doing.',
            ja: '「知ってる」と打って、さっきまで通りに続ける',
            ko: '"알아"만 치고 하던 걸 정확히 그대로 한다',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q6: Bond + Intel ─────────────────────────────────────────────
    {
      id: 'ow2-c06',
      kind: 'compound',
      text: {
        zh: 'DPS 报点说"对面四个在左侧"。你验证了没？',
        en: 'Your DPS calls "four of them, left side." Do you take it?',
        ja: 'DPSが「左側に4人いる」と報告した。確認せずに信じる？',
        ko: '딜러가 "넷 왼쪽"이라고 콜했다. 그대로 믿나?',
      },
      options: [
        {
          label: {
            zh: '信，马上跟队友一起往左压',
            en: 'Trust it. Rotate left with the team right now.',
            ja: '信じる。すぐチームと一緒に左へ動く。',
            ko: '믿는다. 지금 바로 팀이랑 같이 왼쪽으로 돈다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '先自己扫一眼小地图确认，然后再动',
            en: 'Check the killfeed and the map first, then move.',
            ja: 'まず自分でミニマップを確認する。それから動く。',
            ko: '킬로그랑 맵부터 확인하고 움직인다',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '你已经知道了，你自己看到的，先单独处理',
            en: 'You already saw it yourself. Handling it alone.',
            ja: '自分でもう見ていた。単独で対処する。',
            ko: '이미 본인 눈으로 봤다. 혼자 처리하러 간다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '报点用的是上一轮的信息——先等对面行动，再反应',
            en: 'That call could be five seconds old. Wait until they actually show.',
            ja: 'そのコールは古い可能性がある。相手が動くのを待ってから対応する。',
            ko: '5초 지난 콜일 수도 있다. 실제로 보일 때까지 기다린다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q7: Bond + Flair ─────────────────────────────────────────────
    {
      id: 'ow2-c07',
      kind: 'compound',
      text: {
        zh: '独狼绕后，死在奶妈视线十万八千里外，你已经在走回去的路上了。你还要不要刷屏"需要治疗！"？',
        en: 'You flanked alone, died two rooms from any support, and you\'re already walking back. Do you still spam "I need healing"?',
        ja: '一人でフランクして、サポートの視界のかけらもないところで死んだ。もう歩いて戻ってる途中。それでも「回復が必要！」を連打する？',
        ko: '혼자 뒷치기 갔다가 힐러랑 방 두 개 떨어진 데서 죽었고, 이미 걸어오는 중이다. 그래도 "치료가 필요하다"를 도배할 건가?',
      },
      options: [
        {
          label: {
            zh: '连按三下"需要治疗！"，队友也跟着笑了',
            en: 'Mash it three times. The team laughs, that\'s the point.',
            ja: '「回復が必要！」を3回連打。チームも一緒に笑う',
            ko: '세 번 연타한다. 팀이 웃으면 그걸로 됐다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '自己觉得好笑就一直按，队友什么反应无所谓',
            en: 'Mash it because it\'s funny to you. Doesn\'t matter who hears it.',
            ja: '自分が面白いから連打し続ける。チームの反応はどうでもいい',
            ko: '내가 재밌으니까 연타한다. 누가 듣든 상관없다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '不按了，安静地走回去',
            en: 'Don\'t press it. Walk back quietly.',
            ja: '押さない。静かに歩いて戻る',
            ko: '안 누른다. 조용히 걸어온다.',
          },
          scoring: [{ axis: 'Bond', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '心里想想就算了，没必要表现出来',
            en: 'Think it. Leave it in your head.',
            ja: '心の中で思うだけでいい。わざわざ見せる必要はない',
            ko: '생각만 한다. 머릿속에 두고 만다.',
          },
          scoring: [{ axis: 'Bond', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q8: Tempo + Mental ───────────────────────────────────────────
    {
      id: 'ow2-c08',
      kind: 'compound',
      text: {
        zh: '上局被快攻打崩了，这局你怎么开局？',
        en: 'Last game they ran you down with an early rush. How do you open this one?',
        ja: '前のゲームでアーリーラッシュに崩された。今回はどう開幕する？',
        ko: '지난 판에 초반 러시에 밀렸다. 이번 판은 어떻게 여나?',
      },
      options: [
        {
          label: {
            zh: '换个英雄，先快攻他们一波',
            en: 'Swap and rush them first this time.',
            ja: 'ヒーローを替えて、今回は自分からラッシュする。',
            ko: '픽 바꿔서 이번엔 이쪽이 먼저 들어간다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '上一局的事上一局，这局按套路走',
            en: 'Last game was last game. Play this one straight.',
            ja: '前の試合は前の試合。今回は基本通りに進める。',
            ko: '지난 판은 지난 판이다. 이번 건 정석대로 한다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '等他们先动，你观察节奏再反应',
            en: 'Let them move first. Read the tempo, then answer it.',
            ja: '先に相手に動かせる。リズムを見てから反応する。',
            ko: '상대를 먼저 움직이게 두고, 템포 읽고 받아친다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '还没忘上一局，但已经在计划怎么对付他们',
            en: 'Still thinking about last game, and channeling all of it into the counter-punch.',
            ja: '前の試合はまだ頭にある。でもそれを対策に変えている。',
            ko: '아직 지난 판 생각 중이고, 그걸 전부 되갚을 계획에 쓰고 있다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q9: Tempo + Mental ───────────────────────────────────────────
    {
      id: 'ow2-c09',
      kind: 'compound',
      text: {
        zh: '对面比你们大招多，你们节奏被打乱了。你的判断是？',
        en: 'They have the ult advantage and your team\'s rhythm is gone.',
        ja: '相手はウルトが多く、こちらのリズムが崩れた。どう判断する？',
        ko: '상대가 궁 우위고 우리 템포는 완전히 끊겼다.',
      },
      options: [
        {
          label: {
            zh: '先拖时间，等大招平衡再开团',
            en: 'Stall until ult parity comes back.',
            ja: 'ウルト均衡が戻るまで時間を稼ぐ。',
            ko: '궁 수가 맞춰질 때까지 시간을 끈다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '冲，被动等死不如主动出击',
            en: 'Push anyway. Waiting is just a slower loss.',
            ja: '押す。受け身で待つのは緩やかな死だ。',
            ko: '그래도 들어간다. 기다리는 건 천천히 지는 거다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
        {
          label: {
            zh: '稳住心态，大招多不代表会赢，找时机',
            en: 'Steady up. More ults isn\'t a win. Wait for the opening.',
            ja: '心を落ち着かせる。ウルトが多くても勝てるとは限らない。チャンスを待つ。',
            ko: '멘탈부터 잡는다. 궁 많다고 이기는 거 아니다. 각 나올 때까지 본다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Mental', delta: -1 }],
        },
        {
          label: {
            zh: '已经红温了，冲就完了',
            en: 'Already tilted. Just going in.',
            ja: 'もうカッとなってる。突撃あるのみ。',
            ko: '이미 틸트 왔다. 그냥 박는다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Mental', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q10: Tempo + Nerve ───────────────────────────────────────────
    {
      id: 'ow2-c10',
      kind: 'compound',
      text: {
        zh: '推车差 10 米到终点，时间快到了，大招都还没充好。打不打？',
        en: 'Ten meters from the end, clock nearly gone, no ults on your side. Do you fight?',
        ja: 'ペイロードまで10メートル、時間切れ寸前、ウルトが溜まっていない。戦う？',
        ko: '종점 10미터 앞, 시간은 거의 다 됐고, 우리 쪽은 궁이 없다. 싸울 건가?',
      },
      options: [
        {
          label: {
            zh: '硬冲，10 米不需要大招',
            en: 'Force it. Ten meters doesn\'t need ults.',
            ja: '強引に行く。10メートルにウルトは要らない。',
            ko: '그냥 연다. 10미터는 궁 없이도 된다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '等大招充好，哪怕只剩三秒',
            en: 'Wait for ults even with three seconds left.',
            ja: 'たとえ3秒しかなくてもウルトを待つ。',
            ko: '3초 남아도 궁 찰 때까지 기다린다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '赌一把——大招不在、但手感在',
            en: 'Gamble it. No ults, but the aim is there today.',
            ja: '賭けに出る。ウルトはないが、エイムはある。',
            ko: '지른다. 궁은 없는데 오늘 에임은 살아 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '有多少用多少，能用的先用',
            en: 'Use whatever is charged. Half an ult beats none.',
            ja: 'あるものを全部使う。一部でも使わないよりまし。',
            ko: '찬 것만 쓴다. 반만 찬 궁도 없는 것보단 낫다.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q11: Tempo + Intel ───────────────────────────────────────────
    {
      id: 'ow2-c11',
      kind: 'compound',
      text: {
        zh: '对面的 Tracer 来回骚扰，一直不让你推车。你怎么处理？',
        en: 'An enemy Tracer keeps clipping your back line and stalling the push.',
        ja: '相手のトレーサーが何度もハラスしてきて、ペイロードを押せない。どう対処する？',
        ko: '상대 트레이서가 계속 뒤를 갉아먹으면서 푸쉬를 끊는다.',
      },
      options: [
        {
          label: {
            zh: '分析她的闪现规律，等她出现再打',
            en: 'Track her recall timing and burst her the moment she shows.',
            ja: 'リコールのパターンを把握して、出てきたときに倒す。',
            ko: '시간 역행 타이밍을 세뒀다가 나오는 순간 순삭시킨다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '先推车，不理她，她要死要活随她',
            en: 'Keep pushing. Ignore her completely.',
            ja: '無視してペイロードを押し続ける。',
            ko: '무시하고 계속 민다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '感觉她下一次出现的方向，提前预瞄',
            en: 'Feel where she comes from next and pre-aim it.',
            ja: '次に来る方向を感じとって先にエイムを合わせる。',
            ko: '다음에 어디서 튀어나올지 감으로 잡고 미리 조준해둔다',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '叫奶妈帮忙反报 Tracer 位置，合力清掉',
            en: 'Ask a support to watch the back line and call her.',
            ja: 'サポートにトレーサーの位置をコールしてもらうよう頼む。',
            ko: '힐러한테 뒤 좀 봐달라고, 보이면 콜해달라고 부탁한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q12: Tempo + Flair ───────────────────────────────────────────
    {
      id: 'ow2-c12',
      kind: 'compound',
      text: {
        zh: '你看到了一个绝佳的绕后机会，但队友说"稳住"。你？',
        en: 'You spot a clean flank window and a teammate calls "hold."',
        ja: '完璧なフランクのチャンスを見つけたが、チームメイトが「ホールド」と言った。あなたは？',
        ko: '깔끔한 뒷치기 각이 보이는데 팀원이 "홀드"라고 콜했다.',
      },
      options: [
        {
          label: {
            zh: '冲，这个机会不等人',
            en: 'Go. That window doesn\'t wait for a vote.',
            ja: '行く。このチャンスは待ってくれない。',
            ko: '간다. 이 각은 안 기다려준다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等，队友说了就等',
            en: 'Hold. They called it.',
            ja: '待つ。チームメイトがそう言ったから。',
            ko: '선다. 콜이 나왔으니까.',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '找另一条绕后路，这条不行还有别的',
            en: 'Take a different angle instead. There\'s always another one.',
            ja: '別のフランクルートを探す。必ずある。',
            ko: '대신 다른 각으로 돈다. 각은 항상 또 있다.',
          },
          scoring: [{ axis: 'Tempo', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '跟队友解释这个机会，一起策划更有看头的推进',
            en: 'Explain the angle on voice and talk them into a bigger version of it.',
            ja: 'チームにこの角度を説明して、もっと派手な進め方を一緒に計画する。',
            ko: '팀보로 각을 설명해서 더 크게 가자고 설득한다',
          },
          scoring: [{ axis: 'Tempo', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q13: Mental + Nerve ──────────────────────────────────────────
    {
      id: 'ow2-c13',
      kind: 'compound',
      text: {
        zh: '队伍被打崩了。是继续用正派坦克（温斯顿/查莉娅/西格玛）慢慢输，还是换成邪派坦克（路霸/毛加）搏一个低概率翻盘？',
        en: 'Your team just got run over. Stay on the orthodox tank for a slow, likely loss, or lock the cheese pick and gamble on a low-percentage comeback?',
        ja: 'チームが完全に押し込まれた。正派タンク（ウィンストン/ザリア/シグマ）を維持してゆっくり負けるか、それとも邪派タンク（ロードホッグ/マウガ）に替えて低確率の逆転を狙うか？',
        ko: '한 번에 밀렸다. 정석 탱커로 천천히 질 건가, 아니면 꼼수 픽 잡고 낮은 확률에 걸어볼 건가?',
      },
      options: [
        {
          label: {
            zh: '冷静地换成邪派，这是算过的赌注',
            en: 'Switch to the cheese pick, calmly. It\'s a priced gamble.',
            ja: '冷静に邪派へ切り替える。これは計算済みの賭けだ',
            ko: '차분하게 꼼수 픽으로 바꾼다. 계산된 도박이다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '烦了，直接换路霸',
            en: 'Annoyed. Locking it anyway.',
            ja: 'イライラして、そのままロードホッグに替える',
            ko: '짜증 난다. 그냥 바꾼다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: 1 }],
        },
        {
          label: {
            zh: '正派照打，但心里已经在冒火',
            en: 'Stay orthodox. Seething the entire time.',
            ja: '正派は維持するが、心の中では煮えくり返っている',
            ko: '정석 유지한다. 속으로는 계속 끓는다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Nerve', delta: -1 }],
        },
        {
          label: {
            zh: '继续正派，纯粹是概率问题',
            en: 'Stay orthodox. It\'s probability, not a personal matter.',
            ja: 'そのまま正派を守る。ただの確率の話だ',
            ko: '정석 유지한다. 확률 문제지 감정 문제가 아니다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Nerve', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q14: Mental + Intel ──────────────────────────────────────────
    {
      id: 'ow2-c14',
      kind: 'compound',
      text: {
        zh: '击杀镜头显示你是被 Widowmaker 在角落偷的。你看完之后？',
        en: 'The killcam shows a Widowmaker got you from a corner you never checked.',
        ja: 'キルカムでウィドウメイカーに角から狙われたことが分かった。見た後は？',
        ko: '킬캠을 보니 한 번도 안 봤던 구석에서 위도우한테 맞았다.',
      },
      options: [
        {
          label: {
            zh: '记住那个角度，下次预判',
            en: 'Note the angle. Pre-aim it next time.',
            ja: 'その角度を覚えて、次回は先読みする。',
            ko: '그 각을 기억해둔다. 다음엔 미리 조준해둔다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '有点气，但这局没事了——下局再说',
            en: 'Mildly annoyed. Fix it next round.',
            ja: '少しイラッとした。試合は終わった——次回に対処する。',
            ko: '살짝 짜증 난다. 다음 라운드에 고치면 된다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '反播三遍，确认自己死得好不好看',
            en: 'Watched it three times to see how the death looked.',
            ja: '3回リプレイして、自分の死に様を確認した。',
            ko: '어떻게 죽었는지 보려고 세 번 돌려봤다',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '不看了，凭感觉走，死了就死了',
            en: 'Skip it. Deaths happen. Play the feel.',
            ja: 'スキップ。感覚で動く。死んだら死んだ。',
            ko: '건너뛴다. 죽을 수도 있지. 감으로 간다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q15: Mental + Flair ──────────────────────────────────────────
    {
      id: 'ow2-c15',
      kind: 'compound',
      text: {
        zh: 'POTG 出来了，不是你，是对面的 Genji 大招。你？',
        en: 'POTG is an enemy Genji blade. Not you.',
        ja: 'POTGが流れた。相手のゲンジのドラゴンブレード。自分じゃない。あなたは？',
        ko: '최고의 플레이가 상대 겐지 용검이다. 당신이 아니라.',
      },
      options: [
        {
          label: {
            zh: '真的很好看，承认它',
            en: 'Genuinely sick play. Say so.',
            ja: '本当にかっこよかった。認める。',
            ko: '진짜 잘했다. 인정하고 넘어간다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '有点不甘心，但无所谓，下局再来',
            en: 'Stings for a second. Next game.',
            ja: '少し悔しいけど、まあいい。次だ。',
            ko: '1초 정도 쓰리다. 다음 판 간다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '没感觉，POTG 不影响我的下一局计划',
            en: 'Nothing. POTG doesn\'t change the next plan.',
            ja: '何も感じない。POTGは次の試合計画に影響しない。',
            ko: '아무 생각 없다. 팟지로 다음 판이 바뀌지 않는다.',
          },
          scoring: [{ axis: 'Mental', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '气到想退出，输就算了，还让对面出了 POTG',
            en: 'Done for the night. Lost the game and handed them the POTG.',
            ja: '辞めたい気分。負けた上に相手にPOTGまで献上した。',
            ko: '오늘은 여기까지. 판도 지고 팟지도 갖다 바쳤다.',
          },
          scoring: [{ axis: 'Mental', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q16: Nerve + Intel ───────────────────────────────────────────
    {
      id: 'ow2-c16',
      kind: 'compound',
      text: {
        zh: '对面核心马上要开大招了。是掐着 CD 上安眠飞镖，还是留着生物手雷（禁疗）等他开完大招再砸，还是干脆纳米给自家输出、赌一把？',
        en: 'Their carry is about to ult. Sleep dart on a cooldown read, hold the anti-heal for the moment they commit, or just nano your own DPS and race them?',
        ja: '相手のキャリーがもうすぐウルトを使う。クールタイムを読んでスリープダートを当てるか、バイオティックグレネード（ヒール封じ）を温存してウルト後に投げるか、それとも味方DPSにナノブーストして祈るか？',
        ko: '상대 캐리가 궁을 켜기 직전이다. 쿨 계산해서 수면총을 걸 건가, 상대가 들어온 직후에 쓰려고 수류탄을 들고 있을 건가, 아니면 우리 딜러한테 나노 주고 맞불을 놓을 건가?',
      },
      options: [
        {
          label: {
            zh: '算好 CD，直接上安眠飞镖',
            en: 'Count the cooldown. Line up the sleep.',
            ja: 'クールタイムを計算してスリープダートを当てにいく',
            ko: '쿨을 세고 수면총 각을 잡는다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '一看到大招起手就凭感觉先丢禁疗',
            en: 'The instant the ult flashes, throw the anti-heal on reflex.',
            ja: 'ウルトが見えた瞬間、直感でヒール封じを先に投げる',
            ko: '궁 이펙트 뜨는 순간 반사적으로 수류탄을 던진다',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Intel', delta: 1 }],
        },
        {
          label: {
            zh: '先留着禁疗，等他开完大招再看情况砸',
            en: 'Hold the anti-heal. Watch the trade first, then throw it.',
            ja: 'ヒール封じは温存。ウルトを使わせてから状況を見て投げる',
            ko: '수류탄은 아껴둔다. 교전 붙는 거 보고 나서 던진다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: -1 }],
        },
        {
          label: {
            zh: '干脆给我方输出上纳米，剩下的交给运气',
            en: 'Nano your own DPS and pray.',
            ja: 'とりあえず味方DPSにナノを渡して祈る',
            ko: '우리 딜러한테 나노 주고 기도한다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Intel', delta: 1 }],
        },
      ],
    },
    // ── COMPOUND Q17: Nerve + Flair ───────────────────────────────────────────
    {
      id: 'ow2-c17',
      kind: 'compound',
      text: {
        zh: '你的 Sombra 大招充好了，对面 Ana 和 Lucio 都还剩半血。赌不赌一波？',
        en: 'Your ult is up and both of their supports are sitting at half health.',
        ja: 'ソンブラのウルトが溜まった。相手のアナとルシオは両方半分のHP。今がチャンス？',
        ko: '궁은 찼고 상대 힐러 둘 다 체력이 반이다.',
      },
      options: [
        {
          label: {
            zh: '进——半血奶妈是最好的时机',
            en: 'Go. Half-health supports is the timing.',
            ja: '行く。半分のHPのサポートがチャンスだ。',
            ko: '간다. 힐러 반피가 타이밍이다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '等她们补血后再切——满血比半血更让她们措手不及',
            en: 'Let them top up first. A full-health support is a less alert one.',
            ja: '回復させてから仕掛ける。満タンのサポートは油断している。',
            ko: '풀피 될 때까지 둔다. 풀피 힐러가 더 방심한다.',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '赌，这个画面进 POTG 的可能性很高',
            en: 'Gamble it. This one has a highlight clip in it.',
            ja: '賭ける。これはPOTGになりそうだ。',
            ko: '지른다. 이건 하이라이트 각이다.',
          },
          scoring: [{ axis: 'Nerve', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '先评估一下还有没有更好的入场时机',
            en: 'Check whether there\'s a cleaner entry first.',
            ja: 'より良い入場タイミングがないか先に評価する。',
            ko: '더 깔끔한 진입 각이 있는지부터 본다',
          },
          scoring: [{ axis: 'Nerve', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
    // ── COMPOUND Q18: Intel + Flair (funniest closer) ─────────────────────────
    {
      id: 'ow2-c18',
      kind: 'compound',
      text: {
        zh: '复盘数据说你击杀镜头出现了 7 次，但你没拿到 POTG。你的结论是？',
        en: 'Post-game: you were in seven killcams and still didn\'t get POTG.',
        ja: '試合後のデータ：キルカムに7回映ったのにPOTGを取れなかった。どう結論づける？',
        ko: '경기 끝. 킬캠에 일곱 번 나왔는데 최고의 플레이는 못 먹었다.',
      },
      options: [
        {
          label: {
            zh: '"POTG 算法不公平"——这是唯一合理的解释',
            en: '"The POTG algorithm is broken." Only rational explanation.',
            ja: '「POTGのアルゴリズムがおかしい」。これ以外に合理的な説明がない。',
            ko: '"팟지 알고리즘이 고장 났다." 그거 말고 설명이 안 된다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '数据没问题，POTG 看整体影响，不是单次镜头次数',
            en: 'Checks out. POTG weighs impact, not killcam appearances.',
            ja: 'データに問題はない。POTGは総合的なインパクトを評価する。キルカム回数じゃない。',
            ko: '맞는 결과다. 팟지는 킬캠 횟수가 아니라 영향력을 본다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: -1 }],
        },
        {
          label: {
            zh: '7 次被击杀镜头——证明你一直在前线，不是没贡献',
            en: 'Seven killcams means you were the front line all game. That\'s the contribution.',
            ja: '7回のキルカムはゲーム中ずっと最前線にいた証拠だ。それが貢献だ。',
            ko: '킬캠 일곱 번은 한 판 내내 최전선에 있었다는 뜻이다. 그게 기여다.',
          },
          scoring: [{ axis: 'Intel', delta: -1 }, { axis: 'Flair', delta: 1 }],
        },
        {
          label: {
            zh: '"感觉"今天应该有 POTG，数据只是没有捕捉到精髓',
            en: 'It felt like a POTG game. The stats just missed the point.',
            ja: '今日はPOTGになる「感じ」がした。データがその本質をとらえていない。',
            ko: '느낌은 팟지 각이었다. 숫자가 그걸 못 잡은 거다.',
          },
          scoring: [{ axis: 'Intel', delta: 1 }, { axis: 'Flair', delta: -1 }],
        },
      ],
    },
  ],
};

export default game;
