# .rankup 目录索引 — sbti.support

- 项目：sbti.support（SBTI，静态导出 Next.js + Cloudflare Pages）
- 最近更新：2026-09-20
- 当前目标：通用词从 0 曝光起量；韩国市场 Naver 收录
- 下一入口：`PROJECT.md` → `plan.md`

## 推荐读取顺序

1. [PROJECT.md](PROJECT.md) — 产品定位、技术形态、部署链路、凭据位置、目标与非目标
2. [plan.md](plan.md) — 当前 P1/P2 与完成判定
3. 按任务取用下列专题文件

## 文件

| 文件 | 内容 | 最近核对 | 状态 |
|---|---|---|---|
| [PROJECT.md](PROJECT.md) | 产品定义、技术栈、路由、部署、凭据登记 | 2026-08-02 | current |
| [baseline.md](baseline.md) | GSC/流量基线快照（每轮优化前后各记一笔） | 2026-07-18 | 待复查（下一笔应在 8 月中） |
| [keywords.md](keywords.md) | 词库：品牌词集群、验证过的通用词、承接位置 | 2026-07-18 | current |
| [decisions.md](decisions.md) | 已裁决事项（做/不做/原因），防止重复调研 | 2026-08-02 | current |
| [audit.md](audit.md) | 技术体检结果（含 2026-09-20 Bing Recommendations 修复） | 2026-09-20 | current |
| [checks.md](checks.md) | 闸门核对记录（✅/⏸ + 证据路径） | 2026-09-20 | current |
| `evidence/bing-fix-2026-09-20/` | Bing 报告原始 URL、线上复测、IndexNow 返回码、seo-audit/webcafe/is-agentic 结果 | 2026-09-20 | current |
| [plan.md](plan.md) | 行动计划（P0-P2，含预期影响与完成判定） | 2026-08-02 | current |
| [experience.md](experience.md) | 本站可复用经验（带证据出处与数字的完整原文） | 2026-08-02 | current |
| [consults/gefei-2026-08-19-jp-mbti.md](consults/gefei-2026-08-19-jp-mbti.md) | 哥飞 SEO Agent 对日语 MBTI 新站的裁定全文（5,979 字，含它调的知识库与实时 SERP） | 2026-08-19 | current |
| [consults/brief-2026-08-20-verify.md](consults/brief-2026-08-20-verify.md) | 交给哥飞复核的材料：外链供应商指纹、内容打靶、6 个问题 | 2026-08-20 | current |
| [consults/gefei-2026-08-20-verify.md](consults/gefei-2026-08-20-verify.md) | 哥飞复核回答全文（6,852 字）。**其中两个站的流量快照已被 Semrush 证伪，见 opportunity 第 10.3 节** | 2026-08-20 | current |
| [opportunity-new-site.md](opportunity-new-site.md) | **新站方向裁决**：纠正「被 K」前提、四市场可打词池对比、日语型名簇 105 万/月的发现、被证伪的两个候选 | 2026-08-19 | current |
| [opportunity-game-mbti.md](opportunity-game-mbti.md) | 方向研究：游戏/角色 MBTI 的盘面、竞品模板结构、可打方向排序 | 2026-08-19 | current |

## 脚本（可复用操作，先用这些，不要重新摸索）

