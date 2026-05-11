# Schema.org / JSON-LD Audit — GEO Gaps and Recommendations

> Source file: `lib/json-ld.ts` | Route injection reviewed against `app/[locale]/page.tsx` patterns

---

## 1. Currently Emitted Schema Types

### 1.1 Organization

**Function:** `buildOrganizationSchema()`
**Used on:** All pages (emitted in root layout or page-level)
**Completeness:** 7/10 — name, url, logo, description, sameAs (empty array).
**Gaps:** `sameAs` is empty; should include any official social/community URLs once they exist. `foundingDate` and `contactPoint` are optional but help entity disambiguation.

### 1.2 WebSite

**Function:** `buildWebSiteSchema(locale)`
**Used on:** Homepage per locale
**Completeness:** 8/10 — url, name, description, inLanguage, publisher, potentialAction (SearchAction).
**Gaps:** `SearchAction.urlTemplate` points to `/types?q=...` which is the SBTI type search, not a cross-site search. After redesign the search action should be reconsidered or removed if no global search exists.

### 1.3 Quiz (SBTI flagship)

**Function:** `buildQuizSchema(locale)`
**Used on:** `/test` route
**Completeness:** 8/10 — name, description, url, numberOfQuestions (30), educationalLevel, inLanguage, isPartOf, provider, about.
**Gaps:** Missing `image`, missing `datePublished`/`dateModified`, missing `educationalAlignment`.

### 1.4 Quiz (Game quizzes)

**Function:** `buildGameQuizSchema(locale, input)`
**Used on:** `/games/[slug]` — each game hub
**Completeness:** 7/10 — name, description, url, image (optional), numberOfQuestions, educationalLevel, inLanguage, isPartOf, provider, about.
**Gaps:** After redesign, `numberOfQuestions` should be 30 (currently 10 in old data). Missing `hasPart` linking to archetype result pages. Missing `educationalUse: "entertainment"`.

### 1.5 BreadcrumbList

**Function:** `buildBreadcrumbSchema(locale, segments)`
**Used on:** Currently not confirmed injected on game quiz pages — function exists but injection point unclear.
**Completeness:** 9/10 (structure is correct).
**Gap:** Must be explicitly injected on `/games/[slug]` and `/games/[slug]/result/[archetype]` routes in Phase 8.

### 1.6 Person (author stub)

**Function:** `buildPersonSchema(authorName)`
**Used on:** Blog article pages
**Completeness:** 4/10 — name, url only. Missing `image`, `description`, `sameAs`.
**Note:** Stub is fine for now; not a GEO priority.

### 1.7 Article

**Function:** `buildArticleSchema(locale, input)`
**Used on:** Blog article pages
**Completeness:** 9/10 — well-formed. Missing `wordCount` and `keywords`.

### 1.8 DefinedTerm

**Function:** `buildDefinedTermSchema(locale, code, name, description, url, imageUrl?)`
**Used on:** `/type/[code]` pages (SBTI 27 types)
**Completeness:** 9/10 — solid. Good anchor for GEO.
**Gap:** **No equivalent exists for game archetypes.** The 64 new archetype result pages need their own DefinedTerm schema.

### 1.9 FAQPage

**Function:** `buildFAQPageSchema(qaPairs)`
**Used on:** Currently **not injected on any game page**. Function exists but is unused on game hubs.
**Status:** ❌ Critical gap.

### 1.10 CollectionPage

**Function:** `buildCollectionPageSchema(locale, name, description, url, typeCodes)`
**Used on:** `/types` (SBTI type gallery)
**Completeness:** 8/10 — hasPart links to each DefinedTerm.
**Gap:** No equivalent on `/games` or per-game hub to link to archetypes.

### 1.11 WebPage

**Function:** `buildWebPageSchema(locale, name, description, url, extra?)`
**Used on:** Blog list, static pages
**Completeness:** 6/10 — generic; fine as a baseline.

---

## 2. GEO-Priority Missing Schemas

### 2.1 FAQPage — Game Hubs (CRITICAL)

**Why critical:** Princeton/KDD 2024 GEO study found structured Q&A content boosts AI citation inclusion by ~30–40%. Pages with FAQPage schema are 3.2x more likely to appear in Google AI Overviews (Source: https://github.com/Auriti-Labs/geo-optimizer-skill; https://www.frase.io/blog/faq-schema-ai-search-geo-aeo).

**Where to inject:** `/games/[slug]` — every game hub, every locale.

**Recommended schema shape:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many questions is the {Game} player quiz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The {Game} player quiz has 30 questions..."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 8 player types in {Game}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 8 archetypes are: [list of archetype names with one-liner each]..."
      }
    },
    {
      "@type": "Question",
      "name": "What is the 6-axis player model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 6 axes are Tempo, Nerve, Bond, Intel, Flair, and Mental..."
      }
    },
    {
      "@type": "Question",
      "name": "Is this quiz free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely free. No registration required..."
      }
    },
    {
      "@type": "Question",
      "name": "What does the 6-letter player code mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each letter represents your position on one of 6 axes..."
      }
    }
  ]
}
```

**Existing function to extend:** `buildFAQPageSchema` already exists in `lib/json-ld.ts` — just needs to be injected at the game hub route. Phase 8 should call it from `app/[locale]/games/[slug]/page.tsx` with game-specific Q&As from the game data file.

**GEO citation lift:** FAQ content answers the most common AI query patterns ("what are the player types in X", "how many questions"). Making the text explicitly machine-readable via FAQPage closes the biggest citation gap.

---

### 2.2 FAQPage — Archetype Result Pages

**Where to inject:** `/games/[slug]/result/[archetype]` — each of the 64 archetype pages.

**Recommended schema shape:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the {ArchetypeName} player type in {Game}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{ArchetypeOneliner}. {ArchetypeLongDescription}..."
      }
    },
    {
      "@type": "Question",
      "name": "What player code does the {ArchetypeName} get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The {ArchetypeName} has a {PolarityCode} player identity code, meaning..."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the rival type of {ArchetypeName}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The natural rival of {ArchetypeName} is {RivalArchetype}..."
      }
    }
  ]
}
```

