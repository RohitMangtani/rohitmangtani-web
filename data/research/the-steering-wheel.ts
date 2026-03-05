import type { ResearchData } from '@/types/research';

export const theSteeringWheelData: ResearchData = {
  slug: 'a-visual-workflow-for-ai-agents',
  date: '2026',
  title: 'A Visual Workflow for AI Agents',
  subtitle: 'How I organize building with multiple AI agents at the same time.',
  liveUrl: 'https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0',

  onRamp: {
    description:
      'I am not a software engineer. I took a few coding classes and started using ChatGPT when it first came out, but I build things with AI by describing what I want and watching it get made. The problem was that I could not actually watch it. Everything happened in terminal text I had to read and parse. So I built something that lets me see it instead. Colored dots, like a traffic light. Green means working. Red means done. Yellow means it needs me. That is the whole idea.',
    whatItDoes:
      'Walks through why I built Hive, what the visual layer does, and why seeing what AI is doing matters more than reading what AI is doing. Includes a link to the live dashboard.',
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

<p>The part that did not work was keeping track of what was happening. I was running four AI agents at the same time, each one working on a different piece of a system, and I had no idea at a glance what any of them were doing. I had to read terminal output. Scroll through it. Try to hold the state of four different threads in my head. The energy I was spending just knowing where things stood was eating the energy I needed to think about where things should go.</p>

<p>So I made something to fix that. Not a product, just a way to see what was going on without reading terminal text all day.</p>
      `.trim(),
    },
    {
      id: 'the-traffic-light',
      title: 'The Traffic Light',
      content: `
<p>Think about driving. You do not read engine diagnostics to know what is happening. You glance at the dashboard. Green light, you are good. Red light, stop. Yellow, pay attention.</p>

<p>That is basically what I made. Four tiles on a screen, arranged in a 2x2 grid that mirrors my terminal layout. Top-left tile is top-left terminal. Bottom-right tile is bottom-right terminal. Each tile is an agent. The color tells you the state. Green means working. Red means finished or stopped. Yellow means it needs a decision from you. No logs. No terminal scrolling. Just color and position.</p>

<p>The nice thing about this is that you do not choose to notice a red dot among green dots. Your brain just flags it. Reading a log takes effort. Glancing at a color does not. Four terminals streaming text compete for your attention. Four colored dots fit in a single glance.</p>

<figure class="my-8">
  <img src="/images/research/steering-comparison.svg" alt="The visual development flow: idea, describe, see it forming, feel whether it is right, steer with a sentence, ship" class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>In practice, I went from spending mental energy trying to reconstruct what each agent was doing to just spending it on deciding what to build next and whether things were going in the right direction. That was a big shift for me.</p>
      `.trim(),
    },
    {
      id: 'seeing-is-steering',
      title: 'What Surprised Me',
      content: `
<p>Once I could see the agents working, I stopped reading logs and started just noticing when something looked off. An agent has been yellow too long. The pattern of green-green-yellow-green looks different from green-green-green-green in a way that text never communicated. I was not analyzing anymore. I was just recognizing. And it was usually right.</p>

<p>Part of why it works is that the tiles match my actual screen. My laptop has four terminals arranged in a 2x2 grid. The dashboard on my phone has four tiles in the same layout. Top-left terminal is the authentication refactor. Top-left tile on my phone is the same thing. I see a yellow dot bottom-left and I already know which agent that is, because I can see the bottom-left terminal on my screen. I never read a name. I just know where things are because the dashboard mirrors what is already in front of me.</p>

<p>And because it is on my phone, I do not have to be at my desk. The agents keep running on my laptop. I can be on the couch, at a coffee shop, wherever. I glance at the tiles, and if something needs steering I send a message. The work does not stop when I walk away.</p>

<p>After a few weeks of using it I do not think "Agent 3 has been waiting for a long time." I just feel that the grid looks wrong. And I respond to that faster than I ever responded to log output.</p>
      `.trim(),
    },
    {
      id: 'what-it-unlocked',
      title: 'An Example',
      content: `
<p>Hive itself was built this way. Four AI agents running at the same time, each working on a different part of the system, while I directed them through the dashboard they were building. I told them what to build, resolved conflicts when two agents touched the same thing, and bridged context between them when one found something another needed to know. They wrote all the code.</p>

<p>Here is a specific thing that happened. Two agents were debugging the dashboard's own status detection. Agent 3 was investigating why tiles flickered between green and red. Agent 4 was investigating why activity from one agent was showing up under the wrong tile. Neither knew what the other was finding.</p>

<p>I was just watching the dashboard. Agent 3 never turned red, even when it should have. I noticed that visually, not from a log. Agent 4 found the root cause: one agent's activity was being attributed to the wrong tile, so Agent 3's status was being driven by Agent 4's work. Agent 3, meanwhile, found a separate bug in how the system detected whether an agent was done. Two independent investigations. Two bugs that interacted with each other.</p>

<p>I pointed a third agent at both findings and asked it to produce a unified fix. I did not write any code. I just saw something that looked wrong, and it turned out to be wrong. That is the kind of thing the visual layer makes possible.</p>
      `.trim(),
    },
    {
      id: 'the-floor',
      title: 'What It Does Not Do',
      content: `
<p>It does not make the AI smarter. The models still hallucinate. They still drift when context fills up. They still need restarting when a task runs too long. The dashboard does not fix any of that. It just makes those problems visible sooner. You see the drift happening instead of discovering it twenty minutes later in a log. You see the stall instead of wondering why nothing is moving.</p>

<p>The biggest limitation is context. When an agent's context window fills, it compacts memory and starts losing the thread. You can see this on the dashboard because the agent starts behaving differently, longer yellow states, more frequent stops, output that drifts. You learn to recognize that pattern. Something is off. You restart the agent with fresh context. It picks up.</p>

<p>There is also an auto-pilot that handles routine interruptions. Permission prompts auto-approve. Simple questions auto-answer. There is a grace period for me to override, then the system answers and the agent keeps going. The stuff that actually needs my judgment shows up as yellow. Everything else stays green.</p>

<p>This is also not for everyone. You need to be running multiple AI agents to get anything out of it. If you are using AI one conversation at a time, you do not need this. It is for the situation where you have crossed into running parallel work and you are drowning in terminal output.</p>
      `.trim(),
    },
    {
      id: 'try-it',
      title: 'Try It',
      content: `
<p>It has helped my workflow a lot. I can see what my agents are doing while they work, tell when something looks off, and send a message to correct it. The whole loop is describe, watch, adjust. It made building things with AI a lot less stressful for me.</p>

<p>Sharing it in case anyone finds the same value in it.</p>

<p><a href="https://github.com/RohitMangtani/hive" class="underline hover:opacity-60" target="_blank" rel="noopener">github.com/RohitMangtani/hive</a></p>
      `.trim(),
    },
  ],

  references: [],

  relatedWork: [],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
