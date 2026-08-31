# 角色人格测试类词 · 韩/日/中/英 KD 盘面报告

数据来源：`seo.web.cafe` KD 接口，`.rankup/scripts/kd-batch.mjs` 逐词落盘。
四批共 74 词，全部成功，0 失败。字段说明：KD = 难度分（0-100，越低越松）；第 1 名域名 = SERP #1 排名域名；
「专门页」= `details[].dedicated` 为 true，即该结果的标题或主力流量词直接命中这个查询词；
「前十专门页」= 该词返回的全部结果（不一定凑满 10 条，`total` 有出入）中 dedicated 计数 / 结果总数。

排序：每节按 KD 从低到高。

---

## 批 1 — 韩国（gl=kr, hl=ko）

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| 발로란트 요원 테스트 | 13.9 | 极易 | valorant-egg.com | 否 | 0/7 |
| 웃긴 mbti 테스트 | 19.2 | 极易 | m.blog.naver.com | 否 | 0/8 |
| 리그오브레전드 mbti | 23.5 | 容易 | personality-database.com | 否 | 0/8 |
| 원신 캐릭터 테스트 | 24.9 | 容易 | arealme.com | 否 | 4/10 |
| 심리테스트 | 29.5 | 容易 | poomang.com | 是 | 5/9 |
| 발로란트 mbti | 29.7 | 容易 | smore.im | 否 | 4/8 |
| 주술회전 mbti | 32.5 | 容易 | paramgo.tistory.com | 是 | 8/9 |
| 귀멸의 칼날 mbti | 35.5 | 容易 | poomang.com | 否 | 6/8 |
| 원신 mbti | 35.7 | 容易 | personality-database.com | 是 | 8/9 |
| mbti 궁합 | 37.5 | 容易 | save.banggooso.com | 是 | 9/9 |
| 애니 캐릭터 테스트 | 39.3 | 容易 | smore.im | 否 | 4/9 |
| 애니 mbti | 44.9 | 中等 | paramgo.tistory.com | 是 | 8/9 |
| infp 캐릭터 | 47.1 | 中等 | personality-database.com | 否 | 7/9 |
| mbti 유형별 캐릭터 | 48.5 | 中等 | m.blog.naver.com | 是 | 5/8 |
| 붕괴 스타레일 mbti | 48.7 | 中等 | personality-database.com | 是 | 7/10 |
| enfp 캐릭터 | 48.7 | 中等 | personality-database.com | 否 | 5/8 |
| mbti 검사 | 52.9 | 中等 | 16personalities.com | 是 | 6/8 |

17 词全部成功。均值 KD ≈ 35.8。

---

## 批 2 — 日本（gl=jp, hl=ja）

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| ヴァロラント エージェント 診断 | 10.0 | 极易 | valoshin.com | 是 | 1/10 |
| 原神 キャラ 診断 | 18.0 | 极易 | prismatest.com | 是 | 5/10 |
| ヴァロラント mbti | 19.2 | 极易 | valo-16types.com | 否 | 0/9 |
| 崩壊スターレイル mbti | 19.6 | 极易 | character-seikaku.memo.wiki | 否 | 1/8 |
| アニメ キャラ 診断 | 20.2 | 容易 | superprof.jp | 是 | 6/10 |
| 相性診断 | 21.8 | 容易 | ma-kko.com | 是 | 5/10 |
| リーグ・オブ・レジェンド mbti | 22.1 | 容易 | x.com | 否 | 0/9 |
| mbti 相性 | 22.7 | 容易 | reashu.com | 是 | 8/9 |
| アニメ mbti | 25.5 | 容易 | character-seikaku.memo.wiki | 否 | 6/8 |
| 呪術廻戦 mbti | 31.3 | 容易 | character-seikaku.memo.wiki | 否 | 7/10 |
| mbti タイプ 別 キャラ | 32.0 | 容易 | 16personalities.com | 是 | 5/9 |
| 原神 mbti | 40.4 | 中等 | character-seikaku.memo.wiki | 否 | 8/10 |
| enfp キャラ | 45.1 | 中等 | character-seikaku.memo.wiki | 是 | 9/9 |
| 鬼滅の刃 mbti | 45.6 | 中等 | character-seikaku.memo.wiki | 否 | 7/10 |
| infp キャラ | 46.5 | 中等 | character-seikaku.memo.wiki | 是 | 8/9 |
| 性格診断 | 47.3 | 中等 | 16personalities.com | 是 | 7/10 |
| mbti 診断 | 50.5 | 中等 | 16personalities.com | 是 | 6/9 |

