# 方向研究 — 游戏 / 角色 MBTI 还能不能做

> 2026-08-19。数据源：GSC（实时读取）、seo.web.cafe KD API（42 词，`data/kd-us.json`）、
> Similarweb Web Intelligence（`data/game-mbti/seeds/`）。所有数字均为本轮实测，不引用旧记录。

## 1. 先纠正三个前提

**① 站没被 K。** GSC 2026-05-17~08-17：81 点击 / 725 曝光 / CTR 11.2% / 均排 10.4，
人工处置措施与安全问题双绿。90 个查询里 100% 是 `sbti 생각러`、`sbti 궁합` 这类品牌回搜词。
与 `baseline.md` 2026-07-18 的定性一致：4 月韩国病毒热潮退潮，不是惩罚。

**② 「游戏 MBTI」这个方向已经做过了，而且已经证伪——但证伪的是执行方式，不是方向。**
站内 8 款游戏（Apex / PUBG / CS2 / OW2 / 王者 / Valorant / LoL / 三角洲）**全是竞技类**，
做的是「你是什么类型的**玩家**」。KD 极低但没人搜：

| 词 | KD | 判读 |
|---|---:|---|
| `league of legends personality test` | 5.8 | 极易，但 GSC 曝光个位数 |
| `valorant personality test` | 16.3 | 同上 |
| `apex legends personality test` | 20.5 | 同上 |

**KD 低 ≠ 有需求。** 这 3 个词的低 KD 恰恰说明没人愿意为它做页面。

**③ Similarweb 也有反链报告。** 之前认为只有 Semrush 有，是错的，已更正到 RUNBOOK。

## 2. 真正有量的是「角色 MBTI」，实体是角色不是玩家

42 个词的 KD 实测里，`personality-database.com`（月访问 417 万）拿了 **17 个第一**。
它的盘面并不硬——绝大多数是 容易/中等：

| 词 | KD | 第 1 名 |
|---|---:|---|
| `jujutsu kaisen mbti` | 8.0 | personality-database.com |
| `kpop idol mbti` | 17.9 | personality-database.com |
| `stardew valley mbti` | 25.5 | personality-database.com |
| `pokemon mbti` | 29.2 | personality-database.com |
| `marvel mbti` | 32.0 | personality-database.com |
| `demon slayer mbti` | 34.4 | personality-database.com |
| `fnaf mbti` | 34.6 | personality-database.com |
| `minecraft mbti` | 34.7 | personality-database.com |
| `one piece mbti` | 36.3 | personality-database.com |
| `valorant agents mbti` | 37.0 | reddit.com |
| `league of legends mbti` | 38.3 | personality-database.com |
| `anime mbti` | 38.4 | personality-database.com |
| `genshin impact mbti` | 50.1 | personality-database.com |

## 3. 但 PDB 最大的非品牌流量不是「某作品 MBTI」，是反过来的「某类型 characters」

PDB 非品牌关键词表（28 天，全球口径）：

| 关键词 | 点击 | 体量 | 承接页 |
|---|---:|---:|---|
| `infp characters` | 5.5K | 31.4K | `/profile?personality=11` |
| `enfp characters` | 4.4K | 23K | `/profile?personality=12` |
| `entp characters` | 3.7K | 17.1K | `/profile?personality=14` |
| `infj characters` | 3.3K | 21.9K | `/profile?personality=9` |
| `intp characters` | 3.2K | 17.1K | `/profile?personality=13` |
| `intj characters` | 3.1K | 22.5K | `/profile?personality=15` |
| `istj / enfj / estp / esfp / isfp / isfj / entj / istp / estj characters` | 各 1.1–2.5K | 各 9.8–19.9K | 同模板 |

**16 个页面，一个模板，合计约 3.8 万点击 / 28 天。**

还有一块几乎没人提的：**九型人格子类型 wiki**，全在 `wiki.personality-database.com`，
就是纯文本 wiki 页，KD 低到工具都不给分：

| 关键词 | 点击 | 体量 |
|---|---:|---:|
| `sp5 enneagram` | 1.2K | 20.5K |
| `sx6 enneagram` | 1.1K | 18.3K |
| `sp9 enneagram` | 1.0K | 17.5K |
| `so3 / sx4 / sp3 / sp4 / so2 / sp8 / so4 / so7 …` | 各 1.1–2.6K | 各 13–21K |

