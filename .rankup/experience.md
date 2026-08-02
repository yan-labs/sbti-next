# 本站经验(从 rankup Skill 迁出)

> 这些条目的通用规则部分已留在 rankup Skill 的经验库里；本文件保留**带本站证据、数字与出处**的完整原文。
> Skill 保持干净通用，项目可归属的一切(基线、流量、裁决、凭据位置)只留在本目录。
> 迁出日期:2026-08-02

- **[2026-07-18] "流量突然归零"三步定性法**:①GSC 人工处置措施+安全问题(双绿=非惩罚,断崖惩罚极少且必有通知);②曝光是否与点击同步归零——排名掉了曝光仍会记录,曝光同步归零=搜索需求本身消失(需求侧),不是排名问题;③查询表形态——若近乎 100% 是"品牌+子词"导航词(sbti 생각러 式),流量本质是站外病毒传播的回搜,退潮≠SEO 事故,处方是通用词布局+再传播,不是修站(sbti.support 实证:876 点击 88% 韩国、150 查询全品牌词、4月峰值 120/天→6月贴地,双绿)。

- **[2026-07-18] 站内图片批量压缩用 pngquant + oxipng，不用 ImageMagick 自带量化器**:本站 114 个文件 71.13MB → 34.15MB(-52.0%);分类实测——`archetypes/*.webp` 64 张 15.55MB→4.55MB(cwebp q78 -m6 + 缩到 640px)、`results/*.png` 32 张 30.62MB→6.54MB(pngquant 256 色 + oxipng)、`cover.png` 8 张 22.30MB→20.88MB(只做 oxipng 无损)。pngquant 降到 128/64 色时渐变背景出现肉眼可见色带,256 色是安全上限。OG 用的 `cover.png` 即使 256 色量化也只能到 ~1MB 且 pngquant 自评质量掉到 60-69,压不到目标就别压——OG 图是爬虫单次抓取,不计页面权重。
- **[2026-07-18] 派 agent 干活时,brief 里写"已验证"的事实也要让它自己复核一遍——本轮 brief 的两条"已验证事实"都是错的**:①brief 称 `archetypes/*.webp` 最大渲染宽 ~460px CSS,agent 逐个 grep 消费方(`archetype-gallery.tsx`/`game-catalog.tsx`/`result-phase.tsx`/`compat-promo.tsx`/`game-compat-page.tsx`)后实测最宽只有 ~290px(1240px 容器里的 `sizes="...20vw"`),按真实值取 640px 上限才让 archetypes 全部压进 100KB;②brief 称 `cover.webp` CSS 宽 ≤600px,实际 `components/games/game-hero.tsx` 用 `fill` 做全幅 hero 背景、无 max-width 容器,若按 brief 盲目"限到 1200px"会在 hero 上产生放大模糊。教训:brief 里的"已验证"只是上一手的转述,让执行方带着证据复核的成本远低于返工。
