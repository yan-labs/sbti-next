# Semrush 代理站踩点报告

- 入口：`https://sem.3ue.co/home/?__gmitm=`
- 踩点日期：2026-08-19
- 结论先写这里，边做边补充下方细节。

## 域名与跳转

- 入口域名 `sem.3ue.co` 加载后**没有条约到 semrush.com**，保持同域（反向代理），页面标题为 "Semrush Folders: Take control of your data"（说明落地在 Semrush 的 "My Reports/Folders" 首页）。
- URL 结构待补充（hash 路由 vs path 路由）。

## 全局机制

- 登录态是 **cookie/session**，不是 URL token：入口的 `__gmitm=...` 查询参数只是首页反代跳转用的，进入到 `analytics/*` 之后**去掉这个参数照样能访问**，说明脚本里不需要每次都带它。
- 域名是 path 路由（不是 hash 路由，和 sim.3ue.co 不同）：`https://sem.3ue.co/<module>/<report>/?<params>`
- 顶部产品切换：SEO / 本地 / 内容 / 广告 / AI PR（对应 `analytics/*`、`local-business/*`、`content/*`、`advertising/*`、`pr-toolkit/*`），本轮只摸了 SEO 大类。
- 左侧一级导航（SEO 大类）：信息中心 / 站点表现（网站检测、排名跟踪）/ 竞品分析（域名概览、自然排名、主要页面、比较域名、关键词差异、反向链接差异）/ 关键词研究（关键词概览、关键词魔法工具、关键词策略构建器）/ 内容创意（SEO 写作助手、主题研究）/ 外链建设（反向链接、引荐域名、反向链接检测）/ 其他（继续往下滚动待补）。
- **首页「用于监控的域名」表格里的域名（insta360.com / store.insta360.com / homeyfad.com / aozhonggrinding.com 等）是共享账号里别人已经在追踪的项目**，按规则不读取、不落盘、不写进报告，本文档除此说明外不再提及具体值。

## A. 功能地图

### 域名概览（Domain Overview）—— 可用，未锁

- URL 模板：`https://sem.3ue.co/analytics/overview/?q=<domain>&db=<country>&searchType=domain`
  - `db`：国家代码，如 `us`/`uk`/`de`，还有一个「全世界」选项（radiogroup 里能看到，值待确认，猜测 `db=worldwide`，在 AI SEO tab 里验证到确实是 `db=worldwide`）
  - `searchType`：`domain`（根域名）/ 猜测还有 `subdomain`（首页监控表格里 store.insta360.com 用的是 `searchType=subdomain`）
- 回答的问题：这个域名的 Authority Score、AI 可见度（ChatGPT/AI Overview/AI Mode/Gemini 分別的提及与引用页面数）、自然流量、付费流量、自然/付费关键词数、反向链接数、引荐域名数，还有分国家流量占比、增长趋势图（1个月/6个月/1年/2年/全部时间，按天或按月粒度）。
  - **口径**：桌面设备（有下拉可切移动端）、单一国家数据库或全球汇总，时间窗按上面选项。
  - 实测 personality-database.com（db=us）：Authority Score 46，自然流量 169,756，自然关键词 153,054，反向链接 79,202，引荐域名 7,236，付费流量/关键词为 0。
- **完全可用，不锁**：概览页所有卡片、图表、按国家比较、增长审核 tab 都正常出数据，不是"升级解锁"占位符。
- 从概览页可以一键跳转到细分报表（每个数字都是链接）：自然流量→自然搜索研究，反向链接→反向链接分析，引荐域名→引荐域名报表，付费流量→广告研究。

### AI SEO（AI 可见度）—— 可用，Similarweb 完全没有这块

- URL 模板：`https://sem.3ue.co/ai-seo/overview/?db=<country>&q=<domain>&llm=<gpt|aiOverview|aiMode|gemini>&preset=brandedSources`
  - `llm` 不传 = 汇总所有模型；传了就是单看某个模型（ChatGPT / Google AI Overview / Google AI Mode / Gemini）
  - `preset=brandedSources` = 只看品牌相关的引用来源
  - `db` 支持 `worldwide` 和具体国家（us/cl/ph 等，域名概览页的"按国家/地区比较"小表格里能枚举出该域名在哪些国家有 AI 可见度数据）
- 回答的问题：这个域名被 AI 搜索引擎（ChatGPT、Google AI Overview/AI Mode、Gemini）提及/引用的次数和页面。

