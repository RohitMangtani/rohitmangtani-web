import type { ResearchData } from '@/types/research';

export const hiveData: ResearchData = {
  slug: 'hive',
  date: '2026',
  title: 'Hive',
  subtitle: 'A dashboard for running multiple AI agents at the same time.',
  liveUrl: 'https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0',

  onRamp: {
    description:
      'Four AI agents running at once. One screen shows all of them. Green means working, red means done, yellow means stuck. Tap any tile to talk to that agent. Hive is what I built to keep track of everything when I started running multiple agents on different projects at the same time.',
    whatItDoes:
      'Walks through what Hive is, what it feels like to use, and how the system works underneath.',
    whatItDoesNot:
      'This is not a thesis on AI or multi-agent behavior. It is a project page for the tool I use every day.',
  },

  claim:
    'I needed a way to see what all my agents were doing without reading four terminals at once. So I built a dashboard that shows me.',

  sections: [
    {
      id: 'the-experience',
      title: 'The Experience',
      content: `
<p>You are lying on your bed. Your laptop has four terminal windows arranged in a 2x2 grid. Top-left is refactoring authentication. Top-right is writing content. Bottom-left is debugging a deploy. Bottom-right is investigating a production bug. You pick up your phone and open the dashboard. Four tiles, same 2x2 grid. Top-left tile maps to top-left terminal. Bottom-right tile maps to bottom-right terminal. Each tile has a dot. Green means that agent is working. Red means it is done. Yellow means it needs you.</p>

<p>You see a red dot in the top-right tile. You already know what that is without reading the label. It is the content agent, because that is where the content terminal sits on your screen. You tap it and type: "Start the next chapter." The dot turns green. You glance at the other three tiles. All green. You put the phone down.</p>

<p>Twenty minutes later you check again. Two green, one red, one yellow. The yellow one is bottom-left. You know it is the deploy debugger because that is where you put it. You read its question, type a two-sentence answer, and the dot turns green. The red one finished its task. You type a new one. Four agents, all visible, all reachable, from your phone.</p>

<p><a href="https://dashboard-flame-two-83.vercel.app?viewer=d6c8f4964e4fb13247a08bb616da88d557b4f34b503f1b9fe96e824822bd2bf0" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Open the live dashboard</a> to see it running.</p>
      `.trim(),
    },
    {
      id: 'what-it-is',
      title: 'What It Is',
      content: `
<p>Hive is a local daemon that runs on your machine. It discovers every Claude Code instance you have open, shows their status on a dashboard, and gives you a way to message any of them from your phone or a second screen. The dashboard tiles mirror your terminal layout. Top-left terminal, top-left tile. You manage agents by where they sit, not by what they are called.</p>

<p>The thing that makes running four agents useful is that each one builds up its own context over time. One is an hour deep into an authentication refactor and knows every file it has touched. Another has been debugging a deploy for thirty minutes with a mental model of the infrastructure. These are not four workers splitting one task. They are four independent contexts, each deeply embedded in a different problem. A fresh agent starts from zero. An agent that has been working for an hour starts from everything it already knows. The dashboard is how you keep track of all of them without re-reading everything each time you switch your attention.</p>

<p>The whole system was built using the agents it manages. Four Claude Code instances working on the daemon, the dashboard, and each other's output while I directed what to build and resolved conflicts. They wrote all the code.</p>
      `.trim(),
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      content: `
<p>The daemon runs locally, managed by launchd. It has an API for coordination, a WebSocket server for the live dashboard, and a tunnel that makes the dashboard accessible from any device. It snapshots its state every 30 seconds, so if you restart your computer, the routing and queues restore automatically.</p>
      `.trim(),
      subsections: [
        {
          title: 'Auto-Discovery',
          content: `
<p>Open a terminal and run Claude Code. Within three seconds, it shows up on the dashboard. No registration, no config. The daemon scans running processes, finds each one's working directory and session file, and adds it. Close the terminal, it disappears. Open a new one, it appears.</p>
          `.trim(),
        },
        {
          title: 'Spatial Mapping',
          content: `
<p>Arrange four terminal windows in a 2x2 grid. Open Claude Code in each one. Hive assigns each terminal a quadrant based on when you opened it: first becomes Q1 (top-left tile), second Q2 (top-right), third Q3 (bottom-left), fourth Q4 (bottom-right). The dashboard mirrors your screen.</p>

<p>When you see a yellow dot in the bottom-left tile on your phone, you already know which terminal that is because you can see the bottom-left terminal on your laptop. The position is the label. Close a terminal and its tile disappears. Open a new one and it fills the next slot.</p>
          `.trim(),
        },
        {
          title: 'Status Detection',
          content: `
<p>Each tile shows green, red, or yellow. Getting the color right takes a three-layer detection system: real-time hooks from Claude Code's tool lifecycle, pattern analysis of session log files, and CPU-based idle detection as a fallback. The layers cross-validate each other. One method alone produces false positives. Three together produce a reliable signal.</p>
          `.trim(),
        },
        {
          title: 'Auto-Pilot',
          content: `
<p>Claude Code pauses for permission prompts. "Allow this bash command?" "Approve this file edit?" With one terminal, you click yes and move on. With four agents, these prompts stack up. One agent pauses, you do not notice for ten minutes, and an hour of potential output is lost.</p>

<p>Auto-pilot handles it. Routine prompts auto-approve within a three-second grace window. The dashboard shows the prompt briefly so you can override if needed. If you do nothing, the agent continues. A watchdog also monitors for stuck loops where an agent keeps calling the same tool repeatedly, and flags it on the dashboard so you can step in.</p>
          `.trim(),
        },
        {
          title: 'Coordination',
          content: `
<p>Four agents working in shared codebases will eventually collide. Two editing the same file. One designing an API another needs to consume.</p>

<p>Hive handles this with a few primitives. Inter-agent messaging lets any agent send a prompt to any other. Advisory file locks let an agent claim a file and get a warning if someone else holds it. A shared scratchpad stores working context that auto-expires. An artifact tracker records which agent modified which files. And a conflict detection API checks whether another agent recently touched a file you are about to edit.</p>

<p>There is also a task queue. Push a task and the daemon dispatches it to the next idle agent. You can tag related tasks with the same workflow ID, and when one step finishes, the next agent automatically gets a summary of what was done and which files changed before starting its task.</p>
          `.trim(),
        },
        {
          title: 'Compound Learning',
          content: `
<p>An agent spends twenty minutes debugging a path resolution bug. It finds the fix. The session ends. Tomorrow, a different agent hits the same problem and spends another twenty minutes arriving at the same solution.</p>

<p>Hive's learning system prevents this. When an agent solves something non-obvious, it writes the lesson to a file in the project. Every future agent reads that file before starting. The lessons compound across sessions and across agents. After months of running, the system knows things about your projects that no fresh agent could replicate.</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'everything-else',
      title: 'Everything Else',
      content: `
<p><strong>Talk to agents from anywhere.</strong> Tap any tile, type a message, and it goes straight to that agent's terminal. If the agent is busy, messages queue up and drain automatically when it is ready. The 2x2 grid on your phone matches your screen, so you always know which agent you are talking to.</p>

<p><strong>Flag agents for later.</strong> Each tile has a small circle in the corner. Tap it and the tile turns orange. Use it to mark which agent you want to come back to, or which one has something you have not reviewed yet. Tap again to unflag.</p>

<p><strong>Walk away.</strong> Start four agents, close your laptop, go do something else. Come back and the dashboard shows you what happened. Green tiles kept working. Yellow tiles are waiting. Red tiles finished. You pick up where things paused without re-reading anything.</p>

<p><strong>Put it on any screen.</strong> Open the dashboard on a tablet, a second monitor, or your phone. The colored dots update in real time. When one turns yellow, you notice it without switching windows. Install it as an app on your phone and it runs full-screen like a native app.</p>

<p><strong>Push notifications.</strong> When an agent goes yellow, macOS sends a native notification with the project name and what it needs. You do not have to be looking at the dashboard to know something needs attention.</p>
      `.trim(),
    },
    {
      id: 'what-it-does-not-do',
      title: 'What It Does Not Do',
      content: `
<p>It does not make the AI smarter. The models still hallucinate. They still drift when context fills up. They still need restarting when a task runs too long. The dashboard does not fix any of that. It just makes those problems visible sooner. You see the drift happening instead of discovering it twenty minutes later in a log. You see the stall instead of wondering why nothing is moving.</p>

<p>The biggest limitation is context. When an agent's context window fills, it compacts memory and starts losing the thread. You can see this on the dashboard because the agent starts behaving differently. Longer yellow states, more frequent stops, output that drifts. You learn to recognize that pattern. Something is off. You restart the agent with fresh context. It picks up.</p>

<p>This is also not for everyone. You need to be running multiple AI agents to get anything out of it. If you are using AI one conversation at a time, you do not need this. It is for the situation where you have crossed into running parallel work and you are drowning in terminal output.</p>
      `.trim(),
    },
    {
      id: 'try-it',
      title: 'Try It',
      content: `
<p>It has helped my workflow a lot. I can see what my agents are doing while they work, tell when something looks off, and send a message to correct it from my phone. The whole loop is describe, watch, adjust.</p>

<p><a href="https://github.com/RohitMangtani/hive" class="underline hover:opacity-60" target="_blank" rel="noopener">github.com/RohitMangtani/hive</a></p>
      `.trim(),
    },
  ],

  relatedWork: [],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
