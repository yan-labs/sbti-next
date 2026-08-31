#!/usr/bin/env node
/**
 * receiver.mjs — 采集数据的本地接收端，替代「下载到浏览器默认目录再搬走」这条链路。
 *
 * 为什么存在：`<a download>` 只能落到浏览器默认下载目录，而那个目录
 *   (a) 是所有下载共用的垃圾场，文件会被误删、被同名下载改成 `xxx (1)`；
 *   (b) 在 macOS 上受 TCC 保护，终端/node 可能**根本读不到**（本项目实际踩到，
 *       shell `ls` 与 node `readdirSync` 同时 EPERM）。
 * 让页面直接 POST 到本地服务，两个问题一起消失：数据一步到位落进项目目录，
 * 不需要等齐、不需要归并重名副本、不受下载目录权限影响。
 *
 * 用法：
 *   node receiver.mjs --root <项目根>                  # 端口按 root 派生，见下
 *   node receiver.mjs --port 8787 --root <项目根>      # 需要固定端口时才显式传
 * 页面侧（端口从 .rankup/receiver.json 读，不要写死）：
 *   fetch('http://127.0.0.1:<port>/slice?seed=X&kind=raw&slice=Y', {method:'POST', body:tsv})
 *
 * **端口不能写死成一个常量。** 写死的后果和 opencli 里两个任务撞 session 名一样：
 * 两个项目同时开工时，第二个实例 EADDRINUSE 起不来——而如果启动命令把输出丢进
 * /dev/null（后台常驻的常见写法），这个失败是**完全静默的**。随后页面 fetch 照样成功，
 * 打到的却是**另一个项目的接收端**：数据写进别人的目录，`/script` 取到别人的脚本，
 * 全程零报错。所以默认端口按 root 路径派生，并且：
 *   - 占用时**直接崩掉并说清是谁占着**，不静默退让；
 *   - `/ping` 回报自己的 root，调用方可以核对是不是自己那台；
 *   - 实际端口写进 <root>/.rankup/receiver.json，页面侧读它而不是硬编码。
 *
 * 只监听 127.0.0.1，只接受写入 <root>/seeds/<seed>/<kind>/ 的请求，
 * seed/kind/slice 全部做白名单字符校验，防止路径穿越。
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const arg = (k, d) => {
  const i = process.argv.indexOf('--' + k);
  return i > -1 ? process.argv[i + 1] : d;
};
const ROOT = path.resolve(arg('root', path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')));
/** 按 root 绝对路径派生一个稳定端口，落在 8700-8999，避开常见的 3000/8080/8787。 */
function derivePort(root) {
  let h = 0;
  for (const ch of root) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return 8700 + (h % 300);
}
const PORT = Number(arg('port', String(derivePort(ROOT))));
/** 端口写进项目里，页面侧和其它脚本读这个文件，不要硬编码端口。 */
const PORTFILE = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'receiver.json');

const SAFE = /^[a-zA-Z0-9._+-]+$/;
const stamp = () => {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
};