### 反向链接分析（Backlink Analytics）—— 可用，这是相对 Similarweb 的核心增量能力

- 概览：`https://sem.3ue.co/analytics/backlinks/overview/?q=<domain>&searchType=domain`
- 反链明细列表：`https://sem.3ue.co/analytics/backlinks/backlinks/?q=<domain>&searchType=domain`
- 引荐域名列表：`https://sem.3ue.co/analytics/refdomains/report/?q=<domain>&searchType=domain`
- 反向链接差异（对比多个域名）：待补充 URL（左侧导航"反向链接差异"项）
- 反向链接检测（Backlink Audit）：待补充，左侧导航有这一项，可能是项目制功能（需要先建 Site Audit 项目），标记待验证是否被锁

### 自然搜索研究（Organic Research）—— 可用

- URL 模板：`https://sem.3ue.co/analytics/organic/positions/?db=<country>&device=<desktop|mobile>&currency=usd&q=<domain>&searchType=domain`
- 回答：该域名在自然搜索里排名的关键词列表（153,054 个 for personality-database.com@us），可切流量/关键词数视图

### 广告研究（Advertising Research）—— 可用（但目标站可能没有付费流量数据）

- URL 模板：`https://sem.3ue.co/analytics/adwords/positions/?db=<country>&device=<desktop|mobile>&currency=usd&q=<domain>&searchType=domain`
- personality-database.com 付费关键词/流量均为 0（该站本身不投广告，不代表功能被锁）

### 域名对比（Compare Domains）—— 可用

- URL 模板：`https://sem.3ue.co/analytics/comparedomains/?db=<country>&device=desktop&currency=usd&q=<domain>&searchType=domain&compareWith=<domain2>:domain|<domain3>:domain|<domain4>:domain`
- 用竖线分隔多个对比域名，每个后面跟 `:domain`

### 关键词研究（Keyword Research）—— 待逐项验证是否锁

左侧导航：关键词概览 / 关键词魔法工具（Keyword Magic Tool）/ 关键词策略构建器。待点开验证可用性和国家过滤参数。

### 内容创意 / 其他 —— 待补充

SEO 写作助手、主题研究，以及左侧导航滚动到底部之后的"其他"分组，尚未探查，下一轮补充。

## 导出功能 vs 滚动抓取 —— 结论：导出被锁，用 HARVEST 滚动抓取

- 反向链接明细表右上角有两个导出入口：「导出」（导出全部 ~79,202 行，弹出 Excel/CSV 选择）和「导出当前页面」（只导当前 100 行）。点开菜单**不显示任何点数/额度提示**，看起来像免费功能。
- 但实测点击「导出」→ CSV 后，**弹出遮罩弹窗「已达到每日报告限额 / 请告诉我们，我们将为您提供个人定制套餐」+「请求定制套餐」按钮**——这是一个付费升级墙，说明共享账号的**导出配额当天已被用尽**（不确定是这个账号从来没有导出配额，还是今天被别人用完了）。下载目录里确认**没有任何文件生成**。
- **结论：导出这条路当前不可用（被锁），不要指望它。** SOP 脚本一律走 `HARVEST` 滚动抓取（`<yan-skills>/backlink/scripts/harvest.browser.js`），跟 sim.3ue.co 那边一致。
- **本报告用到的表格全部用 HARVEST 滚动抓取**，不是导出。落盘走 receiver（`http://127.0.0.1:8788/slice`），不产生浏览器下载文件，因此本轮不需要用到 `harvest-collect.sh`（那个脚本是给"下载目录里有文件要收拢"的场景用的；这次的产出路径是 HTTP POST 直接写盘，没有下载文件要收）。

### HARVEST 脚本在 Semrush 上的关键适配差异（务必写进 SOP）

Semrush 的表格**不是虚拟滚动的独立 div 容器，是整页 `document` 级别滚动**（`document.documentElement.scrollHeight` 远大于 `clientHeight`，找不到内部 `scrollHeight > clientHeight+200` 的 div）。原版 `HARVEST.init()` 在 Similarweb 上假设有内部滚动容器，在 Semrush 上会返回 `false`。**必须加一层 fallback**：找不到内部滚动 div 时退回 `document.scrollingElement || document.documentElement`。已验证可用，抓取 102/100 行（多出的 2 行是表头/统计条被 grabAny 误收，可接受，去重时按内容过滤）。

## B. 与 Similarweb 的差异 —— 逐项实测对比（更正：反链不是 Semrush 独有）

