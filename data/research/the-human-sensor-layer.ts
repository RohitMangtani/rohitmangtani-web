import type { ResearchData } from '@/types/research';

export const theHumanSensorLayerData: ResearchData = {
  slug: 'the-human-sensor-layer',
  date: '2026',
  title: 'The Human Sensor Layer',
  subtitle: 'What happens when markets price belief instead of output',

  onRamp: {
    description: 'Right now, two people are sitting at their desks looking at the same AI tools. One of them will use those tools to build an entire product by Thursday. The other one just found out that product replaces their job. Same technology. Completely different outcomes. That split is not slowing down. It is restructuring the economy into three tiers, pushing everyone into markets they were never trained for, and turning investing from analysis into belief. This is what the new financial stack looks like from the inside.',
    whatItDoes: 'Maps the structural split AI creates in human economic utility, traces how fiat erosion forces belief-based investing, and connects UBI, resistance assets, and content creation into a single system.',
    whatItDoesNot: 'Predict timelines, endorse specific assets, or argue that any tier is better than another.',
  },

  claim: 'AI is reclassifying human economic roles into three tiers: sensors who detect what matters, nodes who show up, and a floor the system maintains. Fiat erosion forces everyone into markets. What emerges is belief-based investing, where conviction prices assets and a recycling loop of content, AI leverage, and resistance assets forms a parallel economy. The sensor layer compounds. The floor catches. Markets price belief.',

  sections: [
    {
      id: 'the-split',
      title: 'The Split',
      content: `
        <p>Watch two people interact with AI right now and you can see the split forming in real time. One person sits at a terminal, describes what they want built, and twenty agents fan out in parallel. Research, writing, design, sourcing, testing. By the end of the day, a shipped product exists that would have taken a team of twelve a quarter to build. That person captured the full value of a quarter's worth of output in an afternoon.</p>

        <p>Now look at the other side. The twelve people whose quarter just got compressed into one person's afternoon. Their skills did not become less real. Their experience did not vanish. But the economic value of applying those skills manually just collapsed, because someone with taste and a terminal can now produce the same output for a fraction of the cost.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The dividing line is not intelligence. A mediocre builder with good taste and a terminal compounds. A brilliant analyst whose analysis AI handles better gets displaced. The split runs along function, not ability. And it is already showing up in the numbers: the IMF estimates AI affects 40% of jobs globally, 60% in advanced economies. McKinsey projects $4.4 trillion in annual economic value from generative AI alone. That value is not distributing evenly. It is concentrating at the top.</p>
        </div>

        <p><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> mapped this into three layers: Positive Loop riders who compound with AI, human nodes who provide presence and verification, and a floor the system maintains. That frame described the labor side. What it did not touch is what happens when the same split hits capital, investing, and the financial system underneath all of it.</p>

        <p>That is what this piece is about. The labor split is forming. But the capital split that follows it is where the real restructuring happens.</p>
      `,
    },
    {
      id: 'the-sensor-layer',
      title: 'The Sensor Layer',
      content: `
        <p>Picture yourself running twenty AI agents in parallel. One is researching. One is writing. Three are building components. Two are sourcing references. The rest are testing, deploying, iterating. They are all producing output. You are not doing any of it. You are watching output scroll by, and the only thing you are actually doing is noticing when something feels off. A direction that drifted. A tone that does not land. An approach that technically satisfies the spec but misses the point.</p>

        <p>That noticing is the job. Not the research. Not the writing. Not the building. The detection. And the word for what you are doing is sensing.</p>

        <figure class="my-8">
          <img src="/images/research/sensor-tiers.svg" alt="Three-tier AI economy: Sensors detect what matters, Nodes show up and verify, Floor is maintained by the system" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p><a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> called this "holding context," the thread that agents lose when their memory fills up. But context is a technical description. What you are actually doing when you hold context is something more fundamental. You are a sensor in the system. You detect the temperature and tell the system what to do. Think about how a thermostat works. It does not heat the room. It detects that the room is cold and triggers the heater. A smoke detector does not fight fires. It senses smoke and triggers the response.</p>

        <p>Think about what you actually do when you sit down with an agent. You paste a link into a terminal. You highlight a function and say fix this. You drag a screenshot in and say match this. Every interaction is the same gesture: you are pointing the system at something specific and saying operate on this.</p>

        <p>If you ever wrote C, that gesture has a name. A pointer does not hold the data. It holds the address, the reference that tells the program where to look and what to operate on. Without the pointer, the program has all the processing power in the world and no idea where to aim it. You are the pointer now. The AI has the execution capacity. What it does not have is the address. Humans used to write the software. Now humans are the software layer, the indirection between intent and execution.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">You work the same way in an AI-driven system. You do not write the code, design the interface, or source the references. You detect whether the output is right. Whether the direction is correct. Whether the system needs to be restarted or redirected. That is the entire job.</p>
          <p class="leading-relaxed">And here is why it compounds: the more agents you run, the more valuable the sensor becomes. One agent, you can check everything manually. Four agents, you need taste and speed. Twenty agents, you are operating purely on detection. The skill gap between running one agent and running twenty is not technical. It is sensory.</p>
        </div>

        <p>In a system where execution is free, detection is the bottleneck. The sensor layer is the tier that captures disproportionate value because it is the one part that scales with the swarm.</p>
      `,
    },
    {
      id: 'the-erosion',
      title: 'The Erosion',
      content: `
        <p>Your grandparents kept their savings in a bank account and it worked. They could put money away, let it sit, and it held its value well enough to build a life on. Try that now. A dollar in 1971, when Nixon severed the link to gold, buys about 15 cents of goods today. That is not a conspiracy framing. That is the CPI plotted on a chart. The US dollar has lost roughly 85% of its purchasing power in fifty years.</p>

        <p>There is a second force running underneath the AI split, and it is older than any technology. Fiat erosion. Savings in cash is not neutral. It is a slow, continuous loss. And that loss is not hitting everyone equally.</p>

        <p>For the sensor layer, it barely registers. Their income and asset growth outpace inflation by multiples. For the node layer, it compresses. Wages grow slower than prices, squeezing purchasing power year over year. For the floor, it is a tax they never voted for. Fixed incomes and minimum wages lag inflation by design.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Here is what this produces: everyone gets pushed into markets. If holding cash means losing purchasing power, the rational response is to invest. But investing assumes you understand risk, valuation, portfolio construction. Most people do not. What they have is a brokerage app on their phone and the ability to buy fractional shares. Robinhood found that stocks priced above $100 had 53% more unique owners when fractional trading was available. Access expanded. Financial literacy did not.</p>
        </div>

        <p>So now you have a population that is in the market not because they understand it but because staying out means losing. The criteria for choosing assets shifts from analysis to something else entirely. And that something else is what the next section is about.</p>
      `,
    },
    {
      id: 'belief-as-signal',
      title: 'Belief as Signal',
      content: `
        <p>Open your brokerage app right now. Look at what you own. Think about why you own it. If you are honest with yourself, the answer is probably not a discounted cash flow model. It is a feeling. A conviction. You believe Tesla will keep growing, or Bitcoin will hold its value, or that one biotech stock your friend told you about is going to break out. You are investing based on what you believe, not what you analyzed.</p>

        <p>You are not alone. Retail investors now account for roughly 20% of daily US equity volume, up from low single digits before 2020. That is not casual participation. That is a structural shift in who moves markets. And retail does not invest the way institutions do.</p>

        <figure class="my-8">
          <img src="/images/research/reflexivity-loop.svg" alt="The Reflexivity Loop: Conviction drives capital flow, which moves price, which generates narrative, which reinforces conviction" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>George Soros described exactly this dynamic in the 1980s. He called it reflexivity: beliefs do not just predict market outcomes, they shape them. If enough people believe an asset will rise, they buy it. The buying makes it rise. The rise validates the belief. The validation attracts more buyers. The loop runs until something breaks it.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Bitcoin is the clearest example. No cash flows. No earnings. No physical backing. But a US Strategic Bitcoin Reserve now exists. Corporate treasuries held over 196,000 BTC as of early 2025 and growing. The price is not determined by fundamentals in any traditional sense. It is determined by the reflexivity loop: enough people believe Bitcoin stores value, so they buy it, so it stores value, so more people believe it. The belief is the fundamental.</p>
        </div>

        <p>When fiat erodes and everyone gets pushed into markets, the criteria for choosing assets shifts. Analysis requires training most people do not have. Conviction does not. You do not need a finance degree to believe Bitcoin is a hedge against inflation, or that a company you use every day will grow, or that a community token represents something you want to be part of. The infrastructure for belief-based investing is already built. Fractional shares. Zero-commission trading. Social platforms where conviction spreads faster than any spreadsheet. It is a phone.</p>
      `,
    },
    {
      id: 'resistance-assets',
      title: 'Resistance Assets',
      content: `
        <p>Someone buys a meme coin that could go to zero. They know it could go to zero. They buy it anyway. Ask them why and the answer is almost always the same: at least I chose this. At least the risk is mine. At least nobody is extracting fees for thirty years before telling me my pension underperformed.</p>

        <p><a href="/writing/preference-for-legible-risk" class="underline hover:opacity-60">Preference for Legible Risk</a> documented this pattern. People prefer legible risk over hidden extraction. A meme coin that tells you upfront it might be worthless gets chosen over a system that hides its costs in fine print. The risk is not lower. It is chosen. And chosen risk creates loyalty that managed risk never does.</p>

        <p>Scale this pattern up and you get a $254 billion creator economy with 245 to 275 million people building their own economic systems. 91% of those creators report using AI tools. That is not a niche hobby. That is a parallel economy, and it is running on the same sensor-layer tools that the previous sections describe.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Here is the frame: resistance assets are not anti-system. They are parallel-system. Bitcoin is not trying to destroy the dollar. It is providing an alternative for people who do not trust the dollar's trajectory. Meme coins are not trying to replace equities. They are providing community ownership for people who feel excluded from traditional markets. Community tokens are not replicating venture capital. They are creating a different kind of equity, one where participation is the investment thesis.</p>
        </div>

        <p><a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a> described a spectator class watching optimization from the sidelines. Resistance assets are the opposite: participation without gatekeeping. You do not need accreditation to hold Bitcoin. You do not need a Series A to own a community token. You need conviction. And that is what makes them structurally durable. They are priced by the density of belief in their community. Belief does not disperse on a bad earnings call. It disperses on a broken narrative. The narratives that tap into genuine resistance hold for a long time. The speculative energy has a pulse that data cannot capture.</p>
      `,
    },
    {
      id: 'the-recycling-loop',
      title: 'The Recycling Loop',
      content: `
        <p>Picture this cycle. You build a product with AI on Monday. By Wednesday it is live and generating revenue. By Friday the proceeds move into Bitcoin. Bitcoin appreciates through the reflexivity loop. The gains fund the next product. You start again on Monday. The whole cycle used to take months or years. Now it takes a week.</p>

        <p><a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> described how AI turned idle time into productive output. Idea to product. Curiosity to published research. The dopamine hit that builds instead of drains. Apply that same loop to capital and you get the recycling mechanism that connects everything in this system.</p>

        <figure class="my-8">
          <img src="/images/research/capital-stack.svg" alt="The Capital Recycling Loop: Create with AI, distribute, monetize, invest in belief assets, appreciation funds more creation" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>The cycle has five steps. A sensor uses AI to create something. The creation generates revenue. The revenue enters a financial system where fiat erodes, so it flows into belief assets: Bitcoin, community tokens, anything that prices conviction over cash flow. The belief assets appreciate through reflexivity. The appreciation funds the next creation. Each pass through the loop adds value.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The infrastructure for every step already exists. Build with AI in an afternoon. Distribute through platforms that reach millions. Monetize through subscriptions or one-time purchases. Move proceeds into Bitcoin or a community token before the weekend. Each step has near-zero friction. The compression is what matters: faster cycles mean faster compounding. The gap between the sensor layer and the floor is not just income. It is cycle speed.</p>
        </div>

        <p>The 245 million creators are not all running this loop at full speed. Most are not. But the ones who are, the ones operating at the intersection of the sensor layer and belief-based investing, are compounding at a rate that the traditional employment economy cannot match. Not because they work harder. Because the loop is tighter.</p>
      `,
    },
    {
      id: 'the-new-equilibrium',
      title: 'The New Equilibrium',
      content: `
        <p>Step back and look at all five forces running at the same time. AI absorbs execution and splits people into three tiers. Fiat erosion pushes capital out of cash and into markets. The floor gets built because the alternative is instability. Belief-based investing becomes the default because conviction is accessible and reflexivity rewards it. Content creation recycles capital through the sensor layer faster than any previous mechanism.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">None of these forces are independent. They reinforce each other. AI displacement increases the population that needs the floor. The floor puts money in people's hands. That money erodes in fiat. So it flows into belief assets. Belief assets fund creator economies. Creator economies run on AI tools. The loop closes. Each force feeds the next.</p>
        </div>

        <p>The sensor layer sits at the center. Not as the top of a hierarchy, but as the detection mechanism that routes everything through the system. Sensors detect which products to build, which assets carry genuine conviction, which directions to take. They do not execute. They sense. In an economy where execution is automated and capital follows belief, sensing is the scarcest function.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think about the traditional path: learn a skill, apply it, earn income, save in fiat, retire. Now look at what is happening to every step. The skill gets absorbed by AI. The income gets compressed. The savings erode in fiat. Retirement assumes a stability the restructuring does not guarantee. The new path looks different: develop sensory capacity, direct AI, earn through creation, invest in belief assets, recycle through the loop. It does not have an endpoint. It compounds.</p>
        </div>

        <p>The effort still matters. It always does. But only when pointed at what the system still needs a human for. Sensing. Detecting. Choosing. Believing. The question is not whether you work hard. It is whether what you work hard at is something the system still needs a human to do.</p>

        <p class="text-lg leading-relaxed text-[var(--fg)] font-medium mt-8">The sensor detects. The system executes. The floor catches. Markets price belief. Capital recycles through the loop. That is the new equilibrium. And it is already running.</p>
      `,
    },
  ],

  references: [
    { text: 'International Monetary Fund. (2024). "Gen-AI: Artificial Intelligence and the Future of Work." IMF Staff Discussion Note.', url: 'https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-PM-542379' },
    { text: 'McKinsey Global Institute. (2023). "The Economic Potential of Generative AI: The Next Productivity Frontier."', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier' },
    { text: 'OpenResearch. (2025). "Unconditional Cash Study: Results from a Three-Year Universal Basic Income Experiment."', url: 'https://www.openresearch.com' },
    { text: 'Soros, G. (1987). <em>The Alchemy of Finance: Reading the Mind of the Market</em>. Simon & Schuster.' },
    { text: 'Mangtani, R. (2026). <em>The Human Yield: What happens when showing up is the whole job</em>.', url: '/writing/the-human-yield' },
    { text: 'Mangtani, R. (2026). <em>The Positive Loop: How AI Broke the Doom Scroll</em>.', url: '/writing/the-positive-loop' },
    { text: 'Mangtani, R. (2026). <em>The Future of PM</em>.', url: '/writing/the-future-of-pm' },
    { text: 'Mangtani, R. (2024). <em>Preference for Legible Risk</em>.', url: '/writing/preference-for-legible-risk' },
    { text: 'Mangtani, R. (2025). <em>The Gameable Society</em>.', url: '/writing/the-gameable-society' },
  ],

  relatedWork: [
    { title: 'The Human Yield', href: '/writing/the-human-yield' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'Preference for Legible Risk', href: '/writing/preference-for-legible-risk' },
    { title: 'The Gameable Society', href: '/writing/the-gameable-society' },
  ],

  footerVersion: 'February 2026 . Rohit Mangtani',
};
