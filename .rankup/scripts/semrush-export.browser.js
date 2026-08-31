/**
 * semrush-export.browser.js — 用「导出当前页面」按钮批量导 Semrush 报表，不滚动、不抓 DOM。
 *
 * 为什么存在：这个站有**两个长得很像的导出按钮**，选错就得出「导出被锁」的错误结论：
 *   ① 「导出」        → 弹付费墙「已达到每日报告限额」，产出 0 个文件
 *   ② 「导出当前页面」 → 直接下载当前 100 行的 CSV，**不扣费、不弹窗**   ← 用这个
 * 实测 2026-08-19：点 ② 立刻落一个 `current-page-<YYYYMMDD>-<HHMMSS>.csv`（203 行含表头与换行）。
 * 早期一版脚本只试了 ①，据此判定「导出不可用」并退回滚动抓取——白烧了大量时间和上下文。
 * 判据：**凡是写下「某功能不可用」的结论，先确认你点的是不是同名的另一个控件。**
 *
 * 落盘的坑：下载文件名是 `current-page-<时间戳>.csv`，**不含目标域名，也不含报表名**。
 * 两次不同目标的导出只能靠时间戳区分，混在下载目录里就再也认不出来。
 * 所以每导完一个目标必须立刻跑 `semrush-collect.mjs` 搬走并改名，中间不许插入别的导出。
 *
 * 用法（贴进浏览器代码执行工具，或用 receiver 的 /script?name=semrush 一行注入）：
 *   SEMX.exportPage()            // 导当前这一页
 *   SEMX.run({pages: 5})         // 导 5 页：导出 → Next → 导出 …（**不要 await**，见下）
 *   SEMX.log                     // 轮询进度
 *
 * 不要 await run()：代码执行工具单次约 45s 超时，而超时的是传输通道不是页面逻辑，
 * 误判成失败去重跑会把两个循环叠在一起，产生重复文件。
 *
 * 注意：Semrush 是**路径路由**（不是 sim 那种 hash 路由），换报表 = 整页刷新 = 注入的 JS 全丢，
 * 每导一个新目标都要重新注入一次。所以才要有 receiver 的 /script 端点，一行搞定。
 *
 * **分页是 URL 驱动的**：点 Next 之后 URL 会多出 `&page=2`。所以既可以在页内循环点 Next，
 * 也可以直接拼 `...&page=N` 逐页开。页内循环省一次整页加载，但**翻页后表格会短暂重挂载，
 * 「导出当前页面」按钮会消失几百毫秒** —— 第一版只等页码区间变化就去找按钮，
 * 结果第 2 页必然 FAIL。判据：等的应该是「按钮回来了」而不只是「数据变了」。
 */
(function () {
  const byText = (re) =>
    [...document.querySelectorAll('button,[role=button],a')].find((e) => re.test((e.innerText || '').trim()));

  const SEMX = {
    log: [],
    done: false,

    /** 「导出当前页面」——精确匹配，**不要**用 /导出/ 这种宽松正则，会命中付费墙那个 */
    exportBtn() {
      return byText(/^导出当前页面$|^Export this page$/i);
    },
    nextBtn() {
      return byText(/^Next$|^下一页$/i);
    },

    exportPage() {
      const b = this.exportBtn();
      if (!b) return { ok: false, why: '没找到「导出当前页面」按钮。检查是不是报表还没加载完，或换了语言界面' };
      b.click();
      return { ok: true };
    },

    /** 当前页码区间，用来核对翻页有没有真的生效（"1 - 100 (~13,052)"） */
    range() {
      const m = document.body.innerText.match(/(\d[\d,]*)\s*-\s*(\d[\d,]*)\s*\(~?([\d,]+)\)/);
      return m ? { from: m[1], to: m[2], total: m[3] } : null;
    },

    /** 导 N 页。fire-and-forget：调完立刻返回，隔几秒查 SEMX.log / SEMX.done */
    run({ pages = 1, wait = 4000 } = {}) {
      this.done = false;
      this.log = [];
      (async () => {
        for (let i = 0; i < pages; i++) {
          const before = JSON.stringify(this.range());
          const r = this.exportPage();
          this.log.push(`p${i + 1} export ${r.ok ? 'ok' : 'FAIL: ' + r.why} @ ${before}`);
          if (!r.ok) break;
          await new Promise((s) => setTimeout(s, wait));
          if (i === pages - 1) break;
          const n = this.nextBtn();
          if (!n || n.disabled) {
            this.log.push('没有下一页了，提前结束');
            break;
          }
          n.click();
          // 翻页是异步换数据，必须等页码区间真的变了再导，否则会把同一页导两遍
          // 必须同时满足：页码区间变了 **且**「导出当前页面」按钮重新挂载完成。
          // 只等前者会在按钮还没回来时就去点，稳定复现为第 2 页 FAIL。
          const t0 = Date.now();
          let ok = false;
          while (Date.now() - t0 < 25000) {
            await new Promise((s) => setTimeout(s, 400));
            const changed = JSON.stringify(this.range()) !== before && this.range() !== null;
            if (changed && this.exportBtn()) { ok = true; break; }
          }
          if (!ok) {
            this.log.push(`翻页后 25s 内没等到（区间=${JSON.stringify(this.range())}，按钮=${!!this.exportBtn()}），停止`);
            break;
          }
          await new Promise((s) => setTimeout(s, 800)); // 按钮刚挂载就点偶尔无效，留一点余量
        }
        this.done = true;
      })();
      return 'started ' + pages + ' page(s)';
    },
  };

  window.SEMX = SEMX;
  return { ready: true, hasExport: !!SEMX.exportBtn(), hasNext: !!SEMX.nextBtn(), range: SEMX.range() };
})();
