import { ResearchData } from '@/types/research';

export const honestGamblingData: ResearchData = {
  slug: 'honest-gambling',
  date: '2024',
  title: 'Why People Choose Honest Gambling Over Extractive Games',
  subtitle: 'On legible rules and hidden extraction',

  onRamp: {
    description: 'People voluntarily enter games they know are negative-sum. The standard explanation is irrationality. But that misses something. When the alternatives feel rigged or opaque, a game with visible rules starts to look like the rational choice, even if the odds are worse.',
    whatItDoes: 'Looks at why legible risk beats hidden extraction, even when the math says otherwise.',
    whatItDoesNot: 'Moral endorsement, behavioral prescription, or a claim that gambling is wise.',
  },

  sections: [
    {
      id: 'the-puzzle',
      title: 'The Puzzle',
      content: `
<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
  <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">The Paradox</p>
  <p class="text-sm text-[var(--fg-muted)]">Millions of people voluntarily enter games they know are negative-sum. Where most participants lose. Where the odds are not hidden. They do this repeatedly, in full knowledge of the likely outcome.</p>
</div>
<p>The standard explanation is irrationality: addiction, FOMO, ignorance. Those factors are real. But they do not explain why participants often <em>prefer</em> transparent coordination games over opaque systems that claim to offer better odds.</p>
<p>There is a simpler explanation. Under conditions of perceived unfairness, people rationally prefer games with visible rules over games with hidden extraction, even when the visible game has worse expected outcomes. The preference makes sense once you see what they are actually optimizing for.</p>`,
    },
    {
      id: 'five-mechanisms',
      title: 'Five Mechanisms',
      content: '',
      subsections: [
        {
          title: '1. Legibility of Loss',
          content: `
<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
  <p class="text-sm text-[var(--fg-muted)]">In a transparent game, the rules are visible. Early participants tend to win, late ones tend to lose. Everyone knows this going in. The mechanism is not hiding behind complexity, jargon, or promises.</p>
</div>
<p>In extractive systems, opaque institutions with hidden costs and gated structures, loss is obscured. Participants discover the rules only after losing. Conditions they did not understand. Asymmetries they could not see.</p>
<p>Given a choice between legible risk and hidden extraction, many choose legibility. Losing in a game you understood feels fundamentally different from losing in a game that deceived you.</p>`,
        },
        {
          title: '2. Fairness of the Starting Line',
          content: `<p>Open-access systems offer something rare: the appearance of an equal starting line. When anyone can participate from the moment a game begins, no gatekeeping, no waitlist, no insider access, the game feels, if not fair, at least <em>uniformly unfair</em>.</p>
<p>Compare this with systems where the best opportunities are already taken by the time regular participants show up. The game was played before they got there.</p>
<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
  <p class="text-sm text-[var(--fg-muted)]">When traditional paths feel closed, people prefer "fair unfairness," a game where everyone faces the same bad odds, over "rigged fairness," where good odds are reserved for a few.</p>
</div>`,
        },
        {
          title: '3. Agency in Timing',
          content: `<p>Coordination games give participants control over timing. You decide when to enter and when to leave. No lock-in periods, no mandatory commitments, no exit restrictions. The decision is yours, and so is the responsibility.</p>
<p>Extractive systems often strip this away. Commitments prevent exit when conditions change. Structural constraints trap participants. Your role becomes sustaining the system for those who got there first, not exercising independent judgment.</p>
<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
  <p class="text-sm text-[var(--fg-muted)]">Some people trade expected value for autonomy. The ability to act, even if the timing is wrong, feels better than watching your position decay in a system you cannot leave.</p>
</div>`,
        },
        {
          title: '4. Trust Calibration',
          content: `<p>Transparent coordination games require trusting no one. No founder to deliver a roadmap, no team to execute a vision, no institution to stay solvent. The only variable is whether other participants will coordinate.</p>
<p>Opaque systems require trust: in founders, in investors, in auditors, in regulators. When trust in institutions is low, whether from experience or environment, trustless games become attractive. Not because they are better. Because they match the participant's available trust budget.</p>
<p>A person who trusts nothing may rationally prefer a game that requires trusting nothing.</p>`,
        },
        {
          title: '5. Dignity of the Bet',
          content: `<p>This may be the hardest one to quantify, but it matters.</p>
<p>Losing money in a transparent game feels like losing a fair bet. You knew the odds, you took the risk, you lost. Nobody to blame but yourself, and no deception to resent.</p>
<p>Losing money in an extractive game feels like being made a fool. You were told a story, you believed it, and you found out too late that the story was cover for someone else's exit. The loss is compounded by humiliation.</p>
<p>People protect their dignity by choosing games where loss does not come with the feeling of being deceived. Not rational in expected-value terms. Might be rational in broader ones.</p>`,
        },
      ],
    },
    {
      id: 'the-contrast',
      title: 'The Contrast',
      content: `<p>The real distinction is not between risky and safe. It is between two structures:</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
    <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">Honest Coordination Games</p>
    <p class="text-sm text-[var(--fg-muted)]">Rules are visible, participation is open, no one claims fundamental value, outcomes depend on timing and collective behavior. Most participants lose, and everyone knows it going in.</p>
  </div>
  <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
    <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">Extractive Pseudo-Fundamentals</p>
    <p class="text-sm text-[var(--fg-muted)]">Rules are obscured, participation is gated or asymmetric, fundamental value is claimed but never delivered, outcomes depend on hidden advantages. Most participants lose, but they were told they would win.</p>
  </div>
</div>
<p>Both are negative-sum for most participants. But the first is honest about it.</p>`,
    },
    {
      id: 'what-this-reveals',
      title: 'What This Reveals',
      content: `<p>If any of this is right, the popularity of transparent coordination games is not primarily about greed or stupidity. It is a symptom of something deeper: a widespread perception that traditional systems are extractive, opaque, or closed.</p>
<p>People are not choosing transparent games because they think the games are good. They are choosing them because the alternatives feel worse, and worse in ways that are more degrading.</p>
<p>The real question is not whether honest gambling is wise. It is what it says about the perceived legitimacy of traditional systems when millions of people prefer an honest negative-sum game to an opaque one that claims to be positive-sum.</p>`,
    },
  ],

  footerVersion: 'Version 2.0 • 2024 • Rohit Mangtani',
};