## 4. 页面模板集中度：两个站都是「一个模板铺满实体」

PDB 前 109 个自然流量落地页：

| 模板 | 页数 | 是什么 |
|---:|---:|---|
| `profile?cid&pid&sub_cat_id={IP}` | 32 | 单个作品的全角色 MBTI |
| `wiki/books/enneagram/page/{subtype}` | 25 | 九型子类型 |
| `profile?personality={N}` | 15 + 7(es) | 「XX characters」 |
| `/profile/{id}/{slug}` | 7 | 单个人物页 |
| `/type/{N}/{slug}` | 6 | **类型 × 题材 组合页**（如 `/type/9/infj-anime-characters`） |

op.gg 前 293 个落地页：

| 模板 | 页数 |
|---:|---:|
| `op.gg/{locale}/lol/champions/{champion}/build` | **87** |
| `op.gg/{locale}/lol/summoners/{...}` | 17 |
| `op.gg/{locale}/valorant/crosshairs` | 15 |
| `op.gg/{locale}/palworld/*` | 35 |

op.gg 月访问 5,570 万、全球排名 880。单页体量：`kaisa build` 25.3K 点击 / KD 12、
`caitlyn build` 24.8K / KD 14、`senna build` 15.9K / KD 8、`ahri build` 17.3K / KD 8。
**15K–25K 点击的词 KD 只有 8–14**，因为内容站没有实时数据根本接不住。

## 5. 结论：op.gg 和 personality-database 是同一种生意，而它不是测试题

| | 测试题（SBTI 现在） | 数据库 / 查询（PDB、op.gg） |
|---|---|---|
| 用户意图 | 玩一次、截图、分享 | 查一个具体答案 |
| 流量形状 | 社交脉冲 → 尖峰 → 衰减 | 长尾累积、常青、复利 |
| 词的形态 | 品牌词为主 | `<实体> + <属性>`，实体有几千个 |
| 页面 | 少数几个 | 一个模板 × N 实体 × M 语言 |
| 护城河 | 梗好不好笑 | 实体覆盖度 + 数据新鲜度 |
| SBTI 实证 | 4 月峰值 120 点击/天 → 6 月贴地，查询 100% 品牌词 | — |

**SBTI 那条曲线就是测试题模型的标准形状。** 想要常青流量，产品形态必须从
「测试题」变成「可查询的数据库」，测试题退回去当引流入口和分享钩子。

## 6. 可打的方向，按「盘面松 × 与现有资产的距离」排序

现有资产：4 语言 i18n 骨架、27 个人格类型体系、궁합 配对逻辑、
8 款游戏 × 8 原型的题库与插画、韩国被验证过的品牌认知。

| 方向 | 依据 | 与现有资产的距离 |
|---|---|---|
| **A. 类型 × 题材矩阵页** — 对标 `/type/{N}/{slug}` | 16 型 × 题材，PDB 单模板 3.8 万点击/28 天 | 近：类型体系已有，缺角色数据 |
| **B. 九型人格子类型** | 27 个子类型页，各 13–21K 体量，盘面松到无 KD 分 | 中：需新建一套框架，但纯文本页 |
| **C. 单作品角色 MBTI 页** | KD 8–50，PDB 32 个此类页在前 109 名 | 中：需逐作品补角色数据 |
| **D. 韩语市场优先** | 站唯一被验证市场（88% 流量），韩国 MBTI 文化极强，Naver 未收录 | 近：ko 文案已母语化 |
| **E. op.gg 式实时数据站** | 单页 15–25K 点击 / KD 8–14 | **远**：需要游戏 API 与数据管线，是另一个项目 |

## 7. 待验证（下一轮）

- 韩 / 日 / 中三个市场的分国家体量与盘面（Similarweb 国家过滤器被付费锁，
  改由 Semrush `db=kr/jp/cn` 取，正在验证）
- PDB / op.gg / sbti.support 的反链规模差距
- 「角色数据从哪来」——A/C 两个方向的成立前提是能低成本拿到角色清单与画像

## 8. 尚未回答

变现（AdSense）留到有流量之后再谈。本轮不做测算。