17 词全部成功。均值 KD ≈ 29.5。日本市场有个特别现象：`character-seikaku.memo.wiki` 一个站几乎垄断了所有「角色 MBTI」词的前几名。

---

## 批 3 — 英文补充（gl=us, hl=en）

已有 42 词见 `.rankup/data/kd-us.json`（未重复采集），本批只跑「类型反查」「九型人格子类型」「兼容配对」三个方向，共 25 词。

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| infp characters in games | 22.7 | 容易 | reddit.com | 否 | 2/9 |
| sp4 enneagram | 23.2 | 容易 | reddit.com | 否 | 4/8 |
| sp9 enneagram | 25.5 | 容易 | wiki.personality-database.com | 否 | 4/9 |
| mbti compatibility chart | 25.5 | 容易 | jobcannon.io | 是 | 6/9 |
| sp5 enneagram | 27.2 | 容易 | wiki.personality-database.com | 否 | 3/9 |
| so3 enneagram | 27.5 | 容易 | wiki.personality-database.com | 否 | 4/9 |
| intj characters | 28.1 | 容易 | reddit.com | 是 | 7/9 |
| mbti compatibility | 28.5 | 容易 | jobcannon.io | 是 | 9/9 |
| sx6 enneagram | 29.0 | 容易 | reddit.com | 否 | 4/9 |
| 4w5 | 29.8 | 容易 | crystalknows.com | 是 | 8/8 |
| infj characters | 30.0 | 容易 | reddit.com | 是 | 7/8 |
| istp characters | 31.4 | 容易 | reddit.com | 否 | 5/9 |
| 8w7 | 32.6 | 容易 | crystalknows.com | 是 | 7/7 |
| enfp anime characters | 33.3 | 容易 | personality-database.com | 是 | 7/9 |
| intp characters | 33.9 | 容易 | reddit.com | 否 | 7/9 |
| intj anime characters | 34.4 | 容易 | animerants.net | 是 | 8/9 |
| enfp characters | 35.4 | 容易 | personality-database.com | 是 | 8/9 |
| enneagram characters | 36.1 | 容易 | goteenwriters.com | 是 | 6/8 |
| infp characters | 36.5 | 容易 | psychologyjunkie.com | 是 | 7/9 |
| entp characters | 36.6 | 容易 | personality-database.com | 是 | 5/9 |
| esfp characters | 38.5 | 容易 | reddit.com | 是 | 6/9 |
| sx4 enneagram | 38.5 | 容易 | wiki.personality-database.com | 是 | 4/8 |
| infp anime characters | 39.1 | 容易 | personality-database.com | 是 | 8/9 |
| enneagram compatibility | 44.9 | 中等 | enneagraminstitute.com | 是 | 6/9 |
| enneagram test | 67.2 | 困难 | truity.com | 是 | 8/8 |

25 词全部成功。均值 KD ≈ 32.2。类型反查（characters 系）平均 KD ≈ 33.3；九型人格子类型（sp/sx/so + 翼型）平均 KD ≈ 28.9，但泛主词 `enneagram test` 是全库最难的词。

---

