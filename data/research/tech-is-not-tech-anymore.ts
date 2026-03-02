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
      'Shows how one person built multiple projects and ten articles by talking to AI.',
    whatItDoesNot:
      'Teach you to code. That is the entire point.',
  },

  claim:
    'The future of work is a screen with stoplights on it. Green means running. Red means done. You text your phone to start one. That is it.',

  sections: [
    {
      id: 'the-stoplights',
      title: 'The Stoplights',
      content: `
<p>I am laying on my bed. On my screen there are four boxes. Each one has a stoplight. Green means that robot is working. Red means it is done and waiting for me.</p>

<p>I see a red light. I pick up my phone and text it a task. The light turns green. I go back to whatever I was doing.</p>

<p>Four cars in a garage. I can see which ones are running. I text my phone to start one again. That is the entire flow. No terminal. No code. Just lights and a phone.</p>

<p>Everything you see on <a href="https://www.rohitmangtani.com" class="underline hover:opacity-60">this site</a>, <a href="/writing" class="underline hover:opacity-60">ten articles</a>, and <a href="/lab/hive" class="underline hover:opacity-60">Hive</a> was built this way. Watching lights. Texting tasks. Looking at what came back and saying whether it felt right.</p>
      `.trim(),
    },
    {
      id: 'the-visual-transformation',
      title: 'The Visual Transformation',
      content: `
<p>The reason this works is not the AI. It is that you can see what the AI is doing.</p>

<p>That is the entire breakthrough. The visual transformation layer. You have a bug. Instead of reading error logs, you ask for a visual of what went wrong. Here is the flow. Here is where it broke. Here is the fix. You can see it. You have a project. Instead of a spreadsheet, you get a map. Here is what is done. Here is what is left. Here is where to go next. You can see it.</p>

<p>The visual transformation of the bug. The visual transformation of what is going on. The visual transformation of the map to follow. That is the big thing.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">When you can see it, you can feel whether it is right. When you can feel it, you can describe what is wrong. When you can describe it, the AI can fix it. That is the loop. That is the whole job.</p>
</div>

<p>Humans are the node in this system. Not the engine, not the builder, not the coder. The feeling and seeing layer. You look at what the AI made and you know whether it hits or not. The spacing is off. The title does not land. Something feels wrong. You cannot always explain why. You just know. That feeling is the skill. Everything else is delegated.</p>
      `.trim(),
    },
    {
      id: 'the-point',
      title: 'The Point',
      content: `
<p>It is not technology anymore. Eventually you will talk to a box and it will give you what you want. You do not need to be a tech person. You need to be a person who can see something, feel whether it is right, and describe the gap. That is it.</p>

<p>It is like a friend. You talk to it. It gets easier the more you use it. The more it knows you, the better the output. It compounds. I can help you set it up. You just need to use it for a month.</p>

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