**GEO citation lift:** Archetype Q&A makes each result page a direct answer to "[archetype name] {game} player type" queries — the exact queries AI systems receive from users sharing their results.

---

### 2.3 DefinedTerm — Game Archetypes (CRITICAL)

**Why:** The 27 SBTI types each have `DefinedTerm` schema and are indexable entities. The 64 new game archetypes need the same treatment, or they're just content pages with no structured entity definition.

**Where to inject:** `/games/[slug]/result/[archetype]`.

**Recommended schema shape:**
```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://sbti.support/games/{slug}/result/{archetype}#archetype",
  "name": "{ArchetypeName}",
  "description": "{ArchetypeOneliner}. {ArchetypeLongDescription}",
  "url": "https://sbti.support/games/{slug}/result/{archetype}",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://sbti.support/games/{slug}#archetypes",
    "name": "{Game} Player Archetypes",
    "url": "https://sbti.support/games/{slug}"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://sbti.support/game-quizzes/{slug}/results/{archetype}.png"
  },
  "inLanguage": "en"
}
```

**GEO citation lift:** DefinedTerm establishes the archetype as a named entity in Google's Knowledge Graph, increasing the probability of being cited when users ask AI systems what a given archetype means.

---

### 2.4 ItemList — Game Hub Archetype Gallery

**Where to inject:** `/games/[slug]` alongside the Quiz schema.

**Recommended schema shape:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "{Game} Player Archetypes",
  "description": "The 8 player personality archetypes in the {Game} quiz",
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://sbti.support/games/{slug}/result/{archetype1}",
      "name": "{ArchetypeName1}"
    }
    // ... × 8
  ]
}
```

**GEO citation lift:** ItemList makes the 8 archetypes enumerable by AI crawlers. When a user asks "what are the 8 types in the LoL quiz?", the AI can extract the list directly from schema rather than parsing prose.

---

### 2.5 BreadcrumbList — Game Hub and Archetype Result Pages

**Where to inject:** Both `/games/[slug]` and `/games/[slug]/result/[archetype]`.

**Game hub shape:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SBTI", "item": "https://sbti.support" },
    { "@type": "ListItem", "position": 2, "name": "Games", "item": "https://sbti.support/games" },
    { "@type": "ListItem", "position": 3, "name": "{Game}", "item": "https://sbti.support/games/{slug}" }
  ]
}
```

**Archetype result shape (add position 4):**
```json
{ "@type": "ListItem", "position": 4, "name": "{ArchetypeName}", "item": "https://sbti.support/games/{slug}/result/{archetype}" }
```

**GEO citation lift:** Breadcrumbs tell AI crawlers the site hierarchy, reducing chance of archetype pages being treated as orphans.

**Existing function:** `buildBreadcrumbSchema` already exists. Just inject at these routes.

---

### 2.6 Quiz Schema Update — numberOfQuestions

After Phase 1 expansion, `buildGameQuizSchema` inputs should pass `numberOfQuestions: 30` (not 10). Phase 8 must update the call sites.

**Current state:** The `numberOfQuestions` field is passed as input — so this is a data update, not a schema function change.

---

## 3. Implementation Priority

| Schema | Route | Priority | Status |
|---|---|---|---|
| FAQPage (game hub) | `/games/[slug]` | P0 | Missing |
| FAQPage (archetype) | `/games/[slug]/result/[archetype]` | P0 | Missing |
| DefinedTerm (game archetypes) | `/games/[slug]/result/[archetype]` | P0 | Missing |
| ItemList (archetype gallery) | `/games/[slug]` | P1 | Missing |
| BreadcrumbList (game hub) | `/games/[slug]` | P1 | Function exists, not injected |
| BreadcrumbList (archetype) | `/games/[slug]/result/[archetype]` | P1 | Function exists, not injected |
| Quiz numberOfQuestions fix | `/games/[slug]` | P1 | Stale data (10 → 30) |
| WebSite SearchAction review | `/` | P2 | Stale urlTemplate |

---

## 4. Risks and Follow-ups

- The existing `buildFAQPageSchema` function accepts a flat `{question, answer}` array — it does not accept locale-specific strings. Phase 8 will need to either pass localised strings per game-data file or extend the function signature.
- `DefinedTerm.inDefinedTermSet` requires a `@id` for the term set — the game hub URL with `#archetypes` fragment is the recommended anchor. This needs to be consistent across all 64 archetype pages.
- Do NOT create schema for `/games` index if that route doesn't exist — the current routing goes directly from `/` to `/games/[slug]`. Breadcrumbs should skip a "Games" intermediate if there's no `/games` hub page.
