# Cross-Game Keyword Cluster Map

---

## 1. Three-Tier Hub-and-Spoke Architecture

```
Tier 1 — Generic (homepage, /test)
├── gamer personality test
├── player type quiz
├── what kind of gamer am I
├── 游戏人格测试 / 玩家类型测试
├── ゲームプレイヤータイプ診断
└── 게임 성격 테스트 / 플레이어 유형 테스트

Tier 2 — Per-Game Hub (/games/{slug})
├── League of Legends player personality quiz
│   zh: 英雄联盟玩家类型测试
│   ja: LoLプレイヤータイプ診断
│   ko: 롤 성격 테스트
├── CS2 player personality quiz
│   zh: CS2玩家类型测试
│   ja: CS2プレイヤー診断
│   ko: CS2 성격 테스트
├── VALORANT player personality quiz
│   zh: 无畏契约玩家类型测试
│   ja: ヴァロラントプレイヤー診断
│   ko: 발로란트 성격 테스트
├── Delta Force player quiz
│   zh: 三角洲行动玩家测试
│   ja: デルタフォースプレイヤー診断
│   ko: 델타포스 성격 테스트
├── Honor of Kings player quiz
│   zh: 王者荣耀玩家类型测试
│   ja: 王者栄耀プレイヤー診断
│   ko: 왕자영요 성격 테스트
├── Overwatch 2 player quiz
│   zh: 守望先锋玩家类型测试
│   ja: オーバーウォッチ2診断
│   ko: 오버워치2 성격 테스트
├── PUBG player quiz
│   zh: PUBG玩家类型测试 / 绝地求生玩家测试
│   ja: PUBGプレイヤー診断
│   ko: 배그 성격 테스트 / 배틀그라운드 플레이어 유형
└── Apex Legends player quiz
    zh: Apex玩家类型测试
    ja: Apexプレイヤー診断
    ko: 에이펙스 성격 테스트

Tier 3 — Per-Archetype Result (/games/{slug}/result/{archetype})
├── LoL examples:
│   ├── are you an ARAM player / 嚎哭深渊玩家类型
│   ├── LoL mute-strategist player type
│   ├── LoL lane tyrant player personality
│   └── LoL rift-cfo player type
├── CS2 examples:
│   ├── CS2 AWP cowboy player type
│   ├── CS2 eco round personality
│   └── CS2 flash-entry fragger type
├── Valorant examples:
│   ├── Valorant data-duelist player type (was methodical-jett)
│   ├── Valorant clutch narrator archetype
│   └── Valorant instalock spectator quiz
└── [each game × 8 archetypes]
```

---

## 2. Internal Linking Recommendations

### 2.1 Homepage → Game Hubs
The Game Wall section (§1.5 in todo.md) already links to all 8 `/games/[slug]` hubs. Ensure each card's CTA link is crawlable (not JavaScript-only).

### 2.2 Game Hub → Archetype Results
Each game hub page should display all 8 archetype cards with direct links to `/games/{slug}/result/{archetype}`. This creates the Tier 2 → Tier 3 link path and ensures Google can discover all 64 result pages within 2 hops from the homepage.

### 2.3 Archetype Result → Sibling Archetypes
Each result page should show "Other player types in {Game}" with links to at least 3 other archetypes. This creates horizontal cross-linking within the Tier 3 cluster, improving crawl depth and time-on-site.

### 2.4 Cross-Game Shared-Trait Linking
Several archetypes share axis patterns across games. Link them:

| Source archetype | Link target | Shared trait |
|---|---|---|
| LoL `mute-strategist` (S-C-K) | CS2 `silent-anchor` (L-F-C) | Solo + cautious = "quiet operator" cluster |
| LoL `flame-conductor` (T-A-B) | OW2 `voice-line-saboteur` (T-R-B) | Team + hot-headed = "chaotic team leader" cluster |
| Apex `wraith-portal-clown` (R-H-S) | VAL `sheriff-mystic` (S-F-H) | Solo + feel-based + entertainment = "vibes player" cluster |
| PUBG `hot-drop-comedian` (R-A-H) | DF `boss-contractor` (A-D-R) | Fast + aggressive = "action-first" cluster |

