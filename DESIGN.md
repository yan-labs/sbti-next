# Design System — SBTI

## Product Context
- **What this is:** 讽刺行为类型指标（SBTI），一个恶搞 MBTI 的趣味人格测试
- **Who it's for:** 年轻互联网用户（18-30岁），热衷 meme 文化和社交分享
- **Space/industry:** 娱乐/社交类人格测试，竞品包括 16personalities、BuzzFeed Quizzes
- **Project type:** Web app（静态导出，Cloudflare Pages）

## Aesthetic Direction
- **Direction:** Playful-Bold — 大胆但精致，介于 BuzzFeed 的活力和 16personalities 的清晰度之间
- **Decoration level:** Intentional — 微妙的渐变光晕、色彩点缀，不过度装饰
- **Mood:** 让人笑出声然后截图发朋友圈的那种好玩，视觉上有冲击力但不廉价
- **Brand personality:** 荒诞 × 潮流 × 社交

## Typography
- **Display/Hero:** Space Grotesk 700 — 几何感、略带怪异的个性，和"荒诞"品牌调性契合
- **Body:** DM Sans 400/500 — 清晰可读，现代感，不是默认的 Inter
- **UI/Labels:** DM Sans 500/600
- **Data/Tables:** JetBrains Mono 400 (tabular-nums)
- **Code:** JetBrains Mono
- **Loading:** Google Fonts CDN
- **Scale:**
  - Display: 72px / 48px (clamp)
  - H1: 36px
  - H2: 28px
  - H3: 22px
  - Body: 16px
  - Small: 13px
  - Caption: 12px

## Color
- **Approach:** Expressive — 色彩是核心设计工具，服务于截图分享
- **Primary:** `#FF3366` (热粉红) — CTA、强调、品牌标识。社交媒体上极其醒目
- **Secondary:** `#00D4AA` (薄荷绿) — 成功状态、积极维度、和 primary 形成强对比
- **Accent:** `#FFD93D` (金黄) — 高亮、趣味元素、中等维度标记
- **Info:** `#3B82F6` (电光蓝) — 链接、信息提示、数据可视化

### Light Mode
- Background: `#FFFAF5` (暖白)
- Surface: `#FFFFFF`
- Muted: `#FFF0E6` (蜜桃)
- Elevated: `#FFF5ED`
- Foreground: `#1A1A2E` (深海蓝)
- Foreground Muted: `#6B6B80`
- Foreground Subtle: `#9B9BAE`
- Border: `#E8E0D8`
- Border Strong: `#D0C8C0`
- Primary Soft: `#FFE0EA`
- Secondary Soft: `#D0FFF3`
- Accent Soft: `#FFF8D6`

### Dark Mode
- Background: `#0D0D1A` (深海夜)
- Surface: `#1A1A2E`
- Muted: `#16162B`
- Elevated: `#222240`
- Foreground: `#F0EDE8`
- Foreground Muted: `#A0A0B8`
- Foreground Subtle: `#6B6B80`
- Border: `#2A2A44`
- Border Strong: `#3A3A55`
- Primary: `#FF4D7A` (提亮)
- Secondary: `#00EBBA` (提亮)
- Accent: `#FFE066` (提亮)
- Primary Soft: `#3D1528`
- Secondary Soft: `#0A2B22`
- Accent Soft: `#2E2800`

### Semantic Colors
- Success: `#10B981` / dark: `#34D399`
- Warning: `#F59E0B` / dark: `#FBBF24`
- Error: `#EF4444` / dark: `#F87171`
- Info: `#3B82F6` / dark: `#60A5FA`

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(80px)

## Layout
- **Approach:** Grid-disciplined, mobile-first
- **Quiz/Result container:** max-w-lg (32rem / 512px)
- **Detail page:** max-w-2xl (42rem / 672px)
- **Type grid:** max-w-4xl (56rem / 896px)
- **Border radius:**
  - sm: 6px
  - md: 10px
  - lg: 16px
  - xl: 24px
  - full: 9999px

## Motion
- **Approach:** Intentional — 微动效增加趣味但不干扰
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(100ms) short(200ms) medium(300ms) long(500ms)
- **Patterns:**
  - Hover: translateY(-2px) + shadow elevation
  - Active: scale(0.97)
  - Page transition: fade 200ms
  - Progress bar: gradient animation
  - Type cards: hover scale(1.02) + shadow

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-10 | 从全灰度切换到 expressive 色彩方案 | 原设计和"荒诞×潮流×社交"品牌定位严重脱节 |
| 2026-04-10 | 选择 Space Grotesk 替代 Inter 作为 display 字体 | Inter 太常见、太中性，Space Grotesk 有辨识度且几何感强 |
| 2026-04-10 | 选择 #FF3366 热粉红作为 primary | 社交媒体截图中极其醒目，性别中性，年轻用户接受度高 |
| 2026-04-10 | 暖色调中性色而非纯灰 | 暖底色(#FFFAF5)让页面更有人情味，和冰冷的心理学测试拉开距离 |
