import type { ThesisArticleData } from '@/types/theses';

export const theGameableSocietyData: ThesisArticleData = {
  slug: 'the-gameable-society',
  date: '2025',
  title: 'The Gameable Society',
  subtitle: 'On spectatorship, optimization, and the mechanics of a society that operates like a game.',
  onRamp: {
    description: 'This thesis explores a cultural pattern: people increasingly relate to life as a game to be optimized, and to others\' optimization as content to be consumed. It examines the spectator class, gamified systems, and what happens when society becomes legible enough to exploit.',
    whatItDoes: 'Describes emerging cultural patterns around optimization, spectatorship, and system exploitation.',
    whatItDoesNot: 'Prescribe solutions, moralize about behavior, or claim these trends are good or bad.',
    howToRead: 'This is an essay, not a framework. Read it straight through.',
  },
  intro: 'This essay describes cultural patterns around optimization and spectatorship without prescribing responses.',
  sections: [
    {
      id: 'spectator-class',
      title: 'I. The Spectator Class',
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
          This is not laziness in the traditional sense. It is something stranger. The consumption itself produces a feeling of progress. Watching someone else grind triggers enough dopamine to feel like participation. The brain does not distinguish cleanly between doing and observing doing.
        </p>
        
        <p class="leading-relaxed mb-6">
          So the observer gets a hit, feels temporarily aligned with the values on screen, and then the video ends. The next video begins. The cycle continues.
        </p>

        <p class="leading-relaxed text-[var(--fg)] font-medium">
          Over time, this creates a class of people who are fluent in the language of self-improvement but have not improved. They can explain periodization, caloric deficits, compound interest, and dopamine regulation. They know the meta. They have never played the game.
        </p>
      `,
    },
    {
      id: 'the-game',
      title: 'II. The Game',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The instinct is to call this irrational. It is not.
        </p>

        <p class="leading-relaxed mb-6">
          The behaviors emerging across society, the spectatorship, the obsessive optimization, the gambling, appear irrational only when measured against frameworks that no longer describe the environment.
        </p>

        <p class="leading-relaxed mb-6 text-[var(--fg)] font-medium">
          The environment has changed. It now operates like a game.
        </p>

        <p class="leading-relaxed mb-6">
          When systems become legible, when metrics are visible, feedback is instant, and outcomes can be min-maxed, people begin to play them as games. Social platforms gamify attention. Financial markets gamify risk. Health tracking gamifies the body. Career platforms gamify credentials.
        </p>
        
        <p class="leading-relaxed mb-6">
          The incentive structures have shifted, and people are adapting to the shift.
        </p>

        <p class="leading-relaxed mb-6">
          Within these systems, spectatorship is a low-risk equilibrium. If action carries downside and observation carries reward, the rational agent watches. The system does not punish this. It sustains it. The content is free. The friction is zero. The dopamine is reliable.
        </p>

        <p class="leading-relaxed mb-6">
          Meanwhile, action has become expensive in ways it was not before. To try something publicly is to invite judgment at scale. The internet remembers. Failure is archived.
        </p>
        
        <p class="leading-relaxed mb-6">
          The asymmetry between the cost of embarrassment and the reward of modest success has shifted. For many, the rational move is to not try. Or to try only in private, where no one can screenshot the failure.
        </p>

        <p class="leading-relaxed mb-6">
          The watchers are not stupid. They have correctly identified that trying things in public is dangerous. They have also correctly identified that consuming content about trying things feels almost as good as trying them. The behavior is locally rational. It is globally corrosive.
        </p>
      `,
    },
    {
      id: 'attention-economics',
      title: 'III. Attention Economics',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          Attention has become the primary denominator of value in digital economies. Not money. Not labor. Not credentials. Attention.
        </p>

        <p class="leading-relaxed mb-6">
          Money can be printed. Labor can be automated. Credentials can be inflated. Attention cannot be manufactured. It is zero-sum. Every unit directed at one entity is a unit unavailable to another.
        </p>

        <p class="leading-relaxed mb-6">
          This changes the optimization function. Entities that capture attention accumulate leverage. Entities that do not capture attention, regardless of quality, effort, or merit, remain invisible. Invisibility in an attention economy is equivalent to nonexistence.
        </p>

        <p class="leading-relaxed mb-6">
          The implication is structural. Success increasingly depends on attention capture, not output quality. Output quality is relevant only insofar as it contributes to attention capture. When quality and attention diverge, attention wins.
        </p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">
            The current environment is characterized by extreme asymmetry. A small number of outcomes capture a disproportionate share of returns. Most outcomes return near zero.
          </p>
          <p class="leading-relaxed mb-4">
            The distribution has fattened tails and a hollowed middle.
          </p>
        </div>

        <p class="leading-relaxed mb-6">
          Under these conditions, expected value becomes a misleading metric. A strategy that maximizes expected value will systematically underperform a strategy that maximizes exposure to asymmetric upside. Variance is not a bug to be minimized. It is the mechanism through which outsized returns are accessed.
        </p>

        <p class="leading-relaxed mb-6">
          This explains the rationality of behaviors that appear reckless. Concentrated bets. Speculative positions. High-risk career moves. These are not failures of risk assessment. They are correct adaptations to a landscape where the middle has collapsed and the tails dominate.
        </p>

        <p class="leading-relaxed mb-6">
          Moderation is a strategy optimized for normal distributions and stable environments. In a game-like environment with asymmetric payoffs, moderation is suboptimal. It guarantees capture of the shrinking middle while forfeiting access to the expanding tails.
        </p>
        
        <p class="leading-relaxed mb-6">
          The moderate actor never blows up, but also never escapes baseline. The environment does not reward consistency. It rewards spikes. A single breakout event, viral attention, asymmetric return, visible transformation, outweighs years of moderate accumulation. The math favors volatility.
        </p>
      `,
    },
    {
      id: 'new-behaviors',
      title: 'IV. New Behaviors',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          In response to these pressures, new behaviors emerge.
        </p>

        <p class="leading-relaxed mb-6">
          Skill-maxxing emerges where traditional credentialing feels slow, blocked, or disconnected from actual outcomes. When institutional paths lose trust, visible capability becomes the alternative signal. The individual who can demonstrably do something bypasses the individual who can only claim credentials.
        </p>

        <p class="leading-relaxed mb-6">
          In a gameable environment, progress must be visible to be valued. Private competence accrues slowly and invisibly. Public competence, skill that can be demonstrated, documented, and displayed, accrues attention alongside capability. The skill is real. The visibility is strategic. Both are necessary.
        </p>

        <p class="leading-relaxed mb-6">
          Most people are trained to avoid embarrassment. Not inefficiency. Not stagnation. Embarrassment. This training serves spectator equilibrium. It keeps behavior within observable norms. It discourages deviation. It makes watching feel safer than doing.
        </p>

        <p class="leading-relaxed mb-6">
          Those who invert this, who deliberately expose themselves to social risk, who appear awkward or unpolished in public before outcomes have validated the attempt, gain a different kind of advantage.
        </p>
        
        <p class="leading-relaxed mb-6">
          Early-stage effort looks embarrassing precisely because spectator norms define success as the only acceptable visible state. The process is supposed to be hidden. Showing it violates the implicit contract.
        </p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">
            But the process is where information lives. The process is where iteration happens. The process is where compounding begins.
          </p>
          <p class="leading-relaxed mb-4">
            Those who hide it protect their image. Those who expose it accelerate their feedback loops.
          </p>
        </div>

        <p class="leading-relaxed mb-6">
          Saturated environments penalize polish. When everything looks optimized, optimization stops signaling quality. It signals conformity. Authenticity, visible struggle, real-time learning, unedited process, becomes a differentiator. Not because it is virtuous. Because it cannot be faked at scale. The inefficiency is the proof.
        </p>

        <p class="leading-relaxed mb-6">
          Tolerance for awkwardness becomes a competitive input. It is not a personality trait. It is a resource allocation decision. The willingness to spend social capital now in exchange for compounding returns later.
        </p>
      `,
    },
    {
      id: 'value-concentration',
      title: 'V. Value Concentration',
      content: `
        <p class="text-lg leading-relaxed mb-6 text-[var(--fg)] font-medium">
          Value does not disappear in a spectator-dominated society. It concentrates.
        </p>

        <p class="leading-relaxed mb-6">
          Spectators are not passive. They are economically productive inputs. Every hour of watching generates data. Every scroll generates signal. Every view generates demand. The attention itself is the product, packaged, segmented, and sold to advertisers, platforms, and intermediaries who convert it into revenue.
        </p>

        <p class="leading-relaxed mb-6">
          The spectator experiences this as free content. The cost is not visible because it is not denominated in money. It is denominated in time, data, and opportunity. These are extracted continuously, without friction, and without explicit consent beyond the initial click.
        </p>

        <p class="leading-relaxed mb-6">
          Platforms do not create content. They create environments where content is created and consumed. Their value lies in intermediation, standing between attention and its capture. This position generates rent. Every transaction that passes through the platform includes a toll.
        </p>
        
        <p class="leading-relaxed mb-6">
          The platform does not need to produce. It needs to be unavoidable.
        </p>

        <p class="leading-relaxed mb-6">
          The business model does not depend on spectator outcomes. It does not matter whether the viewer improves, stagnates, or declines. It matters only that they continue watching. Engagement is the metric. Engagement is agnostic to welfare.
        </p>

        <p class="leading-relaxed mb-6">
          In attention markets, spectators provide liquidity. They are the pool of available attention that creators, influencers, and speculators draw from. Without spectators, there is no audience. Without audience, there is no monetizable attention. The entire ecosystem of visible success depends on a substrate of invisible watching.
        </p>

        <p class="leading-relaxed mb-6">
          Every hour of spectatorship is an hour of attention donated to those who know how to capture it. The spectator does not experience this as extraction. The value transfer occurs through the structure itself.
        </p>
      `,
    },
    {
      id: 'equilibrium',
      title: 'VI. Equilibrium',
      content: `
        <p class="text-lg leading-relaxed mb-6">
          The system is stable because it satisfies local incentives for all participants.
        </p>

        <p class="leading-relaxed mb-6">
          Spectators receive low-cost stimulation. Platforms receive scalable revenue. Creators receive attention and validation. Speculators receive access to asymmetric upside. Optimization industries receive anxious demand.
        </p>

        <p class="leading-relaxed mb-6">
          No single actor experiences the structure as coercive. Each transaction is voluntary. Each participant is locally satisfied. Or at least, not sufficiently dissatisfied to exit.
        </p>

        <p class="leading-relaxed mb-6">
          The aggregate outcome is concentration. Value flows upward to those who intermediate, exploit, or own the infrastructure. Value flows outward from those who watch, click, and spend time without capturing compounding returns.
        </p>

        <p class="leading-relaxed mb-6">
          Gameable systems exert selection pressure. Over time, they filter for participants who recognize the game and filter out those who do not. This operates quietly. There is no announcement that the rules have changed.
        </p>
        
        <p class="leading-relaxed mb-6">
          Those who intuit the new mechanics begin to outperform. Those who continue operating under legacy assumptions fall behind incrementally.
        </p>

        <p class="leading-relaxed mb-6">
          The gap compounds. Early recognition of gameability yields advantages that accumulate over time. Late recognition yields diminishing runway to catch up. Non-recognition yields slow decline that may never be attributed to its actual cause.
        </p>

        <p class="leading-relaxed mb-6">
          The selection is not for intelligence, effort, or virtue. It is for model accuracy. Participants with accurate models of the current system outperform participants with inaccurate models, regardless of other attributes.
        </p>

        <p class="leading-relaxed mb-10">
          It is an equilibrium. The incentives are aligned for persistence, not for redistribution. The system does not need to be defended. It only needs to continue operating.
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
  footerText: 'RMGTNI | 2025',
};

export default theGameableSocietyData;
