#!/usr/bin/env node
// 绕开本机 Clash fake-IP：DoH 解析真实 IP，再用 curl --resolve 直连（保留 SNI/Host）。
// 现象：本机对 seo.web.cafe 等域名握手直接 SSL_ERROR_SYSCALL —— fake-IP 段 198.18.x.x
// 被代理接管但该域名出站规则是坏的，加不加 HTTPS_PROXY 都一样。
// 用 curl 而不是 undici：Node 内置 fetch 不暴露 dispatcher，undici 也不是内置可 import 的包。
// 已验证 2026-08-19。
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFileSync, existsSync } from 'node:fs';
const exec = promisify(execFile);

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';
const cache = new Map();

// DoH 端点做成候选列表：cloudflare-dns.com 本身也可能被 fake-IP 劫持握手失败
// （2026-08-19 观察到），失败就依次换下一个，不改变整体“DoH 解析真实 IP”的思路。
const DOH_ENDPOINTS = [
  host => `https://cloudflare-dns.com/dns-query?name=${host}&type=A`,
  host => `https://dns.google/resolve?name=${host}&type=A`,
];

export async function resolveA(host) {
  if (cache.has(host)) return cache.get(host);
  let lastErr;
  for (const build of DOH_ENDPOINTS) {
    try {
      const { stdout } = await exec('curl', ['-sS', '--max-time', '15', '-H', 'accept: application/dns-json',
        build(host)]);
      const j = JSON.parse(stdout);
      const ips = (j.Answer || []).filter(a => a.type === 1).map(a => a.data);
      if (!ips.length) throw new Error(`DoH 无 A 记录: ${host} (Status=${j.Status})`);
      cache.set(host, ips);
      return ips;
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

export async function pinnedFetch(url, opts = {}) {
  const u = new URL(url);
  const [ip] = await resolveA(u.hostname);
  const args = ['-sS', '--noproxy', '*', '--resolve', `${u.hostname}:${u.port || 443}:${ip}`,
    '--max-time', String(opts.timeout || 180), '-A', UA, '-w', '\n__STATUS__%{http_code}'];
  for (const [k, v] of Object.entries(opts.headers || {})) args.push('-H', `${k}: ${v}`);
  if (opts.method) args.push('-X', opts.method);
  if (opts.body) args.push('--data-binary', opts.body);
  const { stdout } = await exec('curl', [...args, url], { maxBuffer: 64 * 1024 * 1024 });
  const i = stdout.lastIndexOf('\n__STATUS__');
  return { status: Number(stdout.slice(i + 11)), text: stdout.slice(0, i) };
}

export function skillEnv(key) {
  if (process.env[key]) return process.env[key];
  const p = `${process.env.HOME}/.claude/skills/rankup/.env`;
  if (!existsSync(p)) return undefined;
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && m[1] === key) return m[2].trim();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const r = await pinnedFetch(process.argv[2]);
  console.log('HTTP', r.status);
  console.log(r.text.slice(0, 3000));
}