Add a "You might also be..." section on each archetype result page linking to 1–2 cross-game archetypes with the same dominant axis combination.

### 2.5 SBTI Flagship ↔ Game Quizzes
The homepage SBTI section should link to the game wall ("Also try our game quizzes"). The `/test` result page should surface 2–3 game quiz suggestions based on SBTI type (e.g., FUCK → LoL `aram-comedian`, SOLO → CS2 `silent-anchor`). This cross-links the two quiz systems.

### 2.6 Blog → Game Hubs
Future blog articles about player psychology (natural expansion of current SBTI blog) should link to relevant game hubs. A "What kind of LoL player are you?" article linking to `/games/league-of-legends` is a natural editorial piece.

---

## 3. Editorial Calendar — Launch Order

Based on Opportunity Score from `00-overview.md`. Assumes 1 game per week content-readiness (Phase 3 content + Phase 8 SEO metadata).

| Week | Game | Locale priority | Key keyword to target |
|---|---|---|---|
| W1 | League of Legends | en + zh + ko | "what kind of LoL player am I" / "英雄联盟玩家类型" / "롤 성격 테스트" |
| W2 | VALORANT | en + ko + ja | "valorant player type quiz" / "발로란트 성격 테스트" / "ヴァロラントプレイヤー診断" |
| W3 | Counter-Strike 2 | en + zh | "CS2 player personality quiz" / "CS2玩家类型测试" |
| W4 | Honor of Kings | zh (primary) | "王者荣耀玩家类型测试" / "王者荣耀性格测试" |
| W5 | PUBG Battlegrounds | ko + en | "배그 성격 테스트" / "PUBG player type quiz" |
| W6 | Overwatch 2 | en + ko | "overwatch 2 player personality quiz" / "오버워치2 성격 테스트" |
| W7 | Apex Legends | en + zh | "apex legends player type quiz" / "Apex玩家测试" |
| W8 | Delta Force | zh (primary) | "三角洲行动玩家类型" / "delta force player quiz" |

**Notes:**
- Week 1 (LoL) is the highest-traffic launch and should be content-complete before deploy — no rush beyond readiness.
- Honor of Kings (W4) gets zh-first treatment; ja/ko translations can follow in W5.
- All 8 games should be in sitemap from Day 1 even if content depth varies — thin pages outperform no pages for initial crawl discovery.

---

## 4. Cross-Language hreflang Plan

### Current State (per `lib/metadata.ts`)

`buildAlternates(locale, path)` generates:
```
canonical: https://sbti.support{path}  (en)  OR  https://sbti.support/{locale}{path}  (zh/ja/ko)
languages: { zh, en, ja, ko, x-default: en }
```

This is correct for all static pages. The `app/sitemap.ts` also emits `alternates.languages` per entry via `makeAlternates(path)`.

### Gap: Game Hub Pages

The current `addLocalized('/games/{slug}', ...)` in `sitemap.ts` generates hreflang entries correctly in the sitemap. However, whether `app/[locale]/games/[slug]/page.tsx` calls `buildAlternates('/games/{slug}')` to emit `<link rel="alternate" hreflang="...">` in `<head>` needs confirmation at Phase 8.

**Action (Phase 8):** Verify that `generateMetadata` in the game hub page calls `buildAlternates('/games/${slug}')`. If not, add it.

### Gap: Archetype Result Pages

The new `/games/[slug]/result/[archetype]` routes (64 pages × 4 locales) must also emit hreflang. Each should call `buildAlternates('/games/${slug}/result/${archetype}')`.

**Action (Phase 8):** Add `buildAlternates` call in `generateMetadata` for the archetype result route.

### Language Code Correctness

Current `buildAlternates` uses bare locale codes (`zh`, `en`, `ja`, `ko`). Google recommends ISO 639-1 + optional region for hreflang (`zh-CN`, `en`, `ja`, `ko`). The current implementation uses bare codes, which Google accepts — but `zh-CN` would be more precise for the Chinese-speaking audience.

**Note:** `lib/metadata.ts` uses `zh` for hreflang. Google Search Central documentation says both `zh` and `zh-CN` are valid; no change is mandatory, but `zh-CN` is slightly more specific for the PC-bang and mobile China market. Flag for Phase 8 consideration only.
