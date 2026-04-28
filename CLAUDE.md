# SBTI - Satirical Behavior Type Indicator

A satirical personality test that parodies MBTI with 27 humorous personality types.

## Design Context

@.impeccable.md

### Quick Reference — Design Principles

1. **Shareable First** — 每个页面状态都要考虑截图分享效果，视觉设计服务于传播
2. **Bold but Refined** — 大胆但不粗糙，荒诞内容需要精致容器承载
3. **Instant Delight** — 自然流畅，带有微动效和文案彩蛋的小惊喜
4. **Social by Design** — 鼓励对话和比较，人格类型要有强视觉识别度
5. **Humor in Every Pixel** — 视觉语言也应传递幽默感

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Blog Writing Guidelines

Blog content lives in `messages/{en,zh,ja,ko}.json` under the `blog.articles.[slug]` namespace. Articles must read like a human wrote them — the site's brand voice is self-deprecating, casual, witty, and concrete.

### Avoid AI tells (apply to all 4 languages)

- **No AI vocabulary**: delve, showcase, testament, pivotal, crucial, landscape (figurative), tapestry, underscore, highlight (verb), enduring, garner, additionally, moreover, furthermore.
- **No `-ing` pile-ups**: avoid "highlighting/reflecting/symbolizing/ensuring..." tacked onto sentence ends as fake depth.
- **No "not just X, it's Y" / "not only ... but also"** negative parallelisms.
- **No rule-of-three padding**: don't force ideas into triplets ("innovation, inspiration, and insights") when two work or one is enough.
- **No vague attribution**: skip "experts say", "industry reports", "observers note" without a real source.
- **No sycophantic tone**: drop "Great question!", "Of course!", "Let me know if...".
- **No generic positive endings**: avoid "exciting times ahead", "the future looks bright".

### Keep the voice

- Use concrete metaphors (the existing "lab coat vs. Hawaiian shirt" / "穿着白大褂 vs 穿着花衬衫" type — surprising, image-rich).
- Mix sentence lengths. Short punch. Then longer ones that take their time. Don't run 5 same-length sentences in a row.
- First-person ("I", "我") is fine when it fits.
- Self-deprecating humor wins over polished/promotional tone.
- Specific numbers beat vague claims (e.g., "31 questions, 1-3 minutes" not "a quick test").

### Em-dash discipline

- Acceptable use: occasional comedic timing ("That's not a bug — it's a feature").
- **Forbidden**: using em-dashes 9× in 9 parallel sub-list items with the same structure ("Low scorers X — Y. High scorers Z..." repeated). This is the single most reliable AI tell on this site. Vary punctuation: periods, semicolons, colons, parens.
- Rule of thumb: if 3+ items in a list-like section all use em-dashes the same way, rewrite them with mixed punctuation.

### Per-language notes

- **zh**: aim for the existing colloquial register ("门儿清", "脑内会议常超时", "和死线有深厚感情"). The tim-mediastorm "升华四步法" (锚定→追问→架桥→落点) is a useful frame but not mandatory.
- **en**: easiest to slip into AI cadence; watch sentence-structure repetition especially in parallel sub-lists.
- **ja**: keep the casual/conversational register matching zh (`〜けど`, `〜だ` mid-formality).
- **ko**: same — casual `〜다` ending, avoid overly polite/textbook tone.

### When auditing existing or new blog content

Run mental checks for: AI vocabulary words, em-dash density (per article), structural repetition across parallel items, vague attribution, generic upbeat conclusions. The current 3 articles passed audit (April 2026); when adding new ones, hit the same bar.
