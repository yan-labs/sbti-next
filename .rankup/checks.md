# 闸门核对记录 — sbti.support

状态：✅ 通过（附证据）；⏸ 本轮做不了（写明卡点）；⬜ 未做。证据路径相对 `.rankup/`。

## 2026-09-20 Bing Webmaster Recommendations 修复轮（段 4 改页 + 段 5 IndexNow）

触发：Bing Webmaster Tools → Recommendations（`seoreports?siteUrl=https://sbti.support/`，2026-09-20 用 OpenCLI 读取）报 46 个错误 / 44 个页面：
未采用 IndexNow（高）、需要审阅的重要页面使用元机器人标记（中，2 页）、许多页面标题过短（中，42 页）、来自高质量域的入站链接不足（中，外链项，本轮按要求不处理）。
原始 URL 清单：`evidence/bing-fix-2026-09-20/bing-short-titles.txt`。

规范域名：`https://sbti.support`（apex）。`www.sbti.support` 返回 200 且 canonical 指向 apex，**没有 301**（`public/_redirects` 注释写明需在 Cloudflare Bulk Redirect 配，至今未配）。

| 检查项 | 状态 | 证据 | 日期 |
|---|---|---|---|
| IndexNow key 文件线上 200 且内容=key | ✅ | `evidence/bing-fix-2026-09-20/postcheck.txt`：`/8ea47f8693256fdca5ff57272721fd57.txt` → 200 text/plain，body 为 key 本身 | 2026-09-20 |
| IndexNow 焊进部署流程 | ✅ | `.github/workflows/deploy.yml`：部署前存 sitemap 基线 → `wrangler pages deploy` → 等 key 文件上线 → `scripts/indexnow-push.mjs --baseline`（差集）；run 35457731742 日志：42 URL，bing 202 / api.indexnow.org 200；run 35458639026：无变化不推送 | 2026-09-20 |
| IndexNow 全量真实提交（非 dry-run） | ✅ | `evidence/bing-fix-2026-09-20/indexnow-all.log`：486 URL，www.bing.com/indexnow HTTP 200，api.indexnow.org/indexnow HTTP 200 | 2026-09-20 |
| 标题长度（Bing 最低 ~30 字符，CJK 按字符数） | ✅ | 构建期 `pnpm seo:audit`：486 个可索引页 title 30–70 字符、0 重复；线上 `seo-audit.mjs --sitemap`（`seo-audit-live.summary.json`）解码后 30–68；Bing 报的 42 个 URL 线上最短 30（`live-bing-titles.tsv`） | 2026-09-20 |
| meta description 存在、无重复、≤160 | ✅ | `pnpm seo:audit`：descMissing 0 / descDup 0 / descLong 0。CJK 描述多为 72–119 字符（中日韩单字信息量约为英文 2 倍，未硬凑到 120）；seo-audit.mjs 报的 14 个 DESC_LEN>160 是它按未解码实体（`&quot;` 记 6 字符）计数，解码后均 ≤160 | 2026-09-20 |
| meta robots / X-Robots-Tag 误伤 | ✅ | 线上 486 个 sitemap URL 0 个 noindex；全站 noindex 4,736 页均为既有裁决（compat 配对、/result/* 分享页、play 进行页），见 `audit.md` 2026-09-20 节 | 2026-09-20 |
| h1 唯一、标题层级不跳级 | ✅ | `pnpm seo:audit` h1Bad 0；线上 HEADING_SKIP 从 260 页降到 0（游戏原型结果页与 27 类型博客文 h1→h3 已改 h2） | 2026-09-20 |
| canonical 自指 / hreflang | ✅ | `pnpm seo:audit` canonicalMissing 0、canonicalMismatch 0、hreflangMissing 0；`/en/*` 前缀变体 canonical 指向无前缀 URL | 2026-09-20 |
| 图片 alt | ✅ | `pnpm seo:audit` imgNoAlt 0 | 2026-09-20 |
| robots.txt / sitemap.xml | ✅ | robots 200 且含 Sitemap 行；sitemap 200 application/xml，xmllint 通过，486 loc = 486 个可索引页（修复前漏了 4 个 `/games` hub） | 2026-09-20 |
| 规范 URL 可达 | ✅ | `/games`（英文 hub 的 canonical）修复前线上 404，`_redirects` 补 rewrite 后 200 | 2026-09-20 |
| seo.web.cafe audit（首页，关键词 funny personality test） | ✅ 已跑，问题不在本轮范围 | `webcafe-audit-home.json`：45 分 D，失败项是首页主题聚焦（H1 不含关键词、密度榜脱节、落地页承接），属于首页文案/定位改版，列入 `plan.md` 待办；它报的「raw HTML 无 h1」是误报（线上首页有 h1） | 2026-09-20 |
| is-agentic | ✅ 已跑，问题不在本轮范围 | `is-agentic.txt`：57/100（缺 contact 页、Organization schema 缺 contactPoint/address、llms.txt 无 when-to-use），与 Bing 报告无关，列入待办 | 2026-09-20 |
| 图片宽高（IMG_NO_DIMENSIONS 40 页） | ✅ 判定为误报 | 均为 next/image `fill` 模式（绝对定位在定尺寸容器内），不产生 CLS | 2026-09-20 |
| AITDK 全站报告 | ⏸ | `aitdk-run.log`：Part B 面板未打开（后台标签页 iframe 宽度 0），Part A 也没取到数据。同时段自动化窗口池被其他项目的 agent 占用（bing-crystal / bsm-pagespeed），没有抢占。下一轮在空闲时补跑 | 2026-09-20 |
| PageSpeed 移动 + 桌面 | ⏸ | 需要可见的专用窗口，本轮窗口池被其他任务占用；本轮只改了 title/description/标题标签级别，不影响性能，下一轮补跑 | 2026-09-20 |
| 哥飞 AI 二次意见 | ⏸ | 需要走已登录浏览器会话，同上被占用；下一轮补跑 | 2026-09-20 |
