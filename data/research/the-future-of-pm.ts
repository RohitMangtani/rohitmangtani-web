import type { ResearchData } from '@/types/research';

export const theFutureOfPmData: ResearchData = {
  slug: 'the-future-of-pm',
  date: '2026',
  title: 'The Future of PM',
  subtitle: 'Why the future of project management is a terminal, a map, and a swarm of agents that ping you when they are lost',

  onRamp: {
    description: 'The way projects get built is changing faster than anyone in project management wants to admit. One person with a terminal can now run four, ten, twenty AI agents in parallel, each handling a different part of a build, sourcing every reference, writing every component, testing every edge case. The output is not 2x. It is 100x. But the bottleneck is not what people think. It is not intelligence. It is not speed. It is context. This article includes a working proof of concept.',
    whatItDoes: 'Traces the shift from managing people to managing agent swarms, identifies context as the critical bottleneck, and outlines the three-layer system that replaces traditional project management. Includes a live proof of concept for the agent management layer.',
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

        <p>You have been at a four-way stop. No traffic lights. Four cars, four drivers, all trying to figure out who goes next. You read body language through windshields. Was that a wave? Are they creeping forward or just rolling? You make eye contact, nod, go. The whole thing works because everyone is watching everyone else and adjusting in real time. That is coordination between humans. It is slow, it is ambient, and it depends on everyone paying attention to everyone else simultaneously.</p>

        <p>Now picture the same intersection, but the other three cars are AI agents. They do not make eye contact. They do not wave. They do not read your body language. They just drive, fast, until they hit something they cannot resolve. Then they stop. The coordination model flips. You are not reading subtle cues from peers. You are watching for red lights in a system that is either moving or stuck. Green means go. Red means lost. That is the entire signal vocabulary. And it changes everything about what managing a project feels like.</p>

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

        <p>One version of this already exists. You point a tool at a repository and it generates an interactive map of how the project works. Not what the code says. What the creator's idea looks like. Decision trees with real thresholds. Connections between layers. The logic flow from the perspective of someone who built it, not someone reading the source. You can see at a glance how the pieces fit together and what each part is actually doing.</p>

        <p>Scale that concept to a live build. The map is not a static diagram. It is a real-time view of what your agents are building, updated as they work, structured so you can see progress and connections without reading a single line of code. The map answers one question: where is my project right now?</p>

        <h3 class="text-base font-semibold mt-8 mb-3">The Manager</h3>

        <p>The black box handles execution. The map shows progress. The manager handles the thing that actually breaks: agents that get lost.</p>

        <p>Think about Find My iPhone. You open one interface. You see all your devices. Each one has a location and a status. Green means it is there, connected, working. If something is lost, you see it. You tap in, take action, move on.</p>

        <p>Now replace devices with agents. Each agent instance is a device. The manager watches all of them. Green means the agent is driving. It has context, it knows what it is doing, it is producing output that aligns with intent. Red means the agent stopped. It hit a context wall, encountered ambiguity, needs a decision from you. It is asking for directions.</p>

        <p>One simple interface. A list of every agent, what it is working on, and whether it is running or stuck. When one goes red, it pings you. You provide the context it lost, the decision it cannot make, the direction it needs. You send it back. It resumes driving. There is a <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener">working proof of concept</a> of this running right now, built on the architecture described here.</p>

        <p>This is the transformation that matters. Without it, you are staring at terminals. Scrolling text output, trying to remember what each agent is doing, parsing logs to figure out if something drifted. The cognitive overhead is enormous. You have to hold the state of every agent in your head, reconstruct context from raw output, and somehow notice when something subtle goes wrong in a wall of text. The visual layer collapses all of that into color. Green means driving. Red means lost. You see the entire swarm in one glance and know exactly where your attention is needed. No parsing. No remembering. No terminal archaeology.</p>

        <p>This is also the interface for both coordination roles that <a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a> describes. The Technical Bridge, the person managing system fidelity and agent drift, sees health at a glance instead of digging through output logs. The Human Extraction Layer, the person who detects when AI output needs human judgment, sees exactly where signal is needed. Red is not just "stuck." Red is "this needs a human." The visual layer turns both roles from reactive firefighting into calm routing.</p>

        <p>You are not micromanaging. You are routing. The difference is everything.</p>
      `,
    },
    {
      id: 'hive',
      title: 'Hive',
      content: `
        <p>The manager layer is the one that does not exist yet in any serious form. And it is the one that matters most. Because this is where context either holds or collapses.</p>

        <figure class="my-8" style="position:relative">
          <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" target="_blank" rel="noopener" style="display:block;position:relative;cursor:pointer">
            <img src="/images/research/hive-dashboard.svg" alt="Hive interface showing agent list with green and red status indicators alongside a map view" class="w-full rounded-lg border border-[var(--border)]" style="transition:all 0.2s ease" onmouseover="this.style.borderColor='var(--fg-muted)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)';this.nextElementSibling.style.opacity='1'" onmouseout="this.style.borderColor='';this.style.boxShadow='';this.nextElementSibling.style.opacity='0'" />
            <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.2s ease;background:rgba(0,0,0,0.03);border-radius:0.5rem;pointer-events:none">
              <span style="background:var(--bg);border:1px solid var(--border);box-shadow:0 4px 12px rgba(0,0,0,0.1);border-radius:9999px;padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;color:var(--fg)">Open live proof of concept ↗</span>
            </span>
          </a>
          <figcaption style="margin-top:0.5rem;font-size:0.75rem;color:var(--fg-muted)">This is a live system. <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" target="_blank" rel="noopener" class="underline hover:opacity-60">Open the proof of concept</a> to see it running.</figcaption>
        </figure>

        <p>Picture the interface. Left side is a list. Every agent, named by its role: Research, Writer, Design, Builder, QA. Each one has a status. A green dot means it is running fine. You can see what it is doing in one line. "Sourcing references, 12 found." "Drafting section 3 of 6." "Compiling routes, 89% done."</p>

        <p>Right side is a map. Not a geographic map. A project map. Each agent is a dot, positioned by its relationship to the other agents and to the overall project flow. You can see at a glance how the work is distributed. Which agents are active. Which ones are connected. Where the dependencies are.</p>

        <p>And then one agent goes red. The Design agent. It stopped. It needs a decision. The list says "Needs direction: diagram style?" The map shows it pulsing, disconnected from the flow. The system pings you.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think of it like a road. The agents are drivers. The map shows the road. The manager makes sure everyone is driving. If someone stops, they turn red. They ask for directions. You give it. They go. That is the entire interaction model. You are not sitting in every car. You are watching the road from above. And you only intervene when someone is lost.</p>
        </div>

        <p>The cost of this model is your attention. Not your labor. You are not doing the research, the writing, the building, the testing. You are maintaining the thread. Providing context when it degrades. Making decisions when agents cannot. The cognitive load peaks when multiple agents go red at the same time, and that is a real constraint. But it is a fundamentally different constraint than doing all the work yourself.</p>

        <p>Gartner projects 40% of enterprise applications will embed task-specific AI agents by the end of 2026. Most of those organizations cannot control the swarm. That gap, between deploying agents and actually managing them, is the market. The interface described here is what fills it.</p>

        <p>Watch what happens when the system manages itself. Four agents running in parallel, all visible on the dashboard. Two of them are debugging the dashboard's own status detection. Agent 3 is investigating why text-only responses cause a green-to-red flicker. Agent 4 is investigating why hooks from one agent get misrouted to another when both work in the same project. Neither agent knows what the other is finding. They are working independently, in separate terminals, on different aspects of the same system.</p>

        <p>The human is watching the dashboard. Agent 3 is green. Agent 4 is green. Both are working. Then the human notices something: Agent 3 never turns red, even when it finishes. That is the anomaly. Not a log entry. Not an error message. A visual signal that something is wrong, caught because the interface makes status legible at a glance.</p>

        <p>Agent 4 finds the root cause. When two agents share the same project directory, the hook routing falls back to matching by file path instead of session ID. It picks the first match. Every hook Agent 4 fires gets routed to Agent 3. That is why Agent 3 never turns red. It keeps receiving Agent 4's activity as its own. Agent 3, meanwhile, finds a separate bug: when an agent generates a long text response without calling any tools, the session file scanner sees the response as the last entry and marks the agent idle, even though it is mid-stream.</p>

        <p>Two agents. Two independent investigations. Two bugs found that interact with each other. The human did not read a single line of code. They watched the dashboard, noticed the visual anomaly, directed each agent to investigate, then asked a third agent to read both sets of findings, synthesize them into a single diagnosis, and produce a fix. The third agent compared the session routing logic against the status detection logic, identified where they collide, and generated a unified patch that addresses both bugs without breaking the existing flow.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The system was debugging itself. The agents managed by the dashboard were fixing the dashboard that manages them. The human's role was exactly what this article describes: watching the road from above, noticing when something is off, and routing agents to the problem. No terminal archaeology. No log parsing. Green and red, and the judgment to know what the colors mean.</p>
        </div>

        <p>This is the workflow. Not in theory. Not as a projection. This happened, on this system, with the <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener">proof of concept</a> running live. The coordination roles that <a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a> describes, the Technical Bridge managing system fidelity and the Extraction Layer detecting when something needs human judgment, both operated through the same visual interface. One person, four agents, two bugs found, one synthesized fix. The human wrote zero code and held the entire operation together.</p>

        <p>But the specific example is not the point. The pattern underneath it is. Every feature of this system was built the same way, and the technique compounds on itself.</p>

        <p>Take the auto-pilot. The feature that ensures agents never stay stuck waiting for a prompt. To build it, an agent first had to understand the full system: how Claude Code presents questions, what the options look like, which answers are safe to select automatically, what happens when the wrong one is chosen. The agent studied the system. Then it built the auto-responder. Then it ran inside the system it just built, managed by the dashboard, answering its own prompts, while the human watched the dashboard to see if the answers were correct. The agent was testing itself by operating inside the thing it created. When it chose wrong, the human noticed the visual anomaly, directed a correction, and the agent updated the selection logic. Each cycle made the auto-pilot smarter. Each cycle also made the agent better at understanding the system, which made the next cycle's investigation deeper.</p>

        <p>The status detection worked the same way. An agent read its own session files to understand how green and red get determined. Then it ran a task and watched its own status on the dashboard. It should have been green. It was red. It investigated why, found the scan logic was too shallow, fixed it, and ran again. Green. Then it generated a long text response with no tool calls. Red again. Another edge case. Another fix. Each loop tightened the detection. And because the agent understood the full system from the first step, each fix was surgical instead of a guess.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The pattern is always the same. The agent understands the full context of the system before it touches anything. Then it operates inside the system. Then the human watches the visual layer for anomalies the agent cannot see about itself. Then the agent fixes what the human identified. Then it operates again. Each loop compounds. The system gets better at managing agents. The agents get better at understanding the system. The human holds the thread between cycles that no individual agent can maintain across its context window.</p>
        </div>

        <p>This is not a testing methodology. It is the operating model. The system improves itself through use, the same way a product improves through customer feedback, except the customers and the builders are the same agents, and the feedback loop runs in minutes instead of quarters. The human is not writing code. They are not debugging. They are watching for the thing that is off, the visual signal that does not match what should be happening, and routing agents back to it. That is the compounding loop. That is what makes the system get better every time it runs.</p>

        <p>And this scales. With four agents, two can investigate while two keep shipping. With eight, three can cross-audit each other's findings while five produce output. The ratio stays the same: a small fraction of your swarm improves the infrastructure while the rest uses it. Every fix to the management layer makes every agent in the system more autonomous. A bug fix that prevents false idle detection does not just help the agent that found it. It helps every agent the dashboard will ever manage, including agents that do not exist yet. The infrastructure improvement is a one-time cost. The benefit multiplies across every agent and every future session.</p>

        <p>This is the part that does not exist in traditional team scaling. When you add a tenth person to a nine-person team, you add communication overhead. More standups. More coordination. More context to share. The marginal return on each additional person decreases. When you add a tenth agent to a nine-agent swarm, you add zero communication overhead because agents do not talk to each other. The human holds the thread, and the dashboard shows ten dots instead of nine. The marginal cost of the tenth agent is one more dot to glance at. The marginal benefit is a full additional context window producing output, and one more perspective available when something in the system needs cross-investigation.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The compounding works in two directions simultaneously. Horizontally, more agents means more parallel output and more independent perspectives for cross-investigation. Vertically, every improvement any agent makes to the management layer benefits all agents forever. Traditional teams compound linearly at best. Agent swarms compound multiplicatively because the infrastructure and the workforce improve each other in a loop the human holds together.</p>
        </div>
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

        <p>Now scale that to what running this system actually looks like day to day. Four terminals open. Four agents running simultaneously. One is researching market data. One is building a feature. One is deploying a site. One is debugging the infrastructure that manages the other three. They do not share memory. They do not know the others exist. Each one is locked inside its own context window, working on its own task, producing its own output.</p>

        <p>The human is the only entity that sees all four at once. The dashboard shows four quadrants, each with a green or red dot. That is the entire cognitive load. Not four terminal windows of scrolling text. Not four separate chat logs to track. Four dots. Green means driving. Yellow means waiting. Red means idle. One glance and you know the state of everything.</p>

        <p>A single agent blocks constantly. "Allow this tool?" "Which approach should we use?" "Should I proceed?" Every permission prompt, every question, every confirmation, the agent stops and waits. If you step away for five minutes, five minutes of work stops. Multiply that by four agents and the system is unusable. You spend all your time answering prompts instead of directing work.</p>

        <p>The auto-pilot changes the operating model entirely. Permission prompts auto-approve before the agent even pauses. Questions auto-answer: recommended option first, affirmative second, first option third. There is a fifteen-second grace period for the human to override, then the system answers and the agent keeps moving. Four agents running continuously, resolving their own routine decisions, only surfacing the ones that genuinely require human judgment. Those show up as yellow on the dashboard. Everything else stays green.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The shift is attention efficiency. A single agent demands 100% of your attention 100% of the time. Four agents with auto-pilot demand 5% of your attention 95% of the time, and 100% of your attention 5% of the time, the moments where actual judgment is needed. The other 95% is green dots and agents running. You are freed to think about what to build next instead of babysitting what is building now.</p>
        </div>

        <p>Context isolation becomes a feature, not a limitation. When one agent runs out of context and compacts its memory, the other three still have their full thread. You do not lose everything. You lose one quarter of the operation, restart that agent fresh, and the others keep shipping. When two agents independently investigate different aspects of the same problem, as described above, they produce findings that no single agent could generate because each one explored a path the other never saw. The human bridges the gap by reading both sets of findings and directing a third agent to synthesize. The combined output is better than either agent working alone, because the human held context across isolated windows that no individual agent can cross.</p>

        <p>The agents also leave artifacts on the file system. Code changes, session transcripts, deployed sites. One agent cannot talk to another in real time, but it can read what another agent built, wrote, or investigated. The human directs which agent reads which artifact. That routing, deciding which agent should look at which other agent's work and when, is the coordination skill that replaces sprint planning and Jira triage. Same function. Different substrate.</p>

        <p>The multiplier is not four times the output of one agent. It compounds. While one agent debugs, another deploys, another researches, another writes. When two finish investigating, the human synthesizes across them and the fix addresses interactions neither agent saw independently. The fix goes back into the system. The system manages all four agents better. Better management means fewer yellow states, less human intervention, more autonomous throughput. Each cycle widens the gap between this workflow and someone running a single terminal answering every prompt by hand.</p>

        <p>This is not about replacing project managers. It is about what project management becomes when the execution layer is automated and the human layer is pure direction. The standup is dead. The sprint review is dead. The Jira board is dead. What replaces them is a terminal, a map, and a <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener">status board</a> that pings you when it needs you.</p>
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
    { title: 'Hive', href: '/projects/hive' },
  ],

  footerVersion: 'February 2026 . Rohit Mangtani',
};