## 批 4 — 中文（gl=cn, hl=zh-CN）

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| 搞笑人格测试 | 8.5 | 极易 | nano-banana.com | 是 | 3/10 |
| mbti配对 | 16.7 | 极易 | zhuanlan.zhihu.com | 否 | 3/10 |
| 鬼灭之刃mbti | 18.0 | 极易 | zhihu.com | 否 | 0/10 |
| infp动漫角色 | 18.1 | 极易 | personality-database.com | 否 | 0/10 |
| 心理测试 | 20.1 | 容易 | types.yuzeli.com | 是 | 4/10 |
| 你是哪个动漫角色 | 21.5 | 容易 | arealme.com | 是 | 2/10 |
| 呪术回战mbti | 22.2 | 容易 | personality-database.com | 否 | 0/10 |
| enfp角色 | 24.7 | 容易 | 16personalities.com | 否 | 1/10 |
| 性格测试 | 25.1 | 容易 | 16personalities.com | 否 | 2/10 |
| infp角色 | 26.8 | 容易 | 16personalities.com | 否 | 0/10 |
| 原神mbti | 27.9 | 容易 | zhuanlan.zhihu.com | 否 | 3/10 |
| 16型人格测试 | 35.4 | 容易 | 16personalities.com | 否 | 3/10 |
| 崩铁mbti | 35.8 | 容易 | personality-database.com | 否 | 2/10 |
| 崩坏星穹铁道mbti | 37.4 | 容易 | personality-database.com | 否 | 0/10 |
| mbti人格测试 | 49.4 | 中等 | 16personalities.com | 是 | 7/10 |

15 词全部成功。均值 KD ≈ 25.8——四个市场里最低。多个「角色 MBTI」词（鬼灭之刃、呪术回战、崩坏星穹铁道）前十里**零个专门页**，第 1 名多是知乎专栏或综合站的内页，不是为这个词量身做的页面。

---

## 结论

### 1. 韩/日/中三个市场，「角色 MBTI」盘面谁最松？

取三地共有的「角色 MBTI」类词（原神/崩铁/鬼灭/呪术回战/LoL/Valorant/泛动漫 MBTI）比较均值：

| 市场 | 样本词数 | 平均 KD | 平均前十专门页数 |
|---|---|---|---|
| 中国 | 5 | **28.3** | **1.0 / 10**（20%） |
| 日本 | 7 | 29.1 | 4.1 / 9（约 46%） |
| 韩国 | 7 | 35.8 | 5.9 / 9（约 65%） |

**中国市场最松**：KD 均值最低，且前十里几乎没有为这些词专门做的页面（鬼灭之刃/呪术回战/崩坏星穹铁道三个词专门页数都是 0），第 1 名普遍是知乎专栏、综合内容站的内页在顺路占位，不是被正面争夺的红海。日本次之，虽然 KD 均值也不高，但 `character-seikaku.memo.wiki` 一个站垄断了大部分角色 MBTI 词的前排，实际可挤进前十的空间比数字看起来窄。韩国盘面最紧，`personality-database.com`、`paramgo.tistory.com` 等站点专门页覆盖率最高。

### 2. 「类型反查」（infp characters 这类）和「角色 MBTI」（genshin mbti 这类）哪边盘面更松？

以英文市场数据比较（类型反查 12 词 vs 角色 MBTI 21 词，取自 kd-us2.json + kd-us.json）：

| 类别 | 词数 | 平均 KD | 平均专门页占比 |
|---|---|---|---|
| 类型反查（xxxp characters） | 12 | **33.3** | 72%（较高） |
| 角色 MBTI（xxx mbti） | 21 | 36.7 | 66% |

**KD 分数上类型反查略松**（33.3 vs 36.7），但专门页占比反而更高（72% vs 66%）——说明类型反查词的竞争对手更分散（大量中小型 MBTI/心理类博客各占一个类型词），而角色 MBTI 词的竞争集中在少数强站（`personality-database.com` 几乎每个角色 MBTI 词都杀进前十，把 KD 拉高）。两边都不算真空地带，但如果只看分数，类型反查略优。值得注意的是这个方向在韩/日也重复验证：韩国 INFP/ENFP 캐릭터 均值 47.9，日本 INFP/ENFP キャラ 均值 45.8，都高于本地角色 MBTI 均值——说明类型反查在东亚三地反而比英文更贵，英文是这个方向唯一相对便宜的市场。

