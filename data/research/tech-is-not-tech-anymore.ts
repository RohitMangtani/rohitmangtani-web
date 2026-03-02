import type { ResearchData } from '@/types/research';

export const techIsNotTechAnymoreData: ResearchData = {
  slug: 'tech-is-not-tech-anymore',
  date: '2026',
  title: 'Tech Is Not Tech Anymore',
  subtitle: 'How I built all of this by talking to four robots',

  onRamp: {
    description:
      'This is not a technical walkthrough. This is me explaining to the people I care about what I actually do all day, why it matters, and why you should try it. No code. No jargon. Just what happened when I started treating AI like a friend I could delegate anything to.',
    whatItDoes:
      'Shows how one person with zero traditional development background built five products, ten articles, two websites, and a YouTube channel by talking to AI.',
    whatItDoesNot:
      'Teach you to code. You do not need to learn to code. That is the entire point.',
  },

  claim:
    'You do not need to be a tech person. You need to be a person with ideas who is willing to talk to a box.',

  sections: [
    {
      id: 'the-setup',
      title: 'The Setup',
      content: `
<p>Picture this. I have four terminal windows open on my screen. Each one has a Claude Code agent running inside it. They are working on different things. One is building a website feature. One is generating videos for a YouTube channel about Hindu scripture. One is fixing a bug in the system that manages the other three. One is writing an article.</p>

<p>I am not writing code. I am talking to them. In plain English. "Build me a pipeline that takes a hymn, turns it into a narrated video with AI-generated images, burns subtitles into it, and uploads it to YouTube with a descriptive title." And it does it.</p>

<p>That is my actual daily workflow. Not a demo. Not a concept. The thing running right now as you read this.</p>

<p>From the start of this, I wanted to create a place that knows me. Knows what I like. Knows what I like to do. Knows how I think. And this is the end result of about two months of work. It gave me natural direction for my career. That was my intended, unclear, and not really planned for but ultimate end goal. I used technology to understand myself better and figure out what I should be doing with my life.</p>

<p>You can do the same. And it is not hard. It is not technology. It is a friend you talk to.</p>
      `.trim(),
    },
    {
      id: 'what-i-actually-built',
      title: 'What I Actually Built',
      content: `
<p>Here is everything. All of it was built by talking to AI agents. I did not write code by hand. I described what I wanted, looked at the result, told it what was wrong, and it fixed it. Over and over until the thing worked.</p>
      `.trim(),
      subsections: [
        {
          title: 'Two Websites',
          content: `
<p><strong><a href="https://www.rohitmangtani.com" class="underline hover:opacity-60">rohitmangtani.com</a></strong> is the one you are reading right now. Clean, professional, white background. It has my research articles, my projects, and my lab experiments. <strong><a href="https://rmgtni.xyz" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">rmgtni.xyz</a></strong> is the sandbox. Dark theme, unfiltered, experimental. It has the career audit, the career playbook, and the tools I use internally.</p>

<p>Both sites are full production Next.js applications deployed on Vercel. I did not hire a designer. I did not hire a developer. I described what I wanted the pages to look like and the AI built them. When something looked off, I said "that button needs to be smaller" or "the spacing feels wrong" and it adjusted. The visualization loop. Think, talk, see, understand, refine, ship.</p>
          `.trim(),
        },
        {
          title: 'Ten Research Articles',
          content: `
<p>All published on <a href="/writing" class="underline hover:opacity-60">rohitmangtani.com/writing</a>. Topics range from <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">the future of project management</a> to <a href="/writing/the-human-yield" class="underline hover:opacity-60">AI labor economics</a> to <a href="/writing/the-positive-loop" class="underline hover:opacity-60">how AI broke the doom scroll</a> to <a href="/writing/safe-mode" class="underline hover:opacity-60">regime detection as a life skill</a>. Each one was researched and written through conversation with AI. I told it what I was observing, it helped me find data to back it up, I shaped the argument, it structured the prose. My ideas, AI execution.</p>
          `.trim(),
        },
        {
          title: 'Five Products',
          content: `
<p><strong><a href="/lab/hive" class="underline hover:opacity-60">Hive</a></strong> manages my fleet of four AI agents. It auto-detects them, shows me who is working and who is done, auto-approves routine prompts so they never sit idle, and prevents them from editing the same file at the same time. It is the operating system for everything else I do.</p>

<p><strong><a href="https://trycrawler.com" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Crawler</a></strong> takes any code repository and explains how it works with flowcharts and diagrams. Like reverse-engineering a blueprint from a building.</p>

<p><strong><a href="https://nudge-jade.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Nudge</a></strong> is smart life reminders. Health, car, finance. The things you forget because life is busy.</p>

<p><strong><a href="https://booksby-ten.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Booksby</a></strong> learns what books you like and recommends ones you will actually read.</p>

<p><strong><a href="https://www.youtube.com/@TheSleeplessRishi" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">The Sleepless Rishi</a></strong> is a fully automated YouTube channel. Hindu scripture, narrated by AI, with AI-generated artwork, subtitles, thumbnails, everything. I text my phone to tell it which deity to generate next, and the pipeline handles the rest. Nine deities, 59 planned videos.</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'how-it-works',
      title: 'How It Actually Works',
      content: `
<p>You open ChatGPT and ask it for a fact. It gives you a fact. That is useful but limited. You are using it like a search engine.</p>

<p>What I have is different. I have an app that lets me do anything by talking to four robots. The workflow and the efficiency is the selling point. I can text my phone to build me a pipeline that automates videos of Shiva's history and all his tales, uploads all the videos to YouTube in a folder with descriptive and creative titles, with my direction. It explains what it did and how it did it. Then I can tell it to change something and it changes it.</p>

<p>On a normal day, I open four terminal windows. Each one gets a task. "Finish the Hanuman chapter 2 video." "Fix the dashboard scroll bug." "Write the next section of the Safe Mode article." "Update the stotram website with the new hymns." Four things happening at once. I check in on each one, give feedback, redirect when something looks off. Like managing a team, except the team never sleeps, never forgets context, and works at the speed of thought.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">The AI is not doing the thinking. I am. The AI is doing the building. The skill is having ideas and knowing what good looks like.</p>
</div>

<p>That is it. That is the entire secret. You describe what you want. You look at what it built. You say what is wrong. It fixes it. You repeat until it is right. No code. No technical knowledge. Just opinions and persistence.</p>
      `.trim(),
    },
    {
      id: 'the-cheating-metaphor',
      title: 'The Cheating Metaphor',
      content: `
<p>Think about how cheating works in school. You go to your friend Rohan. "Yo, I got the homework. Can you send me the first half of the answers and I will send you the second half?" You both benefit. Nobody did all the work alone. You combined what each person had.</p>

<p>That is exactly what working with AI is. You have something the AI does not have: taste, judgment, life experience, opinions about what looks good and what feels right. The AI has something you do not have: the ability to write code, generate images, structure data, and build interfaces in seconds.</p>

<p>You trade. You give it your ideas and direction. It gives you execution. You tell it what is wrong. It fixes it. You are not doing anything confusing. You are just telling student one "yo, I got the first half of answers for you, send me the second half."</p>

<p>Cheating became a job. And it is the most productive job I have ever had.</p>
      `.trim(),
    },
    {
      id: 'the-visual-transformation',
      title: 'The Visual Transformation',
      content: `
<p>Here is the part that blew my mind. Even I know technology. I believe I do. And holy shit, my mind has been blown. I cannot conceptualize some of these things. It is supercharging the way I think.</p>

<p>The big thing is what I call the visual transformation layer. You have a problem. You describe it. But instead of getting back a wall of text or a technical explanation, you ask for a visual. A diagram. An interface. A chart. Something you can look at and immediately understand.</p>

<p>Imagine you are debugging something. Instead of reading through error logs line by line, you ask the AI to show you a visual map of what went wrong. Here is the flow. Here is where it broke. Here is the fix. You can see it. And when you can see it, you can describe what is wrong with it. And when you can describe what is wrong, the AI can fix it.</p>

<p>That loop is everything. Think, talk, see, understand, refine, ship. It is how every single thing on this website was built. It aligns with how humans naturally process information. We are visual. We are conversational. AI meets you where you already are.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">Being able to describe the problem, ask for a visual of it, see it, explain what is wrong, and have it fixed. That is the future. And it is already here.</p>
</div>
      `.trim(),
    },
    {
      id: 'why-im-telling-you-this',
      title: 'Why I Am Telling You This',
      content: `
<p>If you do not know technology, it is very hard to conceptualize these possibilities and what you can do. I get that. I have been sitting here watching people I care about do things the slow way when there is a faster path available. And the faster path is not hard. It is not technology. It is conversation.</p>

<p>I did not set out with a plan. I did not know what I wanted to do. I used AI in a way that felt natural, asked it to help me understand what I like to do and what my best options are with what I have and how I think. It amalgamated everything and showed me a direction. The career audit on <a href="https://rmgtni.xyz/lab/career-audit" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">rmgtni.xyz</a> was not something I planned. It was something that emerged from talking to AI about myself for long enough that it could reflect my own patterns back to me.</p>

<p>That is the real unlock. Not the websites. Not the YouTube channel. Not the products. The real unlock is that AI became a mirror. It showed me what I was already doing and helped me name it. And once I could name it, I could build toward it with intention.</p>

<p>I just need to set this up for you and you need to talk to it and use it for like a month. That is it. It is not hard. Do not worry about the complications, I can help. It is like a friend and it only gets easier as it grows. The more you talk to it, the more it knows you. The more it knows you, the better the output. The compound keeps running.</p>
      `.trim(),
    },
    {
      id: 'make-tech-sexy',
      title: 'Make Tech Sexy',
      content: `
<p>The number one job right now is to make technology accessible to people who have good brains but never thought of themselves as tech people. You do not need to be a tech nerd. You will fall in love with it. It aligns with how humans feel motivated to do work and think.</p>

<p>Everything you see on this website, every article, every product, every page, was built by one person talking to AI. Not a team. Not a company. One person with ideas, persistence, and the willingness to just keep talking to the box until the thing worked.</p>

<p>The technology is not the point. The technology is invisible. The point is that you have ideas, and now those ideas can become real in hours instead of months. You do not need to learn to code. You do not need to understand databases. You do not need a computer science degree. You need to know what you want, describe it clearly, and have the patience to iterate.</p>

<p>Eventually, you will talk to a box and it will give you what you want. Not even technology. Like you do not need to be a tech nerd. The box just listens, builds, and gets better at understanding you over time.</p>

<div class="p-6 border border-[var(--border)] rounded bg-[var(--bg-secondary)]">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">I am trying to save all the homies. Seriously. This is the tool. I can help you set it up. You just need to start talking to it.</p>
</div>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'Hive', href: '/lab/hive' },
    { title: 'The Reference Point', href: '/lab/the-reference-point' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'Close Your Eyes', href: '/writing/close-your-eyes' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
