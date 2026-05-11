# SBTI 测试目录 — 重设计与扩题执行手册

> 这份文档是一份**自包含的执行手册**。新开会话的 agent 应该可以只读这一个文件就接手所有工作。
> 所有"该不该做、怎么做"的判断已经在 §1 决策区锁定，不要回头再讨论方向，直接按 §2 Phase 顺序推进。

---

## 0. 项目上下文

**项目根目录**：`/Users/kcsx/Project/kcsx/sbti-next/`
**技术栈**：Next.js 16 (App Router) · Tailwind CSS v4 · shadcn/ui (base-nova) · Base-UI · next-intl
**部署**：Cloudflare Pages（静态导出 `output: 'export'`）
**支持语种**：`zh` / `en` / `ja` / `ko`
**Git 分支**：`main`
**包管理**：pnpm

**关键文件入口（接手前先读）**：
- [CLAUDE.md](./CLAUDE.md) — 品牌调性、博客行文规范
- [DESIGN.md](./DESIGN.md) — 现有色彩 / 字体 / 间距系统
- [.impeccable.md](./.impeccable.md) — 用户画像 / 设计原则
- [components/test-hub-page.tsx](./components/test-hub-page.tsx) — **当前首页**（要改）
- [lib/data/game-quizzes.ts](./lib/data/game-quizzes.ts) — **当前题库**（要重构）
- [components/game-quiz-app.tsx](./components/game-quiz-app.tsx) — 答题/结果运行时
- [lib/data/dimensions.json](./lib/data/dimensions.json) — SBTI 主测试的 15 维（**仅供参考**，游戏测试用本手册定义的新六维）

**已就绪资产**：
- `public/game-logos/{slug}.png` — 8 款游戏官方 logo
- `public/game-quizzes/{slug}/cover.png` — 8 张封面
- `public/game-quizzes/{slug}/results/{planner|carry|support|chaos}.png` — 32 张旧四原型图（**Phase 1 会作废 4 原型架构，但旧 PNG 暂作占位保留**）
- `public/types/*.png` — 27 个 SBTI 主测试人格图

**当前问题（这次工作要解决的）**：
1. **首页视觉同质化**：8 款游戏共用同一套 shadcn 卡片皮，无品牌识别度；信息架构是单层瀑布流，无钩子。
2. **题库低质**：每款仅 10 题，其中后 5 题来自 `supplementalQuestions` 通用模板套壳；所有游戏共用 4 个原型（planner/carry/support/chaos），文化深度为零。

---

## 1. 设计决策（已锁定，不再讨论方向）

### 1.1 六维玩家性格架构（替换当前的 4 桶累加）

| 轴号 | 维度 | 低极（L pole） | 高极（H pole） | 极性代号 |
|---|---|---|---|---|
| 1 | **Tempo 节奏** | 慢热运营 | 速通快攻 | **L** / **R** |
| 2 | **Nerve 胆量** | 风控会计 | 一把梭哈 | **C** / **A** |
| 3 | **Bond 协作** | 独狼专精 | 团魂派 | **S** / **T** |
| 4 | **Intel 信号** | 数据派 | 手感派 | **D** / **F** |
| 5 | **Flair 表达** | 效率主义 | 节目效果 | **U** / **H** |
| 6 | **Mental 心态** | 钝感如山 | 红温易燃 | **K** / **B** |

**玩家身份码格式**：6 个极性字母拼成的字符串，例：`RASFHB` = 快攻 + 激进 + 独狼 + 手感 + 节目效果 + 易燃 = LoL 中 "嚎哭深渊段子王"。

**为什么是 6 维**：
- 4 维不够刻画"游戏文化"复杂度（当前问题）
- 5 维做不出对称雷达图
- 7+ 维玩家记不住自己代号
- 6 维匹配六边形雷达 + 2³=8 主导轴组合刚好得到 8 个原型 / 游戏

**为什么是这 6 个轴而不是别的**：
- 覆盖了竞技游戏玩家心理学的 6 个独立变量（节奏/风险/社交/认知/动机/调节），相互正交度高
- 每个轴都有明确的"截屏可分享"语义（例："我是红温易燃派 R-A-S-F-H-**B**"）
- 跨 8 款游戏通用，但每款游戏只用其中 3 个轴决定原型，保证差异化

### 1.2 计分与原型映射

**计分规则**：
- 每题 4 个选项
- 每个选项给 **1~2 个轴**各 **+1 或 -1**（朝向对应极）
- 全部 30 题答完后 → 每个轴累计净分 → 归一化到 `0~100` → 大于 50 = 高极，小于 50 = 低极

**题量分布（30 题/游戏）**：
- **12 题"纯轴锚定题"**：每轴 2 题，每个选项只贡献该单轴 ±1
- **18 题"复合情景题"**：每题贡献 2 个轴，更贴近真实玩家场景
- 总轴贡献 = `12×1 + 18×2 = 48` 票 → 平均每轴 8 票，统计稳定性足够

**原型映射**：
- 8 个原型 = 该游戏 3 个"主导轴"的 2³ = 8 种极性组合
- 每款游戏的 3 个主导轴由 §1.4 决定
- 非主导轴的极性仍参与最终的"玩家身份码"展示（雷达图 6 边都画），但不影响原型归类

**结果页输出**：
1. **原型卡**：原型名 + 一句话定位 + 长描述 + "明显症状" 列表
2. **六边形雷达图**：玩家 6 维极性可视化
3. **6 行文字反馈**：每行对应一个轴，根据该轴极性给出该游戏的具体反馈话术
4. **玩家身份码**：6 字母代号（如 `RASFHB`），可分享、可比较
5. **社交证明**：该原型在所有玩家中占比、"克星原型"、"最佳队友原型"