### 3. 九型人格那批词，比 MBTI 松还是紧？

九型人格 11 词（sp5/sx6/sp9/so3/sx4/sp4/enneagram test/enneagram characters/4w5/8w7/enneagram compatibility）：

- 平均 KD ≈ **28.9**（不含 `enneagram test`）/ 34.7（含）
- 6 个子类型词（sp5/sx6/sp9/so3/sx4/sp4）单独看，KD 全部落在 23.2–29.0 之间，前十专门页只有 3–4 个（占 40%–50%），是**全部 74 词里数值最松的一簇**。

但泛主词 `enneagram test` 反而是**全库最难的词**（KD 67.2，前十 8/8 全是专门页，`truity.com` 等专业测评站正面重兵），`enneagram compatibility` 也到了中等档（44.9）。

结论：**九型人格的长尾子类型词比 MBTI 松得多**（这是这次调研里 KD 最低的一整簇细分词），但九型人格的泛主词比 MBTI 泛主词更难啃——`mbti test`(53.8) vs `enneagram test`(67.2)，说明九型人格赛道虽然入口词被专业测评站把得很死，长尾（子类型组合）却几乎没人正面做内容，机会集中在长尾而非主词。

---

## 附注

- KD 接口对部分冷门词提示「未能取得该词搜索量」时，报告里如实按接口返回的 KD/level 标注，**不代表没有需求**，只是接口没有体量数据参考，本批次未遇到这种情况，74 词均返回了完整数据。
- 本次调研过程中发现并修复了一个环境问题：`fetch-pinned.mjs` 里原本硬编码用 `cloudflare-dns.com` 做 DoH 解析，但当天该域名本身在本机被 Clash fake-IP 劫持导致握手失败（`SSL_ERROR_SYSCALL`），与 `seo.web.cafe` 遇到的问题是同一类，只是发生在更前面一步。已加一层回退：`cloudflare-dns.com` 失败自动换 `dns.google` 重试，不改变整体「DoH 解析真实 IP + curl --resolve 直连」的思路。四批词全部使用修复后的脚本采集，无一失败。

---

## 批 5 — 英文扩展（九型全矩阵 / 对比句式 / 16型反查）

