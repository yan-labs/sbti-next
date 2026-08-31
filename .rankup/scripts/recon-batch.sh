#!/usr/bin/env bash
# recon-batch.sh — 按清单批量拉竞品数据，每拉完一个立刻落盘并打印一行摘要。
#
# 为什么要有这个：竞品勘测总是「一批域名 × 几种报表」，一个个手敲既慢又容易漏。
# **每个目标独立落盘、失败不中断**——一个域名没数据不该让整批白跑。
#
# 用法：recon-batch.sh <输出目录> <清单文件>
# 清单每行：domain:report        report ∈ performance | channels | similar-sites | semrush
#           semrush 走 semrush-overview.mjs，其余走 similarweb-query.mjs
#           semrush 可以再带国家库：domain:semrush:jp
set -uo pipefail
OUT="${1:?用法: recon-batch.sh <输出目录> <清单文件>}"
LIST="${2:?用法: recon-batch.sh <输出目录> <清单文件>}"
S="$HOME/.claude/skills/backlink/scripts"
mkdir -p "$OUT"

while IFS= read -r line; do
  line="${line%%#*}"; line="$(echo "$line" | tr -d '[:space:]')"
  [ -z "$line" ] && continue
  domain="${line%%:*}"; rest="${line#*:}"
  report="${rest%%:*}"; db="${rest#*:}"; [ "$db" = "$report" ] && db=""
  file="$OUT/${domain}-${report}${db:+-$db}.json"
  printf '=== %s / %s%s ===\n' "$domain" "$report" "${db:+ (db=$db)}"
  if [ "$report" = "semrush" ]; then
    timeout 280 node "$S/semrush-overview.mjs" --domain "$domain" ${db:+--db "$db"} \
      --session "recon-batch" --out "$file" >/dev/null 2>&1
  else
    timeout 280 node "$S/similarweb-query.mjs" --domain "$domain" --report "$report" \
      --session "recon-batch" --out "$file" >/dev/null 2>&1
  fi
  python3 - "$file" <<'PY'
import json,sys
try: d=json.load(open(sys.argv[1]))
except Exception as e: print("  无输出：", e); raise SystemExit
if d.get('status')=='unavailable':
    print("  失败：", d['error']['message'][:150]); raise SystemExit
keep={k:v for k,v in d.items() if k in ('metrics','channels')}
if 'channels' in keep: keep['channels']=keep['channels'].get('sharePercent')
print("  ", json.dumps(keep, ensure_ascii=False))
PY
done < "$LIST"
