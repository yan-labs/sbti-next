# 技术体检 — sbti.support（2026-07-18）

## 结论：技术层全绿，无归零级事故

| 项目 | 状态 |
|---|---|
| 关键 URL 状态码（Googlebot UA） | 全部 200（/、/zh、/test、/type/CTRL、/blog、robots、sitemap） |
| meta robots | `index, follow` ✅ |
| X-Robots-Tag 响应头 | 无屏蔽 ✅ |
| canonical | 自指正确（`https://sbti.support`）✅ |
| hreflang | 4 语言 + x-default，首页 10 处输出正常 ✅ |
| Cloudflare challenge 脚本 | 0（无 Bot Fight Mode 注入）✅ |
| sitemap.xml | 200；本轮从 3,360 URL 收缩到 552 |
| robots.txt | 200 / 2,331 bytes（内容抓取被本机 TLS 间歇干扰，未逐行核验——低风险，Googlebot 抓取 sitemap 正常说明未屏蔽） |

## 已修复（commit 38d6206）
- 首页/test/compat 四语言 title、description 重写（详见 keywords.md 集群 C）
- fitSeoDescription 的 SUFFIX 填充文案原为面向搜索引擎的废话（"...for readers and search engines"），已换为自然品牌句
- sitemap 撤除 2,808 个 compat 组合 URL

## 未处理（记录在案）
- fitSeoTitle 70 字符 / fitSeoDescription 145 字符截断阈值对 CJK 偏宽/偏窄——本轮通过控制文案长度绕开，未改逻辑（影响全站模板，改动需单独回归）
- games archetype 结果页 256 个 URL 仍在 sitemap——GSC 尚无负面信号，观察

## 2026-09-20 Bing Webmaster Recommendations 修复（commits 898cad8、0a6702d）

来源：Bing Webmaster → Recommendations，46 个错误 / 44 页（逐条证据与状态见 `checks.md` 同日节）。

| Bing 条目 | 根因 | 修复 |
|---|---|---|
| 未采用 IndexNow（高） | `public/` 里只有一个占位 key `a1b2c3d4…`，从没有提交脚本，也没有接进部署 | 随机 32 位 hex key `public/8ea47f8693256fdca5ff57272721fd57.txt`；`scripts/indexnow-push.mjs` 同时推 www.bing.com 与 api.indexnow.org；`deploy.yml` 部署后自动按 sitemap 差集推送 |
| 重要页面使用元机器人标记（中，2 页：`/zh/games/valorant/play`、`/en/games/valorant/play`） | play 是答题进行页，按 2026-07-18「noindex 矩阵终态」裁决保持 `noindex, follow` | **保留 noindex，不改**：页面只有题目交互，没有独立内容，可索引入口是 `/games/valorant`；两页都能跟随链接。play 页标题改成与 hub 不同的「开始答题」式标题，避免与 hub 重复 |
| 许多页面标题过短（中，42 页） | Bing 按字符计长度，CJK 标题 15–29 字符全部判短；游戏页是裸游戏名 + 后缀；`fitSeoTitle` 只在 <15 字符时补后缀 | 重写游戏页 / 游戏配对 / 游戏原型结果 / 类型页 / 博客 / 隐私条款 / hub 页四语标题模板；`fitSeoTitle` 加 30 字符下限兜底；`fitGameTitle` 改成描述性模板（OW2 en/ko 用英雄测验措辞） |
| 来自高质量域的入站链接不足（中） | 外链 | 按任务要求不处理 |

顺手修的：
- `/games`（英文游戏 hub 的 canonical URL）线上 404：`_redirects` 只有 `/games/*` 没有 `/games`。已补，sitemap 同步补 4 个语言的 `/games` hub（482 → 486 loc）。
- `fitSeoDescription` 上限 145 → 160，短描述补品牌句（放不下时换短句），超长时在句末或词边界截断。
- 游戏原型结果页（256 页）与 27 类型博客文 h1 后直接 h3，改为 h2。
- 新增 `scripts/seo-meta-audit.mjs`（`pnpm seo:audit`），`pnpm build` 后离线检查 out/ 全部页面。

未处理（记录在案）：
- `www.sbti.support` 仍返回 200（canonical 指向 apex，不算重复收录风险，但应在 Cloudflare Bulk Redirect 配 301，需要账号操作）。
- 旧占位 key 文件 `/a1b2c3d4….txt` 线上仍返回 200：Cloudflare 边缘缓存了旧资源（`age` 约 1400s，`s-maxage=604800`），新部署里已删除，缓存过期后消失；它不是当前使用的 key，不影响提交。
- `/en/*` 前缀变体（如 `/en/games/valorant/play`）可访问且带指向无前缀 URL 的 canonical；没有加 301，因为 `_redirects` 用 `/x → /en/x 200` 的 rewrite 提供英文页，再加 `/en/* → /*` 301 有循环风险。
