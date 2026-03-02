import type { ResearchData } from '@/types/research';

export const howHiveWasBuiltData: ResearchData = {
  slug: 'how-hive-was-built',
  date: '2026',
  title: 'How Hive Was Built',
  subtitle: 'From one terminal to a fleet, and the skills that made it possible',

  onRamp: {
    description:
      'This is the full arc of how a single person went from using AI as a coding assistant to running four simultaneous agent instances across a portfolio of projects, writing the thesis for why that workflow matters, and building the infrastructure that makes it work. It is a guide, a case study, and a reference point for the skills involved.',
    whatItDoes:
      'Traces the journey from first AI interaction to working multi-agent fleet, names the skills at each stage, and explains how the articles, the product, and the workflow compound into a single proof of concept.',
    whatItDoesNot:
      'Teach you how to code, explain how LLMs work, or argue that AI replaces developers.',
  },

  claim:
    'The skill is not building the AI. It is knowing what to build with it, seeing the system that should exist, and iterating between writing about it and making it real.',

  sections: [
    {
      id: 'one-terminal',
      title: 'One Terminal',
      content: `
<p>It starts the way it starts for everyone. One terminal. One Claude instance. You give it a task, it writes code, you review the output, you iterate. The first time it works, really works, you build something in an afternoon that would have taken a week. You feel the shift. Not "AI can help me code." Something larger. The entire relationship between thinking and building just changed.</p>

<p>You keep going. You use it to build a website. Then another. Then tools. A book recommendation engine. A reminder system. A YouTube channel with fully automated Hindu scripture narration. Each project compresses further. What took a week takes a day. What took a day takes an hour. You are not learning to code faster. You are learning to direct. The skill shifts from implementation to something harder to name: taste, direction, knowing what should exist and describing it precisely enough that the system builds it.</p>

<p>At some point you open a second terminal. Not because you planned to. Because the first one is working on something and you have another idea. You give the second instance a different project. Now you have two agents running simultaneously. You check back on the first one. It finished. The second one is stuck on a permission prompt. You did not notice for twenty minutes. That is the moment the problem becomes visible.</p>
      `.trim(),
    },
    {
      id: 'the-thesis-first',
      title: 'The Thesis First',
      content: `
<p>Most people would have started building a dashboard. That is the obvious next step when you have a visibility problem. Instead, the first thing that got built was not software. It was an argument.</p>

<p><a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> was written before Hive existed as a product. It was the thesis: one person with a terminal and a swarm of agents can produce the output of a team. The bottleneck is not intelligence or speed. It is context. Whoever solves context management for agent swarms owns the next era of building. The article described the three layers needed: a black box for execution, a map for structure, a manager for status. It described the dashboard. It described the green and red dots. It described the workflow. None of it existed yet.</p>

<p>This is the pattern that matters: writing about the system before building it. Not as documentation. As design. The article forced clarity about what the product needed to do, who it was for, and why it mattered. By the time the first line of code was written, the architecture was already settled because the argument had already been made. The thesis was the spec.</p>

<p>Then <a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a> extended it. Two coordination roles emerge when AI deploys into real workflows: the Technical Bridge that manages system fidelity, and the Human Extraction Layer that preserves human signal. <a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a> named what humans are still for: taste, direction, judgment, presence, and context-holding. Each article sharpened the vision for what the product needed to be. Not smarter AI. Infrastructure for directing AI labor.</p>
      `.trim(),
    },
    {
      id: 'building-with-the-tools',
      title: 'Building With the Tools',
      content: `
<p>Four Claude Code instances open. Each one working on a different part of the system. One building the daemon that discovers running processes and tracks their status. One building the dashboard that renders the green and red dots. One debugging the hook system that routes telemetry from each agent to the daemon. One writing the auto-pilot that eliminates permission prompt stalls.</p>

<p>The system was built by the thing it manages. That is not a metaphor. Four AI agents running in terminals, iterating on a daemon and dashboard designed to manage AI agents running in terminals. The human directed the architecture, resolved conflicts between agents editing the same files, bridged context when one agent's work affected another's, and made judgment calls about which approach to take when multiple valid options existed. The agents wrote the code. The human held the vision.</p>

<p>This is where <a href="/writing/close-your-eyes" class="underline hover:opacity-60">the visualization loop</a> became real. You describe what you want. The agent builds it. You see the result. Your eyes find the problem faster than any log file could. You say what to change. The agent changes it. You see the result again. Think, talk, see, understand, refine, ship. That loop, running across four agents on four different parts of the system, is how a single person built production infrastructure in weeks that would have taken a team months.</p>

<p>The dashboard itself was iterated this way. Describe the layout. See the render. The status dots are too small. The chat popover clips on mobile. The stuck state should show the actual prompt text, not a generic message. Each observation came from seeing, not from reading code. Each fix came from describing the fix in natural language, not from writing CSS. The visualization layer was not a theory being tested. It was the development environment.</p>
      `.trim(),
    },
    {
      id: 'the-compound',
      title: 'The Compound',
      content: `
<p>Here is what compounds. You write an article about how agent management should work. That article becomes the design spec for the product. You build the product using the workflow the article describes. The product enables the workflow to run better. The better workflow produces the next article faster. The next article sharpens the product vision further. Each cycle deposits something real: a published argument, a working system, an operational insight, a compounding body of work.</p>

<p>This is not a side project and a blog. It is a single system where the writing and the building feed each other. The Future of PM described the manager layer. Hive implemented the manager layer. Running Hive daily revealed that the human's real job is context-holding across agents. The Five Inputs named that job. Naming that job clarified what Hive's coordination primitives should optimize for. The compound goes: thesis, product, operation, insight, refined thesis, refined product.</p>

<p>The articles on <a href="/writing" class="underline hover:opacity-60">rohitmangtani.com/writing</a> are not commentary on someone else's technology. They are design documents for systems that subsequently got built and tested. The <a href="/lab/hive" class="underline hover:opacity-60">Hive product page</a> is not a landing page for software. It is proof that the thesis works. The dashboard running live is not a demo. It is daily infrastructure. Each piece references the others because they are the same project viewed from different angles.</p>
      `.trim(),
    },
    {
      id: 'the-skills',
      title: 'The Skills',
      content: `
<p>Building this required a specific combination of skills. Not the skills most people associate with shipping software. A different set, tuned to the way building works now.</p>

<p><strong>System thinking.</strong> Seeing the whole architecture before any piece exists. The daemon, the dashboard, the hooks, the auto-pilot, the coordination layer, the learning system. Understanding how they connect, where the failure points are, which pieces to build first. This is not coding. It is the ability to hold a complex system in your head and know which part to focus on next.</p>

<p><strong>Product direction.</strong> Deciding what to build and what not to build. Hive does not do task decomposition because Claude already handles that internally. Hive does not have a yellow "thinking" state because it creates confusion. Every feature that exists is there because the workflow demanded it. Every feature that does not exist was cut because it added complexity without solving a real problem. Knowing what to cut requires using the product daily and feeling where the friction is.</p>

<p><strong>Writing as design.</strong> The articles are not afterthoughts. They are the design process. Writing "the bottleneck is context" forced the product to solve context management. Writing "the human is the bridge" forced the coordination layer to support human bridging, not fully automated agent-to-agent orchestration. Writing clearly about a system requires understanding it deeply enough to explain it. That understanding becomes the spec.</p>

<p><strong>Taste.</strong> Looking at the dashboard and knowing the status dots need to be larger before articulating why. Feeling that the chat popover should float bottom-right, not slide from the side. Recognizing that the auto-pilot should have a three-second grace window, not five, because five seconds feels sluggish. These are not technical decisions. They are judgment calls that shape whether the product feels right to use. AI cannot make them because AI cannot feel the experience of using the product it built.</p>

<p><strong>Context-holding.</strong> Four agents working across shared codebases. One changes an API schema. Another is consuming that API. You notice because you are watching both. You bridge the context. This skill does not require coding ability. It requires the ability to hold multiple threads simultaneously and notice when they intersect. It scales with the number of agents you run: the more contexts you hold, the more valuable you become as the bridge between them.</p>

<p><strong>Iterative direction.</strong> Describing what you want, seeing the result, identifying the gap, describing the correction. Doing this across four agents simultaneously, each at a different stage of their task, each requiring a different type of input. This is the core operational skill. Not writing code. Not managing people. Directing AI systems through continuous cycles of intent, observation, and refinement.</p>
      `.trim(),
    },
    {
      id: 'the-proof',
      title: 'The Proof',
      content: `
<p>This page exists because the workflow works. Not as theory. As daily operation. Four Claude Code instances run simultaneously across this machine right now. The daemon discovers them in three seconds. The dashboard shows green and red. Auto-pilot keeps them running without prompt stalls. The coordination layer prevents file collisions. The learning system compounds insights across sessions. One person produces the output of a small team, not through longer hours, but through better infrastructure for directing AI labor.</p>

<p>The proof is not any single piece. It is the full stack: articles that describe the vision, software that implements it, a workflow that validates it daily, and a body of work that compounds. The Future of PM described what should exist. Hive made it exist. The daily operation of Hive validated the thesis. The validation produced new insights. The insights became new articles. The articles sharpened the product. That loop is running right now.</p>

<p>The skills involved are not traditional software engineering skills. They are the skills that matter when execution is free and direction is the bottleneck. System thinking, product direction, writing as design, taste, context-holding, iterative direction. These are the residual human inputs that <a href="/writing/the-five-inputs" class="underline hover:opacity-60">survive automation</a>, applied to a real system, producing real output, documented and published.</p>

<p>This is how building works now. And this is what it looks like when one person runs the full loop.</p>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'Hive', href: '/lab/hive' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Human Bridge', href: '/writing/the-human-bridge' },
    { title: 'The Five Inputs', href: '/writing/the-five-inputs' },
    { title: 'Close Your Eyes', href: '/writing/close-your-eyes' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
