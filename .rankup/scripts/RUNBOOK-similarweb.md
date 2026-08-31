# RUNBOOK — Similarweb Web Intelligence（sim.3ue.co）取数

> 2026-08-19 实测于用户真实 Chrome（共享账号，未登录态无法用）。
> **先读 rankup SKILL.md 的「红线：先查脚本清单」**——本文档只提供 URL 模板与站点特有约束，
> 表格提取一律用 `backlink/scripts/harvest.browser.js`，**不要手写提取器**。

## 0. 三件套：接收端 → 注入 → 抓取

```bash
# 1) 起本地接收端（数据直接落进项目目录，不经过下载目录）
cd <project> && node .rankup/scripts/receiver.mjs --port 8788 --root data/<主题> &
curl -sS --noproxy '*' http://127.0.0.1:8788/ping    # 必须回 pong
```

```js
// 2) 在页面里一行注入 HARVEST（receiver 的 /script 端点直接喂源码，
//    不用把 11KB 脚本贴进对话——这一步就是「懒得贴所以现写一个」的根治办法）
const src = await (await fetch('http://127.0.0.1:8788/script?name=harvest')).text(); (0,eval)(src);
window.POST = async (seed,kind,slice) => {
  const body = Object.values(HARVEST.any).join('\n');
  const r = await fetch(`http://127.0.0.1:8788/slice?seed=${seed}&kind=${kind}&slice=${slice}`,{method:'POST',body});
  return {status:r.status, rows:Object.keys(HARVEST.any).length, bytes:body.length};
};
```

```js
// 3) 抓：init → start（不要 await）→ 轮询 → POST
HARVEST.init(); HARVEST.start(); 'started'
HARVEST.status()                      // 隔几秒单独调用
await POST('<seed>','<kind>','<slice>')
```

`seed/kind/slice` 只允许 `[A-Za-z0-9._+-]`，落盘到 `<root>/seeds/<seed>/<kind>/<seed>__<kind>__<slice>__<日期>.tsv`，同目录自动写 `manifest.json`。

## 1. URL 模板（全部已实测 200）

关键词工具，`<KW>` 要 URL 编码，`<TAB>` ∈ `phraseMatch` | `relatedKeywords` | `questions`：

```
#/digitalsuite/acquisition/findkeywords/keyword-generator-tool/999/28d
  ?searchEngine=google&keyword=<KW>&webSource=Total&isWWW=*&tab=<TAB>
```

网站关键词表（**带落地页列**，竞品分析的核心）：

```
#/organicsearch/pageAnalysis/website-keyword-v2/<DOMAIN>/999/28d
  ?key=<DOMAIN>
  &pageFilter=%5B%7B%22url%22%3A%22<DOMAIN>%22%2C%22searchType%22%3A%22domain%22%7D%5D
  &webSource=Total&selectedPageTab=Total
  &IncludeBranded=false&IncludeNoneBranded=true      ← 品牌/非品牌过滤，见 §2
```

着陆页表（哪个页面在吃流量、各带多少词）：

```
#/organicsearch/pageAnalysis/landing-pages-v2/<DOMAIN>/999/28d
  ?key=<DOMAIN>&pageFilter=<同上>&webSource=Total&selectedPageTab=Organic
```

其余已确认存在的报表根路径（本轮未逐个取数）：

| 报表 | 路径 |
|---|---|
| 网站分析 | `#/digitalsuite/websiteanalysis/home` |
| 市场分析 | `#/digitalsuite/markets/webmarketanalysis/home` |
| 网站区段 | `#/digitalsuite/segments/home?tab=0` |
| 搜索跟踪 | `#/digitalsuite/rank-tracker/home` |
| **反向链接分析** | `#/digitalsuite/acquisition/backlinks/overview/999/?duration=365d` |
| 网站审核 | `#/digitalsuite/acquisition/site-audit` |
| AI 品牌可见性 | `#/digitalsuite/ai-brand-visibility/home` |
| AI 研究（BETA） | `#/digitalsuite/ai-research/home` |
| **AI 流量** | `#/digitalsuite/ai-traffic/overview/*/999/6m?webSource=Total` |
| 推荐（BETA） | `#/digitalsuite/recommendations/report/` |
| 关键词市场研究 | `#/digitalsuite/marketresearch/keywordmarketresearch/home` |
| 发布方分析 | `#/publisheranalysis/home` |
| 监测和保护 | `#/monitorandprotect/home?duration=28d&device=All` |

**注意**：早期记录说「Similarweb 这套没有反链」——**错的，已更正**。左侧「SEO 情报」下就有反向链接分析。

## 2. 过滤器：哪些能靠 URL 驱动

| 过滤器 | URL 参数 | 状态 |
|---|---|---|
| 品牌 / 非品牌 | `IncludeBranded=false&IncludeNoneBranded=true` | ✅ 已实测 |
| 关键词难度区间 | `difficultyFromValue=1&difficultyToValue=41` | ✅（沿用既往实测） |
| 28 天体量区间 | `volumeFromValue=50000&volumeToValue=100000` | ✅（沿用既往实测） |
| 包含/排除关键词 | `multiIncludeExcludeKeywords=<JSON数组>` | ⚠️ **未查清**。参数名已确认，但 2026-08-19 用 UI 输入后回写的始终是空数组 `%5B%5D`，数组元素的结构没拿到。要用先在 UI 里成功加一条规则再读 `location.hash`，**不要照着参数名猜 JSON 形状** |
| 国家 | — | ❌ **付费功能，共享账号用不了**。只能全球口径，语言过滤必须在本地做 |

## 3. 站点特有的硬约束（别浪费时间重试）

| 约束 | 实测表现 |
|---|---|
| **表格每页硬上限 100 行** | `scrollHeight` 恒为 4498。用**体量分档**代替翻页，每档独立抓 |
| **导出按行扣点数** | 1 行 1 点，账号余额很少 → **一律用抓取，不要用导出**。（Semrush 那边不同，见 `semrush-RUNBOOK.md`） |
| **后台标签不 mount 虚拟表格** | `location.hash` 导航后标签若隐藏，`init()` 拿不到滚动容器。**每次导航后先截一次图前台化**；长循环期间每 10 秒 `screenshot{scale:0.3}` 唤醒一次 |
| **SPA 路由会卡住** | 连续点左侧导航栏后再改 hash，视图可能停在上一个报表不重绘。判据：`init()` 成功但表头对不上。**修法：`location.reload()`**，reload 后 `HARVEST` 会丢，要重新注入 |
| **javascript_tool 约 45s 超时** | 超时的是**传输通道不是页面逻辑**。超时后回查 `HARVEST.status()`，活儿常常早干完了。**不要重发 `start()`**，会把两个滚动循环叠在一起 |
| **共享账号会显示别人的数据** | 「最近的搜索」「广告系列」列表里是**其他用户**的域名与活动。那是别人的数据，**不读取、不写进任何产出** |
| **zsh 内联 for/while 循环 parse error** | 等待类循环写成 `.sh` 文件再 `bash` 跑 |

## 4. 一轮标准竞品调研的顺序

1. 关键词生成器 `phraseMatch` 拿种子词的盘面规模（总词数 + 总流量）
2. 竞品的**网站关键词表**加 `IncludeBranded=false` —— 这一步信息量最大，
   品牌词会淹没一切，不过滤等于什么都没看到
3. 竞品的**着陆页表** —— 「哪个模板在吃流量、每个页带多少词」只有这里看得到
4. 需要反链时走「反向链接分析」，或转 Semrush（那边可直接导出）
