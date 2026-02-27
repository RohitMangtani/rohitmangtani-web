# rohitmangtani.com

## CSS
All custom CSS in `@layer base` or `@layer components`. Never unlayered CSS except @keyframes. Unlayered CSS overrides Tailwind v4 utilities.

## Layout
- Listings: `max-w-5xl mx-auto px-6 py-16`
- Articles: `max-w-[680px] mx-auto px-6 py-20`

## Copy Rules
- No em dashes. Use commas, periods, or "and" instead.
- No AI language. Descriptions sound human, not generated.

## Writing Style Guide

**Read `data/writing-voice.md` before writing or editing any article.** That file is the living voice reference. It has Rohit's actual phrasings, content principles, nuanced positions, and a corrections log from every editing session. Update it after each session with new corrections and refinements.

When writing or editing articles (`data/research/`, `data/theses/`), follow this voice.

### Tone: 70% professional, 30% conversational
Reads like someone who watched these things happen and is connecting what they saw. Not someone writing about them from a distance with citations.

### Do
- Build arguments through accumulated observations, not formal thesis-proof structures
- State what you see with confidence. Land the point, move on
- Connect dots across domains naturally. Link seemingly unrelated trends as observations
- Use plain language for complex ideas. Short declaratives to land a point, longer sentences to build momentum
- Reference specific cultural phenomena as natural observations, not academic citations
- Natural transitions: "This is already happening," "You can see it in," "The same thing plays out"
- Replace formal definitions with natural explanations: "Think about how X works"
- Close sections with conviction, not qualifiers

### Never
- "This is not a judgment. It is an observation" or any variation
- "This is a descriptive claim, not a prescriptive one"
- "This analysis does not claim..." or "What this does not do..."
- "Consider:" as a formal transition to a list
- "The pattern across our research has consistently documented"
- "It is worth noting that" or "It is important to understand"
- Formal standalone definitions ("A proxy is an entity that...")
- Triple-stacked qualifiers ("not in X, not in Y, and certainly not in Z")
- Meta-commentary about your own argument ("Abstract arguments are less convincing than concrete examples")
- Em dashes anywhere

### Structure
- Sections, callout boxes, comparison grids, bullet lists are all fine
- Structure should serve the reader, not perform thoroughness
- Do not add sections that exist only to disclaim or qualify (no "What This Is Not" sections)
- Footer: "Month Year . Rohit Mangtani" (no version numbers, no backend metadata)
- The `whatItDoesNot` field stays in data for internal reference but is not rendered on the site
- No version badges, version numbers, or internal metadata anywhere reader-facing

### Gold Standard: The Future of PM
The article `data/research/the-future-of-pm.ts` is the benchmark for all future articles. Study it before writing anything new. What makes it work:
- **Opens with "this is already happening"** not predictions or theory. Immediate credibility.
- **Layers observation → mechanism → system → implication.** Each section builds so the conclusion feels inevitable.
- **SVG diagrams embedded inline** via `<figure>` + `<img>` in content HTML. Clean, minimal, matching the light theme. Stored in `public/images/research/`.
- **Concrete references woven in naturally**, not dropped as citations. Carlini's parallel Claudes, Zach Wills' swarm rules. Named and described, not footnoted.
- **Metaphors from real systems**: Find My iPhone for agent management, WiFi signal for context degradation, road/drivers for the workflow. Grounded, not abstract.
- **Callout boxes for compression**: Key insights boxed in `border-l-2` or `bg-[var(--bg-secondary)]` blocks. Breaks up density without losing substance.
- **Closes with conviction**: "That is project management now." No hedging, no "time will tell."
- **Cross-references other articles** naturally. Ties back to Human Yield effort nuance without re-explaining it.
