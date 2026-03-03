import type { ResearchData } from '@/types/research';

export const theCompoundData: ResearchData = {
  slug: 'the-compound',
  date: '2026',
  title: 'The Compound',
  subtitle: 'What happens when you build with AI long enough that it starts building you back',

  onRamp: {
    description:
      'I wrote thirteen articles about what AI does to the economy, to jobs, to markets, to how things get built. This one is about what it did to me. Not the theory. The personal experience of learning faster than I thought was possible and discovering that the longer you use it, the more it changes how you think.',
    whatItDoes:
      'Traces the personal learning curve of building with AI, from the first website to compound self-knowledge.',
    whatItDoesNot:
      'Argue that AI makes you smarter automatically. The compounding only happens if you put in the work of documenting, organizing, and reflecting.',
  },

  claim:
    'AI did not just help me build things. It expanded how I think. The compounding is not in the tools. It is in me.',

  sections: [
    {
      id: 'the-resume-that-disappeared',
      title: 'The Resume That Disappeared',
      content: `
<p>Picture someone graduating and needing a resume. They open a template on Canva. They spend two hours formatting bullet points. They export a PDF, email it, and hope the person on the other end reads past the first line.</p>

<p>That was the starting point. I needed a resume. What I built was a website. Not because I planned to. Because once you start talking to AI about what you want to show, the container changes. A resume is a static page with dates and titles. A website is alive. It holds articles, projects, dashboards, live systems. It is the work, not a summary of the work.</p>

<p>Wix did not get replaced by a better Wix. It got replaced by a conversation. I described what I wanted the site to feel like, how the navigation should flow, what the reading experience should be. The AI built it. I looked at it, said that spacing is wrong, the font weight is too heavy, this section needs to breathe. It fixed it. That loop, describe, see, feel, adjust, is now the entire workflow for everything.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">The resume did not get upgraded. The concept of a resume disappeared. What replaced it is a living system that proves what you can do by being the thing you built.</p>
</div>

<p>Sharing resumes is different now. Modifying resumes is different. When someone asks what I do, I send a link. The link is not a document about my work. It is my work. Every article, every project, every system, live and running. <a href="/projects/the-reference-point" class="underline hover:opacity-60">The Reference Point</a> maps all of it to market language if anyone needs that translation. But the real resume is everything you are looking at right now.</p>
      `.trim(),
    },
    {
      id: 'the-amalgamation',
      title: 'The Amalgamation',
      content: `
<p>Watch someone use AI for the first time. They ask a question. They get an answer. They close the tab. That is how most people use it. A search engine with better grammar.</p>

<p>Now watch someone who has been using it for months. They do not ask questions. They have conversations. The AI knows their projects, their writing voice, their architectural decisions, their past mistakes. Every session starts with context from the last one. Every correction sharpens the next output. The system is not just a tool anymore. It is an amalgamation of everything you have ever told it, organized better than you could organize it yourself.</p>

<p>Tiago Forte built a framework called Building a Second Brain. Capture, organize, distill, express. Millions of people tried it with notebooks and Notion databases. The problem was always the same. Maintaining the system took so much effort that the system became another obligation. The organizing was the bottleneck. You would capture something interesting, forget to tag it, and it would disappear into a folder you would never open again.</p>

<p>AI obliterates that bottleneck. I do not organize anything. I talk. The system organizes. I write a messy thought into a conversation, and by the end of the session it is structured, referenced, connected to three other things I wrote last month that I had already forgotten about. The compound is not the AI getting smarter. It is me getting smarter because the AI surfaces patterns I cannot hold in my own head at once.</p>

<div class="p-6 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-8">
<p class="text-sm text-[var(--fg-muted)]">Thirteen articles. A four-agent management system. A YouTube pipeline producing sixty videos. A site crawler that reverse-engineers design decisions. A sacred text platform. All built in months, by one person, talking to a screen. The output is not the impressive part. The impressive part is that each project made the next one faster because the system already knew how I think, what I care about, and where I tend to make mistakes.</p>
</div>

<p>Google's research team recently built something called Titans, a memory architecture where the model learns to carry context forward at inference time instead of starting fresh. That is what working with AI already feels like from the human side. You are not resetting every day. You are continuing a conversation that started months ago. And the longer that conversation runs, the more it compounds. Not just the AI's understanding. Yours.</p>
      `.trim(),
    },
    {
      id: 'learning-yourself',
      title: 'Learning Yourself',
      content: `
<p>Think about the last time you had an idea that felt important but you could not explain it. It was in your head, fully formed in some abstract way, but the moment you tried to say it out loud or write it down, it fell apart. The structure was missing. The connections were there but invisible. You knew it mattered and you could not tell anyone why.</p>

<p>That is the state I lived in before I started writing these articles. I had intuitions about what AI was doing to work, to markets, to the economy. But they were scattered. I could rant about them to a friend and it would sound interesting for three minutes before the thread broke. I could not hold the whole argument at once.</p>

<p>Writing into AI changed that. Not because the AI had better ideas. Because the process of explaining a messy thought to a system that organizes it in real time teaches you what you actually think. You say something imprecise. The system reflects it back, structured. You read it and say no, that is not what I meant, it is more like this. And the act of correcting it is the act of clarifying your own thinking. You are not just writing an article. You are learning yourself.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">If you cannot organize a thought and explain it, you can write it into an article and read it back. The version you read is clearer than the version in your head. And it is remembered forever and shared to anyone.</p>
</div>

<p>This is where the compounding gets personal. <a href="/writing/the-human-sensor-layer" class="underline hover:opacity-60">The Human Sensor Layer</a> started as a feeling that something was happening to how people relate to markets and labor at the same time. It took a dozen conversations before that feeling became a three-tier framework with concrete mechanisms. <a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a> started as a list of things I noticed I was doing all day. It became a unifying framework that retroactively connected six other articles. I did not plan that arc. The arc emerged because the system remembered what I had written before and surfaced connections I had not made consciously.</p>

<p>The development layer is not just about building software faster. It is about compounding your own learning. The AI learns you. And through that reflection, you learn from yourself, in the most organized format you have ever had access to.</p>

<p>There is another dimension that caught me off guard. The better you get at explaining thoughts to AI, the better you get at explaining thoughts to yourself and to other people. A month ago I could not articulate half of what is in these articles. The repetition of describing, correcting, reframing, and describing again trained something. Not the AI. Me. Each cycle of "no, that is not what I meant, it is more like this" sharpened how I think. The efficiency of that loop is exponential. Better explanations produce better output. Better output reveals what you actually meant. Clearer meaning produces sharper explanations. The flywheel does not plateau. It accelerates.</p>
      `.trim(),
    },
    {
      id: 'the-homework-split',
      title: 'The Homework Split',
      content: `
<p>Sit in any study group and watch how the good ones work. Someone says I have the first half of the problem set, who has the second half. They swap. Each person puts in half the effort and gets the full picture. The skill is not knowing everything. It is knowing what you have and finding someone who has the rest.</p>

<p>Working with AI is the same split, except the halves are different species of intelligence. I have the understanding of my own nuances, what matters, what does not, what reads like bullshit and what reads like real. The AI has the execution capacity, the recall, the ability to structure and format and build at a speed I cannot match. Neither half works alone. A person with perfect taste and no tools just has opinions. A tool with infinite speed and no taste just produces slop.</p>

<p>I watched this happen in real time during conversations. I would tell a friend, keep talking, you are onto something, how do I format this paragraph. The friend brings the raw insight. I bring the structural intuition. That is the same dynamic playing out with AI, except the AI is both the friend with the raw material and the formatting engine. My job is to be the sensor. The filter. The one who says no, that is not right, try again, closer, there.</p>

<p>Everyone around you knows something you do not. A friend in finance sees how incentives structure behavior. Someone in operations sees where processes break. A designer sees what feels wrong before they can name it. The skill is not knowing everything. It is extracting the right signal from the right person, piecing it together into something coherent, and then explaining that to AI well enough that it builds what you actually meant. The more people you extract from, the richer the input. The richer the input, the better the output compounds.</p>

<div class="p-6 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-8">
<p class="text-sm text-[var(--fg-muted)]">I wrote about this in The Human Sensor Layer using C pointers as the metaphor. A pointer does not hold the data. It holds the address that tells the program where to look. You are the pointer now. The AI has the processing power. What it does not have is the address. Your entire value is knowing where to aim it.</p>
</div>

<p>The development layer changed completely because of this split. I do not write code. I describe what I want, feel whether the output is right, and describe the gap between what I got and what I meant. That is the whole interaction. The homework split. You bring your half, I bring mine. Neither of us can do it alone. Both of us together are unreasonably fast.</p>
      `.trim(),
    },
    {
      id: 'feel-it',
      title: 'Feel It',
      content: `
<p>Open a web app you use every day. Notice how the scroll feels. The padding around elements. The way a button responds when you tap it. You did not learn to notice these things. You just know when they are wrong. Something feels off. You cannot always explain why. You just feel it.</p>

<p>That feeling is the most valuable thing in development right now. Web apps are smooth because someone looked at them and said no, this is inconvenient, I want this instead. The visual medium lets you feel what works. You can see the spacing, touch the interaction, sense the rhythm. Your body knows before your brain does whether something is right.</p>

<p>Now try the same thing with a trading algorithm. Numbers on a screen. A backtest that says 12% annualized return with a 0.8 Sharpe ratio. You cannot feel those numbers. You cannot see the moments it was wrong. You cannot sense where it panicked and where it held. The algorithm might be brilliant or it might be garbage and the only way to know is to read spreadsheets until your eyes blur. That is why web development moved so fast and algorithmic development stayed slow. The feedback loop depends on whether you can feel the output.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="text-lg text-[var(--fg)] font-medium leading-relaxed">AI transforms anything into a format you can feel. That is the unlock. Take the trading algorithm and ask for a timeline where every winning trade is green and every losing trade is red, sized by magnitude, with drawdown periods shaded. Now you can see it. Now you can feel where it fails. Now your taste engages.</p>
</div>

<p>I wrote about this in <a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a>. The bottleneck in development was never code. It was seeing. When you can see the output, you can feel whether it is right. When you can feel it, you can describe what is wrong. When you can describe it, the AI can fix it. That loop is the whole job. And it works on everything now, not just websites. Algorithms, data pipelines, system architectures, research structures. Anything that used to be opaque can be transformed into something you can see and sense and refine.</p>

<p>The most beneficial way of feeling a thing depends on the thing. For a web app it is visual. For audio it is listening. For a system architecture it might be a diagram or a dashboard with stoplights. The format does not matter. What matters is that you are no longer stuck reading raw output and trying to reason about whether it works. You can feel it. And feeling is fast.</p>
      `.trim(),
    },
    {
      id: 'the-expansion',
      title: 'The Expansion',
      content: `
<p>Look at this site. Thirteen articles, each one building on the last. A four-agent system that manages itself. A YouTube channel with sixty produced videos across nine deities in two languages. A sacred text platform serving real content. A crawler that reverse-engineers how websites were built. All of it by one person in a few months. That is not a productivity story. That is a learning story.</p>

<p>Every one of those projects taught something that made the next one possible. Hive taught context management. The YouTube pipeline taught automation at scale. The articles taught me to frame my own thinking. The compound is not in what got built. It is in what I learned by building it. Each project was a forcing function that organized a part of my mind I did not have access to before.</p>

<p>I have never learned this much this fast in my life. And I am not talking about technical skills. I am talking about the ability to frame a thought, connect it to other thoughts, see where the gaps are, and fill them. The articles are evidence. They started rough and got tighter because the system remembered every correction, every voice note, every editorial decision. The writing voice file is eighty corrections deep. Each one compounds.</p>

<div class="p-6 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-8">
<p class="text-sm text-[var(--fg-muted)]">This is the thing nobody talks about. The AI discourse is about jobs and productivity and whether it will replace people. The part that actually matters, the part I experienced, is that it makes you better at thinking. Not because it thinks for you. Because it organizes your thinking fast enough that you can iterate on your own ideas in real time instead of losing them.</p>
</div>

<p>My mind is expanding. That sounds dramatic and I do not care. It is the most accurate description of what this feels like. Every article I wrote made the next one clearer. Every system I built made the next one faster. Every thought I organized made the next thought more precise. The compound is not the AI. The compound is you. The AI is just the surface you think against, fast enough that your own reflection comes back before you forget what you were looking at.</p>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'Tech Is Not Tech Anymore', href: '/writing/tech-is-not-tech-anymore' },
    { title: 'The Five Inputs', href: '/writing/the-five-inputs' },
    { title: 'Close Your Eyes', href: '/writing/close-your-eyes' },
    { title: 'The Human Sensor Layer', href: '/writing/the-human-sensor-layer' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'Hive', href: '/projects/hive' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
