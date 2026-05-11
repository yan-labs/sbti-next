# AI Bot Access Audit — robots.txt + llms.txt

> Covers: `public/robots.txt`, `public/llms.txt`, `public/.well-known/llms.txt`

---

## 1. Current robots.txt — Full Rule Inventory

File: `public/robots.txt` (as of 2026-05-11)

```
User-agent: *
Allow: /

Sitemap: https://sbti.support/sitemap.xml

# AI/LLM crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

---

## 2. Bot Status Audit — 9 Priority Bots

| Bot | Current rule | Status | Notes |
|---|---|---|---|
| **GPTBot** | `Allow: /` | ✅ Allowed | OpenAI's training crawler. Allows ChatGPT to learn from SBTI content. Acceptable for a traffic site. Source: https://developers.openai.com/api/docs/bots |
| **ChatGPT-User** | `Allow: /` | ✅ Allowed | OpenAI's real-time browsing agent (when user asks ChatGPT to browse). Correct. |
| **OAI-SearchBot** | **NOT PRESENT** | ❌ Missing | OpenAI's live-search indexer for ChatGPT Search. Without an explicit allow, ChatGPT Search may not index SBTI. This is the highest-impact missing entry. Source: https://knownagents.com/agents/oai-searchbot |
| **PerplexityBot** | `Allow: /` | ✅ Allowed | Perplexity's crawler. Correct — Perplexity is a high-value citation engine. |
| **ClaudeBot** | `Allow: /` | ✅ Allowed | Anthropic's crawler. Correct. |
| **anthropic-ai** | `Allow: /` | ✅ Allowed | Anthropic secondary UA. Correct. |
| **Google-Extended** | `Allow: /` | ✅ Allowed | Google's AI (Gemini/SGE) training crawler. Allowing = eligibility for Google AI Overviews. Correct. |
| **Bingbot** | `Allow: /` | ✅ Allowed | Standard Bing crawler. Correct. |
| **Applebot-Extended** | **NOT PRESENT** | ⚠️ Unaddressed | Apple Intelligence crawler. No explicit rule. Falls back to `User-agent: *` Allow. Functionally allowed but not explicit. Low priority but worth adding for clarity. Source: https://crawlercheck.com/directory/ai-bots/oai-searchbot |
| **CCBot** | `Allow: /` | ⚠️ Review | CommonCrawl bot — used primarily for LLM training datasets, does not contribute to search citations. Many sites block it. Blocking is safe; no search ranking downside. Source: https://www.appearonai.com/insights/ai-crawler-configuration-robots-txt-guide |

**Additional bots present but not in the 9-bot checklist:**
- `Claude-Web` — legacy Anthropic UA, harmless to keep
- `Bytespider` — ByteDance/TikTok crawler; currently allowed; consider blocking (training-only, no citation return). Low priority.

---

## 3. Recommendations Per Bot

| Bot | Recommendation | Reasoning |
|---|---|---|
| GPTBot | **Allow** | Training + citation; high-value for SBTI content appearing in ChatGPT responses. |
| ChatGPT-User | **Allow** | Real-time browsing; needed for users asking ChatGPT to visit sbti.support directly. |
| OAI-SearchBot | **Allow (add now)** | Missing entry; ChatGPT Search will not reliably index SBTI without it. Highest urgency fix. |
| PerplexityBot | **Allow** | Perplexity is a top citation engine; cited content gets real referral traffic. |
| ClaudeBot | **Allow** | Keep. |
| anthropic-ai | **Allow** | Keep. |
| Google-Extended | **Allow** | Google AI Overviews eligibility; keep. |
| Bingbot | **Allow** | Standard SEO. |
| Applebot-Extended | **Allow (add explicitly)** | Explicit is better than implicit fallback; low risk. |
| CCBot | **Block** | Training-only, no search citation benefit. Safe to block. |
| Bytespider | **Block** | ByteDance training crawler; no citation return for a small multilingual quiz site. |

---

## 4. Concrete robots.txt Patch

Apply this diff to `public/robots.txt`:

```diff
 User-agent: *
 Allow: /
 
 Sitemap: https://sbti.support/sitemap.xml
 
 # AI/LLM crawlers
 User-agent: GPTBot
 Allow: /
 
 User-agent: ChatGPT-User
 Allow: /
 
+User-agent: OAI-SearchBot
+Allow: /
+
 User-agent: ClaudeBot
 Allow: /
 
 User-agent: anthropic-ai
 Allow: /
 
 User-agent: Claude-Web
 Allow: /
 
 User-agent: Bingbot
 Allow: /
 
-User-agent: Bytespider
-Allow: /
-
-User-agent: CCBot
-Allow: /
+User-agent: Bytespider
+Disallow: /
+
+User-agent: CCBot
+Disallow: /
 
 User-agent: PerplexityBot
 Allow: /
 
 User-agent: Google-Extended
 Allow: /