### 1.3 8 款游戏视觉身份令牌

8 套独立的色 / 字体重音 / 装饰元素，**共享同一套间距 / 圆角 / 动效曲线 / 网格栅格**，保证站内一致性。

> 落地形式：`lib/theme/game-themes.ts` 导出每款游戏的 token，运行时通过 `data-game="<slug>"` 在 root 切换 CSS 变量。具体实现见 §2 Phase 5。

| Slug | 视觉气质 | Primary | Secondary / Accent | Surface / Ink | 字体重音 | 装饰母题 | 设计参考 |
|---|---|---|---|---|---|---|---|
| `league-of-legends` | 召唤师峡谷 · 哥特蓝紫 | `#0AC8B9` (赫克斯科技青) | `#C89B3C` 王者金 · `#785A28` 锈金 | `#0A1428` 深暗渊 / `#F0E6D2` 羊皮纸 | Beaufort/Spiegel 风格衬线 (用 Cinzel + Inter fallback) | 哥特纹章 / 符文菱形边框 / 暮色峡谷线性渐变 | leagueoflegends.com 韩服 / LCK 海报 |
| `counter-strike-2` | 战术地图 · 黑橙 | `#DE9B35` 安全橙 | `#1B6EC2` 队伍蓝 · `#E84855` Bomb 红 | `#0F1419` 战术黑 / `#C5D0D8` 灰白 | JetBrains Mono headers + Inter body | 网格栅格 / 准星十字线 / 烟雾贴图过场 | HLTV / FACEIT / Valve KeyArt |
| `valorant` | 拳头 VAL · 玫红黑 | `#FF4655` VAL 红 | `#0F1923` VAL 黑 · `#ECE8E1` 米白 | `#0F1923` 主面 / `#ECE8E1` 字 | 几何无衬线粗体 (DM Sans 900) + 像素切角 | 像素切角 (clip-path) / 旋转的特工剪影 / 高对比色块 | playvalorant.com |
| `delta-force` | 任务简报 · 沙漠迷彩 | `#C19A4B` 沙色 | `#5E4F2E` 军绿 · `#E84B25` 警示橙 | `#1E1B14` 深棕 / `#D4C8A8` 米色 | 等宽数字 + 衬线标题（任务情报感） | 迷彩纹理底 / 路线虚线 / 简报印章 | Delta Force 官网 / 战术地图 |
| `honor-of-kings` | 国风金红 · 王朝感 | `#A8141A` 朱砂红 | `#D4A14A` 烫金 · `#0E0506` 玄黑 | `#1A0B0F` 紫红黑 / `#F7E9CD` 宣纸米 | 思源宋体 / 思源黑体粗体 + 衬线英文 | 水墨笔触 / 祥云纹 / 烫金描边 / 国潮渐变 | 王者荣耀官网 / 天美 KV |
| `overwatch-2` | 未来科幻 · 橙青撞 | `#F99E1A` OW 橙 | `#218FFF` 队蓝 · `#FF5C5C` 警告红 | `#1E1E22` 深空 / `#FFFFFF` 纯白 | Big Noodle Titling 风格（用 Bebas Neue 替代）+ 圆润几何 | 六边形粒子 / 立体浮雕英雄轮廓 / 推车轨迹 | playoverwatch.com / 暴雪 KV |
| `pubg-battlegrounds` | 战术写实 · 沙黄军绿 | `#FCBF1E` 物资黄 | `#6B6B47` 军绿 · `#E63946` 蓝圈红 | `#1A1A1A` 黑 / `#C7B299` 沙米 | 军用字体 (Oswald) + 等宽 HUD | 弹孔 / 战术胶带 / 地形等高线 / 撤离喷漆 | pubg.com / 韩国 PUBG 海报 |
| `apex-legends` | 工业未来 · 红黑霓虹 | `#DA292A` Apex 红 | `#2B2D31` 工业黑 · `#11D5FF` 标记青 | `#101317` 深黑 / `#B2B3B3` 钢灰 | 切角无衬线 (Industry / Saira Condensed) | 切角矩形 / 标记三角 / 工业铆钉 / 滑铲光弧 | ea.com/apex |

### 1.4 8 款游戏 × 8 原型矩阵

每款游戏挑 3 个**主导轴**（基于该游戏文化中最显著的玩家分歧维度），2³ = 8 个原型。

**Naming Rule**：每个原型名必须：① 含该游戏圈内梗 ② 中文 6-10 字 ③ 像 "Twitter bio 一行能 hold 住" ④ 不与现有 4 个旧名重复。

> 下表只列原型 slug 与 1 行定位。完整长描述、明显症状、克星、最佳队友 → Phase 3 撰写。

#### LoL（主导轴：Bond / Nerve / Mental）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| T-C-K | `rift-cfo` | 龙魂账房先生 | 团队向 / 风控向 / 钝感稳态，靠资源差赢比赛 |
| T-C-B | `tilt-shepherd` | 峡谷情绪安抚师 | 团队 + 风控 + 但易红温，被队友带节奏的辅助 |
| T-A-K | `clutch-evangelist` | 后期保研 C 位 | 团队 + 激进 + 钝感，相信"六神之后我能" |
| T-A-B | `flame-conductor` | 红温团战指挥 | 团队 + 激进 + 易燃，麦克风永远开着的开团手 |
| S-C-K | `mute-strategist` | 全屏静音运营家 | 独狼 + 风控 + 钝感，把 LoL 当单机棋类 |
| S-C-B | `solo-victim` | 单排苦主受难者 | 独狼 + 风控 + 易燃，"对面五个都是 GM" |
| S-A-K | `lane-tyrant` | 对线压迫艺术家 | 独狼 + 激进 + 钝感，5 分钟塔下击杀获得快乐 |
| S-A-B | `aram-poet` | 嚎哭深渊段子王 | 独狼 + 激进 + 易燃，桥上五人同时上头 |

