# Semrush 代理站（sem.3ue.co）操作手册

已验证日期：2026-08-19

依赖登录态：用户的真实 Chrome（`mcp__claude-in-chrome__*` 工具），共享账号已登录，cookie/session 认证。
入口：`https://sem.3ue.co/home/?__gmitm=`（进入 `analytics/*` 后 `__gmitm` 参数可以去掉，不影响访问）。

完整踩点报告见 `.rankup/data/semrush-recon.md`，本文件只保留"能直接照抄执行"的操作步骤。

## 0. 前置：**用「导出当前页面」，不要滚动抓取**

> **本节于 2026-08-19 被推翻并重写。** 原文写的是「导出被锁，一律用滚动抓取」——**那是错的**，
> 起因是只试了两个同名按钮里的一个。保留这段说明，是因为这个误判形态值得记住。

报表右上角有**两个长得很像的导出按钮**，行为完全不同：

| 按钮 | 行为 |
|---|---|
| 「导出」 | 弹付费墙「已达到每日报告限额」，**产出 0 个文件** |
| **「导出当前页面」** | **直接下载当前 100 行 CSV，不扣费、不弹窗、无声完成** |

**判据：凡是要写下「某功能不可用」的结论，先确认你点的是不是同名的另一个控件。**
点完没有任何视觉反馈是正常的（静默下载），不要因为「看起来没反应」就判定失败。

### 标准流程（已端到端验证，op.gg 引荐域名 4 页 400 行）

```js
// 页面里一行注入驱动（receiver 的 /script 端点，不用把源码贴进对话）
const src = await (await fetch(`http://127.0.0.1:${PORT}/script?name=semrush`)).text(); (0,eval)(src);
SEMX.run({pages: 4})        // ← 不要 await，隔几秒查 SEMX.log / SEMX.done
```

```bash
# 导完立刻搬走改名，中间不许插入别的导出
node .rankup/scripts/semrush-collect.mjs   --target op.gg --report refdomains --expect 4 --out data/game-mbti/raw
```

### 三个必须知道的细节

1. **分页是 URL 驱动**：点 Next 后 URL 多出 `&page=2`。可以在页内循环点 Next，
   也可以直接拼 `...&page=N` 逐页开。
2. **翻页后表格会短暂重挂载，「导出当前页面」按钮消失几百毫秒**。
   只等「页码区间变化」就去找按钮，稳定复现为第 2 页 FAIL——要等的是**按钮回来了**。
   `semrush-export.browser.js` 已经按这个条件等。
3. **下载文件名是 `current-page-<时间戳>.csv`，不含域名也不含报表名**。
   两个目标的导出混在下载目录里，除了时间戳没有任何区分依据。
   所以每导完一个目标**立刻**跑 `semrush-collect.mjs`。

滚动抓取（`HARVEST`）只在导出真的不可用时作为兜底。注意 Semrush 的表格是
**document 级滚动**而不是嵌套 div，`HARVEST.init()` 在这里会返回 false，
需要回退到 `document.scrollingElement`。

## 0.5 关键词魔法工具：整包免费导出（**找词一律走这里**）

**这个报表的导出模型和别的报表完全不同，不要套用第 0 节的结论。**
点右上角导出图标 → 弹出「导出数据」面板 → 选「所有 (N)」+ CSV → **整包免费下载**。
已验证一次导出 4,527 行 / 904KB，无付费墙、无弹窗、无配额提示。
所以这里**不要**找「导出当前页面」，也**不要**翻页。

下载文件名自带语义（`<seed>_all-keywords_<db>_<date>.csv`），不像引荐域名那种
`current-page-<时间戳>.csv` 需要抢时间搬走，可以攒一批再统一归档。

### URL 完全可驱动

```
https://sem.3ue.co/analytics/keywordmagic/?q=<seed>&db=<country>&searchType=keyword
  &type=all&mode=0&filter=<筛选条件压缩串>&sort=volume_desc
