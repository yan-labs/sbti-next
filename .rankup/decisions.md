# 已裁决事项 — sbti.support

- **[2026-07-18 晚] noindex 矩阵终态**（升级自"撤 sitemap 观察"裁决）：compat 配对 2,808 + games compat 配对 1,792 + /result/* 分享落地 108 + play 进行页 32 = 4,742 页全部 noindex,follow。理由：用户授权大刀阔斧 + GSC 证明配对需求全落 hub + /result/* 与 /type/* 内容重复稀释索引 + Ahrefs "已抓取未索引"890 页。索引目标收敛到 ~480 核心页；预期 GSC 索引数从 1,860 渐次下降，这是**故意的**，勿当作事故。
- **[2026-07-18 晚] Ahrefs 3,488 死链根因与结论**：全部指向 `/cdn-cgi/l/email-protection`（Cloudflare Email Obfuscation 对旧版 footer 明文邮箱的边缘注入），commit 3768492 已修（span+JS 拼装），7/14 爬取照的是旧版。已触发重爬验证。**审计报告必须对照"爬取日期 vs 最近部署日期"再定性**。
- **[2026-07-18 晚] 类型改名的 legacy bridge**：CTRL 旧名 "조종자" 是 GSC 第二大品牌词（150 clicks），prose 里清理旧名时在 /ko/type/CTRL desc 保留一句 "한때 '조종자'로 불렸던" 承接搜索。其余旧名（사망자/분노인）0-1 click 不做。**改类型名前必查 GSC：旧名可能是流量词**。
- **[2026-07-18 晚] OG cover.png 保留大文件**：8 张 2.4-3MB 的 OG 图 pngquant 也只能压到 ~1MB 且质量降到 60-69，而 OG 图是爬虫单次抓取非页面权重 → 保留原质量（Shareable First 原则）。cover.webp 是全幅 hero（fill 渲染）不可缩尺寸，仅 q78 重编码。

- **[2026-07-18] 流量归零 ≠ 惩罚**：GSC 人工处置措施/安全问题双绿；曝光与点击同步归零 + 查询表 100% 品牌词 → 判定为 4 月韩国病毒热潮（社交传播 → 用户回搜类型名）的自然退潮。结论：站没有病，需求退了。挽回方向 = 通用词布局 + 再传播，不是"修复惩罚"。
- **[2026-07-18] compat 组合页：撤 sitemap，不 noindex** — **已被同日晚的 noindex 矩阵终态取代（superseded），不要按本条执行**。原判断：先撤出 sitemap 保留 `index,follow`，4-6 周后再看是否升级 noindex。实际当晚就直接升级了；代码现状为 `app/[locale]/compat/[a]/[b]/page.tsx:85` 与 `app/[locale]/games/[slug]/compat/[a]/[b]/page.tsx:117` 均 `robots: {index: false, follow: true}`，sitemap 只留 hub（`app/sitemap.ts:61,90`）。hub 页保留的部分仍然有效（궁합 需求真实存在）。
- **[2026-07-18] 首页主词从大词换验证长尾**：원래 "Free Personality Tests & Gamer Type Quizzes"（KD 天文数字 + 游戏词零需求）→ funny personality test / 웃긴 성격 테스트 / 面白い性格診断テスト / 搞笑人格测试 + MBTI parody 系。
- **[2026-07-18] Ahrefs MCP 复验：仍不可用**（全接口 "Insufficient plan"，含 gsc-* 系列）。GSC 数据通道 = claude-in-chrome 直读 Search Console。
- **[2026-07-18] games 方向不加码**：8 游戏 × 8 原型页已建，但 GSC 无任何游戏词流量（排名 58-59 的曝光各 1 次）。保留观察，不新增游戏内容投入，等有曝光信号再说。
- **[2026-07-18] 题数口径统一 "30 道题"**：questions.ts 实际 32 条 = 30 主题 + 2 drink_gate 分支；站内 meta/about/faq 全线用 30，维持一致（CLAUDE.md 博客指南里的 "31 questions" 是旧口径，博客内容未动）。

- **[2026-09-13] compat noindex 小范围解封（可逆）**：2026-07-18 晚的 4,742 页 noindex 矩阵（含本站 compat 配对 2,808 页）是防御性收紧，"URL 爆炸会招惩罚"这个前提从未被坐实——之后两次独立复查都是双绿：7/18（baseline.md）人工处置措施/安全问题双绿；8/19（opportunity-game-mbti.md，覆盖 GSC 2026-05-17~08-17）同样双绿。同时 baseline.md 头部查询表里有 3 个类型码带着真实、已采集的 GSC 数字：조종자→**CTRL**（150 clicks / 475 曝光 / CTR 31.6% / 排名 1.7）、생각러 + thin-k→**THIN-K**（同一类型的两个查询变体，158+40=198 clicks / 285+160=445 曝光）、시발러→**FUCK**（66 clicks / 171 曝光 / CTR 38.6% / 排名 1.6）。"sbti 궁합"本身（392 曝光 / 56 clicks / CTR 14.3%）验证的是 compat 功能本身的需求，不绑定任何具体类型，且早已由 `/compat` hub（一直 `index:true`）承接，不能单独作为解封某个具体配对页的依据。
  - **解封范围**：仅 **ko 语言** 下 **CTRL / THIN-K / FUCK 三者两两组合**的 6 个配对页——`/ko/compat/CTRL/THIN-K`、`/ko/compat/THIN-K/CTRL`、`/ko/compat/CTRL/FUCK`、`/ko/compat/FUCK/CTRL`、`/ko/compat/THIN-K/FUCK`、`/ko/compat/FUCK/THIN-K`。代码改动：`app/[locale]/compat/[a]/[b]/page.tsx` 新增 `isValidatedKoCompatPair()`，只有这 6 个 URL 走 `{index: true, follow: true}`；同步把这 6 个 URL 补进 `app/sitemap.ts`（此前 sitemap 只收 `/compat` hub，配对页一律不收录）。
  - **维持不变**：其余全部 compat 配对页——这 3 个类型码在 en/ja/zh 三个语言下的配对、以及其余 24 个类型码参与的全部配对，一共 2,808 − 6 = 2,802 个——继续 `noindex,follow`，代码原样未动。games compat 的 1,792 个配对页（`app/[locale]/games/[slug]/compat/[a]/[b]/page.tsx`）也未动：`.rankup` 三份文档里没有任何一条 games 相关查询带着具体点击/曝光数字，不满足解封门槛。
  - **为什么这么小**：故意不做大范围松绑。2026-07-18 之前有过一次教训——广撤 noindex 当晚就因为情况不对被紧急重新收紧（见上面 "noindex 矩阵终态" 条目的背景）。这次只解封「有真实点击/曝光数据撑腰」的最小交集，其余一律不动，出问题时改一行代码（把 `isValidatedKoCompatPair` 短路回 `false`，或整段 `robots` 改回硬编码 `{index: false, follow: true}`）就能立刻退回原状。
  - **观察计划（2-4 周后回看，即 2026-09-27 ~ 2026-10-11 之间）**：在 Search Console 里核对这 6 个 ko URL 的"已抓取-尚未编入索引"状态是否消退、是否被正常编入索引；同时复查站点级人工处置措施 / 安全问题是否仍然双绿、有没有出现新的惩罚或异常信号（索引数断崖下跌、这 6 个页面所在语言的整体曝光异常等）。任何一项不对，立刻按上一条"为什么这么小"里写的方式退回 noindex，不要等下一轮 rankup 例行复查。
