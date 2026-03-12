import type { ResearchData } from '@/types/research';

export const theSplitData: ResearchData = {
  slug: 'the-split',
  date: '2026',
  title: 'The Split',
  subtitle: 'How AI is pushing everyone toward the thing they actually care about, and why both directions work',

  onRamp: {
    description:
      'Right now, someone is watching AI build things they used to get paid to do. Across town, someone else is opening a ceramics studio. Down the street, a third person is scrolling, aware of both, committed to neither. All three of them will end up somewhere good. This article is about what pulls people toward the thing they were always going to care about.',
    whatItDoes:
      'Maps the structural divergence happening across labor, identity, and community as AI reshapes what it means to be productive. Traces how commitment in either direction creates compounding loops and why the middle is unstable.',
    whatItDoesNot:
      'Make market predictions, endorse specific technologies, or argue that one path is better than the other.',
  },

  claim:
    'Human beings are sorting into two viable paths: AI mastery or deep craft identity. Both create compounding loops. Both generate meaning. The middle is where most people sit before they find the thing that pulls them. The shift is not a threat. It is a filter that pushes everyone toward something real.',

  sections: [
    {
      id: 'the-feeling-nobody-names',
      title: 'The Feeling Nobody Names',
      content: `
<p>Watch someone discover that an AI can do their job. Not in theory. In practice. They see the output. It is clean. It is fast. It took minutes instead of the days they would have spent. And the thing that hits is not anger or fear. It is a specific kind of quiet. A recalibration happening in real time, where the internal model of "what I am worth" adjusts against something they did not expect to compete with.</p>

<p>That feeling has a name now. Researchers at the University of Florida published findings in early 2026 documenting what they call AI Replacement Dysfunction, a clinical pattern where the persistent threat of professional obsolescence triggers anxiety, insomnia, loss of identity, and a collapse in self-worth that mirrors grief. The mechanism is not job loss itself. It is the anticipation. The slow awareness that the thing you trained for, the thing that made you you in a professional sense, is being reproduced by a system that does not sleep or negotiate or need encouragement.</p>

<p>The World Economic Forum's 2025 Jobs of the Future report found that 41% of employers plan to reduce their workforce by 2030 due to AI. In the first two months of 2026 alone, 32,000 technology jobs disappeared. These are not hypothetical projections. These are people who had desks and paychecks and then did not.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">The displacement is not just economic. It is psychological. When your job is also your identity, and the job starts dissolving, what dissolves with it is not just income. It is the story you tell yourself about who you are and why you matter. That is the part nobody talks about in the productivity charts. But that dissolution also clears space. When the old story ends, a new one can start.</p>
</div>

<p>But here is what is actually happening beneath the anxiety. People are not all responding the same way. They are splitting. Some are leaning into the thing that displaced them, learning it, mastering it, becoming the person who directs the machine instead of competing with it. Others are pulling away entirely, doubling down on things machines cannot replicate, craft, community, physical presence, belief. And a third group is doing neither yet. They are aware of both movements, participating in none, sitting in a middle ground that will eventually push them toward one side or the other.</p>

<p>The split is not a prediction. It is already happening. And the sorting is not a crisis. It is people finding the thing that was always going to be theirs.</p>
      `.trim(),
    },
    {
      id: 'the-positive-loop-on-both-sides',
      title: 'The Positive Loop on Both Sides',
      content: `
<p>Picture two people who graduated the same year, similar backgrounds, similar ambitions. One of them started building with AI six months ago. The other opened a woodworking shop.</p>

<p>The AI builder describes a product idea into a terminal. By evening, it exists. A working thing, deployed, accessible. The dopamine fires. They iterate. The next version is better. The system remembers their preferences, their architectural decisions, their past mistakes. Each cycle makes the next one faster. They are not just building products. They are compounding capability. <a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> documented this mechanism in detail: the first productive dopamine cycle in internet history, where the feedback from shipping real output creates the same addictive pull that doom scrolling used to, except the output is tangible and the person gets more capable with each iteration.</p>

<p>The woodworker is experiencing something structurally identical but through entirely different materials. They cut a joint. It fits. The grain lines up. Someone walks into the shop and says "you made this?" That recognition fires the same circuit. They post a photo. People respond. A community forms around the work. Local customers come back. The craft deepens. Each piece is better than the last because the hands learned something the mind cannot articulate. The loop is the same: commitment, output, recognition, identity reinforcement, deeper commitment.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
<p class="text-sm text-[var(--fg-muted)]">The mechanism underneath both paths is identical. Commitment produces output. Output generates feedback. Feedback reinforces identity. Identity deepens commitment. The loop compounds. The content of what is being built does not matter as much as the structural fact that a loop exists and is being fed. <a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> describes this in the context of AI tools, but the architecture is universal. Any domain where effort produces visible results and those results attract community can activate the same cycle.</p>
</div>

<p>The AI builder's loop runs on leverage. Each cycle multiplies output because the tools compound. The woodworker's loop runs on depth. Each cycle adds skill that cannot be automated because it lives in muscle memory and material intuition. Both loops are real. Both produce meaning. Both create the kind of identity that sustains a person through uncertainty, because the person can point at something and say: I built that. I am the kind of person who builds this.</p>

<p>The critical observation is that the loop does not care which direction you pick. It cares that you pick one.</p>

<figure class="my-8">
<img src="/images/research/the-split-horseshoe.svg" alt="Horseshoe diagram showing AI mastery and deep craft as two extremes that share commitment, identity, community, and compounding loops, with the unstable drifting middle at the bottom" class="w-full rounded-lg border border-[var(--border)]" />
</figure>

<p>There is a concept in political theory called horseshoe theory. The idea is that the far ends of a spectrum are closer to each other than either is to the center. The same structure applies here. The AI builder and the woodworker have more in common with each other than either has with the person scrolling in the middle. Both chose. Both produce. Both compound. Both have identity. Both have community. The thing they build is different. The structure of how they build meaning is the same.</p>
      `.trim(),
    },
    {
      id: 'identity-buckets',
      title: 'Identity Buckets',
      content: `
<p>Walk through a coworking space right now. One person is running four AI agents in parallel, building a product they described in plain English that morning. Next to them, someone is hand-lettering wedding invitations for a business they started on Instagram. Down the hall, a group is meeting about a community garden. In the corner, someone is teaching a pottery class that has a three-month waitlist.</p>

<p>These people do not share a skill set. They share a structural pattern. Each one has committed to something specific enough to generate a compounding identity. The AI builder identifies as a builder. The calligrapher identifies as an artisan. The garden organizer identifies as a community leader. The potter identifies as a teacher. The thing they chose is less important than the fact that they chose.</p>

<p>What is forming, across all of them, is a set of behavioral categories that people sort themselves into when the middle ground stops feeling stable. Some of these are new. Some are ancient with new surfaces.</p>

<p><strong class="text-[var(--fg)]">Technology builders.</strong> People who treat AI as the medium itself. They are not using AI to do their old job faster. They are building things that could not exist without it. Products, research pipelines, automation systems, creative tools. Their identity is tied to what they ship. The output is the proof.</p>

<p><strong class="text-[var(--fg)]">Craft loyalists.</strong> People who rejected digital acceleration and leaned fully into physical, tangible, human-made things. The global handicrafts market was valued at $704.7 billion in 2022 and is projected to nearly double by 2028. This is not nostalgia. It is a growing economic sector driven by people who want things made by hands, not algorithms. The appeal is not inefficiency. It is authenticity as a scarce resource in a world flooded with generated content.</p>

<p><strong class="text-[var(--fg)]">Community architects.</strong> People whose identity is tied to the group, not the output. They organize. They host. They create spaces where others show up. The value they produce is belonging. In a landscape where AI can generate any artifact, the thing it cannot generate is the feeling of being part of something with other humans who chose to be there.</p>

<p><strong class="text-[var(--fg)]">Platform natives.</strong> People who build on and for specific ecosystems. Their expertise is not transferable and they do not want it to be. They know one platform deeply enough that they are irreplaceable within it. The platform's growth is their growth. The stickiness is mutual.</p>

<p><strong class="text-[var(--fg)]">Belief holders.</strong> People who denominate their identity into something larger than themselves. A cause, a culture, a movement, a philosophy. When everything feels uncertain, locking into a belief creates a stable reference point that compounds as the community around it grows.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">The common thread is not what people chose. It is that they chose. Each bucket has an internal compounding loop. Commitment attracts others who committed to the same thing. The group reinforces the identity. The identity deepens the commitment. The loop sustains itself. The specific direction matters less than the structural fact of having one.</p>
</div>
      `.trim(),
    },
    {
      id: 'why-platforms-hold',
      title: 'Why Platforms Hold',
      content: `
<p>Open your phone. Count the apps you use daily. Now think about why. It is not because they are the best. It is because they accumulated enough of your time, data, preferences, social connections, and habits that leaving would feel like losing a piece of yourself. That is platform gravity. And it is the mechanism that turns casual users into identity-bound participants.</p>

<p>The pattern is simple but the compound effects are enormous. A platform starts with zero friction. Easy to join. Easy to use. No commitment required. Then it improves continuously. Every interaction makes the next one smoother. Your preferences are learned. Your network is mapped. Your history is stored. At some point, the cost of leaving exceeds the cost of staying, not because the platform is holding you hostage, but because you have deposited so much of yourself into it that the platform and your identity overlap.</p>

<p>This is not just social media. It is happening everywhere AI touches. The builder who has been using one AI tool for six months has built a relationship with it. It knows their coding style, their project architecture, their voice. Switching tools means starting that context from scratch. <a href="/writing/the-compound" class="underline hover:opacity-60">The Compound</a> describes exactly this: the longer you build with a system, the more the system reflects you, until the boundary between your thinking and the tool's output blurs. That is stickiness at the deepest level, not feature lock-in but identity lock-in.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
<p class="text-sm text-[var(--fg-muted)]">The same compound works for communities. A ceramics studio that has been running weekly workshops for two years has built something no new studio can replicate overnight: shared history. Inside jokes. A rhythm. People who know each other's names. That accumulated social fabric is the community equivalent of platform stickiness. It is not the clay. It is the people who show up on Thursdays.</p>
</div>

<p>Time compression accelerates all of this. AI leverage means the builder can create in days what used to take months. Network accumulation means the community architect can reach and organize people at scales that required institutions a generation ago. Both loops run faster now than they ever could before. The implication is that whichever direction someone picks, the compounding starts immediately and accelerates in ways the previous generation's timelines cannot account for.</p>

<p>The flip side is that someone who picks nothing also compounds. They accumulate no platform gravity. They build no community fabric. They develop no deep tool fluency. Each day without a direction is not neutral. It is a widening gap.</p>
      `.trim(),
    },
    {
      id: 'the-unstable-middle',
      title: 'The Unstable Middle',
      content: `
<p>Sit in a coffee shop and look around. Someone is building. Someone is making. Someone is organizing. And then there are the people on their phones, scrolling, vaguely aware that something is changing but not yet moved to do anything about it. They are not unintelligent. They are not lazy. They are in the middle. And the middle is where most people start before something pulls them out.</p>

<p>The middle is unstable because it does not generate a loop. There is no commitment to produce output. No output to generate feedback. No feedback to reinforce identity. No identity to deepen commitment. The person in the middle consumes information about both paths without walking either one. They read about AI breakthroughs. They see craft revival posts. They think "I should do something." And then the thought dissolves into the next scroll.</p>

<p>Fortune reported in February 2026 on what Bank of America calls the "E-shaped economy." The wealth gap is no longer just between higher and lower earners. The middle is splitting from both ends simultaneously. People are moving toward extremes, not because extremes are inherently better, but because the middle has stopped being a stable equilibrium. Research published in Science Advances found that under conditions of rising inequality, different sub-groups tend to adopt risk-averse, in-group-favoring strategies. They cluster. They commit. They sort into tribes. The people who do not sort get left in a no-man's land where nothing compounds.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">This is not a judgment about ambition. It is a structural observation about loops. A system that receives no input produces no output. A person who commits to nothing specific generates no feedback to compound on. The middle feels safe because it avoids the risk of choosing wrong. But the pressure of the middle is also what eventually pushes people into a direction. Nobody stays in the middle forever. Something pulls. A project that clicks. A community that resonates. A skill that feels right in your hands. The loop activates the moment you pick something and mean it.</p>
</div>

<p>Microsoft's Global AI Adoption report from January 2026 found that only 16.3% of the global population uses generative AI tools. The largest divide is by age, with a 53.6 percentage-point gap between the most and least active demographics. Education and income divides add another 21 points each. These are not adoption statistics. They are sorting statistics. The people on one side of the gap are compounding. The people on the other side are not. And the gap between those two groups widens every day that the non-adopters stay in the middle.</p>

<p>But the same logic applies in the other direction. Someone who spends all day consuming AI content but never builds anything is in the middle too. Someone who admires craft but never picks up a tool. Someone who joins online communities but never contributes. Consumption without commitment is the middle, regardless of what is being consumed. The loop only activates when the person produces something and that production becomes part of who they are.</p>
      `.trim(),
    },
    {
      id: 'adaptive-sorting',
      title: 'Adaptive Sorting',
      content: `
<p>Look at Gen Z right now. Forty-nine percent say their top career motivation is being their own boss. Forty-two percent say it is pursuing a passion. Over 83% either have a side hustle or know someone who does. These numbers are not about entrepreneurship in the traditional sense. They are about identity construction. When the institutions that used to provide stable identity, the career ladder, the company loyalty, the thirty-year tenure, dissolve, people build their own scaffolding.</p>

<p>The creator economy tells part of the story. Over 500 million people globally now monetize skills, passions, or beliefs online. The market was $254 billion in 2025, projected to hit $314 billion in 2026 and over $2 trillion by 2035. Those are not influencer numbers. That is a structural economic shift where identity-driven production is becoming a primary economic activity, not a side one.</p>

<p>The AI side of the split is moving just as fast. The people who learned to build with AI six months ago are already running systems that would have required entire teams a year before that. <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> documented how one person with a terminal and an agent swarm now ships what used to take a team of twelve a quarter. <a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a> identified what those people are actually contributing: taste, direction, judgment, presence, context-holding. The machine does the execution. The human provides what the machine cannot generate on its own.</p>

<div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
<p class="text-sm text-[var(--fg-muted)]">The sorting is adaptive because it responds to the environment. In a world where machines handle execution, the viable human positions move to the edges. One edge is mastering the machines. The other edge is doing what machines cannot. Both are real. Both are growing. The middle, where humans try to compete with machines on execution, is the position that shrinks. Not because those people are failing. Because the ground they are standing on is being absorbed from both sides.</p>
</div>

<p>This is not new. Every major technological shift produced the same pattern. When the printing press arrived, scribes did not all become printers. Some became printers. Some became artists. Some became religious leaders whose authority depended on being something a machine could not replicate. The scribes who tried to keep scribing, doing the same thing a machine now did faster, were the ones who disappeared. Not because they were bad at scribing. Because the value of scribing collapsed.</p>

<p>The same structural logic is playing out now at a scale and speed that the printing press comparison does not fully capture. The timeline is not decades. It is quarters. <a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> showed that the productive dopamine cycle now runs in hours, not years. Someone who starts building today and enters the loop can be producing serious output within weeks. Someone who opens a craft studio and starts posting can have a community within months. The compression of timeline makes the sorting faster, which makes the cost of staying in the middle higher, which accelerates the sorting further.</p>
      `.trim(),
    },
    {
      id: 'specialization-not-collapse',
      title: 'Specialization, Not Collapse',
      content: `
<p>Stand at the edge of what is happening and look at it from above. The AI builders are shipping things that were impossible two years ago. The craft communities are growing at 11.8% annually. The belief-driven groups are forming faster than institutions can categorize them. The platform natives are compounding inside ecosystems that reward depth. None of these groups are in crisis. All of them are in loops.</p>

<p>The narrative that AI creates a winner-take-all dystopia misses what is actually happening on the ground. It is not winner-take-all. It is winner-take-some on multiple axes simultaneously. The AI builder wins on leverage. The artisan wins on authenticity. The community architect wins on belonging. The belief holder wins on meaning. Each one has a viable loop. Each loop generates real value, economic, social, psychological. The value is different in each case, but it is real in all of them.</p>

<p><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> identified that the residual value humans provide when machines handle execution is presence, taste, judgment, and context. That analysis was about the labor market. The same framework applies to life. The residual value of being human, in a world where machines do most of the doing, is having something you care about enough to show up for. What that something is matters less than the structural fact of caring about it.</p>

<div class="border-l-2 border-[var(--border)] pl-6 my-10">
<p class="leading-relaxed">The world is not collapsing into two categories. It is specializing into many. Technology builders, craft loyalists, community architects, platform natives, belief holders, and categories that do not have names yet because the sorting is still happening. Each one is a viable position. Each one compounds. The only position that does not compound is the one where someone chose nothing and let the drift decide for them.</p>
</div>

<p>There is an honest ceiling to this optimism. Not everyone has the same access to either path. The AI tools are getting cheaper but are not free. The craft economy requires startup capital and physical space. Community building requires time that people working three jobs do not have. The sorting is adaptive, but the starting conditions are not equal. The loop activates faster for people who start with more resources. That asymmetry is real and will shape how the sorting plays out across different populations.</p>

<p>But the directional observation holds. Within any starting condition, the person who commits to a direction compounds faster than the person who drifts. A builder with a free AI tool and a weekend compounds past someone with enterprise access who never ships anything. A potter with a garage and an Instagram account compounds past someone with a fully funded studio who never shows their work. The loop does not require perfect conditions. It requires commitment.</p>

<p>The future is sorting. That is not a euphemism for collapse. It is a description of specialization under pressure. Biological systems do this. Ecosystems do this. Markets do this. When the environment changes, organisms do not all converge on one strategy. They diversify into niches. Each niche is viable. The organisms that do not find a niche are the ones that disappear.</p>

<p>The same sorting is happening to human identity right now. Most people will find their direction naturally. Something will pull them, a craft, a tool, a cause, a community, and the loop will start. The people who struggle longest are the ones who convince themselves that choosing means giving something up, when really it means gaining the only thing that compounds.</p>
      `.trim(),
    },
  ],

  references: [
    { text: 'University of Florida. (2026). "AI Replacement Dysfunction: Mental health effects of AI-driven job insecurity."', url: 'https://news.ufl.edu/2026/02/ai-jobs-mental-health/' },
    { text: 'World Economic Forum. (2025). "The Overlooked Global Risk of the AI Precariat." Jobs of the Future Report.', url: 'https://www.weforum.org/stories/2025/08/the-overlooked-global-risk-of-the-ai-precariat/' },
    { text: 'Microsoft AI Economy Institute. (2026). "Global AI Adoption in 2025: A Widening Digital Divide."', url: 'https://blogs.microsoft.com/on-the-issues/2026/01/08/global-ai-adoption-in-2025/' },
    { text: 'Fortune. (2026). "Welcome to the E-shaped Economy." Bank of America economic analysis.', url: 'https://fortune.com/2026/02/12/e-shaped-economy-middle-lower-upper-class-k-shaped-economy-bank-america-data/' },
    { text: 'Precedence Research. (2026). "Creator Economy Market Size to Hit $2.08 Trillion by 2035."', url: 'https://www.precedenceresearch.com/creator-economy-market' },
    { text: 'Bonhomme & Naudet. (2020). "Polarization under rising inequality and economic decline." <em>Science Advances</em>.', url: 'https://www.science.org/doi/10.1126/sciadv.abd4201' },
    { text: 'Mangtani, R. (2026). <em>The Positive Loop: How AI broke the doom scroll</em>.', url: '/writing/the-positive-loop' },
    { text: 'Mangtani, R. (2026). <em>The Human Yield: What happens when showing up is the whole job</em>.', url: '/writing/the-human-yield' },
  ],

  relatedWork: [
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'The Human Yield', href: '/writing/the-human-yield' },
    { title: 'The Compound', href: '/writing/the-compound' },
    { title: 'The Five Inputs', href: '/writing/the-five-inputs' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
