# SEO + GEO Overview — SBTI Game Quiz Redesign

> Phase 0 research deliverable. Read before writing any copy for the 8 game quizzes.

---

## 1. Executive Summary

- The 8-game quiz expansion targets a combined addressable universe of **~2–4M monthly en/zh/ko/ja searches** across "player personality test", per-game quiz, and archetype-specific long-tails — none of which SBTI currently captures at scale. [estimate, no direct source; triangulated from Newzoo/Steam/TwitchMetrics concurrency signals in `findings.md`]
- The **dominant SERP format** for "[game] personality quiz" is thin, single-page entries on uQuiz / QuizExpo / ProProfs — all with low authority, stale content, and no structured data. SBTI's multilingual depth + FAQ schema + 30-question depth is a direct moat.
- **Korea is systematically underserved.** PC bang data (Gametrics, June 2025 via KOCCA): LoL 33.6%, PUBG 7.7%, Valorant 7.4%, Overwatch 4.7%. No Korean-language "[game] 성격 테스트" page with real content currently ranks for any of these games. Source: https://welcon.kocca.kr
- **Zero game-specific FAQPage schema** is currently emitted on SBTI. Princeton/KDD 2024 GEO research found FAQ-structured pages have up to 3.2x higher AI-answer inclusion rate (Source: https://github.com/Auriti-Labs/geo-optimizer-skill). This gap is the single highest-ROI fix.
- The redesign's 64 new archetype result pages (`/games/{slug}/result/{archetype}`) will add **256 indexable URLs** (64 × 4 locales) — each a long-tail landing page. Without validated slugs and copy, those pages will be orphaned traffic. With the patterns in this document they can anchor mid-funnel search intent.

---

## 2. Editorial Priority Ranking

Opportunity Score = (Volume × Intent Value) / Difficulty. Intent Value: quiz/test intent = 1.5×, pure info = 1×. Difficulty: competitive density of quiz SERPs.

| Rank | Game | Opportunity Score | Reasoning | Launch priority |
|---|---|---|---|---|
| 1 | **League of Legends** | ~9 | Highest Twitch hours (75M/mo, TwitchMetrics May 2026), PC bang #1 (33.6%), largest meme/archetype vocabulary, competitor SERPs are thin uQuiz pages; Korean + Chinese + English demand all real. | **Wave 1** |
| 2 | **VALORANT** | ~7.5 | PC bang #5 Korea (7.4%), strong Twitch signal (42M hrs), existing "which agent are you" demand confirmed via SERPs; Japanese 診断 community active (shindanmaker, note.com). | **Wave 1** |
| 3 | **Counter-Strike 2** | ~7 | Top Steam concurrency (729K live players, Steam stats), Twitch #2 (62M hrs), EN/EU dominant but meaningful KR/CN segments; IGL/AWP archetype vocabulary is extremely quiz-friendly. | **Wave 1** |
| 4 | **Honor of Kings** | ~6 | $1.68B 2025 mobile revenue, top global grossing Apr 2026 (Sensor Tower); zh-specific demand is large and underserved; global expansion through KML provides growing non-zh audience. | Wave 2 |
| 5 | **PUBG Battlegrounds** | ~5.5 | PC bang #4 Korea (7.7%), Steam 301K concurrent, Korean-language quiz gap is severe; "물자 관리" and "최후의 생존자" archetype vocabulary translates directly to search queries. | Wave 2 |
| 6 | **Overwatch 2** | ~5 | PC bang #7 (4.7%), Twitch #5 (29M hrs), but free-to-play shift reduced active player counts; tank/support/DPS meme economy is instantly quiz-friendly. | Wave 2 |
| 7 | **Apex Legends** | ~4.5 | Steam 111K concurrent, Twitch signal decent (15M hrs); movement/third-party identity culture is sharp for quiz copy; weaker Korea signal than top 3. | Wave 3 |
| 8 | **Delta Force** | ~3.5 | Steam ~90K concurrent, strong zh-native audience (TiMi/Team Jade), but "extraction shooter personality quiz" SERP is essentially empty — low competition but also lower baseline demand. First-mover advantage is real but volume ceiling is lower. | Wave 3 |

**Launch recommendation:** LoL → Valorant → CS2 (Wave 1, first 3 weeks). Then HoK → PUBG → OW2 (Wave 2). Then Apex → Delta Force (Wave 3).

---

## 3. URL / Slug Review — todo.md §1.4

These are the 64 archetype slugs. Most are **fine** — they encode game-specific meme vocabulary that players will recognise. Flags below are only where a slug is actively misleading for search or shareable-URL purposes.

### Flags (severe mismatch only)

| Game | Slug | Issue | Proposed alternative | Reasoning |
|---|---|---|---|---|
| LoL | `aram-poet` | Slug implies ARAM mode, but the archetype description is "嚎哭深渊段子王" (Howling Abyss comedian). "poet" has no search signal; "aram" does. | `aram-comedian` | "aram" is the correct search anchor; "comedian" matches 段子王 better than "poet" and matches the English archetype label in Phase 4 translation note. |
| CS2 | `aimer-cleric` | "cleric" has zero CS2 cultural meaning. The archetype is about arch-holding, not healing. | `arch-cleric` or `peek-holder` | "arch" is CS2 meme vocabulary ("arch hold", "long arch"); "cleric" adds confusion with game terminology from other genres. Prefer `arch-cleric` to keep the alliterative humor. |
| Delta Force | `road-movie-driver` | 5-word slug is unusually long; also "road movie" is a film genre, not a Delta Force meme. | `armored-showoff` | Captures the 装甲车 + 表演 axes more directly; shorter; no cross-genre confusion. |
| VALORANT | `methodical-jett` | "Jett" is an agent name — this creates brand-search overlap risk and possible Riot trademark sensitivity in URLs. The archetype is 数据派决斗 (data-driven duelist), not agent-specific. | `data-duelist` | Removes agent name from slug; "duelist" is the official VALORANT role name; "data" matches the D axis. |

All other 60 slugs are defensible. The Korean/Japanese archetype names should be localised in content (per todo.md §4), not in URLs (URLs stay slug-based for all locales).

---

## 4. Title Tag / H1 / Meta Description Patterns

Patterns use placeholders: `{Game}`, `{N}` (question count = 30), `{A}` (archetypes = 8), `{ArchetypeName}`, `{ArchetypeOneliner}`.

### Layer 1: Homepage (`/`)

| Locale | Title tag (≤70 chars) | H1 | Meta description (140–160 chars) |
|---|---|---|---|
| zh | `免费人格测试与游戏玩家类型测试 \| SBTI` | 你是哪种玩家？ | SBTI 收录免费讽刺人格测试和 8 款热门游戏玩家类型测试。30 题、6 维玩家档案、67 种结果，截图分享到社交平台，中英日韩均可玩。 |
| en | `Free Gamer Personality Tests & Player Type Quizzes \| SBTI` | What Kind of Player Are You? | SBTI offers free satirical personality tests and game player-type quizzes for LoL, CS2, VALORANT, and 5 more games. 30 questions, 6 axes, 8 archetypes per game. |
| ja | `無料ゲーム性格診断・プレイヤータイプ診断 \| SBTI` | あなたはどんなプレイヤー？ | SBTIは無料の個性診断ハブです。LoL・CS2・VALORANT他8ゲームのプレイヤータイプを30問・6次元で診断。結果はシェア可能、日中英韓対応。 |
| ko | `무료 게임 성격 테스트 & 플레이어 유형 테스트 \| SBTI` | 당신은 어떤 플레이어인가요? | SBTI는 롤, CS2, 발로란트 등 8개 게임의 무료 플레이어 유형 테스트를 제공합니다. 30문항·6차원·게임당 8가지 유형, 결과는 스크린샷으로 공유 가능. |

### Layer 2: Game Hub (`/games/{slug}`)

| Locale | Title tag pattern | H1 pattern | Meta description pattern |
|---|---|---|---|
| zh | `{Game} 玩家类型测试：你是哪种 {Game} 玩家？\| SBTI` | 你是哪种 {Game} 玩家？ | 免费 {Game} 玩家类型测试，30 道题测出你的 6 维玩家档案，共 8 种原型。结果含雷达图和玩家身份码，适合截图分享。无需注册。 |
| en | `{Game} Player Personality Quiz — Which of 8 Types Are You? \| SBTI` | What Kind of {Game} Player Are You? | Take the free {Game} player personality quiz. 30 questions, 6 scoring axes, 8 player archetypes. Get your radar chart, 6-letter player code, and shareable result. |
| ja | `{Game} プレイヤータイプ診断 — あなたの8タイプを確かめる \| SBTI` | あなたはどんな {Game} プレイヤー？ | 無料{Game}プレイヤー診断。30問・6軸・8タイプ。六角形レーダーと6文字プレイヤーコードで結果をシェアしよう。登録不要。 |
| ko | `{Game} 플레이어 유형 테스트 — 8가지 중 나는? \| SBTI` | 당신은 어떤 {Game} 플레이어인가요? | 무료 {Game} 플레이어 유형 테스트. 30문항·6개 축·8가지 유형. 레이더 차트와 6자리 플레이어 코드로 결과를 공유하세요. 회원가입 불필요. |

### Layer 3: Archetype Result (`/games/{slug}/result/{archetype}`)

| Locale | Title tag pattern | H1 pattern | Meta description pattern |
|---|---|---|---|
| zh | `{ArchetypeName} — {Game} 玩家类型测试结果 \| SBTI` | {ArchetypeName} | {ArchetypeOneliner}。{Game} 30 题玩家测试结果，含 6 维雷达图、玩家身份码和"明显症状"清单。看看你是不是这种玩家。 |
| en | `{ArchetypeName} — {Game} Player Type Result \| SBTI` | {ArchetypeName} | {ArchetypeOneliner}. See the full {Game} player archetype profile: 6-axis radar, player code, symptoms list, and who your rivals and best squadmates are. |
| ja | `{ArchetypeName} — {Game} プレイヤータイプ診断結果 \| SBTI` | {ArchetypeName} | {ArchetypeOneliner}。{Game}プレイヤー診断結果：6軸レーダー、プレイヤーコード、あるある症状リスト、天敵と最高の相棒を確認できます。 |
| ko | `{ArchetypeName} — {Game} 플레이어 유형 결과 \| SBTI` | {ArchetypeName} | {ArchetypeOneliner}. {Game} 플레이어 유형 결과: 6축 레이더, 플레이어 코드, 공감 증상 목록, 천적과 최고의 파트너를 확인하세요. |

**Worked example (en, LoL aram-poet / aram-comedian):**
- Title: `嚎哭深渊段子王 — League of Legends Player Type Result | SBTI` (zh) / `Howling Abyss Headliner — LoL Player Type Result | SBTI` (en)
- Meta: "Solo lane, go all-in, and catch fire fast — the Howling Abyss Headliner lives for chaos and comeback memes. Full LoL player archetype profile: 6-axis radar, SASFHB player code, and symptoms list." (en, 162 chars — trim slightly)

---

## 5. GEO / AI-Search Posture

Top 10 natural-language queries SBTI should be cited for, with the page that should answer each:

| # | Query | Target language | Page that should own the answer |
|---|---|---|---|
| 1 | "What kind of League of Legends player am I?" | en | `/games/league-of-legends` (game hub with FAQ + Quiz schema) |
| 2 | "我是哪种英雄联盟玩家？" | zh | `/zh/games/league-of-legends` |
| 3 | "LoL 플레이어 성격 테스트 어디서 하나요?" | ko | `/ko/games/league-of-legends` |
| 4 | "What are the different types of Valorant players?" | en | `/games/valorant` |
| 5 | "Best free CS2 player personality quiz" | en | `/games/counter-strike-2` |
| 6 | "How do I find out my gamer personality type?" | en | Homepage (`/`) |
| 7 | "王者荣耀玩家类型有哪些？" | zh | `/zh/games/honor-of-kings` |
| 8 | "Which Overwatch 2 player type am I?" | en | `/games/overwatch-2` |
| 9 | "배그 플레이어 유형 테스트" | ko | `/ko/games/pubg-battlegrounds` |
| 10 | "Apex Legends player personality test free" | en | `/games/apex-legends` |

**GEO implementation requirements** (for Phase 8):
1. Each game hub emits `FAQPage` JSON-LD with 4–6 Q&As (see `02-schema-audit.md`)
2. Each archetype result page emits `DefinedTerm` JSON-LD with the archetype description
3. Each game hub has a visible FAQ accordion (which double-serves as extractable content for AI crawlers)
4. llms.txt updated to list all 8 game hubs + top 3 archetype pages per game (see `01-ai-bot-access-audit.md`)

---

## 6. Open Risks and Blockers

| Risk | Severity | File that covers the fix |
|---|---|---|
| **OAI-SearchBot not in robots.txt** — OpenAI's live-search crawler is missing. ChatGPT Search cannot cite SBTI. | HIGH | `01-ai-bot-access-audit.md` |
| **No FAQPage schema on any game hub** — highest-impact GEO gap per Princeton/KDD 2024 research | HIGH | `02-schema-audit.md` |
| **No archetype-level DefinedTerm or ItemList schema** — 64 new result pages will be structurally invisible to AI summarisers | HIGH | `02-schema-audit.md` |
| **Sitemap missing 256 archetype URLs** — the 64 × 4-locale archetype pages planned in Phase 7.4 are not yet in `app/sitemap.ts` | MEDIUM | Phase 8 implementation (todo.md §Phase 8) |
| **hreflang via sitemap `alternates` only, not `<link>` tags** — Next.js App Router's `generateMetadata` with `buildAlternates` emits hreflang in `<head>` correctly; sitemap also includes `alternates`. Current setup appears correct per `lib/metadata.ts:buildAlternates`. But game-quiz pages need to call `buildAlternates('/games/{slug}')` explicitly — verify at Phase 8. | LOW | Phase 8 implementation |
| **llms.txt stale** — currently lists only the 8 game hubs but no archetype pages and no 6-axis / 8-archetype update | LOW | `01-ai-bot-access-audit.md` |
| **Applebot-Extended not addressed** — Apple Intelligence crawler absent from robots.txt; no explicit allow or deny | LOW | `01-ai-bot-access-audit.md` |
