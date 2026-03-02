# Close Your Eyes — Article Design

## Meta
- **Title:** Close Your Eyes
- **Subtitle:** Why the gap between thinking and building was never code. It was seeing.
- **Slug:** `close-your-eyes`
- **Date:** 2026
- **Category:** Research
- **Approach:** Standalone with light nods to existing work

## Structure

### Section 1: The Room
Opens with locked room thought experiment. Person who has never seen anything cannot think productively. Human cognition runs on visual input. Flips: development has been a locked room. You think of something, describe it in code/specs, hope what comes out matches your head. The gap was always translation loss. Not intelligence. Not effort. The inability to see what you're building while you're building it.

### Section 2: Think, Talk, See
Experiential core. Stock trading algorithm example. You have a thesis about momentum signals. You code it, run backtest, numbers come back. You can't see what the model actually did. Now picture seeing it: every decision rendered visually, dissectible, colored by variables that matter to you. You spot what numbers hid. Adjust. See adjustment take effect. Loop: think, talk, see, understand, refine.

**Diagram:** visualization-loop.svg — circular flow: Think → Talk → See → Understand → Refine → Ship, center label "The Visualization Layer"

### Section 3: The Layer That Was Missing
Zooms out. Not a tool improvement. A new layer of human capability. Light link to Future of PM three layers as extension. Light link to Five Inputs taste as the input this amplifies. Taste was the bottleneck; now you see whether your taste is right in real time. Closes with conviction: the unlock is AI that shows you what it built so you can think the way humans actually think. Visually.

## Cross-References
- The Future of PM: three layers (Black Box, Map, Manager) — this visualization layer extends the Map concept to the personal/creative level
- The Five Inputs: taste — visualization amplifies this input by making it verifiable in real time

## Files
1. Create: `data/research/close-your-eyes.ts`
2. Create: `public/images/research/visualization-loop.svg`
3. Edit: `app/writing/[slug]/page.tsx` — add import + register slug
4. Edit: `app/writing/page.tsx` — add to listing (top position)

## Exclusions
- No "What This Is Not" section
- No framework jargon
- No version numbers or metadata
- No sections that only qualify
