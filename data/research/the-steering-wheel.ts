import type { ResearchData } from '@/types/research';

export const theSteeringWheelData: ResearchData = {
  slug: 'the-steering-wheel',
  date: '2026',
  title: 'The Steering Wheel',
  subtitle: 'Why the gap between thinking and building was never intelligence. It was seeing.',
  liveUrl: 'https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0',

  onRamp: {
    description:
      'There is a room that most people who work with AI sit inside without realizing it. The walls are made of text. Terminal output, log files, status messages that technically describe what is happening but require you to already understand the system to interpret them. The room has all the information. It has none of the visibility.',
    whatItDoes:
      'Argues that the future of development is visual, not textual. Grounded in cognitive science: pre-attentive processing, cognitive load theory, recognition-primed decision-making. The visual layer that lets you see what AI is building while it builds it is not a feature. It is the next interface for all of this.',
    whatItDoesNot:
      'This is not a product announcement or a technical walkthrough. For the system architecture, read the Hive project page.',
  },

  claim:
    'The future of development is not better prompts or smarter models. It is a visual layer that lets you see what is being built while it is being built. When you can see it, you can feel whether it is right. When you can feel it, you can steer it. That changes everything about what one person can build.',

  sections: [
    {
      id: 'the-gap',
      title: 'The Gap',
      content: `
<p>Three months ago I had ideas I could see clearly in my head but no way to build them. No coding background. No engineering degree. Just a gap between what I imagined and what I could make real.</p>

<p>This is not an unusual position. It is the default position. Most people who encounter AI today, whether through ChatGPT, through Claude, through any of the tools that now let you generate code, images, analysis, and structure from plain English, hit this same wall. The AI can do things. You can describe things. But between what you describe and what you get back, there is a translation layer that operates entirely in text, and that translation layer is where ideas go to lose their shape.</p>

<p>I had been writing about this problem before I tried to solve it. An essay I wrote called <a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a> explored why the bottleneck in development was never intelligence or speed but the inability to see what you are building while you are building it. A Harvard study found that even when people deliberately try to think in words, visual images intrude on the process. The brain defaults to pictures. MIT researchers demonstrated that the human brain processes an entire image in as little as 13 milliseconds. Seeing is not a secondary channel. It is the primary one.</p>

<p>That research gave me language for something I was already experiencing. I would describe a system to an AI agent. The agent would build it. I would read the output. And I would have no idea, from the text alone, whether what it built matched what I had in my head. Not because the AI was bad. Because text is the wrong medium for the kind of rapid, intuitive assessment that humans are designed to do.</p>

<p>That's when it clicked: the barrier to using AI isn't intelligence. It's that nobody built the steering wheel.</p>
      `.trim(),
    },
    {
      id: 'the-interface',
      title: 'The Interface That Wasn\'t There',
      content: `
<p>Before cars existed, nobody knew how to drive. That was not because engines did not exist. Engines existed. The problem was that there was no steering wheel, no speedometer, no mirrors, no dashboard. The engine was powerful, but only a mechanic could use it.</p>

<p>Henry Ford did not build a faster horse. He built a machine that came with its own interface. The pedals, the gauges, the wheel. The interface turned driving from a mechanic's skill into something anyone could do. The engine was underneath. The car was the product.</p>

<p>AI is in that moment right now. Anthropic, OpenAI, Google are spending billions to build faster engines. Better reasoning, longer memory, more autonomy. The engines are extraordinary and getting better every quarter. But there is no car. There is no interface that lets a normal person, someone who is not an engineer, sit down and direct these systems to do real work. The terminal is the only steering mechanism, and the terminal was designed for engineers forty years ago.</p>

<p>My app Hive came out of that.</p>

<p>Think about driving. You don't read engine diagnostics to know what's happening. You glance at the dashboard. Green light, you're good. Red light, stop. That's what Hive does for AI. It compresses everything happening across your agents into a visual layer you can read at a glance. Green means working. Red means done. Yellow means it needs you. No logs. No terminals. Just a clear view of the road.</p>

<p>This is not a metaphor I arrived at after building the product. The metaphor is what made me build it. I was running four AI agents simultaneously in terminal windows, each one working on a different part of a system, and I could not tell at a glance what any of them were doing. I had to read. Scroll. Parse. Cross-reference one terminal's output against another's. The cognitive cost of simply knowing the state of my own system was consuming the mental energy I needed to direct it.</p>

<figure class="my-8">
  <img src="/images/research/steering-comparison.svg" alt="Two development experiences side by side. Without the visual layer: idea, describe in text, AI builds blind, read text output, hope it matches, repeat. With the visual layer: idea, describe, see it forming, feel whether it is right, steer with a sentence, ship. The gap between imagination and artifact closes because you can see." class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>That is the shift. Not from terminal to dashboard. From building blind to building with your eyes open. Every person who has tried to make something with AI has felt the gap between what they imagined and what came out. That gap is not about the AI's capability. It is about the human's inability to see the artifact forming. Close that gap, give people a way to watch what is being built in real time, and development stops being a text-translation exercise and becomes what it was always supposed to be: a visual, sensory act. Your eyes process the output. Your taste evaluates it. Your words correct it. The loop runs in minutes instead of hours because you never lost sight of the thing you were building.</p>
      `.trim(),
    },
    {
      id: 'green-dot',
      title: 'Why a Green Dot Is Faster Than a Sentence',
      content: `
<p>There is a body of cognitive science that explains why this matters, and it is not speculative.</p>

<p>Anne Treisman's Feature Integration Theory, developed at Princeton in 1980, established that the human visual system detects simple features like color, size, and orientation in parallel across the entire visual field. This detection happens automatically, in under 200 milliseconds, before conscious attention even engages. You do not choose to notice a red dot among blue dots. Your visual system flags it before you can decide to look for it. Christopher Healey at NC State extended this into interface design, showing that people extract statistical summaries from color-coded displays almost instantaneously, performing pattern recognition on multi-element visual layouts in under 200 milliseconds.</p>

<p>Reading a log line is a different cognitive operation entirely. It requires serial, word-by-word processing. Each word takes 200 to 300 milliseconds to read and comprehend. A single log entry like "Agent 1: status=active, task=refactoring auth layer, elapsed=47m" demands several seconds of conscious effort. A green dot communicating the same information enters your brain before you could finish reading the first word of that log line.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
  <p class="leading-relaxed">This is not a marginal efficiency gain. Daniel Kahneman, in his Nobel Prize-winning work formalized in <em>Thinking, Fast and Slow</em>, distinguished between two modes of cognition. System 1 is fast, automatic, effortless, pattern-based. System 2 is slow, deliberate, analytical, effortful. A colored dot on a dashboard hits System 1. A terminal log forces System 2. The difference is the difference between glancing and studying. Between knowing and figuring out.</p>
</div>

<p>George Miller's foundational 1956 paper at Harvard established that working memory holds roughly seven items, plus or minus two. Nelson Cowan revised this downward to about four chunks for novel information. This is not a soft limit. It is a hardware constraint of the prefrontal cortex. Four terminal windows streaming output means four independent text streams competing for those four working memory slots, each one demanding serial reading, parsing, and mental state-tracking. A four-tile dashboard with colored dots reduces the entire fleet's status to four visual chunks. The dashboard fits inside working memory. The terminals do not.</p>

<p>John Sweller's Cognitive Load Theory names the mechanism. Every piece of unnecessary information on screen, every timestamp you do not need, every status string you have to parse, every log prefix you have to mentally filter, is extraneous cognitive load. It steals working memory from the decisions that actually matter: which agent needs help, what to build next, whether the overall direction is right. A terminal maximizes extraneous load. A colored dot eliminates it.</p>

<p>I wrote about this from a different angle in <a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a>, an essay exploring the residual human contributions that AI cannot replicate. One of those inputs is taste: the capacity to look at something and know, before you can articulate the full technical reason, that it is right or wrong. Taste does not operate through analysis. It operates through recognition. And recognition requires seeing.</p>
      `.trim(),
    },
    {
      id: 'feeling-the-system',
      title: 'Feeling the System',
      content: `
<p>That visual layer changes more than just monitoring. When you can see what's being built as it forms, you stop debugging and start feeling whether it's right. The spacing is off. The flow broke somewhere. Something doesn't land. You can't always explain why. You just know. And that knowing is enough to guide the fix.</p>

<p>This is not mysticism. It is pattern recognition operating below the threshold of articulation, and it has been studied extensively.</p>

<p>Gary Klein spent decades studying how experts make decisions in high-stakes environments. His Recognition-Primed Decision model, developed from observing fireground commanders, found that experienced decision-makers do not compare options. They recognize the situation as similar to something they have seen before, mentally simulate a single course of action, and act. In Klein's studies, firefighters made life-or-death decisions in seconds, not by analyzing alternatives but by pattern-matching against thousands of previous situations stored in memory.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
  <p class="text-sm text-[var(--fg-muted)]">Klein's key finding is that the quality of the decision depends on the quality of the cues the environment provides. Rich, familiar cues, visual, spatial, temporal, enable fast recognition. Poor cues, dense text, unfamiliar formats, force slow analysis. A dashboard with spatial positions and color states provides the kind of cues that enable recognition-primed decisions. A terminal log does not.</p>
</div>

<p>This maps directly onto what I experience running Hive. I look at the four-tile grid and I feel when something is off. An agent has been yellow too long. The pattern of green-green-yellow-green looks different from green-green-green-green in a way that text status updates never communicated. The spatial memory of where each agent sits on the grid lets me track state over time without re-reading anything. I am not analyzing. I am recognizing. And the recognition is usually right.</p>

<p>A person who can see their algorithm working doesn't just debug faster. They notice things they never would have found in a log file.</p>

<p>In <a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a>, I described a visualization loop: think about what you want, talk to a system that can build it, see what it built, understand whether it matches what was in your head, refine the parts that do not match, ship when it does. Each cycle uses the part of your brain that is fastest and most reliable: your eyes. The loop works because it collapses the translation layer between what you imagine and what exists. What you think and what you see converge.</p>

<p>Hive is that loop applied to directing AI agents. You see the fleet. You feel the state. You intervene where the feeling says to intervene. And the intervention is a message in plain English, not a code change, not a configuration edit, not a terminal command. You type what you want. The agent adjusts. You see the result. The loop completes in seconds.</p>
      `.trim(),
    },
    {
      id: 'feedback-loop',
      title: 'The Feedback Loop',
      content: `
<p>Norbert Wiener, who founded cybernetics at MIT in 1948, demonstrated that any system steering toward a goal requires a feedback loop, and that the quality of steering is a direct function of feedback latency. A thermostat with a one-second delay holds temperature tightly. A thermostat with a ten-minute delay oscillates wildly.</p>

<p>John Boyd, the Air Force strategist who formalized the OODA loop, Observe, Orient, Decide, Act, identified the observation step as the bottleneck. The entity that observes faster gets inside the decision cycle of the entity that observes slower. Not because speed is always better, but because faster observation means acting on fresher information.</p>

<p>Managing AI agents is a real-time steering problem. The quality of your steering depends on how fast you can observe the fleet's state. A live dashboard with instant color changes gives you a sub-second observation loop. Scrolling through terminal output to reconstruct what changed gives you a loop measured in minutes. That gap compounds across hours of operation. Across days, it is the difference between a person directing a system and a person chasing a system.</p>

<p>In <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a>, I wrote about a three-layer model for how humans manage AI agents: the black box layer where the agent does its work, the map layer where you see what is happening, and the manager layer where you decide what to do about it. The map layer is the one that matters most, because without it, the manager layer has nothing to work with. You cannot direct what you cannot see. You can only react to what eventually surfaces in a log.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
  <p class="leading-relaxed">Ben Shneiderman at the University of Maryland coined the term "direct manipulation" for interfaces where you see the object, act on it, and immediately see the result. His three principles: continuous representation of the objects of interest, rapid and reversible actions, physical actions replacing typed commands. A dashboard showing four agent tiles that update in real time, where you tap to interact and see the response immediately, is direct manipulation. A terminal where you type commands and wait for text output is the opposite.</p>
</div>

<p>The entire observability industry, Datadog, Splunk, Grafana, Honeycomb, solved the problem of making complex systems inspectable. They did not solve the problem of making complex systems directable by people who are not engineers. Donald Norman drew this distinction in <em>The Design of Everyday Things</em>: a well-designed object communicates how it works through its appearance. A green dot affords the interpretation "working." A log line affords nothing to someone who does not already know how to read logs. Observability tells you what is happening. Usability tells you what to do about it.</p>
      `.trim(),
    },
    {
      id: 'the-simple-idea',
      title: 'The Simple Idea',
      content: `
<p>The whole idea is simple: when you can see what AI is doing, you can feel whether it's right. And when you can feel it, you can guide it. That visual layer between you and the machine is what turns AI from something confusing into something productive. Hive was built on that principle and built with it too.</p>

<p>That last part is literal. Hive was built by four AI agents running simultaneously, each one working on a different part of the system, while I directed the fleet through the dashboard that the fleet was building. The daemon that discovers agents, the interface that renders status dots, the hook system that routes telemetry, the auto-pilot that eliminates stalls. Four agents, building the thing that manages four agents. I directed the architecture, resolved conflicts, bridged context between agents, and made judgment calls about approach. The agents wrote the code. I held the vision.</p>

<p>This is the workflow I described in <a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a> as the convergence of taste, direction, judgment, presence, and context-holding. Not coding. Not managing people. Directing AI systems through continuous cycles of intent, observation, and refinement. The person providing those five inputs does not need to write code. They need to see the system, feel whether it is moving in the right direction, and communicate corrections in plain language.</p>

<p>The result is that a single person, without an engineering degree, produced a multi-agent orchestration system with a real-time dashboard, a coordination daemon, an auto-pilot, and a messaging layer. Not because AI wrote it for me. Because I could see what AI was building and steer it toward what I had in my head. The gap between imagination and artifact collapsed. Not to zero. But enough that the artifact exists and works.</p>
      `.trim(),
    },
    {
      id: 'closing-the-gap',
      title: 'Closing the Gap',
      content: `
<p>Everyone has a vision for something they'd build if they knew how. A side project. A tool for their team. A better way to do their job. That gap between the idea and the first step is where most people stop. This is meant to shrink that gap.</p>

<p>The gap was never about intelligence. It was never about access to AI. The models are available. The APIs are open. The capability is there. The gap was about the interface between a human mind that thinks in images and a machine that communicates in text. Every person who has sat down to build something with AI and felt the thing in their head dissolve into text they cannot evaluate has hit this wall. It is not a skill problem. It is a sensory one. You are building without the one input your brain is designed to use.</p>

<p>The visual layer is not a feature. It is the future of how all of this works. Right now, the entire AI development experience is text in, text out. Describe what you want, read what you get, guess whether it matches, describe the correction, read again. Every cycle is a translation from visual thought to text and back. Every translation loses information. The visual layer eliminates the translation. You see the artifact forming. You see whether it matches. You see the correction take effect. Your brain's 13-millisecond image processing replaces your brain's multi-second text parsing as the primary development interface. That is not an incremental improvement. That is a different kind of building entirely.</p>

<p>That is what I keep coming back to. The person in the room with no windows, the one I described in <a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a>, is not unintelligent. They are deprived. Show them what is happening. Give them the visual input their brain is wired to process. And watch what happens to their ability to build. It does not improve incrementally. It transforms. Development becomes a sensory act. The gap between imagination and artifact closes not because the AI got smarter, but because the human can finally see.</p>

<p>It's helped my workflow a lot. Sharing in case anyone finds the same value in it.</p>
      `.trim(),
    },
  ],

  references: [
    { text: 'Treisman, A., & Gelade, G. (1980). "A feature-integration theory of attention." Cognitive Psychology, 12(1), 97-136.', url: 'https://en.wikipedia.org/wiki/Feature_integration_theory' },
    { text: 'Healey, C.G., Booth, K.S., & Enns, J.T. (1996). "High-Speed Visual Estimation Using Preattentive Processing." ACM Transactions on Human-Computer Interaction.', url: 'https://www.csc2.ncsu.edu/faculty/healey/PP/' },
    { text: 'Potter, M.C., et al. (2014). "Detecting meaning in RSVP at 13 ms per picture." MIT, Attention, Perception, & Psychophysics.', url: 'https://news.mit.edu/2014/in-the-blink-of-an-eye-0116' },
    { text: 'Miller, G.A. (1956). "The Magical Number Seven, Plus or Minus Two." Psychological Review, 63(2), 81-97.' },
    { text: 'Cowan, N. (2001). "The magical number 4 in short-term memory." Behavioral and Brain Sciences, 24(1), 87-114.' },
    { text: 'Sweller, J. (1988). "Cognitive Load During Problem Solving: Effects on Learning." Cognitive Science, 12(2), 257-285.' },
    { text: 'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.' },
    { text: 'Klein, G.A. (1998). Sources of Power: How People Make Decisions. MIT Press.', url: 'https://www.gary-klein.com/rpd' },
    { text: 'Wiener, N. (1948). Cybernetics: Or Control and Communication in the Animal and the Machine. MIT Press.' },
    { text: 'Boyd, J.R. (1976). "Patterns of Conflict." Unpublished briefing.' },
    { text: 'Shneiderman, B. (1983). "Direct Manipulation: A Step Beyond Programming Languages." Computer, 16(8), 57-69.', url: 'https://www.cs.umd.edu/~ben/papers/Shneiderman1983Direct.pdf' },
    { text: 'Norman, D.A. (1988). The Design of Everyday Things. Basic Books.' },
    { text: 'Foxworth, L. (2017). "Visual images often intrude on verbal thinking." Harvard Gazette.', url: 'https://news.harvard.edu/gazette/story/2017/05/visual-images-often-intrude-on-verbal-thinking-study-says/' },
  ],

  relatedWork: [
    { title: 'Hive', href: '/lab/hive' },
    { title: 'Close Your Eyes', href: '/writing/close-your-eyes' },
    { title: 'The Five Inputs', href: '/writing/the-five-inputs' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'How Hive Was Built', href: 'https://rmgtni.xyz/lab/how-hive-was-built' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
