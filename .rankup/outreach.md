# Backlink outreach ledger

> 外链候选、提交、公开 listing、链接属性和索引状态分开记录。任何登录页、表单页或提交确认都不等于已获得外链。格式沿用 `birthstone meaning` / `coco` 项目 `.rankup/outreach.md` 的既定约定。

## 2026-09-13 — whatlaunched.today 提交

- **站点**：SBTI (Satirical Behavior Type Indicator)
- **URL**：https://sbti.support
- **渠道**：whatlaunched.today（目录提交，Free Launch 档，$0，用户已登录账号）
- **日期**：2026-09-13
- **当前证据阶梯**：`submitted`
- **证据描述**：通过 OpenCLI 驱动用户已登录的真实 Chrome，走 `/dashboard/submit` 三步表单（PLAN→INFO→ASSETS）+ 日历选档 + 结账确认。提交前先核对 `/dashboard/my-products`，确认当时账号下 8 条记录里没有 SBTI。选中 Free Launch（$0），Category 选 "Gaming & Entertainment"（value `gaming`），Product pricing 保持默认 "Free for users"，Name "SBTI (Satirical Behavior Type Indicator)"，Tagline "Satirical personality test: 27 absurd types + game quizzes"（60 字符上限内的精简版），Description 填入完整版文案 "A satirical MBTI-style personality test that sorts you into 27 absurd types, plus 8 game-specific player archetype quizzes (League of Legends, VALORANT, CS2, and more)."，Tags "personality test, mbti, quiz, satire, gaming quiz, league of legends, valorant, cs2"。Logo 与首图由站点自动从 `https://sbti.support/icon.svg` 与 `https://sbti.support/og-default.png` 抓取，未手动上传。日历当天（Sep 13-19）全部 "Full — paid plans only"，选中最早的免费档 "Sun, Sep 20, 2026"。点击最终 "Continue — Free" 后页面未跳转到 `/dashboard/submit/success`（回退到一个全新的 PLAN 步骤，无成功文案也无报错——这是该向导的已知行为，站方之前也在 shindan.co 那次提交上出现过同样情况），因此按既定的二次核验流程重新加载 `/dashboard/my-products` 确认：新增一条卡片，标题 "SBTI (Satirical Behavior Type Indicator)"、状态 "Pending review"、标签 "Community listing"、Tagline 与填写一致、Created: Sep 13, 2026、Launch date: Sep 20, 2026（与点击的日历日期完全一致，无 off-by-one）、列表总数从提交前的 8 条变为 9 条（"All" 计数器 9，"Pending" 计数器 9）。已截图存档于本机临时目录。
- **备注**：尚未进入 `public`（站方审核窗口约 10 个工作日，页面文案标注 "Reviewed within 10 business days"）。表单结构、字段映射、已知坑（标准 CDP 点击对本向导每个状态变更按钮几乎必然失效，需直调 React onClick；`Continue — Free` 点击后不一定跳转成功页但提交本身已生效，必须以 My Products 卡片作为唯一可信证据）已固化在 backlink skill 的 `scripts/known-forms/whatlaunched.today.json`。本次同批里的 Love and Deepspace Match、Crystal Healing Guide、几斤几两 三个站点按用户明确要求**未提交**，未触碰。