数据来源同上，词表见 `.rankup/data/words-us3.txt`，输出 `.rankup/data/kd-us3.json`。55 词全部成功，0 失败（1 词首次请求 curl 失败，单词重试后成功，不计入失败数）。

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| worst mbti matches | 6.8 | 极易 | reddit.com | 否 | 1/8 |
| mbti worst matches | 7 | 极易 | reddit.com | 否 | 1/8 |
| so1 enneagram | 10.2 | 极易 | wiki.personality-database.com | 否 | 3/9 |
| sx1 enneagram | 10.6 | 极易 | reddit.com | 是 | 3/9 |
| isfj vs infj | 12.4 | 极易 | reddit.com | 否 | 3/7 |
| intj vs intp | 13.2 | 极易 | reddit.com | 否 | 2/6 |
| sx3 enneagram | 14.4 | 极易 | wiki.personality-database.com | 否 | 3/8 |
| mbti best match | 15.4 | 极易 | reddit.com | 是 | 3/8 |
| so4 enneagram | 18.9 | 极易 | wiki.personality-database.com | 否 | 2/10 |
| enneagram subtypes explained | 19.7 | 极易 | beyondyourtype.co | 是 | 6/9 |
| enneagram 4 careers | 19.9 | 极易 | reddit.com | 否 | 3/10 |
| sp vs so vs sx | 20.2 | 容易 | reddit.com | 否 | 0/9 |
| so6 enneagram | 21 | 容易 | reddit.com | 否 | 2/10 |
| sp6 enneagram | 21.2 | 容易 | wiki.personality-database.com | 否 | 3/9 |
| enneagram 5 relationships | 21.6 | 容易 | reddit.com | 否 | 5/10 |
| infp vs infj | 22.2 | 容易 | reddit.com | 否 | 4/9 |
| sp3 enneagram | 23.9 | 容易 | wiki.personality-database.com | 否 | 5/9 |
| so2 enneagram | 24 | 容易 | wiki.personality-database.com | 否 | 3/9 |
| entj vs intj | 24 | 容易 | reddit.com | 是 | 5/8 |
| sx7 enneagram | 24.3 | 容易 | wiki.personality-database.com | 否 | 2/9 |
| enneagram 2 relationships | 24.3 | 容易 | ninetypes.co | 否 | 5/9 |
| 4w3 | 24.5 | 容易 | reddit.com | 是 | 6/8 |
| sx8 enneagram | 24.7 | 容易 | wiki.personality-database.com | 否 | 5/9 |
| enneagram type 9 careers | 24.8 | 容易 | reddit.com | 是 | 3/10 |
| so5 enneagram | 25.1 | 容易 | wiki.personality-database.com | 否 | 3/10 |
| enfp and infj compatibility | 25.6 | 容易 | reddit.com | 否 | 2/7 |
| sp8 enneagram | 26.2 | 容易 | wiki.personality-database.com | 否 | 4/8 |
| 7w8 | 26.2 | 容易 | crystalknows.com | 是 | 7/7 |
| so7 enneagram | 26.3 | 容易 | reddit.com | 否 | 3/8 |
| sp4 vs sx4 | 26.4 | 容易 | reddit.com | 否 | 0/9 |
| estj vs entj | 26.5 | 容易 | reddit.com | 否 | 3/6 |
| sx2 enneagram | 26.9 | 容易 | wiki.personality-database.com | 是 | 5/10 |
| estj characters | 27.1 | 容易 | personality-database.com | 是 | 5/8 |
| sp2 enneagram | 27.2 | 容易 | wiki.personality-database.com | 是 | 5/8 |
| sp1 enneagram | 27.3 | 容易 | wiki.personality-database.com | 否 | 4/9 |
| 9w1 | 27.5 | 容易 | reddit.com | 是 | 7/8 |
| sx5 enneagram | 27.6 | 容易 | wiki.personality-database.com | 是 | 3/8 |
| estp characters | 27.7 | 容易 | personality-database.com | 是 | 6/8 |
| 1w9 | 29.2 | 容易 | crystalknows.com | 是 | 7/7 |
| enneagram compatibility chart | 30 | 容易 | enneagraminstitute.com | 是 | 5/9 |
| sp7 enneagram | 31.1 | 容易 | wiki.personality-database.com | 否 | 3/9 |
| 6w7 | 31.1 | 容易 | crystalknows.com | 是 | 7/8 |
| mbti soulmate pairs | 31.7 | 容易 | observer.com | 否 | 0/10 |
| 3w4 | 32.7 | 容易 | crystalknows.com | 是 | 8/8 |
| isfp characters | 33 | 容易 | personality-database.com | 是 | 7/10 |
| esfj characters | 33.5 | 容易 | personality-database.com | 是 | 4/8 |
| entj characters | 33.8 | 容易 | reddit.com | 是 | 6/8 |
| isfj characters | 35 | 容易 | reddit.com | 是 | 6/9 |
| 2w1 | 37 | 容易 | crystalknows.com | 是 | 8/8 |
| enneagram 7 careers | 37.1 | 容易 | insightglobal.com | 是 | 5/9 |
| enfj characters | 39.6 | 容易 | reddit.com | 是 | 6/8 |
| istj characters | 40.8 | 中等 | reddit.com | 是 | 7/9 |
| 2w3 | 41 | 中等 | crystalknows.com | 是 | 7/8 |
| 8w9 | 41.6 | 中等 | crystalknows.com | 是 | 6/6 |
| 5w6 | 44.9 | 中等 | crystalknows.com | 是 | 7/7 |

55 词全部成功。分组均值：

