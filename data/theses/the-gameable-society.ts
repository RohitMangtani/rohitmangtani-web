import type { ThesisArticleData } from '@/types/theses';

export const theGameableSocietyData: ThesisArticleData = {
  slug: 'the-gameable-society',
  date: '2025',
  title: 'The Gameable Society',
  subtitle: 'On spectatorship, optimization, and the mechanics of a society that runs like a game.',
  onRamp: {
    description: 'People are increasingly treating life like a game to be optimized, and other people\'s optimization as content to watch. This looks at the spectator class, gamified systems, and what happens when society gets legible enough to exploit.',
    whatItDoes: 'Traces the loop between optimization culture, spectatorship, and value concentration.',
    whatItDoesNot: 'Prescribe solutions, moralize about behavior, or claim these trends are good or bad.',
    howToRead: 'An essay, not a framework. Read it straight through.',
  },
  intro: 'On optimization, spectatorship, and the mechanics of a society that runs like a game.',
  sections: [
    {
      id: 'spectator-class',
      title: 'The Spectator Class',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          Something shifted in how people relate to effort. It started as internet irony. "Looksmaxxing," "moneymaxxing," treating life like a character build screen where you min-max stats until you win.
        </p>

        <p class="leading-relaxed mb-6">
          The joke landed because it felt true. Now it is true. People are not just joking about optimizing their jaw angles and sleep scores. They are doing it. And the people who are not doing it are watching the people who are, for hours, every day.
        </p>

        <p class="leading-relaxed mb-6">
          The evidence is everywhere. Teenagers follow O'Malley's looksmaxxing journey like a serialized drama, tracking his mewing progress and canthal tilt. Bryan Johnson spends $2 million a year on "don't die" protocols and livestreams his biomarkers to millions who will never afford his blood boy treatments. Gambling streamers become cultural icons not despite being unhinged but because of it. Their million-dollar wins and losses transformed into spectator sport, their degeneracy into content.
        </p>

        <p class="leading-relaxed mb-6">
          There is a new category of person emerging. Or maybe just becoming visible. They watch. They absorb content about discipline, fitness, money, hustle, and transformation. They feel something while watching. Motivation, maybe. Or its chemical cousin. But they do not act.
        </p>

        <p class="leading-relaxed mb-6">
          This is not laziness in the traditional sense. It is something stranger. The consumption itself produces a feeling of progress. Watching someone else grind triggers enough dopamine to feel like participation. The brain does not cleanly distinguish between doing and observing doing.
        </p>

        <p class="leading-relaxed mb-6">
          So the observer gets a hit, feels temporarily aligned with the values on screen, and then the video ends. The next video begins. The cycle continues.
        </p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg)]">Over time, this creates a class of people who are fluent in the language of self-improvement but have not improved. They can explain periodization, caloric deficits, compound interest, and dopamine regulation. They know the meta. They have never played the game.</p>
        </div>
      `,
    },
    {
      id: 'the-game',
      title: 'The Game',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The instinct is to call this irrational. It is not.
        </p>

        <p class="leading-relaxed mb-6">
          The behaviors showing up across society, the spectatorship, the obsessive optimization, the gambling, look irrational only when measured against frameworks that no longer describe the environment.
        </p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg)] font-medium">The environment has changed. It now runs like a game.</p>
        </div>

        <p class="leading-relaxed mb-6">
          When systems become legible, when metrics are visible, feedback is instant, and outcomes can be min-maxed, people start playing them as games. Social platforms gamify attention. Health tracking gamifies the body. Career platforms gamify credentials. Dating apps gamify attraction.
        </p>

        <p class="leading-relaxed mb-6">
          The incentive structures have shifted, and people are adapting to the shift.
        </p>

        <p class="leading-relaxed mb-6">
          Within these systems, spectatorship is a low-risk equilibrium. If action carries downside and observation carries reward, the rational move is to watch. The system does not punish this. It sustains it. The content is free. The friction is zero. The dopamine is reliable.
        </p>

        <p class="leading-relaxed mb-6">
          Meanwhile, action has gotten expensive in ways it was not before. To try something publicly is to invite judgment at scale. The internet remembers. Failure is archived.
        </p>

        <p class="leading-relaxed mb-6">
          The gap between the cost of embarrassment and the reward of modest success has shifted. For many, the rational move is to not try. Or to try only in private, where nobody can screenshot the failure.
        </p>

        <p class="leading-relaxed mb-6">
          The watchers are not stupid. They have correctly identified that trying things in public is dangerous. They have also correctly identified that watching content about trying things feels almost as good as trying them. The behavior is locally rational. It is globally corrosive.
        </p>
      `,
    },
    {
      id: 'attention-economics',
      title: 'Attention Economics',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          Attention is the primary currency of digital economies now. Not money. Not labor. Not credentials. Attention.
        </p>

        <p class="leading-relaxed mb-6">
          Money can be printed. Labor can be automated. Credentials can be inflated. Attention cannot be manufactured. It is zero-sum. Every unit directed at one thing is a unit unavailable to another.
        </p>

        <p class="leading-relaxed mb-6">
          This changes what people optimize for. The entities that capture attention accumulate leverage. The ones that do not, regardless of quality, effort, or merit, stay invisible. And in an attention economy, invisible means nonexistent.
        </p>

        <p class="leading-relaxed mb-6">
          Success increasingly depends on attention capture, not output quality. Quality matters only to the extent that it drives attention. When quality and attention diverge, attention wins.
        </p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">
            The current environment runs on extreme asymmetry. A small number of outcomes capture a disproportionate share of returns. Most outcomes return near zero.
          </p>
          <p class="leading-relaxed mb-4">
            The distribution has fat tails and a hollowed middle.
          </p>
        </div>

        <p class="leading-relaxed mb-6">
          Under these conditions, expected value becomes misleading. A strategy that maximizes expected value will systematically underperform one that maximizes exposure to outsized outcomes. Variance is not a bug to minimize. It is the mechanism through which disproportionate success happens.
        </p>

        <p class="leading-relaxed mb-6">
          This is why behaviors that look reckless are often rational. Bold career pivots. High-risk creative swings. All-in commitments to unproven paths. These are not failures of risk assessment. They are correct adaptations to a landscape where the middle has collapsed and the tails dominate.
        </p>

        <p class="leading-relaxed mb-6">
          Moderation is a strategy built for stable environments with normal distributions. In a game-like environment with asymmetric payoffs, moderation guarantees you capture the shrinking middle while giving up access to the expanding tails.
        </p>

        <p class="leading-relaxed mb-6">
          The moderate actor never blows up, but never escapes baseline either. The environment does not reward consistency. It rewards spikes. A single breakout event, viral attention, unexpected recognition, visible transformation, outweighs years of steady accumulation. The math favors bold swings over safe consistency.
        </p>
      `,
    },
    {
      id: 'new-behaviors',
      title: 'New Behaviors',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          These pressures produce new behaviors.
        </p>

        <p class="leading-relaxed mb-6">
          Skill-maxxing shows up where traditional credentialing feels slow, blocked, or disconnected from outcomes. When institutional paths lose trust, visible capability becomes the alternative signal. The person who can demonstrably do something bypasses the person who can only claim credentials.
        </p>

        <p class="leading-relaxed mb-6">
          In a gameable environment, progress has to be visible to count. Private competence builds slowly and invisibly. Public competence, skill that can be demonstrated and documented, builds attention alongside capability. The skill is real. The visibility is strategic. Both are necessary.
        </p>

        <p class="leading-relaxed mb-6">
          Most people are trained to avoid embarrassment. Not inefficiency. Not stagnation. Embarrassment. This training serves spectator equilibrium. It keeps behavior within observable norms. It discourages deviation. It makes watching feel safer than doing.
        </p>

        <p class="leading-relaxed mb-6">
          Those who invert this, who deliberately put themselves in front of social risk, who show up unpolished in public before outcomes validate the attempt, gain a different kind of advantage.
        </p>

        <p class="leading-relaxed mb-6">
          Early-stage effort looks embarrassing precisely because spectator norms define success as the only acceptable visible state. The process is supposed to be hidden. Showing it violates the implicit contract.
        </p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">
            But the process is where the information lives. The process is where iteration happens. The process is where compounding begins.
          </p>
          <p class="leading-relaxed mb-4">
            Those who hide it protect their image. Those who show it accelerate their feedback loops.
          </p>
        </div>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Saturated environments penalize polish. When everything looks optimized, optimization stops signaling quality. It signals conformity. Authenticity, visible struggle, real-time learning, unedited process, becomes a differentiator. Not because it is virtuous. Because it cannot be faked at scale. The inefficiency is the proof.</p>
        </div>

        <p class="leading-relaxed mb-6">
          Tolerance for awkwardness becomes a real input. Not a personality trait. A resource allocation decision. The willingness to spend social capital now in exchange for compounding advantages later.
        </p>
      `,
    },
    {
      id: 'value-concentration',
      title: 'Value Concentration',
      content: `
        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg)] font-medium">Value does not disappear in a spectator-dominated society. It concentrates.</p>
        </div>

        <p class="leading-relaxed mb-6">
          Spectators are not passive in the way people assume. They are economically productive inputs. Every hour of watching generates data. Every scroll generates signal. Every view generates demand. The attention itself is the product, packaged, segmented, and sold to advertisers, platforms, and intermediaries who convert it into revenue.
        </p>

        <p class="leading-relaxed mb-6">
          The spectator experiences this as free content. The cost is invisible because it is not denominated in money. It is denominated in time, data, and opportunity cost. These are extracted continuously, without friction, and without explicit consent beyond the initial click.
        </p>

        <p class="leading-relaxed mb-6">
          Platforms do not create content. They create environments where content gets created and consumed. Their value is in intermediation, standing between attention and its capture. This position generates rent. Every transaction that passes through the platform includes a toll.
        </p>

        <p class="leading-relaxed mb-6">
          The platform does not need to produce. It needs to be unavoidable.
        </p>

        <p class="leading-relaxed mb-6">
          The business model does not depend on whether the spectator's life gets better. It does not matter if the viewer improves, stagnates, or declines. It only matters that they keep watching. Engagement is the metric. Engagement is agnostic to welfare.
        </p>

        <p class="leading-relaxed mb-6">
          Spectators provide the raw material in attention economies. They are the pool that creators, influencers, and platforms draw from. Without spectators, no audience. Without audience, no monetizable attention. The entire ecosystem of visible success depends on a substrate of invisible watching.
        </p>

        <p class="leading-relaxed mb-6">
          Every hour of spectatorship is an hour of attention donated to those who know how to capture it. The spectator does not experience this as extraction. But the value transfer is happening through the structure itself.
        </p>
      `,
    },
    {
      id: 'equilibrium',
      title: 'Equilibrium',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The system is stable because every participant is getting something out of it locally.
        </p>

        <p class="leading-relaxed mb-6">
          Spectators get low-cost stimulation. Platforms get scalable revenue. Creators get attention and validation. Risk-takers get access to outsized outcomes. Optimization industries get anxious demand.
        </p>

        <p class="leading-relaxed mb-6">
          No single actor experiences the structure as coercive. Each transaction is voluntary. Each participant is locally satisfied. Or at least, not dissatisfied enough to leave.
        </p>

        <p class="leading-relaxed mb-6">
          The aggregate outcome is concentration. Value flows upward to those who intermediate, exploit, or own the infrastructure. Value flows away from those who watch, click, and spend time without capturing compounding advantages.
        </p>

        <p class="leading-relaxed mb-6">
          Gameable systems exert selection pressure. Over time, they filter for participants who recognize the game and filter out those who do not. This happens quietly. There is no announcement that the rules have changed.
        </p>

        <p class="leading-relaxed mb-6">
          Those who intuit the new mechanics start to outperform. Those who keep operating under old assumptions fall behind incrementally.
        </p>

        <p class="leading-relaxed mb-6">
          The gap compounds. Early recognition of gameability yields advantages that stack over time. Late recognition means less runway to catch up. Not recognizing it at all means a slow decline that may never get attributed to the actual cause.
        </p>

        <p class="leading-relaxed mb-6">
          The selection is not for intelligence, effort, or virtue. It is for model accuracy. People with accurate models of the current system outperform people with inaccurate models, regardless of everything else.
        </p>

        <p class="leading-relaxed mb-10">
          It is an equilibrium. The incentives are aligned for persistence, not redistribution. The system does not need to be defended. It just needs to keep running.
        </p>

        <p class="leading-relaxed text-[var(--fg)] text-lg">
          The spectators keep watching. The optimizers keep optimizing. The platforms keep extracting. The pressure keeps selecting.
        </p>

        <p class="leading-relaxed text-[var(--fg)] text-xl font-medium mt-6">
          The game continues.
        </p>
      `,
    },
  ],
  footerText: 'Rohit Mangtani | 2025',
};

export default theGameableSocietyData;