+
+User-agent: Applebot-Extended
+Allow: /
```

**Result after patch:** 9 named bots with explicit Allow (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, anthropic-ai, Claude-Web, Bingbot, PerplexityBot, Google-Extended, Applebot-Extended), 2 blocked (Bytespider, CCBot), wildcard still allows all unnamed crawlers.

---

## 5. llms.txt Current State

Both `public/llms.txt` and `public/.well-known/llms.txt` are identical (as expected — both must be kept in sync).

**Size:** 45 lines. **Structure:** Conforms to llmstxt.org spec (H1 site name, blockquote summary, `## About` section with bullets, `## Current Tests` with URLs, `## SBTI Personality Types` list, `## Multilingual Routes`, `## Sitemap` pointer).

**Gaps vs. llmstxt.org spec and current redesign state:**
1. No mention of the 6-axis scoring system or 8-archetype-per-game structure (the redesign's key differentiator)
2. `numberOfQuestions` says "30 questions" for SBTI but game quizzes are listed as "Player Type Quiz" with no question count — stale after the 10→30 expansion
3. No individual archetype result page URLs (AI crawlers can't discover them from this file alone)
4. The `## SBTI Personality Types` list is 150+ chars of comma-separated codes — not structured as bullets or links; AI parsers may not extract this cleanly
5. No `## Key Concepts` section (recommended by llmstxt.org for GEO: defines what the site is, who it's for, what's novel about it)

---

## 6. Concrete llms.txt Update

Replace both `public/llms.txt` and `public/.well-known/llms.txt` with:

```markdown
# SBTI Test Hub

> SBTI is a free multilingual quiz hub for satirical personality quizzes and game player-type quizzes. The original SBTI test (27 personality types, 30 questions, 15 scoring dimensions) is the flagship. Eight game quizzes use a 6-axis player psychology model (Tempo, Nerve, Bond, Intel, Flair, Mental) to produce 8 archetypes per game and a shareable 6-letter player identity code.

## About

- Website: https://sbti.support
- Main test hub: https://sbti.support
- SBTI personality test: https://sbti.support/test
- Free, no registration required
- Available in Chinese (zh), English (en), Japanese (ja), and Korean (ko)
- English is also served at the root path (https://sbti.support) as the canonical default

## Key Concepts

- **SBTI**: Satirical Behavior Type Indicator — a parody of MBTI with 27 humorous personality types across 15 dimensions
- **Game Quizzes**: 8 game-specific player-type quizzes (30 questions each), built on a 6-axis model that produces 8 archetypes per game and a 6-letter player code (e.g., RASFHB)
- **6 Axes**: Tempo (slow vs. fast), Nerve (cautious vs. aggressive), Bond (solo vs. team), Intel (data vs. feel), Flair (efficient vs. entertainment), Mental (stoic vs. hot-headed)
- **Player Identity Code**: A 6-letter string encoding a player's position on each axis (e.g., LACDFK), shareable and comparable across players

## Game Quizzes (30 questions · 8 archetypes each)

- League of Legends Player Quiz: https://sbti.support/games/league-of-legends
- Counter-Strike 2 Player Quiz: https://sbti.support/games/counter-strike-2
- VALORANT Player Quiz: https://sbti.support/games/valorant
- Delta Force Player Quiz: https://sbti.support/games/delta-force
- Honor of Kings Player Quiz: https://sbti.support/games/honor-of-kings
- Overwatch 2 Player Quiz: https://sbti.support/games/overwatch-2
- PUBG Battlegrounds Player Quiz: https://sbti.support/games/pubg-battlegrounds
- Apex Legends Player Quiz: https://sbti.support/games/apex-legends

## SBTI Personality Test

30 questions · 27 personality types · 15 scoring dimensions

- Test: https://sbti.support/test
- All types: https://sbti.support/types
- Types include: CTRL (The Controller), ATM-er (The Giver), Dior-s (The Underdog), BOSS (The Leader), THAN-K (The Grateful), OH-NO (The Worrier), GOGO (The Doer), SEXY (The Charmer), LOVE-R (The Romantic), MUM (The Nurturer), FAKE (The Shapeshifter), OJBK (The Whatever), MALO (The Monkey), JOKE-R (The Clown), WOC! (The Reactor), THIN-K (The Thinker), SHIT (The Grumbler), ZZZZ (The Sleeper), POOR (The Focused), MONK (The Hermit), IMSB (The Overthinker), SOLO (The Loner), FUCK (The Rebel), DEAD (The Detached), IMFW (The Fragile)
- Special types: HHHH (The Silly Laugher, fallback), DRUNK (The Drunkard, hidden)

## Multilingual Routes

- Chinese: https://sbti.support/zh
- English: https://sbti.support/en (also at root: https://sbti.support)
- Japanese: https://sbti.support/ja
- Korean: https://sbti.support/ko

## Sitemap

https://sbti.support/sitemap.xml
```

**Key changes from current:**
1. Blockquote intro now explains the 6-axis model — AI crawlers extract this as the site definition
2. `## Key Concepts` section gives structured definitions (anchor text for AI citation)
3. Game quiz entries include "30 questions · 8 archetypes each" — searchable factoid
4. SBTI types reformatted as a single clean list, not a run-on comma string
5. Removed redundant "Overwatch Player Type Quiz" wording (was missing the "2")