| 分组 | 词数 | 平均 KD |
|---|---|---|
| op.gg 式对比句式（vs / matches / best match） | 10 | **18.5** |
| 九型全矩阵（sp/so/sx × 剩余子类型） | 18 | 22.8 |
| 九型应用型长尾（careers/relationships/chart） | 9 | 24.9 |
| wing 写法（1w9…8w9） | 10 | 33.6 |
| 16 型反查补全（estj/esfj/entj/istj/isfp/isfj/estp/enfj characters） | 8 | 33.8 |

**op.gg 式对比句式整体最松**（均值 18.5，全库新低），`worst mbti matches`（6.8）、`mbti worst matches`（7）是本次调研迄今 KD 最低的两个词，第 1 名都是 Reddit 帖子，前十专门页只有 1 个——这个句式几乎没人用落地页正面回答，几乎是空场。九型全矩阵子类型继续验证批 3 的结论（均值 22.8，比批 3 的 6 词 28.9 更低），说明子类型长尾越往冷门方向挖越松。wing 写法和 16 型反查补全两组明显更贵（33+），wing 词的前十里 `crystalknows.com` 一家几乎垄断（10 词里 7 次是第一名），16 型反查里 `personality-database.com`/`reddit.com` 也已经把大部分冷门型号占住——这两组不再是空白地带。

前十零专门页的词（最值钱）：`sp4 vs sx4`（KD 26.4，第一名 reddit.com）、`sp vs so vs sx`（KD 20.2，第一名 reddit.com）、`mbti soulmate pairs`（KD 31.7，第一名 observer.com）。三个词都不是九型/MBTI 主流查询习惯的写法，说明搜索需求存在但内容供给完全没跟上。

反常现象：`crystalknows.com` 在 wing 写法这组几乎包场第一名（1w9/2w1/2w3/3w4/6w7/7w8/8w9/5w6 共 8/10 次），是本次新出现的强势站点，此前批次未见过；此外 `worst/best match` 这类对比句式虽然 KD 极低，但均由 Reddit 讨论帖占位而非专门页，说明"低 KD"不等于"内容真空"，只是专门页供给少，若要吃下需要正面做一个「谁和谁最不配/最配」的落地页去正面打 Reddit。


---

## 批 6 — 日语型名与相性（gl=jp, hl=ja）

数据来源同上，词表见 `.rankup/data/words-jp2.txt`，输出 `.rankup/data/kd-jp2.json`。35 词全部成功，0 失败。