#### CS2（主导轴：Tempo / Intel / Nerve）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| L-D-C | `eco-cfo` | Eco 回合财务总监 | 慢热 + 数据 + 风控，看见 force buy 表情管理失败 |
| L-D-A | `lineup-priest` | 投掷物图书馆员 | 慢热 + 数据 + 激进，每张图背 200 个 lineup |
| L-F-C | `silent-anchor` | 安静架点哲学家 | 慢热 + 手感 + 风控，残局靠玄学走位 |
| L-F-A | `clutch-saint` | 残局 1v3 圣徒 | 慢热 + 手感 + 激进，进语音前要先停三秒 |
| R-D-C | `default-igl` | 默认开局 IGL | 速通 + 数据 + 风控，每局开场都有 "set play" |
| R-D-A | `flash-entry` | 闪光弹进点先锋 | 速通 + 数据 + 激进，第一秒交完所有道具 |
| R-F-C | `aimer-cleric` | 信念架枪师 | 速通 + 手感 + 风控，"我能架到他出来为止" |
| R-F-A | `awp-cowboy` | 中门尊严狙击手 | 速通 + 手感 + 激进，每把 AWP 都觉得是历史名场面 |

#### VALORANT（主导轴：Bond / Intel / Flair）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| T-D-U | `lineup-librarian` | 道具档案馆长 | 团 + 数据 + 实用，背熟全图烟点 |
| T-D-H | `caffeinated-igl` | 咖啡因 IGL | 团 + 数据 + 表演，五秒给三套方案 |
| T-F-U | `sentinel-guardian` | 后场监护人 | 团 + 手感 + 实用，"你前压我兜底" |
| T-F-H | `clutch-narrator` | 残局解说员 | 团 + 手感 + 表演，1v4 还要说三句台词 |
| S-D-U | `methodical-jett` | 数据派决斗 | 独 + 数据 + 实用，进点前算所有 timer |
| S-D-H | `instalock-spectator` | 秒锁旁观者 | 独 + 数据 + 表演，秒锁 Jett 然后远程指挥 |
| S-F-U | `sheriff-economist` | 警长经济学家 | 独 + 手感 + 实用，eco 回合靠 Sheriff 上分 |
| S-F-H | `sheriff-mystic` | 警长一发玄学家 | 独 + 手感 + 表演，"我感觉他在那" |

#### Delta Force（主导轴：Nerve / Intel / Tempo）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| C-D-L | `extract-actuary` | 撤离路线精算师 | 风控 + 数据 + 慢热，每件装备都过 ROI |
| C-D-R | `recon-foreman` | 情报快读工头 | 风控 + 数据 + 速通，先抢撤离点再说 |
| C-F-L | `crate-philosopher` | 箱子哲学家 | 风控 + 手感 + 慢热，蹲到撤离的那种 |
| C-F-R | `whisper-runner` | 静步收割人 | 风控 + 手感 + 速通，靠脚步声开枪 |
| A-D-L | `kit-merchant` | 高价值套件商人 | 激进 + 数据 + 慢热，专挑高价值打劫 |
| A-D-R | `boss-contractor` | 高价值交火承包商 | 激进 + 数据 + 速通，地图首响必到 |
| A-F-L | `loadout-romantic` | 装备浪漫主义者 | 激进 + 手感 + 慢热，"装备就是穿来打仗的" |
| A-F-R | `road-movie-driver` | 装甲车公路片导演 | 激进 + 手感 + 速通，撤离时一定要开车 |

#### Honor of Kings（主导轴：Bond / Mental / Flair）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| T-K-U | `jungle-auditor` | 野区税务稽查员 | 团 + 钝感 + 实用，谁偷野谁挨罚单 |
| T-K-H | `family-host` | 家庭群团战主持人 | 团 + 钝感 + 表演，五排开黑情绪管理者 |
| T-B-U | `defeat-grief-counselor` | 投降票心理顾问 | 团 + 易燃 + 实用，每次都被劝住 |
| T-B-H | `teamfight-festival` | 团战节庆策划 | 团 + 易燃 + 表演，看见十人同屏就上头 |
| S-K-U | `lane-pressure-artist` | 对线压迫艺术家 | 独 + 钝感 + 实用，五分钟越塔击杀 |
| S-K-H | `skin-collector` | 限定皮肤鉴赏家 | 独 + 钝感 + 表演，赢了不晒皮等于没赢 |
| S-B-U | `solo-curse` | 单排诅咒承受者 | 独 + 易燃 + 实用，永远在 "再来一把" |
| S-B-H | `bm-ping-mayor` | 嘲讽信号市长 | 独 + 易燃 + 表演，掌握十种问号 ping 节奏 |

#### Overwatch 2（主导轴：Bond / Tempo / Mental）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| T-L-K | `ult-economist` | 大招经济会计 | 团 + 慢热 + 钝感，"别交，下一波再说" |
| T-L-B | `c9-trauma-curator` | C9 阴影策展人 | 团 + 慢热 + 易燃，永远盯着推车点 |
| T-R-K | `payload-parent` | 推车监护家长 | 团 + 速通 + 钝感，"先碰车再吵架" |
| T-R-B | `voice-line-saboteur` | 嘲讽语音破坏王 | 团 + 速通 + 易燃，胜负心藏在 "Hello!" 里 |
| S-L-K | `solo-tank-philosopher` | 单坦哲学家 | 独 + 慢热 + 钝感，"R 是给我的也是给团队的" |
| S-L-B | `dps-victim` | DPS 主角受害者 | 独 + 慢热 + 易燃，"我打得很高，但队友" |
| S-R-K | `flanker-monk` | 绕后僧侣 | 独 + 速通 + 钝感，永远从地图边缘出现 |
| S-R-B | `killcam-headliner` | 击杀镜头主演 | 独 + 速通 + 易燃，右上角名字就是命 |

