import type { ResearchData } from '@/types/research';

export const theHumanYieldData: ResearchData = {
  slug: 'the-human-yield',
  date: '2026',
  title: 'The Human Yield',
  subtitle: 'On idle economics, proxy labor, and the phase where presence becomes the product',

  onRamp: {
    description: 'As AI takes over more labor, a growing number of people will find that their most valuable economic activity is just being present. Not working. Being there. Supervising, participating, existing inside systems that need human inputs but not human effort. Not dystopia, not laziness. Just the next phase of a system that already turned attention into a commodity.',
    whatItDoes: 'Connects idle games, passive investing, and spectator economics to show why passive participation is becoming rational.',
    whatItDoesNot: 'Argue that people are worthless, predict specific timelines, or endorse UBI as policy.',
  },

  claim: 'AI does not make humans useless. It makes human labor useless for a growing share of the population. What remains valuable is not effort. It is presence. And an entire economy is about to be built on the difference.',

  sections: [
    {
      id: 'the-bifurcation',
      title: 'The Bifurcation',
      content: `
        <p>The Positive Loop described a new kind of person: someone who discovered that AI tools could turn idle time into productive output, and got addicted to the cycle. Idea to product, phone to deployed software, curiosity to published research. The dopamine loop that builds instead of drains.</p>

        <p>That piece documented the upside. This one documents the other side of the same coin.</p>

        <p>Because the Positive Loop does not scale to everyone. It cannot. It requires a specific orientation: the instinct to build, the taste to direct, the drive to iterate. These are not universal traits. They are not even common traits. Most people, given a powerful tool, will not use it to build products. They will use it the same way they use every other tool, passively, intermittently, or not at all.</p>

        <p>This is not a judgment. It is an observation about distributions. The same distribution that applies to every other capability applies here. A small percentage will ride the productive loop. A larger percentage will use AI casually. And a significant percentage will be displaced by it without ever having used it themselves.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The bifurcation is not between "smart people" and "dumb people." It is between people whose skills compound with AI and people whose skills are replaced by it. A brilliant accountant and a mediocre accountant face the same displacement. A mediocre builder with good taste and an excellent coder without it face different futures entirely.</p>
        </div>

        <p>The Positive Loop riders will capture disproportionate value. They already are. But the essay we need to write is not about them. It is about what happens to everyone else, the much larger class of people for whom AI does not create a productive dopamine cycle. It creates a void where their economic function used to be.</p>
      `,
    },
    {
      id: 'the-capybara-economy',
      title: 'The Capybara Economy',
      content: `
        <p>There is a genre of game that should not exist. You open the app. You are a capybara. You sit there. That is the game.</p>

        <p>You do not fight anything. You do not solve puzzles. You do not optimize stats. You sit in a hot spring, or a field, or a room, and the game rewards you for being present. Sometimes other capybaras join. Sometimes things happen around you. Your contribution is existing.</p>

        <p>These games have millions of players. They are not a joke. They are not ironic. People genuinely find them satisfying. And the reason is not psychological. It is economic.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Idle games are cultural prototypes for an economic phase that has not fully arrived yet. They normalize the idea that presence, not action, can be the mechanism of participation. You do not need to perform. You need to be there. The system generates value from your being there, and gives you a share of it.</p>
        </div>

        <p>This maps directly to what is emerging in the real economy. Consider:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Content farming:</strong> You do not create meaningful content. You exist inside a system that produces volume. Your presence fills a quota. The system monetizes the aggregate.</li>
          <li><strong class="text-[var(--fg)]">AI supervision:</strong> You do not do the work. AI does the work. You sit there and approve it, flag errors, provide the human stamp. Your judgment is minimal. Your presence is required.</li>
          <li><strong class="text-[var(--fg)]">Engagement farming:</strong> You join a community, an online collective, a platform. You click, react, show up. The system needs human bodies in seats to generate metrics. Your activity does not need to be meaningful. It needs to be measurable.</li>
          <li><strong class="text-[var(--fg)]">Participation mining:</strong> You join early, stay active, qualify for rewards or incentives. The economic value is not in what you do, it is in the fact that you showed up and stayed.</li>
        </ul>

        <p>In every case, the pattern is the same: <em>a system that needs human inputs but not human effort.</em> The human is not performing labor. The human is providing something else: presence, attention, a warm body in the system, and getting compensated for it.</p>

        <p>This is the capybara economy. You sit in the hot spring. The game continues around you. You are rewarded for being there.</p>
      `,
    },
    {
      id: 'proxy-labor',
      title: 'Proxy Labor',
      content: `
        <p>The traditional labor model is: you have a skill, you apply it, you get paid for the output. The skill is the moat. The effort is the input. The output is the product.</p>

        <p>AI collapses this model for a growing range of skills. The skill is no longer the moat, because AI has the skill. The effort is no longer the input, because AI does the effort. What remains?</p>

        <p>What remains is the human as a proxy.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">A proxy is an entity that stands in for another. In finance, a proxy vote is cast on behalf of a shareholder who is not present. In technology, a proxy server acts as an intermediary. In both cases, the proxy's value is not in its own capability. It is in its position.</p>
          <p class="leading-relaxed mb-4">Human proxy labor works the same way. The human does not contribute skill. The human contributes position: a legal identity, a physical presence, an accountability structure that AI cannot (yet) provide.</p>
        </div>

        <p>This is already happening in specific domains:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Regulatory proxies:</strong> AI writes the report. A human signs it. The human's value is their signature, not their analysis.</li>
          <li><strong class="text-[var(--fg)]">Supervision proxies:</strong> AI drives the car, monitors the patient, manages the portfolio. A human watches the dashboard. The human's value is being liable, not being skilled.</li>
          <li><strong class="text-[var(--fg)]">Social proxies:</strong> AI generates the content. A human posts it. The human's value is their identity, their network, their face, not their creative ability.</li>
        </ul>

        <p>In each case, the human is not performing the core function. The human is performing the function of being human. That is the job. The labor is existence within a system that still requires, legally, socially, and in practice, a human presence.</p>

        <p>This is not a transition. This is the arrival of a new category of work that has no historical precedent: <em>work where the qualification is being a person.</em></p>
      `,
    },
    {
      id: 'passive-investing-parallel',
      title: 'The Passive Investing Parallel',
      content: `
        <p>Passive investing works like this: you put capital into an index fund. You do not pick stocks. You do not analyze earnings. You do not time the market. You contribute capital, and the system generates returns on it. Your role is to be invested. Not to be smart about it.</p>

        <p>Passive investing outperforms active investing for most people. The data is unambiguous. The reason is structural: the costs of active management (fees, errors, emotional trading) exceed the benefits for the median participant. Doing less produces more.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The same structural logic is about to apply to labor.</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">For a growing share of the population, the costs of active labor (the effort, the training, the competition with AI systems) will exceed the benefits. The median worker's active contribution will be worth less than the system could generate without them. At that point, the economically rational behavior is not to work harder. It is to participate passively.</p>
        </div>

        <p>Just as passive investors contribute capital and let the system allocate it, passive participants will contribute presence and let the system use it. Show up. Supervise. Approve. React. Exist inside the economic machinery. Do not try to outperform it. The machinery is better than you at the task. Your value is in being there, not in being good.</p>

        <p>This sounds degrading until you realize that passive investing is not degrading. Nobody mocks the index fund investor. They mock the day trader who thought they could beat the market. The passive approach is, objectively, the smarter play for most people.</p>

        <p>Passive participation in an AI-driven economy may follow the same trajectory. First mocked, then tolerated, then recognized as the rational default for the majority of participants. Not because people are lazy. Because the system generates more value from their passive presence than from their active interference.</p>
      `,
    },
    {
      id: 'the-resistance-layer',
      title: 'The Resistance Layer',
      content: `
        <p>Not everyone will accept this quietly.</p>

        <p>When traditional labor loses its economic function for a large enough cohort, that cohort does not simply disappear. It reorganizes. It creates its own structures, its own value systems, its own assets.</p>

        <p>This is already visible in NEET culture. NEET (Not in Employment, Education, or Training) was a statistical category. It is becoming an identity. A growing number of people are not just unemployed. They are opting out, loudly, and building community around the opt-out.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The instinct is to dismiss this as laziness or nihilism. It is neither. It is the same pattern documented in <a href="/writing/honest-gambling" class="underline hover:opacity-60">Honest Gambling</a>: when the legitimate system feels extractive or closed, people create alternative systems with rules they consider fairer. Even if the alternative is worse by conventional metrics, it is preferred because it is legible and voluntary.</p>
        </div>

        <p>The resistance layer takes multiple forms:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Community assets:</strong> Groups creating their own economic instruments: community instruments, mutual aid structures, shared resources, all operating outside the traditional system. The value is not financial returns. The value is belonging to something that does not require you to be economically productive in the traditional sense.</li>
          <li><strong class="text-[var(--fg)]">Decentralized identity:</strong> Platforms where participation itself generates status, not achievement. Being present, contributing to the culture, maintaining activity. These become the credentials. The system values consistency over capability.</li>
          <li><strong class="text-[var(--fg)]">Content as labor:</strong> Creating content about the opt-out itself. Documenting the experience. Building audience around the rejection of traditional work. The irony is obvious: the act of refusing to participate in the economy becomes, itself, an economic activity. The rejection is the content. The content is the product.</li>
        </ul>

        <p>This is not new in kind. It is new in scale. Every previous wave of economic displacement produced counter-cultures, alternative economies, and resistance movements. What is different now is that AI accelerates the displacement faster than alternative structures can mature. The gap between "the old economy does not need you" and "a new economy exists for you" is where the instability lives.</p>
      `,
    },
    {
      id: 'the-floor',
      title: 'The Floor',
      content: `
        <p>Every system with enough displaced participants eventually builds a floor. The floor is UBI, or something that functions like UBI, regardless of what it is called.</p>

        <p>The argument for UBI has always been moral. It is about to become practical. When a sufficient percentage of the population cannot generate economic value through labor, not because they are incapable, but because AI systems generate more value without their labor, the system must either subsidize their existence or accept the consequences of not doing so.</p>

        <p>The consequences of not doing so are not theoretical. They are the same consequences that follow every period of mass economic displacement: instability, radicalization, and the breakdown of social contracts that assumed labor as the basis for participation.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">The floor does not need to be generous. It does not need to be comfortable. It needs to be sufficient for the system to remain stable. The purpose of UBI in this context is not human flourishing. It is system maintenance. The displaced population is not being served. It is being managed.</p>
          <p class="leading-relaxed mb-4">This is a descriptive claim, not an endorsement.</p>
        </div>

        <p>Above the floor, a new stratification emerges. The Positive Loop riders, people who compound with AI, operate in one economy. The proxy laborers, people who contribute presence to AI-driven systems, operate in another. The floor dwellers, people whose participation the economy does not require at all, occupy a third.</p>

        <p>The spectrum is not intelligence. It is not education. It is not effort. It is orientation: the degree to which a person's natural inclinations align with what AI cannot do. Taste, direction, judgment, social trust, physical presence, accountability. These are the residual human inputs. Everything else is being absorbed.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The spectator class we described in <a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a> was a preview. People who watched optimization content instead of optimizing. People fluent in the language of improvement but prevented from acting on it.</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">That class is about to expand dramatically. Not because people choose spectatorship. Because the system is choosing it for them. When AI can do your job better than you can, watching becomes the rational allocation of your time. The spectator class was voluntary. The proxy class is not.</p>
        </div>

        <p>The game does not stop. It restructures. The humans who were players become supervisors. The humans who were supervisors become spectators. The humans who were spectators become background, present, counted, compensated at the floor, but not required.</p>

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
    { text: 'Malkiel, B. (2019). <em>A Random Walk Down Wall Street</em>. 12th Edition.' },
  ],

  relatedWork: [
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'The Gameable Society', href: '/writing/the-gameable-society' },
    { title: 'Preference for Legible Risk', href: '/writing/honest-gambling' },
  ],

  footerVersion: 'Version 1.0 • February 2026 • Rohit Mangtani',
};
