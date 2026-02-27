import { ResearchData } from '@/types/research';

export const honestGamblingData: ResearchData = {
  slug: 'honest-gambling',
  date: '2024',
  title: 'Why People Choose Honest Gambling Over Extractive Games',
  subtitle: 'Why participants prefer legible rules over hidden extraction',
  
  onRamp: {
    description: 'This essay explores why participants often prefer transparent, negative-sum games over opaque systems that claim better odds. It proposes that under perceived unfairness, legible rules become more attractive than hidden extraction.',
    whatItDoes: 'A descriptive analysis of risk preferences and coordination under constraint.',
    whatItDoesNot: 'Investment advice, moral endorsement, or a claim that gambling is wise.',
  },
  
  sections: [
    {
      id: 'the-puzzle',
      title: 'The Puzzle',
      content: `<p>Here is something that should not happen: millions of people voluntarily enter games they know are negative-sum, where most participants lose, and where the odds are not hidden. They do this repeatedly, with money they could invest elsewhere, in full knowledge of the likely outcome.</p>
<p>The standard explanation is irrationality: gambling addiction, FOMO, financial illiteracy. These factors exist. But they do not explain why participants often <em>prefer</em> transparent coordination games over opaque systems that claim to offer better odds, like gated investment products or complex financial instruments.</p>
<p>This essay proposes a different explanation: under conditions of perceived unfairness, participants rationally prefer games with legible rules over games with hidden extraction, even when the legible game has worse expected returns.</p>
<p>This is a descriptive claim, not a prescriptive one. It does not argue that transparent gambling is wise, virtuous, or profitable. It argues that the preference is intelligible.</p>`,
    },
    {
      id: 'five-mechanisms',
      title: 'Five Mechanisms',
      content: '',
      subsections: [
        {
          title: '1. Legibility of Loss',
          content: `<p>In a transparent coordination game, the rules are visible. Early participants tend to win; late participants tend to lose. Everyone knows this going in. The mechanism is not hidden behind complexity, jargon, or promises.</p>
<p>In extractive systems, whether opaque financial products, gated investment structures, or complex instruments with hidden fees, loss is obscured. Participants discover the rules only after losing: vesting schedules they didn't understand, information asymmetries they couldn't see.</p>
<p>Given a choice between legible risk and illegible extraction, many choose legibility. Losing in a game you understood feels different from losing in a game you were deceived about.</p>`,
        },
        {
          title: '2. Fairness of the Starting Line',
          content: `<p>Open-access systems offer something rare: the appearance of an equal starting line. When anyone can participate from the moment a game begins — no accreditation, no waitlist, no insider allocation — the game feels, if not fair, at least <em>uniformly unfair</em>.</p>
<p>Contrast this with systems where the best opportunities are reserved for insiders or institutional players. By the time ordinary participants arrive, the game has often already been played.</p>
<p>When traditional paths feel closed, participants may prefer "fair unfairness," a game where everyone faces the same bad odds, over "rigged fairness," where good odds are reserved for others.</p>`,
        },
        {
          title: '3. Agency in Timing',
          content: `<p>Coordination games offer participant-controlled exit. You decide when to buy and when to sell. There are no lockups, no vesting cliffs, no withdrawal windows. The decision is yours, and so is the responsibility.</p>
<p>Extractive systems often remove this agency. Lockups prevent exit during downturns. Illiquidity traps capital. The participant's role is to provide exit liquidity for earlier participants, not to exercise independent judgment.</p>
<p>Some participants trade expected value for autonomy. The ability to act, even if the action is mistimed, may be preferred over passively watching capital decline in a system you cannot exit.</p>`,
        },
        {
          title: '4. Trust Calibration',
          content: `<p>Transparent coordination games require trusting no one. There is no founder to deliver a roadmap, no team to execute a vision, no institution to remain solvent. The only variable is whether other participants will coordinate.</p>
<p>Opaque systems require trust: in founders, in investors, in auditors, in regulators. When trust in institutions is low, whether due to experience, environment, or disposition, trustless games become attractive. Not because they are better, but because they match the participant's available trust budget.</p>
<p>A person who trusts nothing may rationally prefer a game that requires trusting nothing.</p>`,
        },
        {
          title: '5. Dignity of the Bet',
          content: `<p>This may be the least quantifiable mechanism, but it is not the least important.</p>
<p>Losing money in a transparent game feels like losing a fair bet. You knew the odds, you took the risk, you lost. There is no one to blame but yourself, and no deception to resent.</p>
<p>Losing money in an extractive game feels like being made a fool. You were told a story, you believed it, and you discovered (too late) that the story was cover for someone else's exit. The loss is compounded by humiliation.</p>
<p>Participants may protect psychological dignity by choosing games where loss is not accompanied by the sense of having been deceived. This is not rational in expected-value terms. It may be rational in broader terms.</p>`,
        },
      ],
    },
    {
      id: 'the-contrast',
      title: 'The Contrast',
      content: `<p>The distinction that matters is not between "risky bets" and "serious investments." It is between two structures:</p>
<p><strong class="text-[var(--fg)]">Honest coordination games:</strong> Rules are visible, participation is permissionless, no one claims fundamental value, outcomes depend on timing and collective behavior. Most participants lose, and everyone knows this.</p>
<p><strong class="text-[var(--fg)]">Extractive pseudo-fundamentals:</strong> Rules are obscured, participation is gated or asymmetric, fundamental value is claimed but not delivered, outcomes depend on insider behavior. Most participants lose, but they were told they would win.</p>
<p>Both are negative-sum for most participants. But the first is honest about it.</p>`,
    },
    {
      id: 'what-this-is-not',
      title: 'What This Is Not',
      content: `<p>This analysis does not claim that participants in transparent coordination games are smarter, more informed, or more likely to profit. They are not.</p>
<p>It does not claim that transparent coordination games are good investments. They are not.</p>
<p>It does not claim that preferring legible games over extractive ones is optimal. It may not be.</p>
<p>It claims only that the preference is explicable: under under conditions of perceived unfairness, distrust, and constrained access, participants may rationally choose honest gambling over dishonest alternatives.</p>`,
    },
    {
      id: 'what-this-reveals',
      title: 'What This Reveals',
      content: `<p>If this analysis is correct, the popularity of transparent coordination games is not primarily about greed or stupidity. It is a symptom of something else: a perception that traditional systems are extractive, opaque, or closed.</p>
<p>Participants are not choosing transparent games because they believe the games are good. They are choosing them because they believe the alternatives are worse — or at least, worse in ways that feel more degrading.</p>
<p>This is not an endorsement. It is a diagnosis.</p>
<p>The open question is not whether transparent gambling is wise. It is what it means about the perceived legitimacy of traditional systems when millions of people prefer an honest negative-sum game to an opaque one that claims to be positive-sum.</p>`,
    },
  ],
  
  footerVersion: 'This essay is descriptive, not prescriptive. It does not constitute investment advice or endorsement of any asset class.\n\nRohit Mangtani • 2024',
};