#### PUBG（主导轴：Tempo / Nerve / Flair）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| L-C-U | `loot-accountant` | 物资会计师 | 慢热 + 风控 + 实用，背包整理强迫症 |
| L-C-H | `circle-aesthete` | 圈边美学家 | 慢热 + 风控 + 表演，永远卡圈边拍风景 |
| L-A-U | `ridge-sniper` | 山脊狙击士 | 慢热 + 激进 + 实用，跨地图开镜 |
| L-A-H | `prone-philosopher` | 决赛圈伏地哲学家 | 慢热 + 激进 + 表演，"草丛里有尊严" |
| R-C-U | `safezone-ferry` | 安全区摆渡者 | 速通 + 风控 + 实用，舔包但不恋战 |
| R-C-H | `final-pose` | 决赛圈造型师 | 速通 + 风控 + 表演，吃鸡前要换皮肤 |
| R-A-U | `hot-drop-cfo` | 落地刚枪精算师 | 速通 + 激进 + 实用，热门点能活下来的那种 |
| R-A-H | `hot-drop-comedian` | 落地刚枪喜剧人 | 速通 + 激进 + 表演，30 秒挂机不后悔 |

#### Apex Legends（主导轴：Tempo / Flair / Bond）

| 轴组合 | Slug | 中文原型名 | 1 行定位 |
|---|---|---|---|
| L-U-T | `rotation-cartographer` | 转点制图师 | 慢热 + 实用 + 团队，"圈在那边别打了" |
| L-U-S | `loot-hermit` | 物资苦行僧 | 慢热 + 实用 + 独狼，一个人舔三个箱子 |
| L-H-T | `pinging-poet` | 标记诗人 | 慢热 + 表演 + 团队，全队最会用 ping 系统 |
| L-H-S | `shield-influencer` | 换甲表演家 | 慢热 + 表演 + 独狼，红甲合成必须录屏 |
| R-U-T | `third-party-strategist` | 渔翁参谋长 | 速通 + 实用 + 团队，等枪声响一半再加入 |
| R-U-S | `solo-octane` | 独狼章鱼哥 | 速通 + 实用 + 独狼，跳板永远比队友远 |
| R-H-T | `slide-jump-evangelist` | 滑铲布道者 | 速通 + 表演 + 团队，"看我这个跳跃" |
| R-H-S | `wraith-portal-clown` | 恶灵传送门小丑 | 速通 + 表演 + 独狼，门开错三次也要继续开 |

### 1.5 首页信息架构（6 段沉浸结构）

```
1. Hero · 重锤
   - H1 大字: "你是哪种玩家?"  / "What Kind of Player Are You?"
   - 副标: 一句话讲清楚价值 (30 题 / 6 维 / 67 种结果 / 4 种语言)
   - 主 CTA: "选你的游戏" → 滚动到 Game Wall
   - 次 CTA: "看玩家说" → 跳 Featured Result
   - 背景: 8 款游戏 logo 几何拼贴 + 大六边形雷达 wireframe + 微动效
   - 顶部 stat 三联: "30 道题 · 6 个玩家维度 · 67 种结果"

2. How It Works · 信任建立
   - 3 步图解: ① 选游戏 ② 30 题情景 ③ 6 维玩家档案 + 原型卡
   - 每步配一张抽象插画 (用 SVG 几何 + 渐变,不依赖图片)

3. Game Wall · 核心目录 (CORE)
   - 8 张差异化海报卡, 每张继承该游戏 §1.3 视觉令牌
   - 卡片正面: 游戏 logo + 标语 + "30 题 · 8 个原型"
   - 卡片 hover (桌面) / tap (移动): 翻面展示该游戏 3 个最热门原型预览 + CTA
   - 布局: 桌面 2 列 / 平板 2 列窄 / 移动 1 列
   - 卡片排序优先级: 全球热度 (LoL → CS2 → VAL → HoK → PUBG → OW2 → Apex → Delta)

4. Featured Result · 社交证明
   - 3 张高人气原型结果卡横向滚动 (跨游戏混合)
   - 每张含: 原型 PNG + 雷达图缩略 + 1 句金句 + "X% 玩家也是这型"
   - 主 CTA: "看完整结果库" → /types 页

5. SBTI Flagship · 主测试入口
   - 保留当前 SBTI 入口卡, 视觉重做 (更突出 27 类型拼贴)

6. Why It's Different · 品牌价值
   - 4 个理由:
     a. 文化深度 (每款游戏单独写, 不是模板套壳)
     b. 心理学结构 (6 维双极, 67 种组合, 不是 BuzzFeed 水题)
     c. 截图友好 (每个结果都为社交分享设计)
     d. 多语种原生 (zh/en/ja/ko 不是机翻)

7. FAQ + Footer CTA
   - 5 个 FAQ (用 Accordion): 测试要多久 / 准不准 / 数据隐私 / 多语种 / 怎么分享
   - Footer 重复主 CTA
```

---

## 2. 执行步骤（按 Phase 顺序，每 Phase 可独立验收）

### Phase 1 · 数据模型重构（前置基础，最先做）

**目标**：把 715 行的 `lib/data/game-quizzes.ts` 拆解为可扩展的多文件结构，并把 4 桶累加换成 6 维向量计分。

