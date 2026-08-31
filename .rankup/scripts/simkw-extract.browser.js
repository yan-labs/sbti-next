/**
 * simkw-extract.browser.js — Similarweb Digital Suite「关键词生成器」表格提取器
 *
 * 用法：整段贴进 claude-in-chrome 的 javascript_tool（必须是用户的真实 Chrome，
 *      内置浏览器没有登录态）。先 SIMKW.init()，再 SIMKW.page() 抓当前页。
 *
 * 入口 URL（tab 由 URL 参数控制，**不要点 tab，直接改 URL**）：
 *   https://sim.3ue.co/#/digitalsuite/acquisition/findkeywords/keyword-generator-tool/999/28d
 *     ?searchEngine=google&keyword=<词>&webSource=Total&isWWW=*&tab=<TAB>
 *   TAB ∈ phraseMatch | relatedKeywords | questions
 *
 * ── 已验证：2026-08-02（keyword=tarot，phraseMatch 100/100 行无缺失）──
 *
 * 踩过的坑（改脚本前先读，别重蹈）：
 *  1. 表格是**列式虚拟渲染**：没有 <tr>，也没有 role="row"。只能按 Y 坐标重建行。
 *  2. 按「行号单元格」分桶会漏行（实测 100 行漏 23）。必须以**关键词单元格为锚点**，
 *     再收同一 Y(±11px) 的其它单元格 —— 这样才 100/100。
 *  3. 左侧导航栏也是 div，会混进来。必须 left > 340 才算表格区。
 *  4. javascript_tool 单次执行 **45s 超时**，但**超时的是 CDP 传输、不是页面逻辑** ——
 *     实测超时后回头查 SIMKW.rows 发现活儿早干完了。所以**永远不要 await 长循环**：
 *     用 SIMKW.start() 触发（立即返回），再单独调 SIMKW.status() 轮询。
 *  4b. grab() 早期版本对 document 全量 querySelectorAll('div,span,a')，单次 ~2s，
 *     23 步就爆 45s。改成 TreeWalker + 限定在滚动容器内后是 **6ms**（快 300 倍）。
 *     任何"扫描 DOM 找单元格"的实现都要先量单次耗时再写循环。
 *  5. 单次返回值约 1.3KB 就被截断 —— 取数用 SIMKW.dump(i,j) 分片拿。
 *  6. 语言过滤的停用词会和英语撞车：`\bno\b`(葡) 会误杀 `yes or no tarot`，
 *     `\bem\b`/`\bna\b` 同理。NONEN 里已剔除这些，加词前先想清楚。
 *  7. 国家过滤器是**付费功能**，共享账号用不了 → 只能全球口径，
 *     所以语言过滤必须在本地做（tarot 全球前 100 里约 41% 是 pt/es/tr）。
 *  8. Excel 导出**按行扣点数**（1 行 1 点），共享账号本月余额 500 点。
 *     导全表要 24,834 点 —— 不要走导出，抓取免费且不限量。
 *  9. 翻页控件在网格下方，**滚到底才会进 DOM**，直接 querySelector 找不到。
 * 10. 「网站浏览工具→关键词」的 URL 可直接拼域名，省去搜索框交互：
 *     /#/organicsearch/pageAnalysis/website-keyword-v2/<域名>/999/28d
 *       ?key=<域名>&pageFilter=%5B%7B%22url%22%3A%22<域名>%22%2C%22searchType%22%3A%22domain%22%7D%5D
 *       &webSource=Total&selectedPageTab=Total
 *     这张表带**落地页**列 —— 竞品「哪个页面在吃哪个词」一次看全。
 * 11. 该工具的「最近的搜索」会显示**其他用户**查过的域名（共享账号）。
 *     那是别人的数据，不要读取、不要写进任何报告。
 */
