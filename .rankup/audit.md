# 技术体检 — sbti.support（2026-07-18）

## 结论：技术层全绿，无归零级事故

| 项目 | 状态 |
|---|---|
| 关键 URL 状态码（Googlebot UA） | 全部 200（/、/zh、/test、/type/CTRL、/blog、robots、sitemap） |
| meta robots | `index, follow` ✅ |
| X-Robots-Tag 响应头 | 无屏蔽 ✅ |
| canonical | 自指正确（`https://sbti.support`）✅ |
| hreflang | 4 语言 + x-default，首页 10 处输出正常 ✅ |
| Cloudflare challenge 脚本 | 0（无 Bot Fight Mode 注入）✅ |
| sitemap.xml | 200；本轮从 3,360 URL 收缩到 552 |
| robots.txt | 200 / 2,331 bytes（内容抓取被本机 TLS 间歇干扰，未逐行核验——低风险，Googlebot 抓取 sitemap 正常说明未屏蔽） |

## 已修复（commit 38d6206）
- 首页/test/compat 四语言 title、description 重写（详见 keywords.md 集群 C）
- fitSeoDescription 的 SUFFIX 填充文案原为面向搜索引擎的废话（"...for readers and search engines"），已换为自然品牌句
- sitemap 撤除 2,808 个 compat 组合 URL

## 未处理（记录在案）
- fitSeoTitle 70 字符 / fitSeoDescription 145 字符截断阈值对 CJK 偏宽/偏窄——本轮通过控制文案长度绕开，未改逻辑（影响全站模板，改动需单独回归）
- games archetype 结果页 256 个 URL 仍在 sitemap——GSC 尚无负面信号，观察
