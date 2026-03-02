import type { ResearchData } from '@/types/research';

export const hiveData: ResearchData = {
  slug: 'hive',
  date: '2026',
  title: 'Hive',
  subtitle: 'An operating system for directing AI labor',
  liveUrl: 'https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0',

  onRamp: {
    description:
      'Hive is a daemon, dashboard, and coordination layer for running multiple Claude Code agents simultaneously. It discovers running instances automatically, tracks their status in real time, and prevents collisions when agents work across shared codebases.',
    whatItDoes:
      'Explains what Hive is, how it works, and where it fits in the emerging agent infrastructure stack.',
    whatItDoesNot:
      'This is not a thesis on AI or multi-agent behavior. For the argument, read The Future of PM.',
  },

  claim:
    'AI labs are building smarter agents. Nobody is building the management layer for running fleets of them.',

  sections: [
    {
      id: 'what-it-is',
      title: 'What It Is',
      content: `
<p>The premise is simple: run as many AI agents as possible at once and do not lose track of them. Four today. Ten when the hardware allows it. The agents get smarter every quarter. The more capable they become, the more of them you want running simultaneously across your projects. The bottleneck is never the AI. It is keeping track of what all of them are doing.</p>

<p>Four terminal windows open on a single machine. Each one running a Claude Code instance. One is refactoring an authentication layer. Another is writing content for a marketing site. A third is debugging a deployment pipeline. The fourth is investigating a production bug. Each agent works independently, produces real output, and can run for an hour without human input. You cannot watch all of them. You do not know which one finished, which one is stuck on a permission prompt, or which two are about to edit the same file.</p>

<p>Hive is the layer between you and those agents. A local daemon that discovers every running Claude Code instance on your machine, a <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">dashboard</a> that shows their status in real time, and a coordination API that lets them share context, claim files, and compound what they learn. It does not make agents smarter. It lets you run more of them without things falling apart.</p>

<p>The entire system was built using the agents it manages. Four Claude Code instances iterating on the daemon, the dashboard, and each other's output, while a human directed the architecture and resolved conflicts. A real product derived from real pain points, solved by iterating back and forth between the tools and the problems they were built to fix.</p>
      `.trim(),
    },
    {
      id: 'the-gap',
      title: 'The Gap',
      content: `
<p>Open Claude Code right now. It works well. You give it a task, it reads your codebase, runs commands, writes code, iterates. Within a single terminal, the experience is strong and getting stronger every quarter. Now open a second instance. And a third. And a fourth.</p>

<p>There is no management layer. No way to see which agent is working and which one finished. No collision prevention when two agents edit the same config file. No mechanism for one agent to ask another about the API schema it just designed. You are left alt-tabbing between terminals, manually copying context from one window to another, hoping nothing breaks while you are looking at a different screen.</p>

<p>Every major AI lab is racing to build smarter agents. Better reasoning, longer context windows, more autonomy. Anthropic, OpenAI, Google, all of them. The models improve every quarter. But none of them are shipping the infrastructure for running fleets of these agents across real projects with real coordination needs. They build the worker. Nobody builds the foreman's tools.</p>

<p>This is the same gap that existed before Kubernetes. Docker made containers easy to run. Running twenty of them across a distributed system with health checks, restart policies, and resource isolation required infrastructure Docker never shipped. Containers got smarter every year. Kubernetes got more necessary, not less. The same dynamic is playing out with AI agents right now.</p>
      `.trim(),
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      content: `
<p>Hive runs as a local daemon on your machine, managed by launchd. It exposes an Express API for telemetry and coordination, a WebSocket server for the live dashboard, and an ngrok tunnel that makes the dashboard accessible from any device. The system has five layers.</p>
      `.trim(),
      subsections: [
        {
          title: 'Auto-Discovery',
          content: `
<p>Launch a Claude Code instance in any terminal. Within three seconds, Hive finds it. No registration, no configuration, no setup. The daemon scans running processes, resolves each one's working directory and session file, and registers it on the dashboard. Close the terminal, it disappears. Open a new one, it appears. The system tracks what exists, not what you told it to track.</p>
          `.trim(),
        },
        {
          title: 'Status Detection',
          content: `
<p>Each agent on the dashboard shows green or red. Green means actively processing. Red means done. Getting this right required a three-layer detection pipeline: real-time hooks from Claude Code's tool lifecycle, backward pattern analysis of session log files, and idle timeout fallbacks. The layers cross-validate each other. A single detection method produces false positives. Three layers, calibrated against edge cases across hundreds of hours of live operation, produce a reliable signal.</p>
          `.trim(),
        },
        {
          title: 'Auto-Pilot',
          content: `
<p>Claude Code pauses for permission prompts. "Allow this bash command?" "Approve this file edit?" In a single terminal, you click yes and move on. With four agents, these prompts stack up. One agent pauses, you do not notice for ten minutes, and an hour of potential output is lost to a dialog box.</p>

<p>Auto-pilot eliminates the pause. Routine prompts are auto-approved within a three-second grace window. The dashboard shows the prompt briefly, giving you a chance to intervene before it auto-resolves. If you do nothing, the agent continues. You only get pulled in when the system detects something that requires actual judgment. The result is continuous production: green means working, red means done, nothing sits idle waiting for a click.</p>
          `.trim(),
        },
        {
          title: 'Coordination',
          content: `
<p>Four agents working across shared codebases will eventually collide. Two agents editing the same file. One agent designing an API that another agent needs to consume. A third agent debugging code that a fourth agent is actively refactoring.</p>

<p>Hive handles this with five coordination primitives. Inter-agent messaging lets any agent send a prompt to any other agent. Advisory file locks let an agent claim a file before editing and receive a conflict signal if someone else holds it. A shared scratchpad stores ephemeral working context that auto-expires. An artifact tracker records which agent modified which files. And a conflict detection API checks whether another agent recently touched the file you are about to edit.</p>

<p>On top of this sits a global task queue. Push a task, and the daemon auto-dispatches it to the next idle agent. Set a priority, add a dependency on another task, or target a specific project. When an agent finishes and goes idle, the queue fills it with the next available task. The fleet stays productive without manual dispatch.</p>
          `.trim(),
        },
        {
          title: 'Compound Learning',
          content: `
<p>An agent spends twenty minutes debugging a path resolution bug in a video processing pipeline. It finds the fix. The session ends. Tomorrow, a different agent hits the same problem in the same codebase and spends another twenty minutes arriving at the same solution.</p>

<p>Hive's learning system prevents this. When an agent solves something non-obvious, it writes the lesson to a persistent file in the project. Every future agent in that project reads this file before starting work. The lessons compound across sessions and across agents. A four-agent fleet that runs for a week builds a body of operational knowledge that no single session could produce.</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'four-contexts',
      title: 'Four Contexts, Not Four Workers',
      content: `
<p>Watch someone use a single Claude Code instance on a hard problem. It spawns internal subagents to parallelize: one reading files, one searching the codebase, one running tests. All of them sharing one context window, one session, one project. When the task finishes, every subagent's context disappears. This is good. Claude already handles internal delegation well and will only get better at it.</p>

<p>Now watch someone run four instances across four projects. One is an hour deep into an authentication refactor, with full context on every file it has touched. Another has been debugging a deployment pipeline for thirty minutes, with a mental model of the infrastructure built step by step. A third is writing content, tuned to the site's voice after reading the style guide and ten existing articles. A fourth is iterating on a video processing pipeline, aware of every edge case from previous runs.</p>

<p>These are not four workers splitting one task. They are four independent contexts, each deeply embedded in a different problem. A subagent spawned fresh starts from zero. An agent that has been working in a codebase for an hour starts from everything it already knows. That distinction is the entire point.</p>

<p>The human moves between them. You check the dashboard, see that Q2 is stuck, read its question, and realize the answer is in Q1's project. You tell Q1: "What is the API schema you designed for the auth endpoint?" Q1 already knows, because it spent the last hour building it. It responds from deep context, not from a cold read of the codebase. You relay that to Q2. Or Q2 messages Q1 directly through Hive's coordination layer, and Q1 answers from the same deep context. Either way, the knowledge transfer happens between two agents that each have genuine understanding of their own domain. Not between a parent and a disposable subagent.</p>

<p>This is where the delegation question resolves. Yes, agents can dispatch tasks to each other through the task queue. But the valuable dispatch is not "split this task into four subtasks." A single Claude instance already does that internally. The valuable dispatch is: Q3 just changed the data schema in one project. Q1 is building the dashboard that consumes that data in a different project. Q1 needs to know. That is a cross-context bridge. No single instance holds both contexts. The human does, or the coordination layer does, but the agents individually do not.</p>

<p>Eventually, AI labs will ship native multi-instance awareness. Agents might share context across sessions automatically, know what other instances are working on, avoid collisions without advisory locks. That eliminates the manual bridging, not the workflow. You still want four deep contexts running across your portfolio. You still want visibility into all of them. You still want the learning to persist across sessions. What changes is how much the system handles automatically versus how much you handle by hand. The infrastructure stays. The overhead shrinks. The pattern holds.</p>
      `.trim(),
    },
    {
      id: 'orchestration',
      title: 'Orchestration Is the Edge',
      content: `
<p>Watch what happens during a real session. Four terminals are open. You type a single prompt into Q1: "Act as a full-scale auditor. Tell Q2 to act as a senior developer. Tell Q3 to act as an investor. They should each go deep into their roles, conduct their analysis, and feed their findings back to you. Your audit should read their responses, synthesize, and pass the complete package to Q4 for final formatting."</p>

<p>One sentence from a human. The system decomposes it. Q1 receives its role assignment and dispatches focused messages to Q2 and Q3 through the coordination API. Q2 drops into the codebase with developer eyes, auditing architecture, scalability bottlenecks, security gaps, and migration paths. Q3 reads the published articles and competitive landscape with investor eyes, evaluating market position, defensibility, and gaps. Both feed structured reports back to Q1. Q1 reads both, reconciles the technical reality with the market thesis, and dispatches a synthesis prompt to Q4. Q4 takes all of it and produces a formatted deliverable. Four agents, four roles, one coordinated output. The human typed one sentence.</p>

<p>No existing tool does this. Omnara, the closest competitor, is a monitoring dashboard. It shows you what agents are doing. It sends you a push notification when one needs attention. You respond manually. There is no dispatch, no role assignment, no inter-agent message routing, no auto-approval of routine prompts, no task queue, no file collision prevention. It watches agents. Hive directs them.</p>

<p>CrewAI lets you define agent roles and task flows in Python. You write code to set up roles, define delegation chains, specify output formats. That works for developers building automated pipelines. It does not work for someone who wants to type "audit this from four angles" and have it happen. The orchestration layer that takes natural language, decomposes it into structured directives, and routes each part to the right agent with the right role does not exist in any shipping product.</p>

<p>This is the real gap. Not visibility. Not status detection. The ability to take a complex directive, split it across multiple agents with different expertise, coordinate their outputs, and synthesize the results. A prompt compiler that turns one human sentence into a multi-agent workflow. The dashboard is how you see it happening. The orchestration engine is what makes it happen.</p>
      `.trim(),
    },
    {
      id: 'where-it-fits',
      title: 'Where It Fits',
      content: `
<p>There are three layers in the emerging agent stack. The bottom layer is the agents themselves: Claude, GPT, Gemini. Anthropic, OpenAI, and Google are pouring resources into making these smarter. Better reasoning, longer context windows, tool use, computer use. This layer is improving fast and will continue to improve. It is not something any individual needs to build.</p>

<p>The top layer is the thesis for why agent fleets matter at all. The argument that <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">one person directing multiple agents produces the output of a team</a>. That the PM role becomes an agent operator role. That <a href="/writing/the-human-bridge" class="underline hover:opacity-60">the human serves as the bridge</a> between independent AI workers who cannot see each other. This layer is written and published.</p>

<p>The middle layer is the infrastructure for actually running fleets of agents on real projects with real coordination needs. Status visibility, collision prevention, dispatch automation, compound learning. This is the layer that does not exist yet. The AI labs are focused on making individual agents better. The application layer is building single-agent products. The operational infrastructure for multi-agent work is an open gap.</p>

<p>Hive sits in that middle layer. Not smarter agents. Not a new AI product. The plumbing that lets one person run as many agents as possible and not lose track of what is happening.</p>

<p>The system gets smarter from two directions at once. From below, the models improve. Context windows grow from 128k to 200k to a million tokens. Each agent can hold more of the project in its head, work longer without losing track, handle more complex tasks autonomously. That is the AI labs' job. They pour billions into making the engine faster. Every quarter, the agents you are running become more capable without you changing anything.</p>

<p>From above, the personal context compounds. Every editing session adds corrections to the writing-voice file. Every debugging session writes a lesson back to the project's knowledge base. Every article benchmarks against the gold standard from two months ago. The agents start each session from everything that was learned before. A fleet that runs for six months knows things about your projects, your voice, your patterns that no fresh agent could replicate. The model gets smarter because the lab improved it. The system gets smarter because it remembers what happened last Tuesday.</p>

<p>These two forces multiply. A smarter model reading a thicker knowledge base produces better output than either force alone. And both forces make the management layer more necessary, not less. The smarter the agents get, the more of them you run. The more personal context accumulates, the more valuable each session becomes. Four agents today, ten next year, twenty when context windows and hardware allow it. The infrastructure that lets you manage the fleet is what makes scaling the fleet possible.</p>
      `.trim(),
    },
    {
      id: 'the-end-state',
      title: 'The End State',
      content: `
<p>Right now Hive runs four Claude Code instances on one machine. That is the proof of concept. The end state is bigger than Claude, bigger than Anthropic, bigger than any single model provider.</p>

<p>Think about Find My iPhone. You open one app and see every Apple device you own on a map. Green dot, it is online. Grey dot, it is offline. You do not open a separate app for your MacBook, a different one for your iPad, a third for your AirPods. One visual layer shows you everything. The value is not in the devices. It is in the map.</p>

<p>Now replace devices with AI agents. You are running a Claude instance refactoring your backend. An OpenAI Codex agent writing tests in a different repo. A Gemini agent researching competitors. Each one came from a different provider, uses a different API, runs in a different environment. Today, you alt-tab between three separate interfaces with three separate mental models. No shared view. No coordination. No way to glance at one screen and know what all of them are doing.</p>

<figure class="my-8">
  <img src="/images/research/hive-endstate.svg" alt="Hive end state: one visual layer connecting Anthropic, OpenAI, and Google agents through a universal coordination layer" class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>The end state is a universal visual layer. One dashboard. You hit "Add Instance" and pick a provider: Anthropic, OpenAI, Google, whoever ships next quarter. The agent appears as a tile. Green means working. Red means idle. You type into the tile and your message goes to that agent, regardless of which company built it. The coordination layer underneath handles status detection, file locks, conflict prevention, compound learning, all of it, across providers.</p>

<p>This is not a wrapper around APIs. It is the management interface that sits above all of them. The same way Kubernetes does not care whether your container runs Node or Python or Go. It cares whether the container is healthy, whether it needs to be restarted, whether it is consuming the resources you allocated. Hive does not care whether the agent is Claude or GPT or Gemini. It cares whether the agent is working, whether it is stuck, whether it is about to collide with another agent on the same file.</p>

<p>Every AI lab is racing to build the best individual agent. None of them are building the layer that lets you run agents from multiple providers simultaneously and manage them as a fleet. They have no incentive to. Anthropic wants you using Claude. OpenAI wants you using GPT. Google wants you using Gemini. The visual layer that treats all of them as interchangeable workers in a single fleet is not a product any of them will ship. It is a product that sits above all of them.</p>

<p>Think about it like driving. Before cars existed, nobody knew how to drive. You did not fix that by making the engine more powerful. You fixed it by building the car: a steering wheel, a speedometer, mirrors, a dashboard. The engine matters. But the interface between the human and the engine is what turned driving from a mechanic's skill into something anyone could do. Every AI lab is building a faster engine. Nobody is building the car.</p>

<p>There is a more recent version of this pattern. Robinhood did not invent options trading. Options existed for decades. Wall Street understood them. The instruments were complex, the interfaces were Bloomberg terminals, and the barrier to entry was expertise. Robinhood wrapped the same complexity in a visual layer anyone could use. Green means up, red means down, swipe to trade. The underlying financial instrument did not get simpler. The interface did. Duolingo did the same thing with language learning. The grammar did not change. Streaks and XP made it feel like a game instead of homework. The learning stayed the same. The surface transformed who could access it.</p>

<p>Agent orchestration is in that exact moment right now. The orchestration exists. File locks, task queues, status detection, conflict prevention, message routing. Engineers access it through Python frameworks and CLI tools. Everyone else opens four terminal windows and hopes nothing breaks. The dashboard is the Robinhood layer for AI orchestration. It does not simplify the orchestration. It wraps it in a visual surface that determines who can use it.</p>

<p>That is where this goes. The proof of concept is four Claude instances on a MacBook with a stoplight dashboard on your phone. The product is the first car for AI labor. Provider-agnostic. A steering wheel that turns natural language into fleet operations. A speedometer that shows status as color, not text. Mirrors that give you spatial memory across every running agent. The interface that lets any person, not just engineers, direct any combination of agents from any company through one screen. Green means driving. Red means stopped. Type into the tile. The agent moves.</p>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Human Bridge', href: '/writing/the-human-bridge' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