(function () {
  const NONEN =
    /^(o|a|os|as|el|la|los|las|le|il|un|una|uma)\s|[áàâãéêíóôõúüçñışğ]|\b(de|del|da|do|dos|das|con|para|gratis|cartas?|copas|ouros|paus|espadas|significado|tirada|tirage|gratuit|tarocchi|karten|kostenlos|fali|kart|anlam|eremita|estrela|mundo|torre|julgamento|diabo|enforcado|louco|imperatriz|imperador|enamorados|sacerdotisa|carro|forca|roda|fortuna|lua|mago|papa|morte)\b/i;

  const SIMKW = {
    rows: {},
    sc: null,

    /** 定位滚动容器；每次切 tab / 换词后必须重调 */
    init() {
      this.rows = {};
      this.sc = [...document.querySelectorAll('div')]
        .filter((d) => d.scrollHeight > d.clientHeight + 200 && d.clientHeight > 300)
        .sort((a, b) => b.scrollHeight - a.scrollHeight)[0];
      return { scroller: !!this.sc, scrollHeight: this.sc && this.sc.scrollHeight };
    },

    /** 抓当前视口内的行（以关键词单元格为锚点重建）。TreeWalker + 限定容器 = ~6ms */
    grab() {
      const leaves = [];
      const walker = document.createTreeWalker(this.sc || document, NodeFilter.SHOW_ELEMENT);
      let e;
      while ((e = walker.nextNode())) {
        if (e.children.length) continue;
        const t = e.textContent && e.textContent.trim();
        if (!t || t.length > 60) continue;
        const r = e.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0 || r.top <= 390) continue;
        leaves.push({ x: r.left, y: r.top + r.height / 2, t });
      }

      // 关键词列 x∈(450,700)；行号列 x<450
      leaves
        .filter((l) => l.x > 450 && l.x < 700 && !/^\d+$/.test(l.t))
        .forEach((k) => {
          const same = leaves.filter((l) => Math.abs(l.y - k.y) < 11).sort((a, b) => a.x - b.x);
          const num = same.find((l) => l.x < 450 && /^\d+$/.test(l.t));
          if (num) this.rows[+num.t] = same.filter((l) => l.x >= 450).map((l) => l.t).join('\t');
        });
      return Object.keys(this.rows).length;
    },

    /** 滚一段并抓取。45s 超时，一次别超过 ~20 步 */
    async page({ from = 0, to = null, step = 200, wait = 200 } = {}) {
      const end = to == null ? this.sc.scrollHeight : to;
      for (let y = from; y <= end; y += step) {
        this.sc.scrollTop = y;
        await new Promise((r) => setTimeout(r, wait));
        this.grab();
      }
      return { collected: Object.keys(this.rows).length, scrollTop: this.sc.scrollTop };
    },

    /** 补齐漏掉的行号（虚拟滚动偶尔跳格） */
    async patch(total = 100, rowH = 41) {
      const miss = Array.from({ length: total }, (_, i) => i + 1).filter((i) => !this.rows[i]);
      for (const m of miss) {
        this.sc.scrollTop = Math.max(0, (m - 4) * rowH);
        await new Promise((r) => setTimeout(r, 200));
        this.grab();
      }
      return Array.from({ length: total }, (_, i) => i + 1).filter((i) => !this.rows[i]);
    },

    /** 英文行（NONEN 过滤），返回 [关键词, 28天体量, KD, 意图, 领先者] */
    english() {
      return Object.keys(this.rows)
        .map(Number)
        .sort((a, b) => a - b)
        .map((i) => this.rows[i].split('\t'))
        .filter((c) => !NONEN.test(c[0]))
        .map((c) => [c[0], c[1], c[4] || '', c[5] || '', c[c.length - 1] || ''].join(' | '));
    },

    /**
     * 列位自适应版：不假设任何列的 x 坐标，纯按 Y 聚类重建行。
     * 「关键词生成器」和「网站浏览工具→关键词」两张表列位不同，
     * grab() 里写死的 x∈(450,700) 只对前者成立 —— 换报表一律用这个。
     * 返回的行里就带**落地页 URL**（网站关键词表有该列），这是竞品分析的关键。
     */
    grabAny(minCells = 5, topY = 300) {
      const leaves = [];
      const walker = document.createTreeWalker(this.sc || document, NodeFilter.SHOW_ELEMENT);
      let e;
      while ((e = walker.nextNode())) {
        if (e.children.length) continue;
        const t = e.textContent && e.textContent.trim();
        if (!t || t.length > 70) continue;
        const r = e.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0 || r.top <= topY) continue;
        leaves.push({ x: r.left, y: r.top + r.height / 2, t });
      }
      const buckets = {};
      leaves.forEach((l) => {
        const k = Math.round(l.y / 6) * 6;
        (buckets[k] = buckets[k] || []).push(l);
      });
      this.any = this.any || {};
      Object.values(buckets).forEach((cs) => {
        if (cs.length < minCells) return;
        const row = cs.sort((a, b) => a.x - b.x).map((c) => c.t).join('\t');
        this.any[row.split('\t')[0] + '|' + row.length] = row;
      });
      return Object.keys(this.any).length;
    },

    /** grabAny 的 fire-and-forget 全表滚动 */
    startAny() {
      this.done = false;
      (async () => {
        for (let y = 0; y <= this.sc.scrollHeight; y += 200) {
          this.sc.scrollTop = y;
          await new Promise((r) => setTimeout(r, 140));
          this.grabAny();
        }
        this.sc.scrollTop = 0;
        await new Promise((r) => setTimeout(r, 300));
        this.grabAny();
        this.done = true;
      })();
      return 'started';
    },

    /**
     * 一键抓完当前页（**不要 await 这个函数**，见坑 4）。
     * 调用方式：`SIMKW.start(); "started"`  → 隔几秒再 `SIMKW.status()`
     */
    start(total = 100) {
      this.done = false;
      (async () => {
        await this.page({ step: 200, wait: 150 });
        this.missing = await this.patch(total);
        this.done = true;
      })();
      return 'started';
    },

    status() {
      return {
        done: !!this.done,
        rows: Object.keys(this.rows).length,
        missing: this.missing,
        english: this.english().length,
      };
    },

    /**
     * 导出到 ~/Downloads（页面沙箱唯一的高带宽出口，见坑 12）。
     * 文件名规范：`simkw_<YYYYMMDD>_<seed>_<type>.tsv`
     * **必须带日期和种子词**：不带的话换个种子词重跑同一个竞品会同名，
     * Chrome 不覆盖而是另存成 `xxx (1).tsv` 或**去掉扩展名**，
     * 于是 merge 的 `*.tsv` 通配要么漏掉它、要么把两份内容不同的文件都算进去。
     * 实测踩过：同一个目标 save() 两次产生 8577B 的 .tsv 和 8641B 的无扩展名文件。
     */
    save(seed, type) {
      const d = new Date();
      const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
      const slug = (s) => String(s).replace(/[^a-z0-9.-]+/gi, '-').replace(/^-|-$/g, '');
      const name = `simkw_${stamp}_${slug(seed)}_${slug(type)}.tsv`;
      const payload = Object.values(this.any || this.rows || {}).join('\n');
      const blob = new Blob([payload], { type: 'text/tab-separated-values' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 2000);
      return { name, bytes: payload.length };
    },

    /** 分片取数，绕开 javascript_tool 的返回长度截断 */
    dump(i = 0, j = 22, en = true) {
      return (en ? this.english() : Object.values(this.rows)).slice(i, j).join('\n');
    },

    // ── URL 构造器（tab / 域名 / 词全在 hash 里，**不要点 UI**）──────────────
    KWURL: (kw, tab) =>
      `#/digitalsuite/acquisition/findkeywords/keyword-generator-tool/999/28d?searchEngine=google&keyword=${encodeURIComponent(kw)}&webSource=Total&isWWW=*&tab=${tab}`,

    DOMURL: (d) =>
      `#/organicsearch/pageAnalysis/website-keyword-v2/${d}/999/28d?key=${d}&pageFilter=${encodeURIComponent(
        JSON.stringify([{ url: d, searchType: 'domain' }])
      )}&webSource=Total&selectedPageTab=Total&comparedDuration=`,

    /**
     * SERP 市场参与者：**每个词的真实占位者名单 + 各自周流量 + 排名最高的网址**。
     * 「关键词生成器」的「领先者」列**每个词只给第一名**，不是 top 10 ——
     * 只靠那一列做竞品分析会严重低估盘面（实测 80 个领先者域名里只抓过 5 个）。
     * 要做「top 10 网站扩词」必须先跑这个报告拿名单，再逐个 DOMURL。
     * 名单在右侧 x>1100 区域，用 grabAny({minCells:2}) 并把 x 门槛改成 1100。
     */
    SERPURL: (kw) =>
      `#/digitalsuite/acquisition/keyword/organic/search/999/28d/keywordAnalysis_2?keyword=${encodeURIComponent(
        kw
      )}&tab=phraseMatch&mtd=false&webSource=Total&selectedPageTab=Total&graphDuration=28d&timeGranularity=Weekly&graphType=1&category=All`,

    /**
     * 批量抓多个目标（**不要 await**，见坑 4）：
     *   SIMKW.crawl([{name:'tarot_phraseMatch', seed:'tarot', type:'phraseMatch',
     *                 hash:SIMKW.KWURL('tarot','phraseMatch')}])
     * 之后单独调 `SIMKW.log` 轮询。
     *
     * ⚠ 后台标签：`location.hash` 导航后 SPA 在 hidden 状态**不 mount 虚拟表格**，
     *   init() 会拿不到滚动容器（实测连续 3 个目标全 NO_SCROLLER）。
     *   多标签并行时，每次导航后必须先让该标签前台化一次（截图即可）。
     *   且后台定时器节流约 2.4×（setTimeout 1000ms 实测 2403ms）。
     */
    crawl(targets) {
      this.done = false;
      this.log = [];
      (async () => {
        for (const t of targets) {
          location.hash = t.hash;
          await new Promise((r) => setTimeout(r, t.wait || 8000));
          if (!this.init()) {
            this.log.push(t.name + ' :: NO_SCROLLER（标签在后台？先前台化一次）');
            continue;
          }
          for (let y = 0; y <= this.sc.scrollHeight; y += 200) {
            this.sc.scrollTop = y;
            await new Promise((r) => setTimeout(r, 130));
            this.grabAny();
          }
          this.sc.scrollTop = 0;
          await new Promise((r) => setTimeout(r, 400));
          this.grabAny();
          const res = this.save(t.seed || t.name, t.type || 'data');
          this.log.push(`${t.name} :: rows=${Object.keys(this.any).length} → ${res.name}`);
          await new Promise((r) => setTimeout(r, 1500));
        }
        this.done = true;
      })();
      return 'crawling ' + targets.length;
    },
  };

  window.SIMKW = SIMKW;
  return SIMKW.init();
})();