const server = http.createServer((req, res) => {
  // 页面在 https 源上，跨源 POST 需要 CORS 放行
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.writeHead(204).end();

  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  // /ping 回报自己的 root：调用方必须核对，否则无法分辨自己连的是不是别的项目那台
  if (url.pathname === '/ping') {
    return res.writeHead(200, { 'content-type': 'application/json' })
      .end(JSON.stringify({ pong: true, root: ROOT, port: PORT, pid: process.pid }));
  }

  // GET /script?name=<白名单名> —— 把本机的 Skill 脚本喂给页面，页面 fetch 回来 eval 即可。
  // 为什么要有这个：注入提取器的唯一通道是把源码当字符串传进「在页面执行 JS」的工具，
  // 而那会把整份脚本塞进对话上下文；久而久之就演变成「懒得贴，干脆现写一个精简版」——
  // 也就是重造轮子。开一个本地只读端点后，页面一行 fetch 就能拿到完整脚本，
  // 上下文成本归零，于是没有任何理由再手写提取器。
  // 只允许白名单里的绝对路径，不接受调用方传路径。
  if (url.pathname === '/script') {
    const NAME = url.searchParams.get('name') || '';
    const WHITELIST = {
      harvest: `${process.env.HOME}/.claude/skills/backlink/scripts/harvest.browser.js`,
      chatbot: `${process.env.HOME}/.claude/skills/rankup/scripts/chatbot-drive.browser.js`,
      semrush: new URL('./semrush-export.browser.js', import.meta.url).pathname,
      kwmagic: new URL('./semrush-kwmagic.browser.js', import.meta.url).pathname,
    };
    const file = WHITELIST[NAME];
    if (!file || !fs.existsSync(file)) {
      return res.writeHead(404, { 'content-type': 'text/plain' })
        .end(`unknown script: ${NAME}. known: ${Object.keys(WHITELIST).join(',')}`);
    }
    return res.writeHead(200, { 'content-type': 'application/javascript' })
      .end(fs.readFileSync(file, 'utf8'));
  }
  if (url.pathname !== '/slice' || req.method !== 'POST') return res.writeHead(404).end('no');

  const seed = url.searchParams.get('seed') || '';
  const kind = url.searchParams.get('kind') || 'raw';
  const slice = url.searchParams.get('slice') || '';
  if (![seed, kind, slice].every((s) => SAFE.test(s))) {
    return res.writeHead(400).end('bad params');
  }

  let body = '';
  req.setEncoding('utf8');
  req.on('data', (c) => (body += c));
  req.on('end', () => {
    const dir = path.join(ROOT, 'seeds', seed, kind);
    fs.mkdirSync(dir, { recursive: true });
    const file = `${seed}__${kind}__${slice}__${stamp()}.tsv`;
    const dest = path.join(dir, file);
    const rows = body.split('\n').filter((l) => /^\d+\t/.test(l)).length;

    // 同一切片可能被重复提交（重试，或两个采集循环并发跑同一批目标）。
    // **不能盲目后写覆盖** —— 实测同一切片先后收到 8 行与 84 行两份，
    // 谁最后到达纯属偶然，覆盖会静默丢掉更完整的那份。规则：只保留数据行更多的。
    if (fs.existsSync(dest)) {
      const old = fs.readFileSync(dest, 'utf8');
      const oldRows = old.split('\n').filter((l) => /^\d+\t/.test(l)).length;
      if (oldRows >= rows) {
        console.log(`跳过 ${seed}/${slice}：新 ${rows} 行 ≤ 已有 ${oldRows} 行，保留已有`);
        return res.writeHead(200).end(JSON.stringify({ file, rows: oldRows, kept: 'existing' }));
      }
      console.log(`覆盖 ${seed}/${slice}：新 ${rows} 行 > 已有 ${oldRows} 行`);
    }
    fs.writeFileSync(dest, body);

    // manifest 与文件名用同一个本地日期，避免 UTC 造成差一天
    const mp = path.join(dir, 'manifest.json');
    const m = fs.existsSync(mp) ? JSON.parse(fs.readFileSync(mp, 'utf8')) : { seed, kind, entries: [] };
    m.entries = m.entries.filter((e) => e.file !== file);
    m.entries.push({
      file,
      slice,
      bytes: body.length,
      dataRows: rows,
      harvestedAt: `${stamp().slice(0, 4)}-${stamp().slice(4, 6)}-${stamp().slice(6, 8)}`,
      via: 'receiver',
    });
    m.entries.sort((a, b) => a.file.localeCompare(b.file));
    fs.writeFileSync(mp, JSON.stringify(m, null, 2));

    console.log(`${rows === 0 ? '空!' : ' ok'}  ${seed}/${slice}  ${rows} 行  ${body.length}B  → ${file}`);
    res.writeHead(200).end(JSON.stringify({ file, rows, bytes: body.length }));
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    // 静默退让是最坏的选择：页面会连上占着这个端口的别人，把数据写进别人的项目。
    console.error(
      `端口 ${PORT} 已被占用。这台接收端**没有启动**。\n` +
        `先确认占用者是谁：  lsof -nP -iTCP:${PORT} -sTCP:LISTEN\n` +
        `核对它服务的是不是本项目：  curl -s --noproxy 127.0.0.1 http://127.0.0.1:${PORT}/ping\n` +
        `确认是别的项目的话，用 --port 换一个，不要复用。`
    );
  } else {
    console.error(err);
  }
  process.exit(1);
});

server.listen(PORT, '127.0.0.1', () => {
  fs.mkdirSync(path.dirname(PORTFILE), { recursive: true });
  fs.writeFileSync(PORTFILE, JSON.stringify({ port: PORT, root: ROOT, pid: process.pid, startedAt: new Date().toISOString() }, null, 2));
  console.log(`receiver 就绪 http://127.0.0.1:${PORT}  root=${ROOT}  (端口已写入 ${PORTFILE})`);
});
