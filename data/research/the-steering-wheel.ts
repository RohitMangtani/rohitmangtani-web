import type { ResearchData } from '@/types/research';

export const theSteeringWheelData: ResearchData = {
  slug: 'a-visual-workflow-for-ai-agents',
  date: '2026',
  title: 'A Visual Workflow for AI Agents',
  subtitle: 'I built a visual layer for managing AI agents. It changed how I build everything.',
  liveUrl: 'https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0',

  onRamp: {
    description:
      'I am not an engineer. I do not write code. I use AI to build things by describing what I want and watching it get made. The problem was that I could not actually watch it. Everything happened in terminal text I had to read and parse. So I built something that lets me see it instead. Colored dots, like a traffic light. Green means working. Red means done. Yellow means it needs me. That is the whole idea. It changed everything about what I can build.',
    whatItDoes:
      'Walks through why I built Hive, what the visual layer does, and why seeing what AI is doing matters more than reading what AI is doing. Includes a link to the live dashboard.',
    whatItDoesNot:
      'Claim to be a product launch or a technical architecture document. For system details, read the Hive project page.',
  },

  claim:
    'When you can see what AI is doing, you can feel whether it is right. When you can feel it, you can steer it. A visual layer between you and the machine is what turns AI from something confusing into something you can direct.',

  sections: [
    {
      id: 'how-this-started',
      title: 'How This Started',
      content: `
<p>Three months ago I had ideas I could see clearly in my head and no way to build them. No coding background. No engineering degree. Just a gap between what I imagined and what I could make real.</p>

<p>AI closed part of that gap. I could describe things in plain English and agents would build them. That part worked. The part that did not work was knowing what was happening. I was running four AI agents at the same time, each one working on a different piece of a system, and I had no idea at a glance what any of them were doing. I had to read terminal output. Scroll. Parse. Try to hold the state of four different threads in my head simultaneously. The mental energy I was spending just knowing where things stood was eating the energy I needed to direct where things should go.</p>

<p>So I built something to fix that. Not because I set out to build a product. Because I needed to see.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">The whole thing started from a frustration that I think anyone who has tried to use AI seriously has felt. You describe something. The AI builds it. And then you are staring at a wall of text trying to figure out if what it built matches what was in your head. Not because the AI is bad. Because text is the wrong medium for the kind of fast, intuitive evaluation that humans are wired for.</p>
</div>
      `.trim(),
    },
    {
      id: 'the-traffic-light',
      title: 'The Traffic Light',
      content: `
<p>Think about driving. You do not read engine diagnostics to know what is happening. You glance at the dashboard. Green light, you are good. Red light, stop. Yellow, pay attention.</p>

<p>That is what Hive does for AI agents. It compresses everything happening across your agents into a visual layer you can read at a glance. Four tiles on a screen. Each one is an agent. The color tells you the state. Green means the agent is working, running, producing output, on track. Red means it finished or stopped. Yellow means it hit something it cannot resolve alone and needs a decision from you. No logs. No terminal scrolling. Just color.</p>

<p>The reason this matters is not convenience. It is cognitive. Anne Treisman's research at Princeton showed that the human visual system detects color changes in under 200 milliseconds, automatically, before conscious attention even engages. You do not choose to notice a red dot among green dots. Your brain flags it before you decide to look. Reading a log line is different. Each word takes 200 to 300 milliseconds to process sequentially. A green dot communicates the same status information as a full text string, but it enters your brain before you could finish reading the first word of that string.</p>

<figure class="my-8">
  <img src="/images/research/steering-comparison.svg" alt="The visual development flow: idea, describe, see it forming, feel whether it is right, steer with a sentence, ship" class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>George Miller's foundational research established that working memory holds roughly four to seven items. Four terminal windows streaming text means four independent streams competing for those slots, each demanding serial reading and mental state-tracking. A four-tile dashboard with colored dots reduces the entire fleet's status to four visual chunks. The dashboard fits inside working memory. The terminals do not.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
<p class="text-sm text-[var(--fg-muted)]">The practical difference is enormous. With terminals, I was spending cognitive energy reconstructing state. With the dashboard, I spend that energy on the thing that actually matters: deciding what to build next, whether the direction is right, where the vision is drifting. The interface freed up the exact mental resources that make the work good.</p>
</div>
      `.trim(),
    },
    {
      id: 'seeing-is-steering',
      title: 'Seeing Is Steering',
      content: `
<p>Something unexpected happened once I could see the agents working. I stopped debugging and started feeling whether things were right.</p>

<p>That sounds vague but it is specific. I look at the four-tile grid and I notice when something is off. An agent has been yellow too long. The pattern of green-green-yellow-green looks different from green-green-green-green in a way that text status updates never communicated. The spatial memory of where each agent sits lets me track state over time without re-reading anything. I am not analyzing. I am recognizing. And the recognition is usually right.</p>

<p>Gary Klein spent decades studying how experts make decisions in high-stakes environments. His Recognition-Primed Decision model found that experienced decision-makers do not compare options. They recognize the situation as similar to something they have seen before, mentally simulate a response, and act. Firefighters making life-or-death calls in seconds. The quality of the decision depends on the quality of the cues the environment provides. Rich visual cues enable fast recognition. Dense text forces slow analysis.</p>

<p>That is exactly what the dashboard provides. Rich, simple, spatial cues that my brain can pattern-match against without effort. I have been looking at those four tiles long enough that the patterns are internalized. I do not think "Agent 3 has been in a waiting state for an unusually long duration." I feel that the grid looks wrong. And I respond to that feeling faster and more accurately than I ever responded to log output.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">There is a visualization loop that runs underneath all of this: think about what you want, describe it to AI, see what it built, feel whether it matches, refine, ship. Each cycle uses the part of your brain that is fastest: your eyes. Hive is that loop applied to directing AI agents. You see the fleet. You feel the state. You intervene where the feeling says to. And the intervention is a message in plain English, not a code change. The loop completes in seconds.</p>
</div>
      `.trim(),
    },
    {
      id: 'what-it-unlocked',
      title: 'What It Unlocked',
      content: `
<p>Hive was built by four AI agents running simultaneously, each one working on a different part of the system, while I directed the fleet through the dashboard that the fleet was building. The daemon that discovers agents, the interface that renders status dots, the hook system that routes telemetry, the auto-pilot that eliminates stalls. Four agents, building the thing that manages four agents.</p>

<p>I directed the architecture. I resolved conflicts. I bridged context between agents when one found something another needed to know. I made judgment calls about approach. The agents wrote every line of code. I held the vision.</p>

<p>The result is that one person, without an engineering degree, produced a multi-agent orchestration system with a real-time dashboard, a coordination daemon, an auto-pilot, a messaging layer, task queuing, file locks, and compound learning that persists across sessions. Not because AI wrote it for me. Because I could see what AI was building and steer it toward what I had in my head.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
<p class="text-sm text-[var(--fg-muted)]">The human contribution comes down to five things: taste, direction, judgment, presence, and context-holding. Not code. Not technical implementation. The ability to see a system forming, feel whether it matches the vision, and communicate corrections in plain language. The visual layer is what makes those five inputs possible. Without seeing, you cannot taste. Without tasting, you cannot steer.</p>
</div>

<p>Here is a concrete example. Two agents were debugging the dashboard's own status detection. Agent 3 was investigating why text-only responses caused a green-to-red flicker. Agent 4 was investigating why hooks from one agent got misrouted when both agents shared the same project directory. Neither knew what the other was finding. I was watching the dashboard. Agent 3 never turned red, even when it should have. That was the anomaly. Not a log entry. Not an error message. A visual signal that something was wrong, caught because the interface made it legible at a glance.</p>

<p>Agent 4 found the root cause: hook routing fell back to matching by file path instead of session ID, so every hook Agent 4 fired got routed to Agent 3. Agent 3, meanwhile, found a separate bug in the scan logic. Two independent investigations. Two bugs that interacted with each other. I directed a third agent to read both findings, synthesize them, and produce a unified fix. The third agent compared the routing logic against the detection logic, identified where they collided, and generated a patch addressing both bugs without breaking the existing flow.</p>

<p>I wrote zero code and held the entire operation together. The visual layer was the only reason I noticed the anomaly that started the investigation.</p>
      `.trim(),
    },
    {
      id: 'the-floor',
      title: 'The Floor',
      content: `
<p>There is an honest ceiling on all of this. The visual layer is not magic. It is a floor.</p>

<p>It does not make the AI smarter. The models still hallucinate. They still drift when context fills up. They still need restarting when a task runs too long. The dashboard does not fix those problems. It makes them visible. You see the drift happening instead of discovering it twenty minutes later in a log. You see the stall instead of wondering why nothing is moving. The floor is visibility. What you build on that floor is up to you.</p>

<p>The agents still hit context limits. The bottleneck is context, not intelligence. When an agent's context window fills, it compacts memory and starts losing the thread. The dashboard shows you this happening in real time because an agent that lost context starts behaving differently, longer yellow states, more frequent stops, output that drifts from intent. You learn to read those patterns the way a driver reads engine sounds. Something is off. You restart. Fresh context. The thread picks up.</p>

<p>The auto-pilot handles the routine interruptions. Permission prompts auto-approve. Simple questions auto-answer. There is a grace period for the human to override, then the system answers and the agent keeps moving. Four agents running continuously, resolving their own routine decisions, only surfacing the ones that genuinely require human judgment. Those show up as yellow. Everything else stays green.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">The shift is attention efficiency. A single agent demands 100% of your attention 100% of the time. Four agents with the visual layer and auto-pilot demand 5% of your attention 95% of the time, and 100% of your attention 5% of the time, the moments where actual judgment is needed. The other 95% is green dots and agents running. You are freed to think about what to build next instead of babysitting what is building now.</p>
</div>

<p>The models are getting smarter every few months. Context windows are growing. The agents that need restarting today will hold longer threads tomorrow. They will handle more decisions on their own, delegate subtasks to other agents, read findings from parallel sessions without you bridging the context manually. Some of the manual work described in this article will disappear. That is the trajectory.</p>

<p>That is also exactly why the visual layer matters more over time, not less. When four agents become eight, or when each agent starts spawning sub-agents that handle their own coordination, the total work happening in parallel multiplies. The terminal output you cannot parse today becomes orders of magnitude more than that. Smarter AI does not reduce the need for human steering. It increases the surface area of what there is to steer. Someone still has to look at what the fleet built, say this is right, point it at the reference it missed, make the call when the direction drifts. That job does not disappear when AI gets smarter. It gets bigger. The bottleneck was never the AI's capability. It was always how much a single human can hold in their head while directing the fleet. A visual layer that compresses all of that into something you can feel at a glance is not a temporary fix for today's limitations. It is the interface pattern that scales with everything AI becomes.</p>

<p>The floor also means this is not for everyone yet. You need to be running multiple AI agents to benefit. You need to be building things, not just asking questions. If your AI use is one conversation at a time, the dashboard is unnecessary. This is for the person who has crossed into running parallel work streams and is drowning in terminal output. For that person, the floor changes everything.</p>
      `.trim(),
    },
    {
      id: 'try-it',
      title: 'Try It',
      content: `
<p>Everyone has a vision for something they would build if they could see the process. A side project. A tool for their team. A better way to do their job. The gap between the idea and the first step is where most people stop. The gap was never intelligence. It was never access to AI. It was the interface between a human mind that thinks in images and a machine that communicates in text.</p>

<p>Hive closed that gap for me. I can see what my agents are building while they build it. I can feel whether it is right. I can steer it with a sentence. The loop runs in minutes. The output is real. The gap between what I imagine and what exists is smaller than it has ever been.</p>

<p>This is not reinventing AI. It is making a workflow you need to get good at easier to manage, for every human reason described above.</p>

<p>It has helped my workflow a lot. Sharing it in case anyone finds the same value in it.</p>

<p>The <a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener">live dashboard is here</a> if you want to see it running. More details on the system architecture at <a href="/projects/hive" class="underline hover:opacity-60">the Hive project page</a>.</p>
      `.trim(),
    },
  ],

  references: [
    { text: 'Treisman, A., & Gelade, G. (1980). "A feature-integration theory of attention." Cognitive Psychology, 12(1), 97-136.', url: 'https://en.wikipedia.org/wiki/Feature_integration_theory' },
    { text: 'Potter, M.C., et al. (2014). "Detecting meaning in RSVP at 13 ms per picture." MIT, Attention, Perception, & Psychophysics.', url: 'https://news.mit.edu/2014/in-the-blink-of-an-eye-0116' },
    { text: 'Miller, G.A. (1956). "The Magical Number Seven, Plus or Minus Two." Psychological Review, 63(2), 81-97.' },
    { text: 'Klein, G.A. (1998). Sources of Power: How People Make Decisions. MIT Press.', url: 'https://www.gary-klein.com/rpd' },
    { text: 'Sweller, J. (1988). "Cognitive Load During Problem Solving: Effects on Learning." Cognitive Science, 12(2), 257-285.' },
    { text: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.' },
    { text: 'Foxworth, L. (2017). "Visual images often intrude on verbal thinking." Harvard Gazette.', url: 'https://news.harvard.edu/gazette/story/2017/05/visual-images-often-intrude-on-verbal-thinking-study-says/' },
  ],

  relatedWork: [],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
