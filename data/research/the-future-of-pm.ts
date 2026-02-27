import type { ResearchData } from '@/types/research';

export const theFutureOfPmData: ResearchData = {
  slug: 'the-future-of-pm',
  date: '2026',
  title: 'The Future of PM',
  subtitle: 'Why the future of project management is a terminal, a map, and a swarm of agents that ping you when they are lost',

  onRamp: {
    description: 'The way projects get built is changing faster than anyone in project management wants to admit. One person with a terminal can now run four, ten, twenty AI agents in parallel, each handling a different part of a build, sourcing every reference, writing every component, testing every edge case. The output is not 2x. It is 100x. But the bottleneck is not what people think. It is not intelligence. It is not speed. It is context.',
    whatItDoes: 'Traces the shift from managing people to managing agent swarms, identifies context as the critical bottleneck, and outlines the three-layer system that replaces traditional project management.',
    whatItDoesNot: 'Predict timelines, endorse specific tools, or argue that PMs are obsolete.',
  },

  claim: 'Project management is not going to be people managing people. It is going to be one person, a terminal, and a swarm of AI agents running in parallel. The bottleneck is not intelligence or speed. It is context. Whoever solves context management for agent swarms owns the next era of building.',

  sections: [
    {
      id: 'the-shift-already-happened',
      title: 'The Shift Already Happened',
      content: `
        <p>This is not a prediction. It is already the workflow.</p>

        <p>Right now, the way a project gets built by someone plugged into this looks nothing like what it looked like two years ago. You sit at a terminal. You describe what you want. Not the implementation. The intent. And agents spin up. Four at once, sometimes more. One is researching. One is writing. One is building components. One is sourcing references. They run in parallel, each with their own context window, their own task, their own thread of execution.</p>

        <p>The output is not incrementally better. It is a different category. Projects that would have taken weeks happen in an afternoon. Entire research pieces, sourced and structured and published, in a single session. Things that were not even worth attempting before, because the coordination cost alone would have killed them, now just get done.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The job is not doing the work. It is directing the work. You are not writing code. You are not designing interfaces. You are not manually sourcing data. You are describing what good looks like, and agents are producing it. The skill is taste and direction. If you know what you want and can articulate it, the system builds it.</p>
        </div>

        <p>This is the part most people in project management have not processed yet. They are still thinking about sprints and standups and Jira tickets. They are optimizing a workflow built for humans coordinating with humans. And that workflow is about to look the way fax machines look now. Not wrong. Just from a different era.</p>

        <p>The new PM does not manage people. They manage a swarm.</p>
      `,
    },
    {
      id: 'the-bottleneck-is-context',
      title: 'The Bottleneck Is Context',
      content: `
        <p>So the agents are fast. They are capable. They can research, write, build, test. They can do most of what a junior or mid-level contributor does, and they do it without breaks, without meetings, without context-switching fatigue.</p>

        <p>But there is a problem. And it is not what you would expect.</p>

        <p>The bottleneck is not intelligence. These models are smart enough. It is not speed. They already run faster than any team. The bottleneck is context. Each agent has a window. A finite amount of information it can hold at once. And when that window fills up, the agent starts forgetting. It compacts its memory. It loses the thread. It is still running, still producing output, but the output starts drifting from the original intent.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think about it like WiFi signal. The agent is connected to your intent. As the context window fills, the signal degrades. The agent is still technically online, still responding, but it is not connected to what you originally described anymore. It is working from a compressed version of the conversation. And compressed context loses nuance the same way compressed audio loses depth. It still plays, but something is off.</p>
        </div>

        <p>This is already documented in real swarm operations. When Anthropic ran 16 parallel agents to build a C compiler from scratch, the biggest challenge was not the code. It was keeping agents from colliding. They solved it with file locks, the digital equivalent of putting a sticky note on a task so nobody else grabs it. When one developer managed 20 agents for a week, his top insight was that long runtimes are a red flag. A long runtime means the agent hit its context limit, compacted its memory, and is slowly forgetting the original goal.</p>

        <p>The practical rules that emerge from this are simple but fundamental:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Short runtimes.</strong> Kill tasks before the context window fills. Restart fresh with a checkpoint.</li>
          <li><strong class="text-[var(--fg)]">Persistent checkpointing.</strong> Save progress to files, branches, tickets. Do not trust the agent's memory. Trust the artifact.</li>
          <li><strong class="text-[var(--fg)]">Ruthless restarts.</strong> If an agent drifts, kill it immediately. Do not watch a failing approach complete. The cost of waiting exceeds the cost of restarting.</li>
          <li><strong class="text-[var(--fg)]">Plan alignment over goal alignment.</strong> Do not tell an agent what to achieve. Tell it exactly how to get there. Bad plans are cheaper to fix than bad implementations.</li>
        </ul>

        <p>Every single one of these rules exists because of context. Not capability. Not speed. Context. The human role in this system is not doing the work. It is being the context. The continuous thread that agents cannot maintain on their own. You hold the intent. You notice the drift. You restart when the signal degrades. You are the one thing in the system that does not forget what the project is supposed to be.</p>
      `,
    },
    {
      id: 'the-three-layers',
      title: 'The Three Layers',
      content: `
        <p>If context is the bottleneck, the solution has three parts. Not as theory. As architecture. The three things a person managing an agent swarm actually needs.</p>

        <figure class="my-8">
          <img src="/images/research/three-layers.svg" alt="The Three Layers: Black Box terminal, Map visualization, and Manager status board" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <h3 class="text-base font-semibold mt-8 mb-3">The Black Box</h3>

        <p>The terminal. Where the work happens. Not an IDE, not a design tool, not a project management dashboard with 47 tabs. A terminal. You type what you want. Intent in, output out.</p>

        <p>This is the part that already exists. Claude Code, Cursor, the agentic IDEs. You describe the project. The system breaks it into tasks. Agents execute. The terminal is collapsing every tool that used to be separate, code editor, design tool, deployment pipeline, research assistant, into a single interface where you just describe what you need and the system produces it.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Black box, my design and thoughts, output. That is the model. You do not need to know how the system routes tasks internally. You do not need to see every line of code it writes. You need to describe what good looks like, and the black box turns that description into a shipped product. The skill is having ideas and knowing what good looks like. Everything else is execution.</p>
        </div>

        <h3 class="text-base font-semibold mt-8 mb-3">The Map</h3>

        <p>You have a swarm running. Four, ten, twenty agents. They are all executing in parallel. The black box handles the execution. But you need to know what is happening. Not at the code level. At the intent level. What is my project doing right now? What parts are connected? What decisions is the system making?</p>

        <p>This is what a vibe coding map does. It is a visual representation of your project, structured from the creator's perspective, not the code's perspective. You see layers, connections, decision points. Not file trees and function signatures.</p>

        <p><a href="https://trycrawler.com" class="underline hover:opacity-60" target="_blank" rel="noopener">Crawler</a> is one version of this. You point it at a repository and it generates an interactive map of how the project works. Not what the code says. What the creator's idea looks like. Decision trees with real thresholds. Connections between layers. The logic flow from the perspective of someone who built it, not someone reading the source. You can see at a glance how the pieces fit together and what each part is actually doing.</p>

        <p>Scale that concept to a live build. The map is not a static diagram. It is a real-time view of what your agents are building, updated as they work, structured so you can see progress and connections without reading a single line of code. The map answers one question: where is my project right now?</p>

        <h3 class="text-base font-semibold mt-8 mb-3">The Manager</h3>

        <p>The black box handles execution. The map shows progress. The manager handles the thing that actually breaks: agents that get lost.</p>

        <p>Think about Find My iPhone. You open one interface. You see all your devices. Each one has a location and a status. Green means it is there, connected, working. If something is lost, you see it. You tap in, take action, move on.</p>

        <p>Now replace devices with agents. Each agent instance is a device. The manager watches all of them. Green means the agent is driving. It has context, it knows what it is doing, it is producing output that aligns with intent. Red means the agent stopped. It hit a context wall, encountered ambiguity, needs a decision from you. It is asking for directions.</p>

        <p>One simple interface. A list of every agent, what it is working on, and whether it is running or stuck. When one goes red, it pings you. You provide the context it lost, the decision it cannot make, the direction it needs. You send it back. It resumes driving.</p>

        <p>You are not micromanaging. You are routing. The difference is everything.</p>
      `,
    },
    {
      id: 'find-my-agents',
      title: 'Find My Agents',
      content: `
        <p>The manager layer is the one that does not exist yet in any serious form. And it is the one that matters most. Because this is where context either holds or collapses.</p>

        <figure class="my-8">
          <img src="/images/research/find-my-agents.svg" alt="Find My Agents interface showing agent list with green and red status indicators alongside a map view" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>Picture the interface. Left side is a list. Every agent, named by its role: Research, Writer, Design, Builder, QA. Each one has a status. A green dot means it is running fine. You can see what it is doing in one line. "Sourcing references, 12 found." "Drafting section 3 of 6." "Compiling routes, 89% done."</p>

        <p>Right side is a map. Not a geographic map. A project map. Each agent is a dot, positioned by its relationship to the other agents and to the overall project flow. You can see at a glance how the work is distributed. Which agents are active. Which ones are connected. Where the dependencies are.</p>

        <p>And then one agent goes red. The Design agent. It stopped. It needs a decision. The list says "Needs direction: diagram style?" The map shows it pulsing, disconnected from the flow. The system pings you.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think of it like a road. The agents are drivers. The map shows the road. The manager makes sure everyone is driving. If someone stops, they turn red. They ask for directions. You give it. They go. That is the entire interaction model. You are not sitting in every car. You are watching the road from above. And you only intervene when someone is lost.</p>
        </div>

        <p>The cost of this model is your attention. Not your labor. You are not doing the research, the writing, the building, the testing. You are maintaining the thread. Providing context when it degrades. Making decisions when agents cannot. The cognitive load peaks when multiple agents go red at the same time, and that is a real constraint. But it is a fundamentally different constraint than doing all the work yourself.</p>

        <p>Gartner projects 40% of enterprise applications will embed task-specific AI agents by the end of 2026. Most of those organizations cannot control the swarm. That gap, between deploying agents and actually managing them, is the market. The interface described here is what fills it.</p>
      `,
    },
    {
      id: 'the-full-workflow',
      title: 'The Full Workflow',
      content: `
        <p>Put the three layers together and you get the full picture of what project management becomes.</p>

        <figure class="my-8">
          <img src="/images/research/pm-workflow.svg" alt="Full PM workflow: idea to black box to agent swarm to map and manager to shipped product" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>It starts with an idea. Not a spec. Not a detailed requirements document. An idea. A description of what you want to exist. You put it into the black box. The terminal takes your intent and spawns agents. Each one grabs a piece of the project. Research starts sourcing. Writing starts drafting. Design starts building visuals. Build starts compiling infrastructure. They fan out in parallel.</p>

        <p>The map shows you what they are doing. You can see the project taking shape. Layers connecting. Progress moving. You are not checking in on each agent individually. You are watching the whole system from above.</p>

        <p>The manager tracks status. Green across the board means everything is running. You do not need to do anything. Then one agent goes red. It hit a wall. Maybe it ran out of context and needs a fresh start with a checkpoint. Maybe it encountered a decision only you can make, a style choice, a priority call, something that requires taste rather than computation. The system pings you. You tap in, provide the context, and the agent resumes.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The feedback loop is the critical piece. When an agent drifts or stalls, the context injection from you is what brings it back. You are the continuous thread. The project memory that persists across every agent's context window. Every restart, every direction, every decision you make becomes part of the project's living context. The system compounds on your input over time.</p>
        </div>

        <p>The output is a shipped product. Not a plan. Not a proposal. Not a deck. A working thing, built, tested, deployed. By one person sitting at a terminal, directing a swarm that does in an afternoon what used to take a team of twelve a quarter.</p>

        <p>This is not about replacing project managers. It is about what project management becomes when the execution layer is automated and the human layer is pure direction. The standup is dead. The sprint review is dead. The Jira board is dead. What replaces them is a terminal, a map, and a status board that pings you when it needs you.</p>
      `,
    },
    {
      id: 'the-role-that-remains',
      title: 'The Role That Remains',
      content: `
        <p>So what does a PM become?</p>

        <p>Not a taskmaster. Not a Jira jockey. Not the person who schedules the meeting to prepare for the meeting. A context provider. The person who holds the thread. The one who knows what the project is supposed to feel like, not just what it is supposed to do.</p>

        <p><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> identified the residual human inputs that survive AI displacement: taste, direction, judgment, social trust, accountability. This is the same list, applied to building. The PM of this era is not managing tasks. They are maintaining intent across a swarm of agents that are better at execution than any human team but cannot hold context the way a person can.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">The skill is not technical. It is not knowing how to code or how to design or how to write. It is knowing what good looks like. Having taste. Being able to look at what agents produce and say "this is right" or "this is wrong" without being able to explain the full technical reason why. The same way a creative director does not need to use Photoshop. They need to know when something looks off.</p>
          <p class="leading-relaxed">The effort matters, but only when pointed at this. Someone who puts maximum effort into doing tasks agents handle better will hit a wall. Someone who puts the same effort into direction, into building the context layer, into developing the taste that makes agent output actually good, compounds past it.</p>
        </div>

        <p>This is already happening. The people shipping the most right now are not the best coders. They are the best directors. People who can describe what they want clearly, recognize quality in what they get back, and course-correct fast. If you have ever watched someone build an entire product in a day using agent swarms, the thing you notice is not technical skill. It is clarity of intent. They know what they want. The system builds it.</p>

        <p>The game does not stop. It restructures. The PM who used to manage ten people now manages ten agents. The team lead who used to coordinate sprints now coordinates a swarm. The product manager who used to write specs now describes intent into a terminal and watches it become real.</p>

        <p class="text-lg leading-relaxed text-[var(--fg)] font-medium mt-8">The agents are driving. You are watching the road. When one gets lost, you point it home. That is project management now.</p>
      `,
    },
  ],

  references: [
    { text: 'Carlini, N. (2026). "Building a C compiler with a team of parallel Claudes." Anthropic Engineering.', url: 'https://www.anthropic.com/engineering/building-c-compiler' },
    { text: 'Wills, Z. (2026). "I Managed a Swarm of 20 AI Agents for a Week. Here Are the 8 Rules I Learned."', url: 'https://zachwills.net/i-managed-a-swarm-of-20-ai-agents-for-a-week-here-are-the-8-rules-i-learned/' },
    { text: 'Gartner. (2026). "40% of Enterprise Apps Will Run AI Agents by 2026."', url: 'https://ucstrategies.com/news/40-of-enterprise-apps-will-run-ai-agents-by-2026-but-most-companies-cant-control-the-swarm/' },
    { text: 'Mangtani, R. (2026). <em>The Human Yield: What happens when showing up is the whole job</em>.', url: '/writing/the-human-yield' },
    { text: 'Mangtani, R. (2026). <em>The Positive Loop: How AI broke the doom scroll</em>.', url: '/writing/the-positive-loop' },
    { text: 'OpenAI. (2025). "Swarm: Educational framework for multi-agent orchestration."', url: 'https://github.com/openai/swarm' },
  ],

  relatedWork: [
    { title: 'The Human Yield', href: '/writing/the-human-yield' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'Crawler', href: 'https://trycrawler.com' },
  ],

  footerVersion: 'February 2026 . Rohit Mangtani',
};
