import type { ResearchData } from '@/types/research';

export const aVisualWorkflowForAiAgentsData: ResearchData = {
  slug: 'a-visual-workflow-for-ai-agents',
  date: '2026',
  title: 'A Visual Workflow for AI Agents',
  subtitle: 'How I organize building with multiple AI agents at the same time.',
  liveUrl: 'https://github.com/RohitMangtani/hive',

  onRamp: {
    description:
      'I am not a software engineer. I took a few coding classes and started using ChatGPT when it first came out, but I build things with AI by describing what I want and watching it get made. The problem was that I could not actually watch it. Everything happened in terminal text I had to read and parse. So I built something that lets me see it instead. Colored dots, like a traffic light, where green means working, red means done, and yellow means it needs me.',
    whatItDoes:
      'Walks through why I built Hive, what the visual layer does, and why seeing what AI is doing matters more than reading what AI is doing. Includes a link to GitHub.',
    whatItDoesNot:
      'Claim to be a product launch or a technical architecture document. For system details, read the Hive project page.',
  },

  claim:
    'I found that seeing what AI is doing makes it a lot easier to tell whether it is doing the right thing. So I made a simple visual layer that shows me.',

  sections: [
    {
      id: 'how-this-started',
      title: 'How This Started',
      content: `
<p>I am not a software engineer. I took a few basic coding classes and started using ChatGPT when it first came out, but most of what I build now is through AI agents. I describe what I want, and they build it. That part worked surprisingly well.</p>

<p>The part that did not work was keeping track of what was happening. I was running four AI agents at the same time, each one working on a different piece of a system, sometimes in completely different projects. Four agents means four things getting built at once, but I had no idea at a glance what any of them were doing. I had to read terminal output, scroll through it, and try to hold the state of four different threads in my head. The energy I was spending just knowing where things stood was eating the energy I needed to think about where things should go.</p>

<p>So I made something to fix that. Not a product, just a way to see what was going on without reading terminal text all day.</p>

<p>What I ended up with is closer to a coordinated worker pool than four unrelated chat windows. Any agent can see what the others are doing through a central daemon. Any agent can audit the others. Any agent can send work to the others. They are still independent sessions with their own context, but the coordination layer connects them into something where the whole is more than four separate parts.</p>
      `.trim(),
    },
    {
      id: 'the-traffic-light',
      title: 'The Traffic Light',
      content: `
<p>Think about driving. You do not read engine diagnostics to know what is happening, you just glance at the dashboard. Green light means you are good, red means stop, yellow means pay attention.</p>

<p>That is basically what I made. Four tiles on a screen, arranged in a 2x2 grid that mirrors my terminal layout. The top left tile is the top left terminal, and the bottom right tile is the bottom right terminal. Each tile is an agent, and the color tells you the state. Green means working, red means finished or stopped, and yellow means it needs a decision from you. No logs or terminal scrolling, just color and position.</p>

<p>The mapping happens automatically. The daemon reads the physical position of each terminal window on your screen and assigns quadrants to match. Drag a terminal from the top left to the bottom right, and within ten seconds it becomes the bottom right tile on the dashboard. You never configure which agent is which tile. The system figures it out from where your windows actually sit.</p>

<p>The nice thing about this is that you do not choose to notice a red dot among green dots, your brain just flags it. Reading a log takes effort, but glancing at a color does not. Four terminals streaming text compete for your attention, while four colored dots fit in a single glance.</p>

<figure class="my-8">
  <img src="/images/research/steering-comparison.svg" alt="Hive workflow: four local terminal agents mirrored to a hosted dashboard, with the human steering by glance, message, handoff, and audit" class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>In practice, I went from spending mental energy trying to reconstruct what each agent was doing to just spending it on deciding what to build next and whether things were going in the right direction. That was a big shift for me.</p>
      `.trim(),
    },
    {
      id: 'seeing-is-steering',
      title: 'What Surprised Me',
      content: `
<p>Once I could see the agents working, I stopped reading logs and started just noticing when something looked off. An agent has been yellow too long, or the pattern of three green tiles and one yellow tile looks different from four green tiles in a way that text never communicated. I was not analyzing anymore, I was just recognizing, and it was usually right.</p>

<p>Part of why it works is that the tiles match my actual screen. My Mac mini has four terminals arranged in a 2x2 grid, and the dashboard on my phone has four tiles in the same layout. The top left terminal is the authentication refactor, and the top left tile on my phone is the same thing. I see a yellow dot in the bottom left and I already know which agent that is, because I can see the bottom left terminal on my screen. I never have to read a name because the dashboard mirrors what is already in front of me.</p>

<p>And because it is on my phone, I do not have to be at my desk. The agents keep running on my Mac mini at home, and I can be on the couch, at a coffee shop, wherever. I glance at the tiles, and if something needs steering I send a message. The work does not stop when I walk away, and most of the time I come back and things are finished. The agents handle routine approvals on their own, so they just keep going. The yellow dot only shows up when something genuinely needs me.</p>

<p>The spatial layout also makes it natural to move work between agents. I do not think in terms of agent IDs or session names, I think in terms of position. That one found something, send it to that one. The grid gives you a visual memory of what is where, and that is enough to direct traffic between them without reading any of the actual output. You are just pointing.</p>

<p>Right now, my tiles are running a mix of Claude, Codex, and OpenClaw. Different providers, different strengths, same grid. I had Claude research something, then pointed the Codex tile at what Claude found and told it to build from that. OpenClaw handles the broader automation, the stuff that needs reach beyond the codebase. The models do not know about each other. They do not need to. I am the one who sees all the tiles, reads what one produced, decides what matters, and tells the other where to take it. Hive can carry that handoff, but it is not one shared hive mind. That is cross-model ping-ponging, and it works because the visual layer mostly does not care what is underneath each tile. It just shows you the state, and you move work between them the same way you move work between two Claude agents. Under the hood the signals are not identical, Claude has richer hook data and Codex and OpenClaw lean more on logs and heuristics, but at the dashboard level they are close enough that the workflow feels the same.</p>

<p>One of the more useful things that came out of mixing models was having the Codex agent audit the whole system while the Claude agents kept building. Codex found inconsistencies between what the documentation said and what the code actually did. Things the Claude agents had drifted on over weeks, because they had written both the code and the docs and stopped noticing the gap. A different model with a different perspective caught what three instances of the same model missed. That is not just a nice bonus of running mixed models. It is a reason to do it on purpose.</p>

<p>That is also why I do not think you have to pick one model and commit to it. The better pattern is to let different models do what each is good at, bounce work between them, and use one to audit the corners the other one missed.</p>

<p>After a few weeks of using it I do not think "Agent 3 has been waiting for a long time." I just feel that the grid looks wrong, and I respond to that faster than I ever responded to log output.</p>
      `.trim(),
    },
    {
      id: 'what-it-unlocked',
      title: 'An Example',
      content: `
<p>Hive itself was built this way. Four AI agents running at the same time, each working on a different part of the system, while I directed them through the dashboard they were building. I told them what to build, resolved conflicts when two agents touched the same thing, and bridged context between them when one found something another needed to know. They wrote all the code.</p>

<p>Here is a specific thing that happened. Two agents were debugging the dashboard's own status detection. Agent 3 was investigating why tiles flickered between green and red, and Agent 4 was investigating why activity from one agent was showing up under the wrong tile. Neither knew what the other was finding.</p>

<p>I was just watching the dashboard, and Agent 3 never turned red even when it should have. I noticed that visually, not from a log. Agent 4 found the root cause: one agent's activity was being attributed to the wrong tile, so Agent 3's status was being driven by Agent 4's work. Agent 3, meanwhile, found a separate bug in how the system detected whether an agent was done. Two independent investigations that uncovered two bugs interacting with each other.</p>

<p>I pointed a third agent at both findings and asked it to produce a unified fix. I did not write any code. I just saw something that looked wrong, and it turned out to be wrong. That is the kind of thing the visual layer makes possible.</p>

<p>Underneath all of this, there is a knowledge layer that compounds over time. Every time an agent solves a non-obvious problem, the lesson gets written to a per-project file. The next agent that works on that project reads those lessons before it starts. After weeks of running, the system has accumulated debugging insights, style corrections, and architectural decisions that no fresh agent would know. The fleet gets smarter because it remembers what it learned.</p>
      `.trim(),
    },
    {
      id: 'the-floor',
      title: 'What It Does Not Do',
      content: `
<p>It does not make the AI smarter. The models still hallucinate, they still drift when context fills up, and they still need restarting when a task runs too long. The dashboard does not fix any of that, it just makes those problems visible sooner. You see the drift happening instead of discovering it twenty minutes later in a log, and you see the stall instead of wondering why nothing is moving.</p>

<p>The biggest limitation is context. When an agent's context window fills, it compacts memory and starts losing the thread. You can see this on the dashboard because the agent starts behaving differently with longer yellow states, more frequent stops, and output that drifts. You learn to recognize that pattern, and when something feels off you restart the agent with fresh context and it picks up where it left off.</p>

<p>There is also an autopilot that handles routine interruptions. Permission prompts get approved automatically. There is a grace period for me to override, and then the agent keeps going. The stuff that actually needs my judgment shows up as yellow, and everything else stays green.</p>

<p>It also does not care much which AI tool you are running. Claude, Codex, and OpenClaw work out of the box, but if your agent runs in a terminal, you can add it. There is a config file where you define the process name and the command to launch it. Three lines. Or you can ask one of your running agents to add it for you. The point is not which AI you are using. The point is being able to see all of them at once and move work between them.</p>

<p>This is also not for everyone. You need to be running multiple AI agents to get anything out of it. If you are using AI one conversation at a time, you do not need this. It is for the situation where you have crossed into running parallel work and you are drowning in terminal output.</p>
      `.trim(),
    },
    {
      id: 'try-it',
      title: 'Try It',
      content: `
<p>It has helped my workflow a lot. I can see what my agents are doing while they work, tell when something looks off, and send a message to correct it. The whole loop is describe, watch, adjust. You do not need to understand the code to do any of that. You can look at two agents that just finished, point a third one at both, and say "summarize what those two found." The visual layer is what makes that possible, because you are working from what you see, not what you read in a terminal.</p>

<p>It runs on macOS only right now. Sharing it in case anyone finds the same value in it.</p>

<p><a href="https://github.com/RohitMangtani/hive" class="underline hover:opacity-60" target="_blank" rel="noopener">github.com/RohitMangtani/hive</a></p>
      `.trim(),
    },
  ],

  references: [],

  relatedWork: [],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