```

`filter=` 是筛选条件的 gzip+base64 串，**跨 q、跨 db 都可以直接复用**（已验证）。
KD ≤ 34% 的串：

```
H4sIAAAAAAAAA32OSwrDMAwF76K1F4GmG18lBGNsuTUolvGvlJK716lDV6W7J2nEvBcY3iIWXzwHRdiQQC6rABPNCNY7502l8uzzC3xomApakE5TRgEcMenjG%2BRVQNNUEeS0i%2F%2Fo%2FEUv894t8Z50xmEcWflgqFpUxDffu0wCEubeIw8qY4rKoS61r39XOw3LehgaU91Ow4OTzcpwDeVzfgOfoPvGBgEAAA%3D%3D
```

想换筛选条件：在 UI 上设一次，然后从地址栏把新的 `filter=` 抄下来即可。

### 标准流程（每个 seed 两步）

整页导航会清掉 `window.KWM`，所以必须「导航一次、注入一次」：

```
# 1. navigate 到拼好的 URL
# 2. 在页面里执行：
await new Promise(r=>setTimeout(r,10000));   // 等表格渲染，少于 8s 会抓空
// 端口不要写死，从 .rankup/receiver.json 读（见下方「接收端端口」）
const src = await (await fetch(`http://127.0.0.1:${PORT}/script?name=kwmagic`)).text();
(0,eval)('(function(){'+src+'})()');
await KWM.export()    // → {ok:true, stats:{keywords, volume, avgKd}}
```

```bash
# 攒完一批后统一归档 + 出报告
mv ~/Downloads/*_all-keywords_*.csv data/game-mbti/kwmagic/
node .rankup/scripts/kwmagic-report.mjs --dir data/game-mbti/kwmagic --top 20 --kd 30 --min-vol 300
```

### 两个必须知道的细节

1. **导出图标是 `<svg>`，挂着 `data-ui-name="FileExport"`**。SVG 没有 `.click()`，
   直接调报 `tr.click is not a function`，要 `closest('button,[role=button],a')`。
2. **「导出数据」面板异步挂载，要两三秒**。按坐标点会稳定失联（本轮踩过两次），
   `KWM.export()` 已改成轮询等「CSV」按钮出现再点。

## 1. URL 模板速查

所有链接可以直接改参数后 `navigate` 打开，不需要点 UI 一层层找。

```
# 域名概览（Authority Score / 流量 / 关键词数 / 反链数 一览）
https://sem.3ue.co/analytics/overview/?q=<domain>&db=<country>&searchType=domain

# 反向链接明细（源页面、锚文本、目标URL、dofollow/nofollow）
https://sem.3ue.co/analytics/backlinks/backlinks/?q=<domain>&searchType=domain

# 反向链接概览（汇总卡片）
https://sem.3ue.co/analytics/backlinks/overview/?q=<domain>&searchType=domain

# 引荐域名列表
https://sem.3ue.co/analytics/refdomains/report/?q=<domain>&searchType=domain

# 自然搜索关键词排名
https://sem.3ue.co/analytics/organic/positions/?db=<country>&device=<desktop|mobile>&currency=usd&q=<domain>&searchType=domain

# 广告/付费关键词
https://sem.3ue.co/analytics/adwords/positions/?db=<country>&device=<desktop|mobile>&currency=usd&q=<domain>&searchType=domain

# 域名对比（最多几个域名一起看，用竖线分隔，每个后面跟 :domain）
https://sem.3ue.co/analytics/comparedomains/?db=<country>&device=desktop&currency=usd&q=<domain>&searchType=domain&compareWith=<domain2>:domain|<domain3>:domain

# 关键词概览（含分国家搜索量，含 AI 意见）—— db= 是本报表最关键的参数
https://sem.3ue.co/analytics/keywordoverview/?q=<keyword>&db=<country>&searchType=keyword

# AI SEO / AI 可见度（ChatGPT / Google AI Overview / AI Mode / Gemini）
https://sem.3ue.co/ai-seo/overview/?db=<country>&q=<domain>&llm=<gpt|aiOverview|aiMode|gemini>&preset=brandedSources
```

`db` 参数取值：ISO 两位小写国家代码，如 `us`、`kr`、`jp`、`uk`、`de`，或 `worldwide`（全球汇总）。**没有 `cn`**——Semrush 数据源是 Google 搜索结果，不覆盖中国大陆搜索生态，只有 `中国台湾`/`中国香港` 两个地区库。**传一个不存在的国家代码不会报错，界面会静默 fallback 到上一次选中的国家**，所以不要靠 URL 猜代码，先在页面的国家选择器里用中文国家名搜索确认存在（英文名经常搜不到，比如输入 "China"/"Japan" 会显示"未找到任何数据"，必须输入"中国"/"日本"）。

`searchType` 取值：`domain`（根域名）/ `subdomain`（子域名，只统计该子域自己的数据）。

## 2. 反向链接滚动抓取 SOP（复制即用）

1. 用 `mcp__claude-in-chrome__navigate` 打开 `https://sem.3ue.co/analytics/backlinks/backlinks/?q=<domain>&searchType=domain`
2. 截一张图确认表格已加载完成（不是转圈占位符）
3. 用 `javascript_tool` 注入下面这段 **补丁版** HARVEST（比 `harvest.browser.js` 原版多一层 fallback，因为 Semrush 的滚动容器是整页 `document`，不是内部 div，原版 `init()` 在这里会返回 `false`）：

```js
(function () {
  const HARVEST = {
    rows: {}, any: {}, log: [], sc: null, done: false,
    init() {
      this.rows = {}; this.any = {};
      const divs = [...document.querySelectorAll('div')]
        .filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)
        .sort((a, b) => b.scrollHeight - a.scrollHeight);
      // Semrush 关键补丁：找不到内部滚动 div 时退回整页滚动
      this.sc = divs[0] || document.scrollingElement || document.documentElement;
      return !!this.sc;
    },
    _leaves(topY, minX) {
      const out = [];
      const walker = document.createTreeWalker(this.sc || document, NodeFilter.SHOW_ELEMENT);
      let el;
      while ((el = walker.nextNode())) {
        if (el.children.length) continue;
        const text = el.textContent && el.textContent.trim();
        if (!text || text.length > 70) continue;
        const r = el.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0 || r.top <= topY || r.left < minX) continue;
        out.push({ x: r.left, y: r.top + r.height / 2, t: text });
      }
      return out;
    },
    grabAny({ minCells = 5, topY = 300, minX = 0 } = {}) {
      const leaves = this._leaves(topY, minX);
      const buckets = {};
      leaves.forEach((l) => {
        const k = Math.round(l.y / 6) * 6;
        (buckets[k] = buckets[k] || []).push(l);
      });
      Object.values(buckets).forEach((cells) => {
        if (cells.length < minCells) return;
        const row = cells.sort((a, b) => a.x - b.x).map((c) => c.t).join('\t');
        this.any[row.split('\t')[0] + '|' + row.length] = row;
      });
      return Object.keys(this.any).length;
    },
    start(opts = {}) {
      this.done = false;
      (async () => {
        for (let y = 0; y <= this.sc.scrollHeight; y += opts.step || 200) {
          this.sc.scrollTop = y;
          await new Promise((r) => setTimeout(r, opts.wait || 140));
          this.grabAny(opts);
        }
        this.sc.scrollTop = 0;
        await new Promise((r) => setTimeout(r, 400));
        this.grabAny(opts);
        this.done = true;
      })();
      return 'started';
    },
    status() { return { done: this.done, rows: Object.keys(this.any).length, log: this.log }; },
  };
  window.HARVEST = HARVEST;
  return HARVEST.init();
})();
```

4. 反链明细表用 `HARVEST.start({topY:460, minCells:4, step:250, wait:150})`；引荐域名表用 `topY:650`（因为引荐域名页顶部多了一个"新增和丢失趋势图"，表头位置更靠下）。`topY` 要盖过筛选栏，不然筛选按钮文字会被当成数据行。
5. 用 `HARVEST.status()` 轮询直到 `done:true`。**不要 await，每次单独调用轮询**（javascript_tool 单次约 45s 超时，超时了直接回查 `HARVEST.status()`，往往早跑完了，不是失败）。
6. 完成后落盘，不落浏览器下载目录，直接 POST 到本机 receiver：

```js
const payload = Object.values(HARVEST.any).join('\n');
await fetch(`http://127.0.0.1:${PORT}/slice?seed=<seed>&kind=<kind>&slice=<slice>`, {method:'POST', body: payload});
```
   receiver 没启动的话（`/ping` 不回本项目的 root）：
```bash
# 不传 --port：端口按 root 派生并写进 .rankup/receiver.json
cd <repo> && nohup node .rankup/scripts/receiver.mjs --root data/game-mbti > /tmp/recv.log 2>&1 &
sleep 2 && cat /tmp/recv.log     # ← 必看：端口被占时它在这里报错，丢进 /dev/null 就成了静默失败
```

### 接收端端口

**页面侧不要硬编码端口。** 端口按项目 root 派生（本项目 8747），写在 `.rankup/receiver.json`：

```bash
PORT=$(python3 -c "import json;print(json.load(open('.rankup/receiver.json'))['port'])")
curl -s --noproxy 127.0.0.1 http://127.0.0.1:$PORT/ping    # 回报 {pong, root, port, pid}
```

**注入前先核对 `/ping` 返回的 `root` 是不是本项目。** 写死端口的后果是：
别的项目的接收端占着这个端口时，你的 fetch 照样成功，数据落进别人的目录，全程零报错。
   数据落在 `data/game-mbti/seeds/<seed>/<kind>/`。

7. **每次做完整页导航（不是页内路由跳转）后，`window.HARVEST` 会被清空**，必须重新执行第 3 步整段注入，不能只调 `HARVEST.init()`（会报 `ReferenceError: HARVEST is not defined`）。

## 3. 已知限制（别踩同一个坑）

- **导出**：「导出」被锁，「导出当前页面」可用且免费，见第 0 节（此条已于 2026-08-19 更正）。
- **每页固定 100 行**，翻页是 URL 驱动的（`&page=N`），已于 2026-08-19 验证（本条原写「没摸出 URL 参数」，是错的）。排序同样可驱动：`&sort=volume_desc`。抓取时目前只覆盖了首屏 100 行，域名反链总数上万的情况（如 personality-database.com 的 79,202、op.gg 的约 140 万）远没有抓完，只是抽样。
- **关键词概览页有一个「更新」按钮 + `5,000/5,000` 配额显示**，具体是"已用/总额"还是"总额/总额"没确认，写脚本时留一个检测分支：页面上如果弹出类似「已达到...限额」的遮罩弹窗，直接判定这次操作失败并中止，不要在原地空等或重试。
- **国家库不含中国大陆**，只有中国台湾、中国香港。
- **首页「用于监控的域名」表格是共享账号里其他用户的项目**，不要读取、不要写进任何产出物。
