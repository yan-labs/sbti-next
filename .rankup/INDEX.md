# .rankup 目录索引 — sbti.support

- 项目：sbti.support（SBTI，静态导出 Next.js + Cloudflare Pages）
- 最近更新：2026-08-02
- 当前目标：通用词从 0 曝光起量；韩国市场 Naver 收录
- 下一入口：`PROJECT.md` → `plan.md`

## 推荐读取顺序

1. [PROJECT.md](PROJECT.md) — 产品定位、技术形态、部署链路、凭据位置、目标与非目标
2. [plan.md](plan.md) — 当前 P1/P2 与完成判定
3. 按任务取用下列专题文件

## 文件

| 文件 | 内容 | 最近核对 | 状态 |
|---|---|---|---|
| [PROJECT.md](PROJECT.md) | 产品定义、技术栈、路由、部署、凭据登记 | 2026-08-02 | current |
| [baseline.md](baseline.md) | GSC/流量基线快照（每轮优化前后各记一笔） | 2026-07-18 | 待复查（下一笔应在 8 月中） |
| [keywords.md](keywords.md) | 词库：品牌词集群、验证过的通用词、承接位置 | 2026-07-18 | current |
| [decisions.md](decisions.md) | 已裁决事项（做/不做/原因），防止重复调研 | 2026-08-02 | current |
| [audit.md](audit.md) | 技术体检结果 | 2026-07-18 | current |
| [plan.md](plan.md) | 行动计划（P0-P2，含预期影响与完成判定） | 2026-08-02 | current |
| [experience.md](experience.md) | 本站可复用经验（带证据出处与数字的完整原文） | 2026-08-02 | current |

尚未建立：`roadmap.md`、`iterations.md`（目前只跑了一轮完整迭代，等第二轮再建）。

## 最近变化

- 2026-08-02：`rankup review`。补建 `PROJECT.md`；修订 `decisions.md` 里被推翻的"compat 撤 sitemap 不 noindex"条目（实际当晚已升级为全线 noindex，代码已核实）；同步修正 `plan.md` P2 的过时观察项；`experience.md` 追加 2 条（图片压缩工具链、brief 里"已验证事实"仍需复核）。
- 2026-08-02：从 rankup Skill 迁出本站经验到 `experience.md`（commit b22635c）。
- 2026-07-18 晚：autopilot 轮——schema 合规、4,742 页 noindex 矩阵、图片 -52%、8 游戏文化重写、韩语母语化（commits 702e1ce / 4c95873 / a8ef7f1）。
- 2026-07-18：GSC 诊断 + 四语言 meta 重写 + sitemap 收缩（commits 38d6206 / dda723e）。
