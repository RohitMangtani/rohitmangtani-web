import type { ResearchData } from '@/types/research';

export const thePositiveLoopData: ResearchData = {
  slug: 'the-positive-loop',
  date: '2026',
  title: 'The Positive Loop',
  subtitle: 'How AI broke the doom scroll and created the first productive dopamine cycle in internet history',

  onRamp: {
    description: 'AI tools are the first internet-native dopamine loop that makes you more capable instead of less. The internet spent 15 years perfecting addictive consumption. Now the same dopamine mechanics are wired to production. Almost nobody has noticed how fast this is moving.',
    whatItDoes: 'Walks through the shift from consumptive to productive dopamine loops, what changed technically, and why we are extremely early.',
    whatItDoesNot: 'Claim AI will solve everything, endorse any specific tool or company, or predict timelines.',
  },

  claim: 'For the first time in internet history, we have a dopamine loop that makes you more capable instead of less. AI tools have turned the most addictive interface ever built, the phone, into a production engine. And almost nobody has realized it yet.',

  sections: [
    {
      id: 'the-dopamine-problem',
      title: 'The Dopamine Problem We Built',
      content: `
        <p>Late-stage capitalism solved a problem nobody asked it to solve: how do you keep billions of people engaged when wages stagnate, housing is unaffordable, and traditional paths to success narrow every year?</p>

        <p>The answer was dopamine. Not drugs. Feeds.</p>

        <p>Social media, short-form video, infinite scroll, algorithmic recommendations. The entire consumer internet was optimized for one metric: time on screen. The more time you spend, the more ads you see, the more data you generate, the more precisely the next hit can be delivered. That is the documented business model of every major platform built since 2010.</p>

        <p>The result is what <a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a> documented: a population fluent in the language of self-improvement but structurally prevented from acting on it. People who can explain periodization, compound interest, and dopamine regulation. Who know the meta. Who have never played the game.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">The Loop That Broke Us</p>
          <p class="text-sm text-[var(--fg-muted)]">Scroll → dopamine hit → no output → guilt → scroll to avoid guilt → dopamine hit → repeat</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">Every cycle makes the next one easier to enter and harder to exit. The content gets better. The algorithm gets sharper. The user gets more passive. This was not a side effect. It was the product.</p>
        </div>

        <p>This connects directly to what <a href="/writing/honest-gambling" class="underline hover:opacity-60">Honest Gambling</a> explored: when traditional paths feel closed, people gravitate toward whatever offers the most legible dopamine. Doom scrolling was the cheapest, most accessible version of that. Zero cost, zero effort, immediate reward, zero output.</p>

        <p>We turned ourselves into dopamine-driven animals. Not because we are weak. Because the infrastructure was built to make us that way. Every pixel, every notification, every autoplay was designed by teams of engineers whose KPI was your attention.</p>

        <p>And then something changed.</p>
      `,
    },
    {
      id: 'what-changed',
      title: 'What Changed',
      content: `
        <p>Picture someone who has never written a line of code. They wake up, open their phone, describe a product idea in plain English. By lunch, it is live on the internet. Not a mockup. A working product with real users accessing it.</p>

        <p>That pipeline did not exist 18 months ago. It emerged that fast, and it works like this:</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="font-semibold text-[var(--fg)] mb-3">The New Pipeline</p>
          <div class="space-y-2 text-sm text-[var(--fg-muted)]">
            <p><strong class="text-[var(--fg)]">Phone</strong> → you have an idea while walking, commuting, lying in bed</p>
            <p><strong class="text-[var(--fg)]">→ AI conversation</strong> → you describe what you want in plain language</p>
            <p><strong class="text-[var(--fg)]">→ Computer</strong> → the AI writes the code, builds the design, creates the output</p>
            <p><strong class="text-[var(--fg)]">→ Server</strong> → it deploys, runs, serves users</p>
            <p><strong class="text-[var(--fg)]">→ Product</strong> → something real exists that did not exist an hour ago</p>
          </div>
        </div>

        <p>This pipeline did not exist 18 months ago. Not for regular people. Coding required years of learning. Design required specialized tools. Deployment required DevOps knowledge. Research required academic access or expensive databases. Automation required hiring engineers.</p>

        <p>Now a person with zero technical background can:</p>

        <ul>
          <li><strong class="text-[var(--fg)]">Run deep research studies</strong> that used to require a team of analysts, Bloomberg terminals, and weeks of work. Fetch real-time data, cross-reference sources, generate charts, publish findings. From a phone.</li>
          <li><strong class="text-[var(--fg)]">Build functional products:</strong> websites, tools, dashboards, automations. Not mockups. Working software that serves real users.</li>
          <li><strong class="text-[var(--fg)]">Automate repetitive work:</strong> data entry, report generation, monitoring, alerts. Tasks that used to require hiring someone or doing them manually every day.</li>
          <li><strong class="text-[var(--fg)]">Translate creative visions into real output.</strong> "I want a portfolio site that looks like this" becomes a real site in an afternoon. "I need a script that does X every morning" becomes a working cron job.</li>
        </ul>

        <p>The speed at which this became possible is the part nobody has processed. It is not that AI is improving gradually. The gap between "idea" and "deployed product" collapsed from months to hours, then hours to minutes. It happened so fast that most people still think "coding" is something you need a CS degree to do.</p>
      `,
    },
    {
      id: 'the-video-game',
      title: 'The Video Game That Plays Back',
      content: `
        <p>Think about this.</p>

        <p>A video game with the TAM of every single human being on earth. Not a niche. Not a demographic. Everyone.</p>

        <p>But unlike every other game, playing it actually does something for your life. It makes you money. Makes you more successful. Helps you translate creative visions into real output. Teaches you things you did not know. Solves problems you thought were too complex.</p>

        <p>And there is a DLC dropping every day. New capabilities. New models. New integrations. Every morning you wake up and the game is slightly more powerful than yesterday.</p>

        <p>And 99.99% of people are not even playing yet.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="font-semibold text-[var(--fg)] mb-3">That game is AI. Right now.</p>
          <p class="text-sm text-[var(--fg-muted)]">It is a literal description of what is happening. The interface is conversational. The learning curve is speaking your native language. The reward loop is seeing your ideas become real. The difficulty scales with your ambition. The content updates daily.</p>
        </div>

        <p>The gaming comparison matters because it explains the adoption curve. Games spread through word of mouth, through watching other people play, through the feeling of "I could do that." AI adoption will be faster than any technology in history because the barrier to entry is not learning a new skill. It is typing a sentence.</p>

        <p>The most powerful adoption curves happen when the cost of entry drops to near zero and the upside is visible. That is exactly what is happening here.</p>
      `,
    },
    {
      id: 'the-black-box',
      title: 'The Black Box Revolution',
      content: `
        <p>Technology has always been confusing. That was the moat. The reason most people never built anything was not a lack of ideas. It was the lack of a translation layer between "what I want" and "how computers work."</p>

        <p>AI collapsed that layer.</p>

        <p>You do not need to know what a server is. You do not need to know what React is. You do not need to know what an API endpoint does. You need to describe what you want. That is it. The AI translates human intent into technical implementation.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="font-semibold text-[var(--fg)] mb-3">Before vs. After</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left py-2 text-[var(--fg-muted)]">Task</th>
                  <th class="text-left py-2 text-[var(--fg-muted)]">Before AI (2023)</th>
                  <th class="text-left py-2 text-[var(--fg-muted)]">After AI (2026)</th>
                </tr>
              </thead>
              <tbody class="text-[var(--fg-muted)]">
                <tr class="border-b border-[var(--border)]">
                  <td class="py-2">Build a website</td>
                  <td class="py-2">Learn HTML/CSS/JS, months</td>
                  <td class="py-2">Describe it, hours</td>
                </tr>
                <tr class="border-b border-[var(--border)]">
                  <td class="py-2">Deep research</td>
                  <td class="py-2">Expert team + databases, weeks</td>
                  <td class="py-2">Conversational query, minutes</td>
                </tr>
                <tr class="border-b border-[var(--border)]">
                  <td class="py-2">Automate a workflow</td>
                  <td class="py-2">Hire an engineer, $5K-50K</td>
                  <td class="py-2">Describe the workflow, free</td>
                </tr>
                <tr class="border-b border-[var(--border)]">
                  <td class="py-2">Analyze data</td>
                  <td class="py-2">Learn Python/R, set up environments</td>
                  <td class="py-2">Upload data, ask questions</td>
                </tr>
                <tr class="border-b border-[var(--border)]">
                  <td class="py-2">Design a product</td>
                  <td class="py-2">Figma expertise, design system knowledge</td>
                  <td class="py-2">Describe the vision, iterate</td>
                </tr>
                <tr>
                  <td class="py-2">Publish research</td>
                  <td class="py-2">Academic infrastructure, peer review</td>
                  <td class="py-2">Write thesis, deploy, share</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>That is the black box that changes everything. You put an idea in. Something useful comes out. You do not need to understand the internals. You need to be good at having ideas and knowing what good looks like.</p>

        <p>The closest comparison is the printing press. Before Gutenberg, making a book required being a scribe, understanding bookbinding, having access to materials. After Gutenberg, you needed to have something to say. The press handled the rest. AI is the Gutenberg press for software, research, automation, and design. The skill shifts from <em>implementation</em> to <em>taste</em>.</p>
      `,
    },
    {
      id: 'the-positive-loop',
      title: 'From Scroll Addict to Efficiency Addict',
      content: `
        <p>Notice what happens when you ship something with AI. The code runs. The page loads. Something that did not exist five minutes ago is now live on the internet. Your brain fires. Not the dull buzz of a liked post or a finished scroll session. A hit that says: I made that.</p>

        <p>That feeling is the key to the whole thing. For the first time, there is an interface that is <em>as addictive as doom scrolling</em> but produces real output. The loop is not: scroll → content → brief pleasure → nothing. The loop is:</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">The Positive Loop</p>
          <p class="text-sm text-[var(--fg-muted)]">Idea → describe it to AI → watch it get built → dopamine → iterate → better output → more dopamine → ship it → real-world result → bigger idea → repeat</p>
          <p class="text-sm text-[var(--fg-muted)] mt-3">Every cycle makes the user more capable. The more you use it, the better you get at prompting, at knowing what to ask for, at recognizing quality output. The addiction curves upward instead of inward.</p>
        </div>

        <p>This has never happened before. Every previous internet dopamine loop was extractive: it took your time and gave you nothing durable in return. Likes, views, streaks. They vanish. You cannot compound a TikTok scroll session into anything.</p>

        <p>AI loops are compounding. The website you built yesterday is still live today. The automation you set up last week is still running. The research you published is still being read. Each session deposits something real into the world that persists after the dopamine fades.</p>

        <div class="grid grid-cols-2 gap-4 my-6">
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">Extractive Loop</p>
            <p class="text-sm text-[var(--fg-muted)]">Doom scrolling, social media, short video. Each session: temporary pleasure, zero output, increased craving for next session. Net effect: time spent, nothing built.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
            <p class="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-2">Productive Loop</p>
            <p class="text-sm text-[var(--fg-muted)]">AI tools, vibe coding, conversational building. Each session: real output shipped, skills improved, increased capability for next session. Net effect: time spent, something built.</p>
          </div>
        </div>

        <p>The key thing: <strong class="text-[var(--fg)]">the productive loop is just as addictive as the extractive one.</strong> The feedback is immediate. The reward is visible. The progress is tangible. The only difference is that when you come up for air, you have something to show for it.</p>

        <p>The phone, the device that turned us into dopamine addicts, is now the device that can turn us into builders. Same addictive qualities. First time they are pointed at production.</p>
      `,
    },
    {
      id: 'how-early',
      title: 'How Early We Are',
      content: `
        <p>Ask someone if they have used AI. They will say yes. Ask them what they built with it. Silence. Maybe they wrote an email. Maybe they asked it a trivia question. That is where most people are right now.</p>

        <p>The gap between "I have used ChatGPT" and "I use AI to build things" is the gap between having a phone and building an app. Most people have not used AI for anything beyond a chatbot conversation. They have not built a product, run research, automated a workflow, or shipped something real. The speed of change is hiding the size of the change.</p>

        <p>The barrier to entry feels annoying. That is the word people use. It feels like homework. It feels like learning a new tool when the last one was fine. But the growth underneath that friction is too exponential to sit out. The gap between people who conceptualize what AI can do and people who have not touched it yet is the largest capability mismatch in technology right now. And it is compounding. Every month the tools improve, the gap widens, and more people fall further behind without realizing how far behind they already are. Not because they are incapable. Because the on-ramp does not exist yet for how they think.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="font-semibold text-[var(--fg)] mb-3">The Under-Allocation Is Staggering</p>
          <div class="space-y-2 text-sm text-[var(--fg-muted)]">
            <p>A person sitting in a different country can text instructions from their phone and have a fully functional product coded, tested, and deployed by morning.</p>
            <p>A 19-year-old with zero coding experience can build and ship a SaaS product in a weekend.</p>
            <p>A researcher can pull real-time data from multiple APIs, generate charts, write analysis, and publish a study in a single sitting.</p>
            <p>An entrepreneur can automate 80% of their operational overhead by describing their workflows in plain language.</p>
          </div>
          <p class="text-sm text-[var(--fg)] font-medium mt-3">None of this was possible 18 months ago. And almost nobody is doing it yet.</p>
        </div>

        <p>Think early internet. In 1995, most people thought the internet was for email and maybe some research. The idea that it would restructure commerce, media, communication, and culture was not on the radar for 99% of the population. We are in the equivalent of 1995, except the adoption curve is compressed from decades to years.</p>

        <p>Low barriers, network effects, compressed time. These are the conditions that have always produced outsized outcomes. They are all present right now, producing productivity gains so quietly that most people and most institutions have not fully registered how fast things are moving.</p>
      `,
    },
    {
      id: 'the-pipeline',
      title: 'The Pipeline: What Is Actually Possible Now',
      content: `
        <p>Here is what this actually looks like in practice:</p>

        <div class="space-y-4 my-6">
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">Research → Publication → Live in Hours</p>
            <p class="text-xs text-[var(--fg-muted)]">Pull real-time data from Yahoo Finance, FRED, and public APIs. Generate interactive charts. Write analysis with honest scoring of predictions. Publish to a live website with OpenGraph images for social sharing. What used to require a research team and a publishing pipeline is now a conversation.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">Idea → Working Product → Deployed</p>
            <p class="text-xs text-[var(--fg-muted)]">Describe what you want. The AI writes the code. You iterate on the design by describing changes in plain language. It deploys. Users can access it. The entire cycle, from "I had an idea" to "it is live on the internet," can happen in a single sitting from a phone in any country on earth.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">Repetitive Task → Permanent Automation</p>
            <p class="text-xs text-[var(--fg-muted)]">Describe the task you do every day. The AI writes a script to do it. Set up a cron job. It runs forever without you. One conversation eliminates hours of weekly work, permanently. The ROI on that single interaction compounds every week for as long as the automation runs.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">Creative Vision → Real Design</p>
            <p class="text-xs text-[var(--fg-muted)]">"I want it to feel like this" is now a viable design brief. Describe the aesthetic, the interaction, the feeling. The AI translates taste into implementation. The skill is no longer knowing Figma or CSS. The skill is knowing what good looks like.</p>
          </div>
        </div>

        <p>Every one of these follows the same structure: <strong class="text-[var(--fg)]">human intent → natural language → AI translation → real output.</strong> The translation layer is the breakthrough. Everything else follows from it.</p>
      `,
    },
    {
      id: 'replacing-doom-scrolling',
      title: 'Replacing the Doom Scroll',
      content: `
        <p>It is 11pm. You are tired, stressed, done for the day. You reach for your phone. Normally this is when you open Instagram or TikTok and lose 45 minutes to a feed. But tonight you open a different app. You describe something you have been thinking about. Twenty minutes later, you are looking at a working prototype.</p>

        <p>That is the substitution that changes everything. Doom scrolling persists because it is the path of least resistance to dopamine. Zero activation energy. Immediate reward. The cost is invisible (time, attention, mental health) and deferred.</p>

        <p>AI tools have matched that activation energy. Open your phone. Describe what you want. Watch it happen. The reward is equally immediate. But instead of losing 45 minutes to a feed, you spent 45 minutes building something. The dopamine is equivalent. The output is not.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="font-semibold text-[var(--fg)] mb-3">The Substitution Effect</p>
          <p class="text-sm text-[var(--fg-muted)]">This is not about willpower. This is not about "just stop scrolling." This is about substitution. People do not quit addictive behaviors through discipline alone. They quit when a better reward shows up that scratches the same itch.</p>
          <p class="text-sm text-[var(--fg-muted)] mt-2">AI tools satisfy the same dopamine need as social media: immediate feedback, visible progress, the feeling of something happening. But they leave you with assets instead of nothing. First time in internet history that the replacement is as effortless and rewarding as the addiction it replaces.</p>
        </div>

        <p>The behavioral shift is already visible in early adopters. People who discover vibe coding or AI-assisted building report the same compulsive usage patterns as social media: checking in constantly, thinking about it when away, feeling pulled back to it. Except the output is products, research, automations, and skills instead of scroll sessions and parasocial relationships.</p>

        <p>This connects to the core idea in <a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a>: the spectator class exists because consuming optimization content was easier than doing optimization. AI eliminated that gap. The effort to <em>do</em> is now comparable to the effort to <em>watch</em>. For the first time, playing the game is as easy as watching someone else play it.</p>
      `,
    },
    {
      id: 'what-this-means',
      title: 'What This Means',
      content: `
        <p>Look at what is already happening around you. Someone who used to spend their evenings scrolling built a side project last month. A friend who "isn't technical" shipped a website over a weekend. A teenager with zero coding experience launched a working product and has paying users.</p>

        <p>These are not outliers. They are early signals of a structural shift in how humans spend their attention. Not gradual. Abrupt. Compressed by the same dynamics that compressed information and cultural change.</p>

        <div class="space-y-4 my-6">
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">For Individuals</p>
            <p class="text-xs text-[var(--fg-muted)]">The gap between people who use AI to build and people who do not is widening exponentially. Not because AI users are smarter. Because they found the positive loop and are compounding on it daily. Every day outside the loop, the distance grows.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">For Organizations</p>
            <p class="text-xs text-[var(--fg-muted)]">AI productivity gains are invisible to most institutions. A person who automated 80% of their job did not announce it. A startup that replaced a 10-person team with AI did not file a press release. The productivity revolution is happening silently, in individual workflows, and most organizations have not begun to account for it.</p>
          </div>
          <div class="p-4 border border-[var(--border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--fg)] mb-1">For Culture</p>
            <p class="text-xs text-[var(--fg-muted)]">The spectator class may shrink for the first time since the internet created it. When building is as easy and rewarding as watching, some fraction of spectators will become players. Even a small conversion rate, applied to billions of people, produces an output explosion that no economic model is currently accounting for.</p>
          </div>
        </div>

        <p>Technology reshapes behavior faster than institutions can adapt. Every time. AI is the most extreme version of this. It is not making existing processes faster. It is making previously impossible things trivial. And the people who internalize this earliest will compound advantages that look, in hindsight, like the early internet and early social media adoption curves combined.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg)]">The doom scroll turned us into dopamine-driven animals. The positive loop turns us into dopamine-driven builders. Same wiring. Same addiction. Different output. The infrastructure changed. The humans did not have to.</p>
        </div>
      `,
    },
  ],

  references: [
    { text: 'Mangtani, R. (2025). <em>The Gameable Society</em>.', url: '/writing/the-gameable-society' },
    { text: 'Mangtani, R. (2024). <em>Preference for Legible Risk</em>.', url: '/writing/honest-gambling' },
    { text: 'Harris, T. (2016). "How Technology is Hijacking Your Mind."' },
    { text: 'Alter, A. (2017). <em>Irresistible: The Rise of Addictive Technology</em>.' },
    { text: 'Huberman, A. (2023). "Dopamine, Motivation, and Drive." Stanford Neuroscience.' },
  ],

  dataAvailability: [
    'Behavioral observations from early AI adopter communities (2024-2026)',
    'Product development timelines compared across pre-AI and AI-assisted workflows',
    'Cross-referenced with existing research on coordination dynamics and behavioral economics',
  ],

  relatedWork: [
    { title: 'The Gameable Society', href: '/writing/the-gameable-society' },
    { title: 'Preference for Legible Risk', href: '/writing/honest-gambling' },
  ],

  footerVersion: 'February 2026 . Rohit Mangtani',
};
