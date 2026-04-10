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
- **Primary:** `#10B981` (翡翠绿) — CTA、强调、品牌标识。与纸艺图片色调统一，社交媒体清新醒目
- **Secondary:** `#F59E0B` (琥珀金) — 辅助强调、badge。暖色互补，突出重点
- **Accent:** `#8B5CF6` (电紫) — 高亮、趣味元素、增加层次
- **Info:** `#3B82F6` (电光蓝) — 链接、信息提示、数据可视化

### Light Mode
- Background: `#F5FAF7` (薄荷白)
- Surface: `#FFFFFF`
- Muted: `#F0F7F4` (浅翡翠)
- Elevated: `#E6FFF5`
- Foreground: `#1A2E24` (深林绿)
- Foreground Muted: `#5F6B66`
- Foreground Subtle: `#8A9690`
- Border: `#D8E8E0`
- Border Strong: `#C0D8CC`
- Primary Soft: `#D1FAE5`
- Secondary Soft: `#FEF3C7`
- Accent Soft: `#EDE9FE`

### Dark Mode
- Background: `#0A1A14` (深林夜)
- Surface: `#132A20`
- Muted: `#0F2620`
- Elevated: `#1A3A2E`
- Foreground: `#E8F0EC`
- Foreground Muted: `#94A3A0`
- Foreground Subtle: `#5F6B66`
- Border: `#1C3A30`
- Border Strong: `#3A3A55`
- Primary: `#34D399` (提亮)
- Secondary: `#FBBF24` (提亮)
- Accent: `#A78BFA` (提亮)
- Primary Soft: `#064E3B`
- Secondary Soft: `#451A03`
- Accent Soft: `#1E1535`

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
| 2026-04-10 | 选择 #10B981 翡翠绿作为 primary | 与纸艺图片色调统一，清新潮流，社交媒体辨识度高 |
| 2026-04-10 | 绿色系背景(#F5FAF7)替代暖白 | 背景与品牌色协调，整体视觉统一感 |
| 2026-04-10 | Secondary 用琥珀金(#F59E0B) | 暖色互补，在绿色基调上提供视觉焦点 |
| 2026-04-10 | Accent 用电紫(#8B5CF6) | 增加趣味层次，打破绿金双色的单调感 |
| 2026-04-10 | 维度进度条统一使用 primary 色系(100%/60%/30%) | 消除三色混战，强化品牌色视觉一致性 |