**任务**：
- [ ] 1.1 创建 `lib/data/games/types.ts`：定义 `Dimension`、`PolarityCode`、`OptionScoring`、`QuestionV2`、`ArchetypeV2`、`GameQuizV2` 新类型
- [ ] 1.2 创建 `lib/data/games/dimensions.ts`：导出 §1.1 的 6 个轴定义 + 极性反馈话术（每个轴 × 4 语言 × 2 极性 = 48 段反馈）
- [ ] 1.3 创建 `lib/data/games/scoring.ts`：
  - `computeScores(answers, questions): Record<Axis, number>` — 累加每个轴的净分
  - `normalize(rawScores): Record<Axis, number>` — 归一化到 0~100
  - `derivePolarityCode(scores): string` — 输出 6 字母代号
  - `mapToArchetype(code, game): ArchetypeV2` — 按游戏映射到 8 原型
- [ ] 1.4 为 §1.2 的所有 scoring 函数写单元测试（`__tests__/scoring.test.ts`），覆盖：
  - 全部选低极的极端解 → 期望代号 `LCSDU K`
  - 全部选高极的极端解 → 期望代号 `RATFHB`
  - 平均答题 → 期望代号每位接近 50 边界（容忍 ±5）
  - 8 款游戏的 8 个原型都能被某组答案触发
- [ ] 1.5 创建 `lib/data/games/{slug}.ts` × 8（每款一个文件，导出 `GameQuizV2`）— Phase 3 填充内容，这里先建空骨架
- [ ] 1.6 创建 `lib/data/games/index.ts`：聚合 8 个 slug 文件，导出 `ALL_GAMES_V2: GameQuizV2[]`、`getGameV2(slug)`、`GAME_SLUGS`
- [ ] 1.7 保留旧 `lib/data/game-quizzes.ts` 作为 V1 兼容入口，不立刻删（Phase 9 验收通过后再删）
- [ ] 1.8 跑 `pnpm tsc --noEmit` 确认类型正确

**验收门**：
- 单测全过
- `tsc --noEmit` 0 error
- 8 个空游戏文件能被 `index.ts` 正确聚合（运行 `pnpm dev` 不报错）

### Phase 2 · 玩家文化调研（在写题前必须做）

**目标**：为每款游戏建立"文化档案"，保证 Phase 3 写出来的题目有圈内梗、不是 ChatGPT 通用感。

**每款游戏必须研究的 6 项**（结果写到 `docs/research/{slug}.md`）：

1. **角色/装备生态**：当前版本的热门 build、英雄/特工/枪械梗、被骂版本平衡问题
2. **玩家梗与亚文化**：FF15、Eco round、伏地魔、C9 trauma、3 万 Gank、菜鸡互啄等等
3. **职业赛事文化**：LCK/LPL 经典场面、Major 名场面、Riot/Valve/Blizzard/EA 官方梗
4. **直播圈生态**：知名主播的口头禅（如 doinb、Faker、s1mple、TenZ）
5. **服务器/分段文化**：钻一、王者、不朽、最高分段段位梗
6. **跨语种本地化梗**：中/日/韩/英玩家圈对同一现象的不同说法（例：LoL "送" = "feed" = "급식" = "餌"）

**信息源建议**：
- 该游戏官方 wiki / patch notes
- liquipedia（电竞百科）
- Reddit r/{game} top all-time posts
- Twitch 主播 highlight 合辑
- 中文：贴吧、NGA、B 站梗百科
- 韩文：dcinside / 인벤 (Inven) / fmkorea
- 日文：5ch / 4gamer.net 玩家评论区

**任务**：
- [ ] 2.1 建立 `docs/research/` 目录
- [ ] 2.2 给 8 款游戏每款写一份 ~500 字 markdown：6 项各 50-80 字 + 一份 ~20 条的梗 / 热词速查表
- [ ] 2.3 调研结果作为 Phase 3 写题时的素材库，不直接进代码

**验收门**：8 个调研文档完成，每篇覆盖 6 项研究维度，每个原型 slug 都有对应的"圈内出处"备注。

### Phase 3 · 240 道题 + 64 个原型撰写

**目标**：基于 Phase 2 调研，写出 8 × 30 = 240 题 + 8 × 8 = 64 原型完整内容。先全部中文落地 → Phase 4 翻译。

**写题工作流**（每款游戏一个 PR）：
1. 打开 `lib/data/games/{slug}.ts` 空骨架 + `docs/research/{slug}.md` 调研
2. 先写 8 个原型完整定义（名称已锁定，补长描述 + 4 条明显症状 + 克星 + 最佳队友 + 1 个 punchline）
3. 写 12 道纯轴锚定题（每轴 2 题）— 这是骨架，确保 6 维都被采样
4. 写 18 道复合情景题 — 每题选 2 个轴，确保跨题分布均衡
5. 写完后自检：
   - 每个选项是否清楚归属 1~2 个轴？
   - 30 题里没有"明显是 ChatGPT 写的通用句"？（含"队友""节奏""手感"等过度模板词的题目数 ≤ 5）
   - 同一原型在所有题里至少有 ~4 次被触发的路径？（避免某原型永远拿不到）

**UX 心理学写题准则**（每条都要内化，不写到文档里）：
- **Peak-end rule**：前 3 题和最后 3 题用最有梗、最有传播性的情境
- **Self-reference effect**：选项必须用具体的游戏场景词，而不是"我会冷静思考"这种空洞句
- **First-person present-tense**：所有题目和选项都用 "你"/"我" + 现在时
- **Cognitive ease**：4 个选项长度差不超过 20%（截屏排版才好看）
- **Balanced ridicule**：4 个原型方向都有同等的"被自嘲快感"，不能某个原型显得明显傻
- **No correct answer**：4 个选项都要让该原型玩家觉得"这就是我"
- **Barnum dialed up**：原型描述要 80% 让人觉得说中、20% 留有特异性（例："你会在死后两秒说出原因"）

