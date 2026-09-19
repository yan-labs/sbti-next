# 行动计划 — sbti.support

## 已完成（2026-07-18，commit 38d6206）
- [x] P0 GSC 全面诊断（无惩罚，热潮退潮 + 薄内容矩阵拖累）
- [x] P0 四语言 meta 重写（验证词进 title/desc）
- [x] P0 sitemap 收缩 3,360 → 552
- [x] P0 GSC 重新提交 sitemap（部署后）

## 已完成（2026-07-18 晚，autopilot 轮，commits 702e1ce + 4c95873）
- [x] Ahrefs 死链 3,488 定性（Cloudflare email-protection，已被 3768492 修复）+ 触发重爬验证
- [x] schema.org 违规清零（Quiz/DefinedTerm/CollectionPage/ItemList 非法属性 + 虚构 SearchAction）
- [x] noindex 矩阵 4,742 页（compat 配对/games 配对/result/play），sitemap 552→476
- [x] 图片 71MB→34MB（-52%，114 文件）
- [x] 8 游戏内容文化重写（93 处升级：왕귀 전도사/탱장연 시위대장/线霸/五排团长/圏読み職人…）
- [x] 韩语全站母语化审校（26 strings + 조종자 legacy bridge）

## P1 — 下一轮（预期影响：通用词从 0 到有曝光）
- [ ] **Naver Search Advisor 注册 + 提交 sitemap**。韩国搜索 Naver 份额过半，88% 流量来自韩国的站不能只看 Google。完成判定：Naver 站长工具验证通过 + sitemap 提交。（需用户操作账号）
- [ ] **ko 类型页 FAQ 长尾**：GSC 有 `imsb 뜻`（IMSB 什么意思）类查询——每个类型页加「뜻/의미」FAQ 条目承接 "〈类型名〉 뜻" 长尾。完成判定：27 类型页 ko FAQ 各 +1 条，构建后抽查 3 页。
- [ ] **블로그 ko 本地化强度**：블로그는 4언어 번역 상태；한국이 검증된 시장이므로 ko 글 1편을 한국 밈 문맥으로 재작성（CLAUDE.md 블로그 가이드 준수）。
- [ ] **2-4 周后回看基线**（baseline.md 下一笔）：通用词曝光、compat "crawled-not-indexed" 数值。

## P1.5 — 2026-09-20 Bing 修复轮留下的待办
- [ ] **AITDK 全站报告 + PageSpeed（移动/桌面）+ 哥飞 AI 二次意见补跑**：2026-09-20 自动化窗口池被其他任务占用未跑成（`checks.md` ⏸ 三行）。完成判定：三项证据落 `evidence/`，AITDK 未满分项逐条修或写明原因。
- [ ] **首页主题聚焦**：seo.web.cafe audit 首页 45 分 D（H1「Which kind of human?」不含 funny personality test、密度榜与目标词脱节）。改首页 H1/首屏文案属于定位改版，需按 CLAUDE.md 博客语气规范四语同步。
- [ ] **is-agentic 57/100**：补 contact 页、Organization schema 的 contactPoint、llms.txt 的 when-to-use 段。
- [ ] **www → apex 301**：Cloudflare Bulk Redirect（需账号操作）。
- [ ] **Bing Webmaster 复查**：下次 Bing 扫描后（通常 1–2 周）回看 Recommendations，确认 IndexNow 与标题过短两项消失；play 页 noindex 条目属于有意保留。

## P2 — 观察 / 条件触发
- [x] ~~compat 组合页 4-6 周后仍滞留 → 升级 noindex~~ **已于 2026-07-18 晚直接执行完毕**（代码核实：两处 compat `[a]/[b]` 页面均 `robots: {index:false, follow:true}`）。剩余观察项改为：4-6 周后看 GSC "已抓取-尚未编入索引" 是否从 890 回落
- [ ] games 页有任何游戏词曝光信号 → 再评估投入
- [ ] 传播侧（非 SEO）：韩国社区（theqoo/instiz/X）再引爆是流量根源；SEO 只是承接器——meme 站流量 = 社交脉冲 × 品牌词承接 × 通用词长尾三层
