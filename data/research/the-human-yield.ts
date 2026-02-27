import type { ResearchData } from '@/types/research';

export const theHumanYieldData: ResearchData = {
  slug: 'the-human-yield',
  date: '2026',
  title: 'The Human Yield',
  subtitle: 'What happens when showing up is the whole job',

  onRamp: {
    description: 'AI is not making people useless. It is making their labor useless. For a growing number of people, the most valuable economic activity will be showing up. Being in the chair. Supervising, participating, existing inside systems that need a human present but not a human working. This is not a dystopian prediction. It is already happening, and an economy is taking shape around it.',
    whatItDoes: 'Connects idle games, automation, displacement economics, and resistance culture to explain why passive participation is becoming the rational default.',
    whatItDoesNot: 'Argue that people are worthless, predict specific timelines, or pitch UBI as policy.',
  },

  claim: 'AI does not make humans useless. It makes human labor useless for a growing share of the population. What remains valuable is not effort. It is presence. An entire economy is forming around the difference.',

  sections: [
    {
      id: 'the-bifurcation',
      title: 'The Bifurcation',
      content: `
        <p>The Positive Loop described a specific kind of person. Someone who found that AI tools could turn idle time into real output and got hooked on the cycle. Idea to product. Curiosity to published research. The dopamine hit that builds instead of drains.</p>

        <p>That piece documented the upside. This one is about the other side of the same coin.</p>

        <p>The Positive Loop does not scale to everyone. It can't. It requires a specific wiring: the instinct to build, the taste to direct, the drive to keep iterating. Those are not common traits. Most people, given a powerful tool, will not use it to ship products. They will use it the way they use every other tool. Passively, occasionally, or not at all.</p>

        <p>That is not a knock on anyone. It is just the distribution. The same one that applies to every other capability in history. A small percentage ride the productive loop. A larger percentage use AI casually. And a real chunk of people get displaced by it without ever having touched it themselves.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The split is not between smart and dumb. It is between people whose natural wiring compounds with AI and people whose skills get replaced by it. A brilliant accountant and a mediocre accountant face the same displacement. A mediocre builder with good taste and a great coder with no direction face entirely different futures.</p>
        </div>

        <p>The Positive Loop riders will capture a disproportionate amount of value. They already are. But the real story is not about them. It is about what happens to the much larger group for whom AI does not create a productive cycle. It creates a gap where their economic role used to be.</p>
      `,
    },
    {
      id: 'the-capybara-economy',
      title: 'The Capybara Economy',
      content: `
        <p>There is a genre of game that should not work. You open the app. You are a capybara. You sit there. That is the game.</p>

        <p>No fighting. No puzzles. No stat optimization. You sit in a hot spring, or a field, or a room, and the game rewards you for being present. Sometimes other capybaras show up. Sometimes things happen around you. Your contribution is existing.</p>

        <p>These games have millions of players. They are not ironic. People genuinely find them satisfying. And the reason is not just psychological. It is economic in nature, even if nobody frames it that way yet.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Idle games are prototypes for an economic phase that has not fully arrived. They normalize the idea that presence, not effort, is the mechanism of participation. You do not need to perform. You need to be there. The system generates value from you being there and gives you a cut of it.</p>
        </div>

        <p>This is already taking shape in the real economy:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Content farming:</strong> You do not create anything meaningful. You exist inside a system that produces volume. Your presence fills a quota. The system monetizes the aggregate.</li>
          <li><strong class="text-[var(--fg)]">AI supervision:</strong> You do not do the work. AI does. You sit there and approve it, flag errors, provide the human stamp. Your judgment is minimal. Your presence is what matters.</li>
          <li><strong class="text-[var(--fg)]">Engagement farming:</strong> You join a community, a platform, a collective. You click, react, show up. The system needs warm bodies generating metrics. Your activity does not need to be meaningful. It needs to be countable.</li>
          <li><strong class="text-[var(--fg)]">Participation mining:</strong> You show up early, stay active, qualify for rewards. The value is not what you do. It is the fact that you showed up and stayed.</li>
        </ul>

        <p>Same pattern every time. A system that needs human inputs but not human effort. The person is not performing labor. They are providing something else: presence, attention, a body in the system. And getting compensated for it.</p>

        <p>That is the capybara economy. You sit in the hot spring. The game continues around you. You get paid for being there.</p>
      `,
    },
    {
      id: 'proxy-labor',
      title: 'Proxy Labor',
      content: `
        <p>The old model worked like this. You have a skill. You apply it. You get paid for the output. The skill is the moat. The effort is the input. The output is the product.</p>

        <p>AI breaks this for a growing range of work. The skill is no longer the moat, because AI has the skill. The effort is no longer the input, because AI handles it. So what is left?</p>

        <p>The human as a proxy.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think about how proxies work in other domains. A proxy vote is cast on behalf of someone not present. A proxy server acts as an intermediary. In both cases, the proxy's value is not in what it can do. It is in its position.</p>
          <p class="leading-relaxed mb-4">Proxy labor is the same thing. The human does not contribute skill. The human contributes position: a legal identity, a physical presence, an accountability structure that AI cannot provide yet.</p>
        </div>

        <p>This is already real:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Regulatory proxies:</strong> AI writes the report. A human signs it. The value is the signature, not the analysis.</li>
          <li><strong class="text-[var(--fg)]">Supervision proxies:</strong> AI drives the car, monitors the patient, manages the workflow. A human watches the dashboard. The value is being liable, not being skilled.</li>
          <li><strong class="text-[var(--fg)]">Social proxies:</strong> AI generates the content. A human posts it. The value is their identity, their network, their face. Not their creative ability.</li>
        </ul>

        <p>In each case, the human is not performing the core function. They are performing the function of being human. That is the job. Existing within a system that still requires, legally, socially, practically, a human in the room.</p>

        <p>This is not a transition period before the "real future" kicks in. This is a new category of work with no historical precedent: work where the qualification is being a person.</p>
      `,
    },
    {
      id: 'the-automation-parallel',
      title: 'The Automation Parallel',
      content: `
        <p>Think about how automation already works. You set up a system, describe the workflow, let it run. You do not perform each step. You do not intervene at every decision. You handle the setup and the oversight, and the system handles execution. Your role is to be present, not busy.</p>

        <p>Automated systems outperform manual effort for most tasks. The reason is structural. Active intervention introduces errors, inconsistency, fatigue. The cost of doing more often exceeds the benefit. Less input, better output.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The same logic is about to apply to labor at large.</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">For a growing share of the population, the cost of active labor, the training, the effort, the competition with AI systems, will exceed the benefit. The average worker's active contribution will be worth less than what the system generates without them. At that point, the rational move is not working harder. It is stepping back and participating passively.</p>
        </div>

        <p>The same way automated systems still need someone to set them up and monitor them, AI-driven workflows will need humans to show up and let the system operate. Supervise. Approve. React. Exist inside the economic machinery. Not try to outperform it. The machinery is better at the task. Your value is in being there, not in being good.</p>

        <p>This sounds bleak until you realize nobody looks down on someone who set up an automated pipeline and lets it run. That is considered smart. Efficient. The passive approach is the right call for most tasks and everyone already knows it.</p>

        <p>Passive participation in an AI-driven economy will follow the same arc. Mocked first, tolerated second, then recognized as the rational default. Not because people are lazy. Because the system produces more from their passive presence than from their active interference.</p>
      `,
    },
    {
      id: 'the-resistance-layer',
      title: 'The Resistance Layer',
      content: `
        <p>Not everyone takes this quietly.</p>

        <p>When traditional work stops making economic sense for enough people, those people do not just vanish. They reorganize. They build their own structures, their own value systems, their own assets.</p>

        <p>You can already see it with NEET culture. NEET started as a statistical category. It is becoming an identity. A growing number of people are not just unemployed. They are opting out on purpose, loudly, and building community around the decision.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The instinct is to write this off as laziness or nihilism. It is neither. It is the same pattern from <a href="/writing/honest-gambling" class="underline hover:opacity-60">Honest Gambling</a>: when the official system feels extractive or closed off, people build their own with rules they consider fairer. Even if the alternative looks worse on paper, people prefer it because it is chosen and legible.</p>
        </div>

        <p>The resistance takes multiple forms:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Community assets:</strong> Groups building their own economic instruments. Mutual aid, shared resources, community tokens. All outside the traditional system. The value is not financial returns. The value is belonging to something that does not require conventional productivity as the price of entry.</li>
          <li><strong class="text-[var(--fg)]">Decentralized identity:</strong> Communities where participation itself generates status, not achievement. Being present, contributing to the culture, showing up consistently. These become the credentials. The system rewards consistency over capability.</li>
          <li><strong class="text-[var(--fg)]">Content as labor:</strong> Creating content about the opt-out itself. Documenting the experience. Building audience around the rejection of traditional work. The irony is obvious. Refusing to participate in the economy becomes its own economic activity. The rejection is the content. The content is the product.</li>
        </ul>

        <p>None of this is new in kind. It is new in scale. Every wave of economic displacement has produced counter-cultures and resistance movements. What is different now is that AI accelerates the displacement faster than the alternatives can mature. The gap between "the old economy does not need you" and "a new economy exists for you" is where the instability lives.</p>
      `,
    },
    {
      id: 'the-floor',
      title: 'The Floor',
      content: `
        <p>Every system with enough displaced people eventually builds a floor. The floor is UBI, or something that functions like it, whatever name it ends up with.</p>

        <p>The argument for UBI has always been moral. It is about to become practical. When enough people cannot generate economic value through labor, not because they are incapable but because AI generates more without them, the system either subsidizes their existence or deals with what follows.</p>

        <p>And what follows is not theoretical. It is the same thing that comes after every period of mass displacement: instability, radicalization, the erosion of every social contract that assumed labor as the basis for participation.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">The floor does not need to be generous or comfortable. It just needs to keep the system stable. UBI in this context is not about making lives better. It is system maintenance. The displaced population is not being served. It is being managed. That is the honest framing.</p>
        </div>

        <p>Above the floor, a new stratification takes shape. Positive Loop riders, people compounding with AI, operate in one economy. Proxy laborers, people lending their presence to AI systems, operate in another. Floor dwellers, people whose participation the economy does not need at all, occupy a third.</p>

        <p>The dividing line is not intelligence. Not education. Not effort. It is orientation: how much a person's natural wiring lines up with what AI still cannot do. Taste. Direction. Judgment. Social trust. Physical presence. Accountability. These are the residual human inputs. Everything else is getting absorbed.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The spectator class from <a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a> was a preview of this. People who watched optimization content instead of optimizing. People fluent in the language of improvement but stuck on the other side of acting on it.</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">That class is about to get much larger. Not because people choose to spectate. Because the system is choosing it for them. When AI does your job better than you can, watching becomes the rational use of your time. The spectator class was voluntary. The proxy class is not.</p>
        </div>

        <p>The game does not stop. It restructures. The players become supervisors. The supervisors become spectators. The spectators become background. Present, counted, compensated at the floor, but not needed.</p>

        <p class="text-lg leading-relaxed text-[var(--fg)] font-medium mt-8">The capybara sits in the hot spring. The world moves around it. The game continues. It gets paid for being there.</p>

        <p class="text-xl leading-relaxed text-[var(--fg)] font-medium mt-4">That is the human yield.</p>
      `,
    },
  ],

  references: [
    { text: 'Mangtani, R. (2026). <em>The Positive Loop: How AI Broke the Doom Scroll</em>.', url: '/writing/the-positive-loop' },
    { text: 'Mangtani, R. (2025). <em>The Gameable Society</em>.', url: '/writing/the-gameable-society' },
    { text: 'Mangtani, R. (2024). <em>Why People Choose Honest Gambling Over Extractive Games</em>.', url: '/writing/honest-gambling' },
    { text: 'Frey, C.B. & Osborne, M.A. (2017). "The Future of Employment." Oxford Martin Programme.' },
    { text: 'Susskind, D. (2020). <em>A World Without Work: Technology, Automation, and How We Should Respond</em>.' },
    { text: 'Brynjolfsson, E. & McAfee, A. (2014). <em>The Second Machine Age</em>.' },
  ],

  relatedWork: [
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'The Gameable Society', href: '/writing/the-gameable-society' },
    { title: 'Preference for Legible Risk', href: '/writing/honest-gambling' },
  ],

  footerVersion: 'Version 2.0 • February 2026 • Rohit Mangtani',
};