**任务**：
- [ ] 3.1 LoL — 30 题 + 8 原型完整中文（含克星表）
- [ ] 3.2 CS2 — 同上
- [ ] 3.3 VALORANT — 同上
- [ ] 3.4 Delta Force — 同上
- [ ] 3.5 Honor of Kings — 同上
- [ ] 3.6 Overwatch 2 — 同上
- [ ] 3.7 PUBG — 同上
- [ ] 3.8 Apex Legends — 同上
- [ ] 3.9 跑 scoring 测试：用每个原型的"目标答案集"反向验证能稳定输出该原型

**验收门**：
- 240 题全部完成，每题 4 选项都带轴评分
- 64 原型全部完成，含长描述 / 明显症状 / 克星 / 最佳队友 / punchline
- 反向验证脚本通过：8 × 8 = 64 个原型都能被某组确定答案触发

### Phase 4 · 多语种翻译（en / ja / ko）

**目标**：Phase 3 的中文内容同步落地到 en / ja / ko。

**翻译准则**（写到提示词里给翻译工具用）：
- 不许出现 AI 写作词汇（参考 [CLAUDE.md](./CLAUDE.md) "AI tells" 列表）
- 保留游戏圈本地梗（不是直译），需要查该地区玩家是怎么说同一件事的
- 4 个选项的字符长度比例和中文一致
- 原型名要本地化：中文"嚎哭深渊段子王" → en "Howling Abyss Headliner" / ja "ハウリングアビス芸人" / ko "칼바람 드립 장인"

**任务**：
- [ ] 4.1 翻译 8 个游戏文件的全部 `LocalizedText` 字段（240 题 × 4 选项 × 3 语种 + 64 原型 × 描述/症状/punchline × 3 语种）
- [ ] 4.2 用 `pnpm --filter sbti-next exec next-intl check` 类指令确认 i18n key 一致
- [ ] 4.3 抽样 30% 由人工/不同 LLM 复核

**验收门**：4 语种 key 完全对齐，无 untranslated 项。

### Phase 5 · 游戏主题系统实现

**目标**：把 §1.3 的 8 套视觉令牌做成可在 root 切换的 CSS 变量系统，让游戏详情页 + 首页 Game Wall 卡片各自呈现独立气质。

**架构**：
```css
:root[data-game="league-of-legends"] {
  --game-primary: #0AC8B9;
  --game-secondary: #C89B3C;
  --game-surface: #0A1428;
  --game-ink: #F0E6D2;
  --game-font-display: 'Cinzel', serif;
  --game-decor-pattern: url("/decor/lol-rune.svg");
  /* ... 等等 */
}
:root[data-game="counter-strike-2"] { ... }
/* 8 套 */
```

**任务**：
- [ ] 5.1 创建 `lib/theme/game-themes.ts`：8 个 `GameTheme` 对象 + `applyGameTheme(slug)` 函数
- [ ] 5.2 在 `app/globals.css` 用 `@layer` 加 8 个 `:root[data-game="..."]` 选择器
- [ ] 5.3 改造 `app/[locale]/games/[slug]/page.tsx`：在 server component 给 `<html>` 或 root `<div>` 注入 `data-game={slug}`
- [ ] 5.4 在首页 Game Wall 卡片层使用 `data-game={slug}` 限定到单卡片作用域（让 8 张卡同屏共存）
- [ ] 5.5 装饰元素 SVG 资产：`public/decor/{slug}-{pattern}.svg`（哥特纹章 / 网格 / 像素切角 / 迷彩 / 祥云 / 六边形 / 弹孔 / 切角铆钉）
- [ ] 5.6 字体：Cinzel / Bebas Neue / Oswald / Saira Condensed 通过 `next/font/google` 引入，按需子集化（仅 lat-ext + zh subsets）

**验收门**：
- 8 款游戏详情页主背景 / 主色按钮 / 强调元素都呈现该游戏视觉
- 首页 Game Wall 8 张卡片同屏共存，每张配色独立无相互污染
- Lighthouse 仍 ≥ 90（字体加载不能崩 LCP）

### Phase 6 · 首页重设计

**目标**：把 252 行的 `components/test-hub-page.tsx` 拆解为 §1.5 的 6 段结构，每段一个组件文件。

**新增文件结构**：
```
components/home/
  hero.tsx                  # Section 1
  how-it-works.tsx          # Section 2
  game-wall.tsx             # Section 3 (核心)
  game-poster-card.tsx      # Game Wall 的单卡
  featured-result.tsx       # Section 4
  flagship-sbti.tsx         # Section 5
  why-different.tsx         # Section 6
  faq.tsx                   # Section 7
  index.tsx                 # 聚合
```

**任务**：
- [ ] 6.1 Hero (`hero.tsx`)：
  - 大字 H1 + 副标 + 双 CTA
  - 背景: 8 个游戏 logo 几何拼贴 (CSS grid + transform) + 大六边形 SVG wireframe + 微动效（Hero 入场 fade + 六边形缓慢旋转）
  - 顶部 stat 三联用 `<motion.div>` 数字滚动 (framer-motion)
  - 移动端: stat 改 2x2 排
- [ ] 6.2 How It Works (`how-it-works.tsx`)：
  - 3 步水平卡片（桌面）/ 垂直堆叠（移动）
  - 每张卡: 抽象 SVG 几何图标 + 12 字标题 + 30 字描述
- [ ] 6.3 Game Wall (`game-wall.tsx` + `game-poster-card.tsx`)：
  - 2 列 grid (桌面) / 1 列 (移动)
  - 单卡内 `data-game={slug}` 限定主题作用域
  - 默认面: 大 logo + 标语 + meta (30 题 · 8 原型) + CTA
  - hover/tap 翻面 (CSS transform-style: preserve-3d): 显示该游戏 3 个热门原型预览
  - 卡片排序按 §1.5 排序
