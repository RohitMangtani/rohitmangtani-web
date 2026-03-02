import type { ResearchData } from '@/types/research';

export const techIsNotTechAnymoreData: ResearchData = {
  slug: 'tech-is-not-tech-anymore',
  date: '2026',
  title: 'Tech Is Not Tech Anymore',
  subtitle: 'How I built all of this by talking to four robots',

  onRamp: {
    description:
      'This is me explaining to the people I care about what I actually do all day and why you should try it. No code. No jargon.',
    whatItDoes:
      'Shows how one person built five products, ten articles, two websites, and a YouTube channel by talking to AI.',
    whatItDoesNot:
      'Teach you to code. That is the entire point.',
  },

  claim:
    'You do not need to be a tech person. You need to be a person with ideas who is willing to talk to a box.',

  sections: [
    {
      id: 'green-light-red-light',
      title: 'Green Light, Red Light',
      content: `
<p>I am laying on my bed. On my screen there are four boxes. Each one has a stoplight. Green means that robot is working. Red means it is done and waiting for me.</p>

<p>I see a red light. I pick up my phone and text it: "Build me a landing page for the new project." The light turns green. The robot designs the layout, writes the copy, styles it, and deploys it live. I go back to whatever I was doing.</p>

<p>That is it. That is the workflow. Green means working. Red means done. I am the person who looks at the lights and decides what to start next.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">Four cars in a garage. I can see which ones are running. I text my phone to start one. That is the future of work and it is already my present.</p>
</div>
      `.trim(),
    },
    {
      id: 'the-feeling-layer',
      title: 'The Feeling Layer',
      content: `
<p>Here is what humans are actually for in this setup. Not typing. Not coding. Not building. Feeling.</p>

<p>You look at something the AI made and you feel whether it is right. The spacing looks off. The title does not hit. The color is wrong. You cannot always explain why. You just know. That feeling is the entire job.</p>

<p>You describe what feels wrong. The AI fixes it. You look again. Better. Still not right. You describe the gap. It adjusts. You repeat until the thing feels right. That is it.</p>

<p>Humans are the node in this system. Not the engine, not the builder, not the coder. The node. The thing that feels, sees, and decides. Everything else is delegated.</p>
      `.trim(),
    },
    {
      id: 'the-visual-layer',
      title: 'The Visual Layer',
      content: `
<p>The breakthrough is not the AI. The breakthrough is that you can see what it is doing.</p>

<p>You have a problem. You describe it. Instead of getting a wall of text back, you get a picture. A diagram. A map. Something you can look at and immediately understand. And when you can see it, you can point at the part that is wrong. And when you can point at it, the AI can fix it.</p>

<p>That loop is everything. Talk, see, feel, adjust. It is how humans naturally work. We are visual. We are conversational. AI finally meets us where we already are instead of asking us to meet it in a terminal or a spreadsheet.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">The visual transformation of what is going on. The visual transformation of the map to follow. That is the big thing. Make tech something you can see and feel, and suddenly anyone can use it.</p>
</div>
      `.trim(),
    },
    {
      id: 'what-i-built-this-way',
      title: 'What I Built This Way',
      content: `
<p>Everything on this website. <a href="https://www.rohitmangtani.com" class="underline hover:opacity-60">This site</a> and <a href="https://rmgtni.xyz" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">rmgtni.xyz</a>. <a href="/writing" class="underline hover:opacity-60">Ten articles</a>. Five products: <a href="/lab/hive" class="underline hover:opacity-60">Hive</a> (the stoplight screen), <a href="https://trycrawler.com" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Crawler</a>, <a href="https://nudge-jade.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Nudge</a>, <a href="https://booksby-ten.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Booksby</a>, and a <a href="https://www.youtube.com/@TheSleeplessRishi" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">fully automated YouTube channel</a>. All of it built by talking to AI. Not by writing code.</p>

<p>I did not know what I wanted to do with my life. I started talking to AI about what I like, how I think, and what I am good at. It reflected my own patterns back to me. The <a href="https://rmgtni.xyz/lab/career-audit" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">career audit</a> was not planned. It emerged. The direction was not planned. It emerged. Two months of talking to a box and the box showed me what I was already doing.</p>
      `.trim(),
    },
    {
      id: 'the-point',
      title: 'The Point',
      content: `
<p>You do not need to know technology to do this. If you do not know technology, it is hard to even picture what is possible. I get that. That is why I am writing this.</p>

<p>It is like a friend. You talk to it. It gets easier the more you use it. The more it knows you, the better the output. It compounds. I can help you set it up. You just need to use it for a month.</p>

<p>It is not hard. It is not technology. It is conversation. Cheating became a job. You give it your half of the answers, it gives you the other half. You trade ideas for execution. That is the whole game.</p>

<div class="p-6 border border-[var(--border)] rounded bg-[var(--bg-secondary)]">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">I am trying to save all the homies. This is the tool. Talk to it.</p>
</div>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'Hive', href: '/lab/hive' },
    { title: 'The Reference Point', href: '/lab/the-reference-point' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