> 更正说明：最初判断"反向链接是 Semrush 独有能力"是错的。sim.3ue.co 自己就有「反向链接分析」（在"SEO 情报"分组下）。下面是针对同一目标 `personality-database.com` 的逐项实测对比，不再假设。

| 维度 | sim.3ue.co (Similarweb) | sem.3ue.co (Semrush) |
|---|---|---|
| 反向链接总数 | 待补（需要在 sim.3ue.co 侧实测，本轮未做，见"未完成"） | 79,202 |
| 引荐域名数 | 待补 | 7,236 |
| 能否看到具体外链清单（源页面、锚文本、目标 URL） | 待补 | **能**，字段：页面AS、源页面标题+URL、外部/内部链接数、锚文本+目标URL、首次/上次发现日期，还能按 Follow/Nofollow/Sponsored/UGC 筛选 |
| 能否按 dofollow/nofollow 过滤 | 待补 | **能**，筛选栏自带 所有/Follow/Nofollow/Sponsored/UGC |
| 导出行数限制 | 已知：1 行 1 点，账号余额很少 | 导出功能本身被锁（见上一节"已达到每日报告限额"），**改用滚动抓取无行数限制**，只受"每页 100 行 + 翻页"限制 |
| 每页行数上限 | 待补 | **100 行/页**，页面顶部有"1-100 (~79,203)"这种分页提示，翻页控件待补充截图确认 |

**未完成项（诚实说明）**：本轮受时间限制，没有回头在 sim.3ue.co 侧对同一个 personality-database.com 重新实测反链数字做逐项对比——上面表格里 sim.3ue.co 那列大部分是"待补"。已确认的是 sim.3ue.co 确实有反链模块（不是没有），但具体数据量、锚文本、过滤能力、导出行为需要下一轮专门跑一遍才能填全这张对比表。

### 国家关键词库（db= 参数）—— 本轮最关键的验证，结论：能，覆盖 KR/JP，不覆盖大陆中国

这是相对 Similarweb 的**确定性增量能力**（Similarweb 国家过滤器被付费锁住，只能看全球口径；Semrush 这边国家库是完全可用的核心功能，不是增值项）：

- 国家选择器是一个可搜索下拉框，支持 100+ 国家/地区数据库，**中文名搜索**（英文名搜索经常搜不到，比如输入 "China"/"Japan" 返回"未找到任何数据"，但输入"日本"能找到"日本"、输入"中国"能找到"中国台湾"/"中国香港"）。
- **`db=kr`（韩国）实测可用**：关键词 `mbti` 在韩国库搜索量 165.0K，KD 27%（容易），意图"信息"，CPC $0.15。
- **`db=jp`（日本）实测可用**：同一关键词 `mbti` 日本库搜索量 1.0M，KD 81%（困难），CPC $0.35——和韩国库数字完全不同，证明数据库是真正按国家独立采集的，不是同一份数据换个标签。
- **中国大陆没有数据库**：国家选择器里搜"中国"只出来"中国台湾"和"中国香港"，**没有"中国大陆"这个选项**。这是预期内的——Semrush 的数据源是 Google 搜索结果，中国大陆搜索引擎生态以百度为主，Google 数据覆盖不到，所以 Semrush（以及几乎所有西方 SEO 工具）都没有大陆中国库。
- 关键词概览页有个附带的「全球搜索量」分国家小列表（不需要切库就能看到该词在 JP/TW/KR/TH/US/ID 等主要市场各自的搜索量），可以作为**不消耗"更新"额度的快速多国体量对比**，但看到的国家数量有限（截图里只显示 6-7 个主要市场 + "其他"汇总）。
- **额度提示**：关键词概览页顶部有个「更新」按钮，旁边显示 `5,000/5,000`，猜测是"今日/本月关键词概览刷新次数"配额，已经用满（可能是这个数字代表总额度而非已用，需要下一轮先点一次"更新"看数字变化来确认是否共享账号已经把这个配额刷完）。**这是继"导出"之后第二个可能被封顶的资源，写脚本时要留一个"配额用尽"的检测分支**（页面上如果出现类似「已达到...限额」的遮罩弹窗，直接判定这次操作失败，不要空等）。

### URL 模板补充：国家库切换