- [ ] 6.4 Featured Result (`featured-result.tsx`)：
  - 横向滚动 3 张原型卡 (`scroll-snap-type: x mandatory`)
  - 每张卡: 原型 PNG + 雷达缩略 + 金句 + "X% 玩家也是这型"
  - 移动端: 全宽轮播
- [ ] 6.5 SBTI Flagship (`flagship-sbti.tsx`)：
  - 保留入口逻辑，重做视觉：左侧 27 个人格图小尺寸拼贴 / 右侧大 CTA
- [ ] 6.6 Why It's Different (`why-different.tsx`)：
  - 4 个理由 2x2 grid
  - 每个理由: 数字徽章 + 标题 + 30 字解释
- [ ] 6.7 FAQ (`faq.tsx`)：
  - 用 shadcn `<Accordion>`
  - 5 条 FAQ × 4 语种
- [ ] 6.8 主文件 (`index.tsx`)：聚合 7 段
- [ ] 6.9 改 `app/[locale]/page.tsx` 引用新组件，移除旧 `<TestHubPage>` 引用
- [ ] 6.10 移动端 viewport 验证（375 / 414 / 768 三个断点）

**验收门**：
- 7 段在 4 语种下都正常渲染
- 8 张 Game Wall 卡片视觉差异明显（截图人眼一眼区分）
- Lighthouse Performance ≥ 90 / A11y ≥ 95 / SEO 100
- 桌面 + 移动 + 平板 三档断点无破版

### Phase 7 · 结果页 + 雷达图 + 分享卡

**目标**：把 6 维结果在结果页可视化，把分享卡升级到能展示玩家身份码 + 雷达图。

**任务**：
- [ ] 7.1 创建 `components/radar-chart-six-axis.tsx`：
  - 纯 SVG 实现六边形雷达图（不依赖第三方）
  - 支持 light / dark mode + 当前游戏主题色
  - 6 个顶点带轴名 (zh/en/ja/ko 切换)
- [ ] 7.2 改造 `components/result-phase.tsx`：
  - 顶部原型大图 + 原型名 + 玩家身份码 (6 字母)
  - 中部六边形雷达
  - 下方 6 行轴反馈（从 `lib/data/games/dimensions.ts` 取该轴该极性的话术）
  - 底部"明显症状" / "克星" / "最佳队友" / 重测按钮 / 分享按钮
- [ ] 7.3 改造 `components/save-result-image.tsx`：
  - 1080×1920 分享图加入雷达图缩略 + 6 字母身份码
  - 保留两种尺寸 (1080×1080 方图 / 1080×1920 IG 故事)
- [ ] 7.4 64 个原型的结果路由：
  - 用 query-param 而非新增 64 个静态路由（节省 build 时间）：`/games/{slug}/result?archetype={archetype_slug}`
  - OR 用 dynamic segment + `generateStaticParams` 静态生成 64 个 (推荐，SEO 友好)
- [ ] 7.5 给每个原型生成 OG 图（用现有 `result-share.ts` 流程）

**验收门**：
- 答完 30 题能看到雷达图 + 6 行反馈 + 原型卡
- 分享出去的图含雷达 + 玩家身份码
- 64 个原型的结果 URL 都可访问且有独立 OG 图

### Phase 8 · SEO / sitemap / metadata 更新

**目标**：64 个新原型 URL + 8 个游戏页 + 新首页都进 sitemap，metadata 跟随游戏主题更新。

**任务**：
- [ ] 8.1 更新 `app/sitemap.ts`：加入 64 个原型 URL × 4 语种 = 256 个新条目
- [ ] 8.2 更新 `lib/metadata.ts`：每款游戏的 SEO title/description 提到"6 维 / 30 题 / 8 原型"
- [ ] 8.3 更新 `lib/json-ld.ts`：首页 `ItemList` 含 8 款游戏 + 64 原型的 hierarchical schema
- [ ] 8.4 更新博客 + about + faq 的 JSON-LD（如有引用旧的 4 原型架构）
- [ ] 8.5 跑 build 输出 sitemap，人工抽查 10 个原型 URL 有 200 响应

**验收门**：sitemap 正确 / build 通过 / Google Search Console 验证不报错。

### Phase 9 · 质量门 + 上线

**目标**：在切到 V2 之前的所有自动 / 半自动验证。

**任务**：
- [ ] 9.1 `pnpm tsc --noEmit` 0 error
- [ ] 9.2 `pnpm build` 成功
- [ ] 9.3 `pnpm lint` 0 error
- [ ] 9.4 Lighthouse 桌面 + 移动 双跑 (`/`, `/games/league-of-legends`, `/games/league-of-legends/result?archetype=aram-poet`)：
  - Performance ≥ 90
  - A11y ≥ 95
  - SEO 100
  - Best Practices ≥ 95
- [ ] 9.5 screenshot regression：用 Playwright 在 desktop / tablet / mobile × 4 语种 × 3 关键页 截图，存到 `tests/screenshots/`
- [ ] 9.6 a11y 抽查：tab 键能走通首页 + 答题 + 结果页 + 分享按钮
- [ ] 9.7 移除旧 `components/test-hub-page.tsx` + 旧 `lib/data/game-quizzes.ts`
- [ ] 9.8 写一份 ~200 字的 release note 到 `docs/releases/2026-XX-XX-six-axis-redesign.md`
- [ ] 9.9 提 PR 到 main，描述含"6 维架构 / 8 游戏视觉 / 30 题/游戏"三个关键词

**验收门**：所有自动检查通过，PR 可 merge。

