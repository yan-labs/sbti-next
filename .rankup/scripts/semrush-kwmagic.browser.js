/**
 * Semrush 关键词魔法工具（Keyword Magic Tool）批量导出驱动
 *
 * 为什么单独写一个：这个报表的导出**和别的报表不一样**。
 *   - 别的报表（引荐域名/反链等）：「导出」付费墙，只有「导出当前页面」免费，一次 100 行。
 *   - 关键词魔法工具：点右上角导出图标弹出「导出数据」面板，选「所有(N)」+ CSV，
 *     **整包免费下载**，一次几千行。已验证 4,527 行 / 904KB，无付费墙、无弹窗。
 *   所以这里**不要**去找「导出当前页面」，也**不要**翻页。
 *
 * URL 完全可驱动，三个参数拼好即可，不需要点任何筛选 UI：
 *   https://sem.3ue.co/analytics/keywordmagic/?q=<seed>&db=<country>&searchType=keyword
 *     &type=all&mode=0&filter=<gzip+base64 的筛选条件>&sort=volume_desc
 *   - `filter=` 是筛选条件的压缩串，**跨 q 和跨 db 可以直接复用**（已验证）。
 *     KD 0-34% 的串见 RUNBOOK。想换条件就在 UI 上设一次，然后从地址栏抄新的 filter。
 *   - `sort=volume_desc` 按搜索量降序。
 *   - db 没有 cn，只有 tw / hk。
 *
 * 下载文件名自带语义：`<seed>_all-keywords_<db>_<date>.csv`，
 * 和引荐域名那种 `current-page-<时间戳>.csv` 不同，**不需要抢时间搬走**。
 *
 * 用法（每个 seed 两步，因为整页导航会清掉 window.KWM）：
 *   1. navigate 到拼好的 URL，等表格出来
 *   2. const src = await (await fetch('http://127.0.0.1:8788/script?name=kwmagic')).text(); (0,eval)(src);
 *      KWM.export()        // 返回 {ok, stats}
 */
const KWM = {
  /**
   * 导出按钮。Semrush 给导出图标挂了 `data-ui-name="FileExport"`，比按坐标点稳，
   * 但有**两个坑**，都踩过：
   *
   * 1. 这个属性挂在 **<svg> 图标**上，SVG 元素没有 `.click()`，
   *    直接调报 `tr.click is not a function`。必须往上找到真正的按钮。
   * 2. **同一个页面上可能有多个 FileExport 图标**。「主要页面」报表就有两个：
   *    先出现的是标题栏的「导出成 PDF」，后面那个才是表格的数据导出。
   *    `querySelector` 取第一个 = 稳定取错，表现为弹出 PDF 的 Export settings 弹窗、
   *    然后等不到「CSV」按钮而超时。所以这里按文案排除 PDF，不靠出现顺序。
   */
  trigger() {
    const btns = [...document.querySelectorAll('button,[role=button],a')].filter(
      (b) => b.querySelector('[data-ui-name="FileExport"]') || b.getAttribute('data-ui-name') === 'FileExport'
    );
    const isPdf = (b) => /PDF/i.test((b.innerText || '') + ' ' + (b.getAttribute('aria-label') || ''));
    return btns.find((b) => !isPdf(b)) || null;
  },

  fmtBtn(fmt = 'CSV') {
    return [...document.querySelectorAll('button,[role=button],a')]
      .find((e) => (e.innerText || '').trim() === fmt);
  },

  /** 顶部汇总条：所有关键词 / 总搜索量 / 平均 KD。用来判断这一批值不值得做。 */
  stats() {
    const t = document.body.innerText;
    const kw = t.match(/所有关键词[:：]\s*([\d.,KM]+)/);
    const vol = t.match(/总搜索量[:：]\s*([\d,]+)/);
    const kd = t.match(/平均\s*KD[:：]\s*(\d+)%/);
    return { keywords: kw && kw[1], volume: vol && vol[1], avgKd: kd && kd[1] };
  },

  /** 付费墙探测：这个报表目前没见过，但别的报表有，留一个分支，宁可失败也不空等。 */
  blocked() { return /已达到.{0,10}限额|report limit/i.test(document.body.innerText); },

  async export({ fmt = 'CSV', timeout = 15000 } = {}) {
    if (this.blocked()) return { ok: false, why: '页面已出现限额提示，中止' };
    const tr = this.trigger();
    if (!tr) return { ok: false, why: '没找到导出图标 [data-ui-name=FileExport]，表格可能还没加载完' };
    const stats = this.stats();
    tr.click();
    // 面板是异步挂载的，实测要 2-4 秒。按坐标点会在这里稳定失联，所以轮询等按钮出现。
    const t0 = Date.now();
    let btn = null;
    while (Date.now() - t0 < timeout) {
      await new Promise((s) => setTimeout(s, 300));
      btn = this.fmtBtn(fmt);
      if (btn) break;
    }
    if (!btn) return { ok: false, why: `${timeout}ms 内没等到「${fmt}」按钮`, stats };
    btn.click();
    return { ok: true, stats };
  },
};
window.KWM = KWM;
return { ready: true, hasTrigger: !!KWM.trigger(), stats: KWM.stats() };