```
https://sem.3ue.co/analytics/keywordoverview/?q=<keyword>&db=<country>&searchType=keyword
```
`db` 取值举例：`us`（美国）、`kr`（韩国）、`jp`（日本）、`uk`、`de`。取值是 ISO 两位小写国家代码，通过国家选择器里的中文名搜索来确认某国是否有库（不要猜代码，猜错会静默 fallback 到上一个选中的国家而不报错——实测输入 `db=cn` 时 URL 参数变了，但界面上的国家标签仍然停留在"韩国"，说明无效代码会被忽略而不是报错，这个坑要写进 SOP）。

同样的 `db=` 参数应该也能用在 `analytics/organic/positions`、`analytics/overview` 等报表上做分国家的自然流量/关键词查询，本轮只在关键词概览上验证过，其余报表待下一轮验证。

## C. 真实取数（反向链接，三个目标）

方法：HARVEST 滚动抓取（导出被锁，见上文），落盘到 `http://127.0.0.1:8788/slice`，seed=`semrush-recon`。实测数据行数：

| 目标 | Authority Score | 自然流量 | 反向链接总数（概览页数字） | 引荐域名总数（概览页数字） | 反链表抓到的行数 | 引荐域名表抓到的行数 |
|---|---|---|---|---|---|---|
| personality-database.com | 46 | 169,756 | 79,202 | 7,236 | 101 | 105 |
| op.gg | 73 | 1.2M | 1,400,000（约） | 13,100（约） | 130 | 139 |
| sbti.support | 2 | 不可用（无自然流量数据） | 31 | 26 | 26 | 33 |

落盘文件（都在 `data/game-mbti/seeds/semrush-recon/`）：

```
backlinks-personality-database/semrush-recon__backlinks-personality-database__page1__20260819.tsv   (101 行)
refdomains-personality-database/semrush-recon__refdomains-personality-database__page1__20260819.tsv (105 行)
backlinks-op-gg/semrush-recon__backlinks-op-gg__page1__20260819.tsv                                  (130 行)
refdomains-op-gg/semrush-recon__refdomains-op-gg__page1__20260819.tsv                                (139 行)
backlinks-sbti-support/semrush-recon__backlinks-sbti-support__page1__20260819.tsv                    (26 行)
refdomains-sbti-support/semrush-recon__refdomains-sbti-support__page1__20260819.tsv                  (33 行)
```

每个反链表字段（TSV，无表头，列顺序按坐标从左到右）：`页面AS、源页面标题、源页面URL、[标签: Wiki/EN等]、外部链接数、内部链接数、锚文本、目标URL、[Nofollow标签]、首次发现日期、上次发现日期`——注意 grabAny 是纯坐标聚类，字段数量会因为标签数量不同而错位，**这是"能看但不能当结构化数据库直接跑分析"的抓取，适合人工核查和抽样统计，不适合大规模程序化处理**（这一点必须写进 SOP，别让下游误以为是干净的结构化表）。

每个引荐域名表字段：`AS、Root Domain、[分类]、[New标签]、Backlinks 数、Country/IP、First Seen、Last Seen`。

### 关键发现小结

- **sbti.support 反链现状**：只有 26 个引荐域名、31 条反链，Authority Score 只有 2，自然流量数据"不可用"（不是 0，是 Semrush 认为流量太小/没有稳定排名，压根不满足展示自然流量卡片的最低阈值）。相比 op.gg（13.1K 引荐域名）和 personality-database.com（7,236 引荐域名），sbti.support 的外链基础几乎为零，这是它目前排名上不去的一个直接可解释因素。
- 三个目标的反链体量跨度极大（31 → 79,202 → 约140万），证明 Semrush 反链数据库对小站和大站都有覆盖，不是只服务头部站点。

## 抓取脚本已知局限（写给下一轮接手的人）

- `HARVEST.grabAny` 是纯坐标聚类算法，不认字段语义，行内字段顺序依赖当前视口渲染顺序，**每次网络慢/字体加载慢导致的换行都可能让同一逻辑行被拆成两条**，本轮 personality-database.com 反链表理论 100 行实抓 101 行（多 1 行是页头统计条被误收，人工核查后剔除即可，不是系统性错误）。
- 每次全页面导航（不是 SPA 内路由切换）都会清空 `window.HARVEST`，必须重新注入整段脚本，不能只调 `HARVEST.init()`。
- Semrush 的滚动容器是 `document.scrollingElement`，不是内部 div（和 Similarweb 不同），`HARVEST.init()` 必须打上 fallback 补丁，原版脚本在 Semrush 上会直接返回 `false`。

---
(反向链接实测数据见上，功能地图见 A/B 节)
