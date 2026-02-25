import { ResearchData } from '@/types/research';

export const factoryBriefingData: ResearchData = {
  slug: 'factory-briefing',
  date: 'January 2026',
  title: 'The Factory: AI Company Infrastructure',
  subtitle: 'Competitive landscape, differentiation, and go-to-market strategy',

  onRamp: {
    description: 'A strategic briefing on packaging a self-hosted AI company framework for public release. Covers what exists in the market, what makes this different, and a step-by-step path to viral distribution.',
    whatItDoes: 'An internal strategy document for productizing the Factory system.',
    whatItDoesNot: 'A finished product announcement or public marketing material.',
  },

  keyNumbers: [
    { value: '$52B', label: 'AI agent market by 2030', color: 'green' },
    { value: '40%', label: 'Enterprise apps with agents by 2026 (Gartner)', color: 'blue' },
    { value: '95%', label: 'Cost reduction vs traditional team', color: 'yellow' },
    { value: '8', label: 'Factory departments operational', color: 'zinc' },
  ],

  claim: 'The Factory is not just another agent framework. It is a complete operating system for a one-person company, with organizational structure, memory persistence, infinite work loops, and self-improvement built in.',

  sections: [
    {
      id: 'competitive-landscape',
      title: 'Competitive Landscape',
      content: `<p>The AI agent space has exploded in 2025-2026. Here is what exists:</p>`,
      subsections: [
        {
          title: 'Agent Orchestration Frameworks',
          content: `<p><strong>CrewAI, AutoGen, LangGraph, LlamaIndex</strong> — Multi-agent orchestration tools. You define agents, give them roles, and they collaborate on tasks.</p>
<p><strong>What they do:</strong> Coordinate multiple AI agents to complete workflows.</p>
<p><strong>What they don't do:</strong> Provide organizational structure, persistent memory across sessions, or self-improvement loops. You still need to build the "company" yourself.</p>`,
        },
        {
          title: 'Personal AI Assistants',
          content: `<p><strong>Clawdbot/Moltbot</strong> — The viral hit. Bridges Claude to messaging apps (Telegram, WhatsApp, Discord). "Claude with hands."</p>
<p><strong>What it does:</strong> Execute commands from chat. Control smart home, manage calendar, run terminal commands.</p>
<p><strong>What it doesn't do:</strong> Think in terms of company structure. No departments, no workers, no COO/CEO hierarchy. It's a powerful assistant, not an organization.</p>`,
        },
        {
          title: 'Self-Hosted AI Stacks',
          content: `<p><strong>n8n AI Starter Kit, LocalAI, AnythingLLM</strong> — Run AI locally without cloud APIs.</p>
<p><strong>What they do:</strong> Privacy-first AI execution on your hardware.</p>
<p><strong>What they don't do:</strong> Provide the organizational layer. You get tools, not a system.</p>`,
        },
        {
          title: 'Claude-Flow',
          content: `<p><strong>Claude-Flow v3</strong> — Multi-agent orchestration specifically for Claude. Claims "self-learning neural capabilities."</p>
<p><strong>What it does:</strong> Distributed swarm intelligence, RAG integration, neural routing.</p>
<p><strong>What it doesn't do:</strong> Company metaphor. No intake protocol, no work oversight, no state persistence across context resets.</p>`,
        },
      ],
    },
    {
      id: 'what-makes-factory-different',
      title: 'What Makes The Factory Different',
      content: `<p>Every framework above solves the <em>agent coordination</em> problem. None solve the <em>company operation</em> problem.</p>`,
      subsections: [
        {
          title: '1. Organizational Metaphor',
          content: `<p>The Factory isn't a framework — it's a <strong>company structure</strong>.</p>
<ul>
<li><strong>CEO</strong> (You) — Vision, decisions, approval</li>
<li><strong>COO</strong> (Echo) — Orchestration, intake, oversight</li>
<li><strong>Departments</strong> — Planning, Engineering, Content, QA, Memory, Context, Forge</li>
</ul>
<p>This isn't arbitrary. It maps to how real companies work: thoughts become tasks, tasks get routed to specialists, work gets integrated, products ship.</p>`,
        },
        {
          title: '2. Infinite Work Loops',
          content: `<p>Context limits kill agent sessions. The Factory solves this with:</p>
<ul>
<li><strong>CURRENT-STATE.md</strong> — Rolling progress file, updated after every step</li>
<li><strong>HANDOFF.md</strong> — Detailed state capture before intentional reset</li>
<li><strong>BOOT.md</strong> — Auto-resume protocol on every new session</li>
</ul>
<p>Result: Work continues indefinitely. No lost progress. No forgotten checklists.</p>`,
        },
        {
          title: '3. Self-Improvement Loop',
          content: `<p>The Forge agent watches for failure patterns and improves other agents.</p>
<pre><code>Task fails → Log failure → Forge analyzes → Updates agent definition → Retry</code></pre>
<p>The system hardens itself over time. Agent definitions are living documents that evolve based on real performance.</p>`,
        },
        {
          title: '4. Thought-to-Product Pipeline',
          content: `<p>Most frameworks require structured input. The Factory handles vague thoughts:</p>
<pre><code>"I want to build something that tracks market sentiment"
     ↓
INTAKE-PROTOCOL clarifies (What? Why? Done when? Priority?)
     ↓
Task spec generated
     ↓
Workers spawned
     ↓
Product ships</code></pre>
<p>CEO drops ideas. COO makes them real.</p>`,
        },
        {
          title: '5. Memory Persistence',
          content: `<p>Three-tier memory system:</p>
<ul>
<li><strong>Working</strong> — Current session context</li>
<li><strong>Daily</strong> — memory/YYYY-MM-DD.md logs</li>
<li><strong>Long-term</strong> — MEMORY.md curated insights</li>
</ul>
<p>The company remembers decisions, patterns, preferences. New sessions have context.</p>`,
        },
      ],
    },
    {
      id: 'is-this-new',
      title: 'Is This New?',
      content: `<p>Honest assessment:</p>
<p><strong>Not new:</strong> Multi-agent orchestration, AI assistants, self-hosted AI, Claude wrappers.</p>
<p><strong>New:</strong> The complete integration. A deployable company structure with organizational hierarchy, persistent state, infinite loops, and self-improvement. Packaged for one command deployment.</p>
<p>The <em>components</em> exist elsewhere. The <em>synthesis</em> is original.</p>
<p><strong>The pitch:</strong> "Deploy a self-improving AI company on your laptop in one command."</p>`,
    },
    {
      id: 'pitfalls-to-avoid',
      title: 'Pitfalls to Avoid',
      content: `<p>Based on competitive analysis, here are the traps:</p>`,
      subsections: [
        {
          title: '1. API Dependency Risk',
          content: `<p>Clawdbot got a C&D from Anthropic for spoofing Claude Code subscriptions. Don't rely on consumer API workarounds.</p>
<p><strong>Solution:</strong> Build for official APIs. Support multiple providers (Claude, OpenAI, local models). Don't lock to one backend.</p>`,
        },
        {
          title: '2. Over-Engineering',
          content: `<p>Claude-Flow has "neural routing" and "swarm intelligence." Sounds impressive, adds complexity.</p>
<p><strong>Solution:</strong> Keep it simple. Markdown files, clear protocols, obvious structure. The power is in the organization, not the orchestration tricks.</p>`,
        },
        {
          title: '3. Enterprise Focus',
          content: `<p>Most frameworks target enterprises. That's a sales-heavy, slow market.</p>
<p><strong>Solution:</strong> Target solo founders and small teams first. They can deploy in an afternoon. Build virality before enterprise.</p>`,
        },
        {
          title: '4. No Story',
          content: `<p>Technical frameworks don't go viral. Stories do.</p>
<p><strong>Solution:</strong> The story is "I built a company that runs while I sleep." Document the journey. Show real outputs. Make it relatable.</p>`,
        },
      ],
    },
    {
      id: 'go-to-market',
      title: 'Go-to-Market: Step by Step',
      content: `<p>A concrete path from current state to viral distribution:</p>`,
      subsections: [
        {
          title: 'Phase 1: Package (Week 1-2)',
          content: `<p><strong>Goal:</strong> Turn ~/factory/ into a deployable package.</p>
<ol>
<li><strong>Create factory-cli</strong> — npm package or standalone binary</li>
<li><strong>Init command</strong> — <code>npx create-factory</code> or <code>factory init</code></li>
<li><strong>Bootstrap script</strong> — Creates directory structure, copies templates, sets up BOOT.md</li>
<li><strong>Config wizard</strong> — API keys, user profile (USER.md), identity (SOUL.md)</li>
<li><strong>First run</strong> — Claude reads BOOT.md, introduces itself, ready for work</li>
</ol>
<p><strong>Deliverable:</strong> One command deploys a working factory.</p>`,
        },
        {
          title: 'Phase 2: Document (Week 2-3)',
          content: `<p><strong>Goal:</strong> Make it understandable and reproducible.</p>
<ol>
<li><strong>README.md</strong> — Clear installation, quick start, architecture diagram</li>
<li><strong>docs/</strong> — How each component works, customization guide</li>
<li><strong>Examples</strong> — Sample workflows (ship a feature, write an article, analyze data)</li>
<li><strong>Video</strong> — 5-minute demo showing thought → shipped product</li>
</ol>
<p><strong>Deliverable:</strong> Anyone can understand and use it.</p>`,
        },
        {
          title: 'Phase 3: Story (Week 3-4)',
          content: `<p><strong>Goal:</strong> Create the viral content.</p>
<ol>
<li><strong>Article</strong> — "How I Built a Company That Runs While I Sleep for $20/month"</li>
<li><strong>Thread</strong> — Twitter thread showing real outputs, real cost savings</li>
<li><strong>Proof</strong> — Screenshots, terminal recordings, shipped products</li>
<li><strong>Hook</strong> — The self-improvement angle: "It hardens itself"</li>
</ol>
<p><strong>Deliverable:</strong> Content ready for launch.</p>`,
        },
        {
          title: 'Phase 4: Launch (Week 4-5)',
          content: `<p><strong>Goal:</strong> Maximum visibility.</p>
<ol>
<li><strong>GitHub</strong> — Public repo with good README, MIT license</li>
<li><strong>Twitter</strong> — Thread + article, tag relevant accounts</li>
<li><strong>Hacker News</strong> — Show HN post (technical audience)</li>
<li><strong>Reddit</strong> — r/artificial, r/LocalLLaMA, r/SideProject</li>
<li><strong>Dev.to / Medium</strong> — Cross-post the article</li>
</ol>
<p><strong>Timing:</strong> Launch on Tuesday or Wednesday morning (highest engagement).</p>`,
        },
        {
          title: 'Phase 5: Iterate (Ongoing)',
          content: `<p><strong>Goal:</strong> Build community and improve.</p>
<ol>
<li><strong>Discord/Discussions</strong> — Community support channel</li>
<li><strong>Issues</strong> — Respond to bugs, feature requests</li>
<li><strong>Showcase</strong> — Highlight what users build with it</li>
<li><strong>Updates</strong> — Regular releases, changelog, roadmap</li>
</ol>
<p><strong>Metric:</strong> GitHub stars, forks, actual deployments.</p>`,
        },
      ],
    },
    {
      id: 'article-outline',
      title: 'Article Outline: The Viral Piece',
      content: `<p>Working title: <strong>"How I Built a Company That Runs While I Sleep for $20/month"</strong></p>`,
      subsections: [
        {
          title: 'Hook',
          content: `<p>"I have 8 employees. None of them are human. They work 24/7, never complain, and cost me less than a Netflix subscription."</p>`,
        },
        {
          title: 'The Problem',
          content: `<p>Solo founders are drowning. Too many tasks, not enough leverage. Traditional AI assistants help with individual tasks but don't think in terms of <em>systems</em>.</p>`,
        },
        {
          title: 'The Solution',
          content: `<p>What if you could deploy an entire company structure on your laptop? Not just an assistant — a COO, a planning department, an engineering team, QA, memory systems, all coordinated.</p>`,
        },
        {
          title: 'How It Works',
          content: `<p>Walk through the architecture. Show the flow: thought → intake → decomposition → workers → integration → ship. Include real examples.</p>`,
        },
        {
          title: 'The Self-Improvement Loop',
          content: `<p>The Forge agent. When something fails, the system improves itself. Show a real example of an agent definition that evolved.</p>`,
        },
        {
          title: 'Results',
          content: `<p>What I've shipped using this system. Real outputs, real timelines. Proof it works.</p>`,
        },
        {
          title: 'Try It Yourself',
          content: `<p>One command: <code>npx create-factory</code>. Link to repo. Call to action.</p>`,
        },
      ],
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment',
      content: `<p>Honest evaluation of what could go wrong:</p>`,
      subsections: [
        {
          title: 'Technical Risks',
          content: `<ul>
<li><strong>API cost spikes</strong> — Heavy use could get expensive. Mitigation: document cost expectations, support local models.</li>
<li><strong>Context limits</strong> — Already solved with HANDOFF/CURRENT-STATE system.</li>
<li><strong>Breaking changes</strong> — Claude API could change. Mitigation: abstract the model layer.</li>
</ul>`,
        },
        {
          title: 'Market Risks',
          content: `<ul>
<li><strong>Crowded space</strong> — Many agent frameworks. Mitigation: differentiate on the "company" metaphor, not technical features.</li>
<li><strong>Anthropic competition</strong> — Claude Agent SDK could add similar features. Mitigation: move fast, build community.</li>
<li><strong>Hype cycle</strong> — AI fatigue is real. Mitigation: focus on practical results, not buzzwords.</li>
</ul>`,
        },
        {
          title: 'Execution Risks',
          content: `<ul>
<li><strong>Scope creep</strong> — Adding features instead of shipping. Mitigation: launch MVP fast.</li>
<li><strong>No traction</strong> — Possible. Mitigation: the article is the main distribution, not the repo.</li>
</ul>`,
        },
      ],
    },
    {
      id: 'next-steps',
      title: 'Next Steps',
      content: `<p>Immediate actions to execute this plan:</p>
<ol>
<li><strong>Clean the repo</strong> — Remove personal data, add .gitignore for sensitive files</li>
<li><strong>Create factory-cli</strong> — npm init, bootstrap command, config wizard</li>
<li><strong>Write the article</strong> — Draft the viral piece, get feedback</li>
<li><strong>Record demo</strong> — 5-minute video showing the system in action</li>
<li><strong>Pick launch date</strong> — Tuesday or Wednesday, 2-3 weeks out</li>
</ol>
<p><strong>Decision needed:</strong> Package name. Options: <code>create-factory</code>, <code>mini-company</code>, <code>solo-corp</code>, <code>ai-company</code>.</p>`,
    },
  ],

  relatedWork: [
    { title: 'CrewAI', href: 'https://github.com/joaomdmoura/crewAI' },
    { title: 'Claude Agent SDK', href: 'https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk' },
    { title: 'Claude-Flow', href: 'https://github.com/ruvnet/claude-flow' },
    { title: 'Clawdbot', href: 'https://clawd.bot/' },
    { title: 'n8n AI Starter Kit', href: 'https://github.com/n8n-io/self-hosted-ai-starter-kit' },
  ],

  footerVersion: 'Internal briefing document. Not for public distribution.\n\nRMGTNI Lab • January 2026',
};
