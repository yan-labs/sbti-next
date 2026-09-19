# 项目定义 — sbti.support

> 本文件由 2026-08-02 的 `rankup review` 补建，事实全部来自仓库可验证来源（`package.json`、`app/` 路由、`next.config.mjs`、`.github/workflows/deploy.yml`、`i18n/routing.ts`、`git log`）。无法从仓库或已有 `.rankup/` 记录核实的写 `待确认`。

## 产品

- 名称：SBTI — Satirical Behavior Type Indicator（`CLAUDE.md`）
- 一句话定位：恶搞 MBTI 的讽刺型人格测试，27 个幽默人格类型 + 8 款游戏的玩家原型测试
- 目标用户：18-30 岁游戏/迷因人群；**实证主力是韩国用户**（GSC 近 3 个月 876 点击中 88% 来自韩国，见 `baseline.md`）
- 核心问题：MBTI 类测试太正经，缺少能截图分享、朋友之间互相调侃的版本
- 核心价值：测完立刻得到一个有强视觉识别度、值得截图发出去的身份标签；配对页支持"和朋友比"
- 商业模式：**当前无变现**。代码里无支付、无广告位（grep `stripe|paddle|adsense|checkout` 在 `app/`、`lib/`、`components/` 无命中）。是否要变现 `待确认`

## 技术形态（可验证）

- 框架：Next.js（App Router）+ next-intl；`next.config.mjs` 为 `output: 'export'` + `images.unoptimized`，即**纯静态导出，无 SSR/无服务端运行时**
- UI：shadcn/ui + Tailwind + @base-ui/react；状态用 zustand
- 语言：zh / en / ja / ko 四语言，`defaultLocale: 'en'`，`localePrefix: 'as-needed'`（`i18n/routing.ts`）；文案全部在 `messages/{locale}.json`
- 路由骨架（`app/[locale]/`）：`/`、`/test`、`/type/[code]`、`/types`、`/result/[code]`、`/compat`、`/compat/[a]/[b]`、`/games`、`/games/[slug]`、`/games/[slug]/play`、`/games/[slug]/result/[archetype]`、`/games/[slug]/compat`、`/games/[slug]/compat/[a]/[b]`、`/blog`、`/blog/[slug]`、`/about`、`/faq`、`/privacy-policy`、`/terms`
- 部署：GitHub Actions `deploy.yml`，push 到 `main` 触发 → pnpm 10 / Node 22 → `pnpm build` → 清理静态导出多余 `.txt` → `npx wrangler pages deploy out --project-name=sbti-support`（**Cloudflare Pages**，非 Workers） → 等 IndexNow key 上线 → `scripts/indexnow-push.mjs --baseline`（按部署前后 sitemap 差集推 Bing + api.indexnow.org，2026-09-20 起）
- 构建后置：`scripts/strip-rsc-payloads.mjs` 在 `next build` 之后跑，属于构建产物的一部分，别单独跑 `next build` 就以为完事
- 验证命令：`pnpm typecheck`（tsc --noEmit）、`pnpm test`（vitest run）、`pnpm lint`

## 凭据与外部账号（只记名称与存放位置，不记真实值）

| 名称 | 存放位置 | 用途 |
|---|---|---|
| `CLOUDFLARE_API_KEY` / `CLOUDFLARE_EMAIL` / `CLOUDFLARE_ACCOUNT_ID` | GitHub repo secrets | Pages 部署 |
| GA4 measurement ID `G-0182BSNWVS` | 硬编码在 `app/[locale]/layout.tsx`（公开值，非密钥） | 流量分析 |
| Ahrefs Web Analytics 脚本 | `app/[locale]/layout.tsx` | 流量分析 |
| GSC 访问 | 无 API 通道，走 claude-in-chrome 直读浏览器会话（`decisions.md`：Ahrefs MCP 全接口 Insufficient plan） | 搜索数据 |
| Cloudflare Pages 项目名 | `sbti-support` | 部署目标 |

## 目标

- 让通用词（`funny personality test` / `웃긴 성격 테스트` 系）从 0 曝光起量，作为社交脉冲之间的基础流量。判定见 `plan.md` P1
- 承接韩国需求：韩国是唯一被验证的市场，Naver 收录是下一个杠杆（`plan.md` P1，需用户账号）

## 非目标

- **不加码 games 方向的新内容**：8 游戏 × 8 原型页已建但 GSC 无任何游戏词流量（`decisions.md` 2026-07-18）
- **不追大词**：`Free Personality Tests` 这类 KD 天文数字的词已明确放弃
- 不为程序化配对页争索引：4,742 页 compat/result/play 已全线 `noindex, follow`（`decisions.md` 终态裁决）

## 约束

- 技术：静态导出，无服务端逻辑；任何需要运行时的功能都要改部署形态
- 内容：文案改动必须四语言同步，且受 `DESIGN.md` 与 `CLAUDE.md` 博客写作规范约束（去 AI 味）
- 结构冻结：`slug` / `scoring` / 题目 `id` / `kind` 是数据契约，改文案时不得动（8 个游戏文件均有 vitest 可达性测试守着）
- 合规与安全：`待确认`（有 `/privacy-policy`、`/terms` 页面，但未核实是否有实质数据收集义务）

## 成功指标

| 指标 | 基线 | 目标 | 时间窗 | 数据源 |
|---|---:|---:|---|---|
| 通用词曝光 | 0 | > 0 且持续 | 2026-08 中 | GSC |
| compat "已抓取-尚未编入索引" | 890 | 显著回落 | 2026-08 中 | GSC / Ahrefs |
| 索引页数 | 1,858（下降中，故意） | 收敛到 ~480 核心页 | 待确认 | GSC |
| 月点击 | 待确认（近 28 天曝光仅 34） | 待确认 | 待确认 | GSC |