---

## 3. 完整文件清单（变更明细）

### 新增

```
docs/research/{league-of-legends,counter-strike-2,valorant,delta-force,honor-of-kings,overwatch-2,pubg-battlegrounds,apex-legends}.md
lib/data/games/types.ts
lib/data/games/dimensions.ts
lib/data/games/scoring.ts
lib/data/games/{slug}.ts × 8
lib/data/games/index.ts
lib/data/games/__tests__/scoring.test.ts
lib/theme/game-themes.ts
components/home/hero.tsx
components/home/how-it-works.tsx
components/home/game-wall.tsx
components/home/game-poster-card.tsx
components/home/featured-result.tsx
components/home/flagship-sbti.tsx
components/home/why-different.tsx
components/home/faq.tsx
components/home/index.tsx
components/radar-chart-six-axis.tsx
public/decor/{lol-rune,cs2-grid,val-pixel,delta-camo,hok-cloud,ow-hex,pubg-bullet,apex-bevel}.svg
docs/releases/2026-XX-XX-six-axis-redesign.md
```

### 修改

```
app/[locale]/page.tsx                    # 引用新 home/index
app/[locale]/games/[slug]/page.tsx       # 注入 data-game / 用 V2 数据
app/[locale]/games/[slug]/result/...     # 新增 64 原型 dynamic route
app/globals.css                          # 8 个 data-game 主题块
app/sitemap.ts                           # +256 URL
components/game-quiz-app.tsx             # 改用 V2 scoring engine
components/result-phase.tsx              # 加雷达 + 6 行反馈
components/save-result-image.tsx         # 加身份码 / 雷达
lib/metadata.ts                          # 8 游戏 SEO 更新
lib/json-ld.ts                           # 加 hierarchical schema
DESIGN.md                                # 加"游戏专属主题"章节
.impeccable.md                           # 加"per-game theming"说明
```

### 删除（Phase 9 验收后）

```
components/test-hub-page.tsx
lib/data/game-quizzes.ts
```

---

## 4. 验收标准（整体）

- [ ] 8 款游戏每款 30 题（无 supplementalQuestions 通用填充）
- [ ] 8 款游戏每款 8 原型（共 64 原型，跨游戏不重名）
- [ ] zh / en / ja / ko 四语种内容齐全
- [ ] 8 套游戏视觉令牌可被 `data-game` 切换
- [ ] 首页 7 段结构上线（Hero / HowItWorks / GameWall / Featured / SBTI / Why / FAQ）
- [ ] 雷达图 + 6 行反馈在结果页正常渲染
- [ ] 玩家身份码（6 字母）在结果页 + 分享图上呈现
- [ ] Lighthouse Performance ≥ 90, A11y ≥ 95, SEO 100
- [ ] `pnpm tsc --noEmit` + `pnpm build` 0 error
- [ ] sitemap 含 64 个原型 URL × 4 语种
- [ ] PR 含 release note

---

## 5. 风险与回退策略

| 风险 | 概率 | 影响 | 缓解 |
|---|---|---|---|
| 240 题写不完 / 写得潦草 | 高 | 高 | Phase 3 按游戏切 8 个独立 PR；每个 PR 单独 review |
| 64 原型 result PNG 缺失 | 中 | 中 | Phase 1 阶段先用 4 张旧通用图占位；Phase 10（本手册外）补图 |
| 字体加载导致 LCP 退化 | 中 | 中 | Phase 5 字体强制 `display: swap` + 仅子集化 |
| 6 维计分边界 case 输出 NaN | 低 | 高 | Phase 1.4 单测必须覆盖空答案 / 全答同一选项 / 极端答案 |
| 翻译质量参差 | 中 | 中 | Phase 4 抽 30% 人工复核；不通过则该游戏重译 |
| Static export 路由超 64 个导致 build 超时 | 低 | 中 | Phase 7.4 用 `generateStaticParams` 显式枚举，避免动态生成爆炸 |

**回退点**：
- Phase 1-2 不动 UI / 不动用户感知，安全
- Phase 3-4 数据落地后可独立 hold（不 merge 到 main）
- Phase 5-7 是用户感知改动，必须有 feature flag：用 env `NEXT_PUBLIC_USE_V2=true` 切换 V1/V2 数据源，便于灰度
- Phase 9 验收失败可直接 revert PR，旧 V1 路径保留至 Phase 9.7

---

## 6. Open Questions（仅留 2 个，其余已自行决策）

1. **64 个新原型 PNG 是这次一起出，还是先用通用占位、稳定后再出？**
   - 推荐：先占位（用旧的 4 原型 PNG 按"主导轴 1 极性"映射），等线上数据稳定后做单独 Phase 10 出 64 张新图，避免阻塞主流程
2. **是否需要"邀请朋友测一份对比"功能？**
   - 推荐：本次不做，留到 V3。本次只把分享路径打通（保留现有 `result-share-page` 流程，仅升级图模板）

---

## 7. 下个会话开工指引

如果你是新会话的 agent，请按下面 3 步开始：

1. **读这个文件全文**（你正在读），确认你理解 §1 所有决策、§2 所有 Phase
2. **运行 `pnpm install && pnpm dev`** 让本地能跑起来，访问 `/zh` 看到当前首页
3. **从 Phase 1.1 开始**：创建 `lib/data/games/types.ts`，按 §1.1 / §1.2 定义新类型

如果在 Phase 1 实现中发现任何 §1 决策不合理，记录到这个 todo.md 最下方的 "Phase Notes" 区，**不要回头改 §1 决策本身**，先把当前 Phase 做完，最后再回来一起评估。

---

## 8. Phase Notes（执行过程中的发现 / 偏差记录）

> 留空，由后续会话填充。