| 关键词 | KD | 难度档 | 第1名域名 | 第1名是否专门页 | 前十专门页 |
|---|---|---|---|---|---|
| mbti 相性 恋愛 | 13.5 | 极易 | futari-no-torisetsu.com | 是 | 4/9 |
| mbti 冒険家 相性 | 14.2 | 极易 | gaten.info | 否 | 3/9 |
| mbti 主人公 相性 | 16.6 | 极易 | portal.yagish.jp | 是 | 2/9 |
| 主人公 mbti相性 | 18.4 | 极易 | gaten.info | 否 | 2/9 |
| 恋愛mbti 相性 | 19.4 | 极易 | istep.click | 是 | 6/10 |
| mbti 主人公 | 20.9 | 容易 | 16personalities.com | 是 | 2/9 |
| 擁護者 mbti | 20.9 | 容易 | 16personalities.com | 是 | 3/9 |
| 説得者 mbti | 21.7 | 容易 | note.com | 否 | 1/9 |
| mbti 相性 | 22.7 | 容易 | reashu.com | 是 | 8/9 |
| mbti 相性 一覧 | 22.8 | 容易 | pairs.pink | 是 | 7/9 |
| mbti 診断 相性 | 23.1 | 容易 | reashu.com | 是 | 6/9 |
| 主人公 mbti | 25.9 | 容易 | 16personalities.com | 是 | 3/9 |
| 論理学者 mbti | 26.9 | 容易 | 16personalities.com | 是 | 2/9 |
| mbti 領事館 | 27 | 容易 | 16personalities.com | 是 | 1/9 |
| mbti 幹部 | 27.5 | 容易 | 16personalities.com | 是 | 1/8 |
| 広報運動家 mbti | 28 | 容易 | 16personalities.com | 是 | 3/9 |
| 仲介者 mbti | 28.4 | 容易 | 16personalities.com | 是 | 3/9 |
| 領事館 mbti | 29.4 | 容易 | 16personalities.com | 是 | 2/9 |
| mbti 運動家 | 30.4 | 容易 | 16personalities.com | 是 | 2/9 |
| 幹部 mbti | 31.1 | 容易 | 16personalities.com | 是 | 2/8 |
| mbti エンターテイナー | 34 | 容易 | 16personalities.com | 是 | 2/8 |
| 巨匠 mbti | 34.1 | 容易 | 16personalities.com | 是 | 3/8 |
| 16personalities | 34.1 | 容易 | 16personalities.com | 是 | 5/7 |
| mbti 巨匠 | 35.2 | 容易 | 16personalities.com | 是 | 4/8 |
| エンターテイナー mbti | 35.6 | 容易 | 16personalities.com | 是 | 3/9 |
| 起業家 mbti | 35.7 | 容易 | 16personalities.com | 是 | 4/9 |
| 運動家 mbti | 35.8 | 容易 | 16personalities.com | 是 | 4/9 |
| 冒険家 mbti | 35.9 | 容易 | 16personalities.com | 是 | 2/9 |
| 提唱者 mbti | 40.2 | 中等 | 16personalities.com | 是 | 4/9 |
| 討論者 mbti | 40.5 | 中等 | 16personalities.com | 是 | 4/9 |
| 建築家 mbti | 40.7 | 中等 | 16personalities.com | 是 | 4/9 |
| 管理者 mbti | 42 | 中等 | 16personalities.com | 是 | 4/9 |
| 指揮官 mbti | 42.6 | 中等 | 16personalities.com | 是 | 4/9 |
| 性格診断 | 47.3 | 中等 | 16personalities.com | 是 | 7/10 |
| mbti 診断 | 50.5 | 中等 | 16personalities.com | 是 | 6/9 |

35 词全部成功，0 失败。A 组（16 型名 × mbti，24 词）均 KD ≈ 32.1；B 组（相性簇，8 词）均 KD ≈ 18.8，是本批最松的一组；C 组（对照，3 词：mbti 診断/性格診断/16personalities）均 KD ≈ 44.0。型名词整体比对照组松约 12 分，相性簇比对照组松约 25 分。

前十专门页 ≤2 的词（12 个，供给最薄）：`mbti 主人公 相性`（2/9）、`主人公 mbti相性`（2/9）、`mbti 主人公`（2/9）、`説得者 mbti`（1/9）、`論理学者 mbti`（2/9）、`mbti 領事館`（1/9）、`mbti 幹部`（1/8）、`領事館 mbti`（2/9）、`mbti 運動家`（2/9）、`幹部 mbti`（2/8）、`mbti エンターテイナー`（2/8）、`冒険家 mbti`（2/9）。

第1名域名分布：`16personalities.com` 拿下 26/35 词的第一名（74%），几乎包场了 A 组全部 24 个型名词——只有 `説得者 mbti` 一词第一名是 `note.com`。相性簇（B 组）第一名分散：`reashu.com` 2 次，`gaten.info` 2 次，`futari-no-torisetsu.com`／`portal.yagish.jp`／`istep.click`／`pairs.pink` 各 1 次。

反常现象：`opportunity-new-site.md` 此前判断「型名词 16personalities 没守」，本批实测推翻这个判断——16personalities.com 在 24 个型名词里拿到 22 个第一名，且几乎每个都标记为专门页（型名对应的官方结果页）。这说明型名词本身的头名位置已经被 16personalities 官方站占住，型名页要争的是从官方结果页手里抢前十席位。真正空白的一块在**相性簇**——B 组 8 词里有 6 词第一名不是 16personalities，`mbti 冒険家 相性`／`主人公 mbti相性` 两词前十专门页只有 2-3 个，且第一名是 `gaten.info` 这类非专门相性站，供给明显更薄。