| 脚本 | 用途 | 参数 | 依赖登录态 | 已验证 |
|---|---|---|---|---|
| `scripts/fetch-pinned.mjs` | DoH 解析 + `curl --resolve` 直连，绕开本机 Clash fake-IP 对某些域名的握手失败 | `pinnedFetch(url, {headers,body,method})`；`skillEnv(KEY)` 读 Skill 根 `.env` | 无 | 2026-08-19 |
| `scripts/kd-batch.mjs` | 批量跑关键词难度 + top9 盘面，**每词落一次盘**，重跑自动跳过已完成 | `--file/--keyword --gl --hl --out --gap` | 无（用 Skill `.env` 的 `KD_TOKEN`） | 2026-08-19 |
| `scripts/receiver.mjs` | 本地接收端：页面 POST 数据直接落进项目目录，绕开下载目录；另有 `GET /script?name=harvest\|chatbot\|semrush\|kwmagic` 把脚本喂给页面（**注入提取器不再需要贴源码**）。**端口按 root 派生并写进 `.rankup/receiver.json`，占用时崩掉而不静默退让；`/ping` 回报 root 供调用方核对** | `--root`（`--port` 仅在需要固定端口时传） | 无 | 2026-08-19 |
| `scripts/RUNBOOK-gefei.md` | 哥飞 SEO Agent（网页版、无对话 API）的完整取答流程：触发语、PROFILE、base64 传长文、会话找回、落盘。**会话台账在 `data/gefei/conversations.md`** | — | 无 | 2026-08-20 |
| `scripts/RUNBOOK-similarweb.md` | Similarweb Web Intelligence 全部 URL 模板、可用/被锁的过滤器、站点特有坑 | — | 用户真实 Chrome | 2026-08-19 |
| `scripts/semrush-export.browser.js` | **Semrush 批量导出驱动**：点「导出当前页面」逐页导 CSV，不滚动不抓 DOM。`SEMX.run({pages:N})`（不要 await） | `pages` / `wait` | 用户真实 Chrome | 2026-08-19（op.gg 4 页 400 行） |
| `scripts/semrush-collect.mjs` | 把导出的 CSV 等齐、归并重名副本、搬进项目并按 `<目标>__<报表>__pNN__<日期>.csv` 改名、写 manifest、行数为 0 报错 | `--target --report --expect --out --since --downloads --timeout` | 无 | 2026-08-19 |
| `scripts/semrush-kwmagic.browser.js` | **关键词魔法工具批量导出**：一次把整个筛选结果（几千词，含搜索量/KD/CPC/意图/SERP特征）免费导成 CSV。`KWM.export()` | `fmt` / `timeout` | 用户真实 Chrome | 2026-08-19（9 个 seed × 4 国家库） |
| `scripts/kwmagic-report.mjs` | 把导出的 CSV 汇总成盘面报告：每个 seed 的词数/总量/意图簇分布 + TopN | `--dir --top --kd --min-vol` | 无 | 2026-08-19 |
| `data/game-mbti/competitor/` | 竞品 `character-seikaku.memo.wiki` 的 db=jp 全量导出：`jp-toppages.csv`（1,224 页）+ `jp-positions.csv`（3,860 词排名） | — | 无 | 2026-08-19 |
| `data/game-mbti/raw/character-seikaku__refdomains__p01__*.csv` | 同一竞品的 78 个引荐域名（含 AS / 反链数 / 国家 / 首末见） | — | 无 | 2026-08-19 |
| `.backlink/discovery.json` | 外链发现队列，79 节点 / 78 边（`refdomain` 类型）。用 backlink Skill 的 `discovery-queue.mjs` 操作，**全部 pending，尚未验证任何一个是否可投稿** | `stats` / `next` / `mark` / `import-refdomains` | 无 | 2026-08-19 |
| `data/game-mbti/kwmagic/REPORT.md` | 上述报告产物：美/日/韩/台四库 9 个 seed 的可打词盘面 | — | 无 | 2026-08-19 |
| `scripts/semrush-RUNBOOK.md` | Semrush 代理站 URL 模板、`db=kr/jp` 分国家体量、导出的两个同名按钮之别 | — | 用户真实 Chrome | 2026-08-19 |
| `data/kd-summary.md` | 韩/日/中/英四市场 74 词的 KD 与盘面对比报告 | — | 无 | 2026-08-19 |

表格提取**一律用** `backlink/scripts/harvest.browser.js`，不要手写——这是用户明确划的红线。

尚未建立：`roadmap.md`、`iterations.md`（目前只跑了一轮完整迭代，等第二轮再建）。

## 最近变化

- 2026-09-20：修 Bing Webmaster Recommendations（IndexNow 接入部署流程、42 页短标题、`/games` hub 404、h1→h3 跳级），见 `audit.md` 同日节与 `checks.md`。项目脚本 `pnpm seo:audit`（构建后离线查 TDK/h1/canonical/alt/hreflang）、`pnpm indexnow`（`--all` 全量 / `--baseline` 差集 / 指定路径）。

- 2026-08-02：`rankup review`。补建 `PROJECT.md`；修订 `decisions.md` 里被推翻的"compat 撤 sitemap 不 noindex"条目（实际当晚已升级为全线 noindex，代码已核实）；同步修正 `plan.md` P2 的过时观察项；`experience.md` 追加 2 条（图片压缩工具链、brief 里"已验证事实"仍需复核）。
- 2026-08-02：从 rankup Skill 迁出本站经验到 `experience.md`（commit b22635c）。
- 2026-07-18 晚：autopilot 轮——schema 合规、4,742 页 noindex 矩阵、图片 -52%、8 游戏文化重写、韩语母语化（commits 702e1ce / 4c95873 / a8ef7f1）。
- 2026-07-18：GSC 诊断 + 四语言 meta 重写 + sitemap 收缩（commits 38d6206 / dda723e）。
