import type { ResearchData } from '@/types/research';

export const closeYourEyesData: ResearchData = {
  slug: 'close-your-eyes',
  date: '2026',
  title: 'Close Your Eyes',
  subtitle: 'Why the gap between thinking and building was never code. It was seeing.',

  onRamp: {
    description: 'You are sitting at your desk right now with an idea in your head. You can see it. The shape of it, the way it should feel, the thing it does that nothing else does. Now try to build it. You open a terminal, or a design tool, or a spreadsheet, and the thing in your head starts losing resolution. By the time it exists in the world, it looks nothing like what you saw. That gap was never about skill. It was never about intelligence. It was about seeing. For the first time, the gap is closing.',
    whatItDoes: 'Explains why visualization is the missing layer in development, how AI changes the relationship between thinking and building, and why the ability to see what you are creating while you create it is the most significant unlock since the terminal itself.',
    whatItDoesNot: 'Propose a specific tool, argue that code is dead, or predict timelines.',
  },

  claim: 'The bottleneck in development was never intelligence or speed. It was the inability to see what you are building while you are building it. Visualization is the layer that connects human thinking to human output, and it changes everything about what is possible.',

  sections: [
    {
      id: 'the-room',
      title: 'The Room',
      content: `
        <p>Picture a person who has spent their entire life in a room with no windows. They can hear things. They can touch the walls. They can think. But they have never seen anything. Not a color, not a shape, not another person's face, not the way light moves across water.</p>

        <p>Ask that person to invent something. To imagine a product, a system, a piece of art. They will struggle. Not because they are unintelligent. Because the raw material of imagination is missing. Human cognition runs on visual input. A Harvard study found that even when people are deliberately trying to think in words, visual images intrude on the process. The brain defaults to pictures. It cannot help itself. MIT researchers showed that the human brain can process an entire image in as little as 13 milliseconds. Seeing is not a secondary input. It is the operating system.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The person in the room is not broken. They are deprived. Take them outside. Show them a tree, a building, a machine, another person solving a problem in a way they have never considered. Watch what happens to their thinking. It does not improve incrementally. It transforms. New inputs create new thoughts. New thoughts create new ideas. The bottleneck was never the brain. It was what the brain had to work with.</p>
        </div>

        <p>Development has been this room. You have an idea in your head. You can see it clearly. The interface, the flow, the way data moves, the experience someone has when they use it. Then you sit down to build it. And you enter the room. A terminal. A code editor. Text. Syntax. Abstractions stacked on abstractions. The thing in your head has to survive translation into a language that has no visual component. By the time something renders on screen, it has been through so many layers of translation that it rarely matches what you originally saw.</p>

        <p>The gap between what you imagine and what you build has never been about intelligence. Smart people hit this wall constantly. It has never been about effort. People pour months into projects that drift from the original vision because there was no way to see the drift happening. The gap is sensory. You are building blind. You are the person in the room, constructing something complex without the one input your brain is designed to use.</p>

        <p>That room just got a window.</p>
      `,
    },
    {
      id: 'think-talk-see',
      title: 'Think, Talk, See',
      content: `
        <p>You are building a monitoring system for a fleet of AI agents. You have a thesis. Agents that go idle for more than thirty seconds without a confirmed tool call are probably stuck, not thinking. You believe this because you have watched it happen, over weeks of running parallel agents, and you want to build a system that detects it automatically.</p>

        <p>So you code it. Or you describe it to an AI and it codes it. Either way, the system runs. A report comes back. Numbers on a screen. Detection rate: 78%. False positive rate: 12%. Average detection latency: 8 seconds. Is that good? You think so. But you cannot see what happened. You cannot see the moments where the system caught a real stuck agent versus the moments where it flagged an agent that was legitimately thinking through a complex problem. You cannot see whether the false positives came from a flaw in your thesis or from an edge case your logic did not handle. The numbers tell you the outcome. They do not show you the process.</p>

        <p>Now picture the same thing, but you can see it. Every agent rendered as a colored dot on a timeline. Green when working, red when idle, amber when the system is unsure. You look at the amber dots and you see the pattern immediately. The system is flagging agents that pause between tool calls while generating long text responses. They are not stuck. They are writing. Your thesis was right. Your filter was wrong. You say "check CPU activity before flagging, not just idle time." The system adjusts. You see the amber dots disappear. The red ones sharpen. The green ones hold.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">You did not need to understand the code. You did not need to read a log file. You saw the problem, because the system rendered it in a way your brain could process instantly. The 13-millisecond image processing that MIT measured is doing the work that hours of log analysis used to do. Your eyes found the pattern. Your judgment named it. Your words fixed it.</p>
        </div>

        <figure class="my-8">
          <img src="/images/research/visualization-loop.svg" alt="The Visualization Loop: Think, Talk, See, Understand, Refine, Ship" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>This is the loop. Think about what you want. Talk to a system that can build it. See what it built. Understand whether it matches what was in your head. Refine the parts that do not. Ship when it does. Each cycle takes minutes, not days. Each cycle uses the part of your brain that is fastest and most reliable: your eyes.</p>

        <p>The loop works because it solves the translation problem. Before this, the path from idea to artifact went through code, through abstractions, through layers of representation that your visual brain could not engage with. You had to translate your visual thought into text, then trust that the text produced something that matched the original thought. Now the system shows you. The translation layer collapses. What you think and what you see are the same thing, or close enough that you can identify and fix the differences in real time.</p>

        <p>This is not limited to code. A person designing a brand can describe the feeling they want and see it rendered. A researcher mapping a thesis can watch the argument structure take shape visually and spot the gap in logic before writing a word. A founder describing a product to investors can show them exactly what they mean instead of hoping the words carry it. Every domain where the bottleneck was "I can see it in my head but I cannot make you see it" just got unlocked.</p>
      `,
    },
    {
      id: 'the-layer-that-was-missing',
      title: 'The Layer That Was Missing',
      content: `
        <p>Watch someone build with AI right now. They sit at a terminal. They describe what they want. Agents execute. The output appears. This already works. <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The three layers</a> that make this possible, the black box that handles execution, the map that shows project structure, the manager that tracks agent status, those exist. People are shipping entire products in a day using them.</p>

        <p>But something is still missing. The terminal handles what the system does. The map handles what the system looks like from above. Neither one handles what the creator sees in their head. Neither one bridges the gap between the idea as the person imagines it and the artifact as the system builds it. That bridge is the visualization layer. And it operates at a different level than the other three.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The black box is about execution. The map is about structure. The manager is about status. The visualization layer is about understanding. It is the layer where a human looks at what was built and knows, in a way that is faster than language and more reliable than analysis, whether it is right. Not whether the code compiles. Not whether the tests pass. Whether the thing matches the idea that started it.</p>
        </div>

        <p><a href="/writing/the-five-inputs" class="underline hover:opacity-60">Taste</a> is the human input that determines whether AI output is generic or good. The capacity to look at something and know, before you can articulate the full technical reason, that it is right or wrong. Taste has always been bottlenecked by the same problem: you could not see fast enough. A creative director reviews a design after it is built. A product person reviews a feature after it ships. The judgment happens after the fact, when the cost of changing course is highest. Visualization moves the judgment upstream. You see the output as it forms. Your taste engages in real time, at the speed your brain is designed for, not after a week of development when changing anything means starting over.</p>

        <p>This changes what humans can build in the same way that seeing changes what humans can think. The person who left the room does not just think better. They think differently. New categories of thought become possible because the visual input creates connections that words and abstractions cannot. A person who can see their algorithm working does not just debug faster. They notice patterns they never would have found in a log file. A person who can see their product taking shape does not just iterate faster. They have ideas they never would have had staring at code.</p>

        <p>The unlock is not AI that builds. The unlock is AI that shows you what it built, so you can think about it the way humans actually think. Close your eyes. Picture the thing you want to exist. Now open them and see it. That is development now.</p>
      `,
    },
  ],

  references: [
    { text: 'Potter, M. et al. (2014). "Detecting meaning in RSVP at 13 ms per picture." MIT, Attention, Perception, & Psychophysics.', url: 'https://news.mit.edu/2014/in-the-blink-of-an-eye-0116' },
    { text: 'Kosslyn, S. et al. (2019). "The human imagination: the cognitive neuroscience of visual mental imagery." Nature Reviews Neuroscience.', url: 'https://www.nature.com/articles/s41583-019-0202-9' },
    { text: 'Foxworth, L. (2017). "Visual images often intrude on verbal thinking." Harvard Gazette.', url: 'https://news.harvard.edu/gazette/story/2017/05/visual-images-often-intrude-on-verbal-thinking-study-says/' },
    { text: 'Mangtani, R. (2026). <em>The Future of PM: Why the future of project management is a terminal, a map, and a swarm of agents</em>.', url: '/writing/the-future-of-pm' },
    { text: 'Mangtani, R. (2026). <em>The Five Inputs: What humans are still for when everything else is automated</em>.', url: '/writing/the-five-inputs' },
  ],

  relatedWork: [
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Five Inputs', href: '/writing/the-five-inputs' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
