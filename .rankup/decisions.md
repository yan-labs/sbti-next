# 已裁决事项 — sbti.support

- **[2026-07-18 晚] noindex 矩阵终态**（升级自"撤 sitemap 观察"裁决）：compat 配对 2,808 + games compat 配对 1,792 + /result/* 分享落地 108 + play 进行页 32 = 4,742 页全部 noindex,follow。理由：用户授权大刀阔斧 + GSC 证明配对需求全落 hub + /result/* 与 /type/* 内容重复稀释索引 + Ahrefs "已抓取未索引"890 页。索引目标收敛到 ~480 核心页；预期 GSC 索引数从 1,860 渐次下降，这是**故意的**，勿当作事故。
- **[2026-07-18 晚] Ahrefs 3,488 死链根因与结论**：全部指向 `/cdn-cgi/l/email-protection`（Cloudflare Email Obfuscation 对旧版 footer 明文邮箱的边缘注入），commit 3768492 已修（span+JS 拼装），7/14 爬取照的是旧版。已触发重爬验证。**审计报告必须对照"爬取日期 vs 最近部署日期"再定性**。
- **[2026-07-18 晚] 类型改名的 legacy bridge**：CTRL 旧名 "조종자" 是 GSC 第二大品牌词（150 clicks），prose 里清理旧名时在 /ko/type/CTRL desc 保留一句 "한때 '조종자'로 불렸던" 承接搜索。其余旧名（사망자/분노인）0-1 click 不做。**改类型名前必查 GSC：旧名可能是流量词**。
- **[2026-07-18 晚] OG cover.png 保留大文件**：8 张 2.4-3MB 的 OG 图 pngquant 也只能压到 ~1MB 且质量降到 60-69，而 OG 图是爬虫单次抓取非页面权重 → 保留原质量（Shareable First 原则）。cover.webp 是全幅 hero（fill 渲染）不可缩尺寸，仅 q78 重编码。

- **[2026-07-18] 流量归零 ≠ 惩罚**：GSC 人工处置措施/安全问题双绿；曝光与点击同步归零 + 查询表 100% 品牌词 → 判定为 4 月韩国病毒热潮（社交传播 → 用户回搜类型名）的自然退潮。结论：站没有病，需求退了。挽回方向 = 通用词布局 + 再传播，不是"修复惩罚"。
- **[2026-07-18] compat 组合页：撤 sitemap，不 noindex**：890/2808 页 "已抓取-尚未编入索引"，拖累全站质量信号。先撤出 sitemap（保守可逆，保留 index,follow 和用户功能），4-6 周后复查——若仍大量滞留则升级为组合页 noindex。hub 页保留（궁합 需求真实存在）。
- **[2026-07-18] 首页主词从大词换验证长尾**：원래 "Free Personality Tests & Gamer Type Quizzes"（KD 天文数字 + 游戏词零需求）→ funny personality test / 웃긴 성격 테스트 / 面白い性格診断テスト / 搞笑人格测试 + MBTI parody 系。
- **[2026-07-18] Ahrefs MCP 复验：仍不可用**（全接口 "Insufficient plan"，含 gsc-* 系列）。GSC 数据通道 = claude-in-chrome 直读 Search Console。
- **[2026-07-18] games 方向不加码**：8 游戏 × 8 原型页已建，但 GSC 无任何游戏词流量（排名 58-59 的曝光各 1 次）。保留观察，不新增游戏内容投入，等有曝光信号再说。
- **[2026-07-18] 题数口径统一 "30 道题"**：questions.ts 实际 32 条 = 30 主题 + 2 drink_gate 分支；站内 meta/about/faq 全线用 30，维持一致（CLAUDE.md 博客指南里的 "31 questions" 是旧口径，博客内容未动）。
