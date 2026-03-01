import type { ResearchData } from '@/types/research';

export const theHumanSensorLayerData: ResearchData = {
  slug: 'the-human-sensor-layer',
  date: '2026',
  title: 'The Human Sensor Layer',
  subtitle: 'What happens when markets price belief instead of output',

  onRamp: {
    description: 'AI is not replacing people. It is reclassifying what they do. The economy is splitting into three tiers: sensors who detect what matters and direct systems, nodes who show up and verify, and a floor the system maintains. At the same time, fiat erosion is forcing the entire population into markets, and what emerges is not rational investing. It is belief-based investing, where conviction moves capital and narrative prices assets. A new financial stack is forming around this, and it does not look like anything the traditional economy prepared people for.',
    whatItDoes: 'Maps the structural split AI creates in human economic utility, traces how fiat erosion forces belief-based investing, and connects UBI, resistance assets, and content creation into a single system.',
    whatItDoesNot: 'Predict timelines, endorse specific assets, or argue that any tier is better than another.',
  },

  claim: 'AI is reclassifying human economic roles into three tiers: sensors who detect what matters, nodes who show up, and a floor the system maintains. Fiat erosion forces everyone into markets. What emerges is belief-based investing, where conviction prices assets and a recycling loop of content, AI leverage, and resistance assets forms a parallel economy. The sensor layer compounds. The floor catches. Markets price belief.',

  sections: [
    {
      id: 'the-split',
      title: 'The Split',
      content: `
        <p>This is not a projection. The split is already forming.</p>

        <p>The IMF published it plainly: AI affects 40% of jobs globally, 60% in advanced economies. McKinsey projects $4.4 trillion in annual economic value from generative AI alone, with 0.2 to 3.3 percentage points of productivity growth depending on adoption speed. Those numbers sound clean and evenly distributed. They are not.</p>

        <p>The value does not spread. It concentrates. The productivity gains flow to the people and systems that direct AI, not to the people AI replaces. A person using an agent swarm to build an entire product in a day captures the full output. The person whose role that product replaces captures nothing. Same technology. Opposite outcomes.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The split is not between people who use AI and people who do not. It is between people whose orientation compounds with AI and people whose skills get absorbed by it. A mediocre builder with good taste compounds. A brilliant analyst whose analysis AI handles better gets displaced. The dividing line is not intelligence. It is function.</p>
        </div>

        <p><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> mapped this into three layers: Positive Loop riders who compound with AI, human nodes who provide presence and verification, and a floor the system maintains. That frame holds. But it described the labor side. What it did not map is what happens when the same split hits capital, investing, and the financial system that sits underneath all of it.</p>

        <p>The sensor layer is the part that detects. The rest is what happens downstream.</p>
      `,
    },
    {
      id: 'the-sensor-layer',
      title: 'The Sensor Layer',
      content: `
        <p>The word "sensor" is not metaphorical. It describes what the human role actually becomes.</p>

        <p>In an AI-driven system, execution is handled. Research is handled. Writing, coding, analysis, sourcing, testing. All handled. What is not handled is detection. Noticing that the output is slightly off. Feeling that the direction has drifted. Knowing that this approach will not land even though it technically satisfies the spec. That is sensing.</p>

        <figure class="my-8">
          <img src="/images/research/sensor-tiers.svg" alt="Three-tier AI economy: Sensors detect what matters, Nodes show up and verify, Floor is maintained by the system" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p><a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> described this as context: the human holds the thread that agents cannot maintain. But context is a technical description. What the human is actually doing is sensing. Detecting signal in noise. Filtering output for quality. Recognizing when something is right or wrong without being able to fully articulate the technical reason. The same way a creative director does not need to use Photoshop. They need to know when something looks off.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Think about how sensors work in any system. A thermostat does not heat the room. It detects the temperature and tells the system what to do. A smoke detector does not fight fires. It senses smoke and triggers the response. The sensor's value is not in its ability to execute. It is in its ability to detect what matters and route resources accordingly.</p>
          <p class="leading-relaxed">The human sensor layer works the same way. You do not write the code, design the interface, or source the references. You detect whether the output is right. Whether the direction is correct. Whether the system needs to be restarted or redirected. That is the entire job. And it is the one part that compounds with scale.</p>
        </div>

        <p>The more agents you run, the more you need a sensor. One agent, you can check everything manually. Four agents, you need taste and speed. Twenty agents, you are operating purely on detection: which output feels right, which direction needs adjustment, which thread has drifted. The skill gap between a person running one agent and a person running twenty is not technical. It is sensory.</p>

        <p>This is the tier that captures disproportionate value. Not because sensors are smarter. Because in a system where execution is free, detection is the bottleneck.</p>
      `,
    },
    {
      id: 'the-erosion',
      title: 'The Erosion',
      content: `
        <p>There is a second force running underneath the AI split, and it has nothing to do with technology.</p>

        <p>The US dollar has lost roughly 85% of its purchasing power since 1971, when Nixon severed the link to gold. That is not a conspiracy framing. It is the CPI plotted on a chart. A dollar in 1971 buys about 15 cents of goods today. Savings in fiat is not neutral. It is a slow, continuous loss.</p>

        <p>For the sensor layer, this barely registers. Their income and asset growth outpace inflation by multiples. For the node layer, it compresses. Wages grow slower than prices, squeezing purchasing power year over year. For the floor, it is a tax they never voted for. Fixed incomes and minimum wages lag inflation by design. The erosion hits hardest at the bottom and lightest at the top.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">This is the force that pushes everyone into markets. If holding cash means losing purchasing power, the rational response is to invest. But "invest" assumes understanding of risk, valuation, and portfolio construction. Most people do not have that understanding. They have a brokerage app on their phone and the ability to buy fractional shares. Robinhood found that stocks priced above $100 had 53% more unique owners when fractional trading was available. Access expanded. Financial literacy did not.</p>
        </div>

        <p>The result is a population that is in the market not because they understand it but because staying out means losing. Fiat erosion is not neutral pressure. It is directional. It pushes capital toward assets, any assets, and the criteria for choosing those assets shifts from analysis to something else entirely.</p>
      `,
    },
    {
      id: 'the-floor',
      title: 'The Floor',
      content: `
        <p>Every system with enough displaced people eventually builds a floor. The floor is UBI, or something that functions like it.</p>

        <p>Sam Altman's OpenResearch ran the most substantive test to date. Three thousand people across Illinois and Texas received $1,000 per month for three years, no strings attached. The results landed in 2025: participants worked 1.3 fewer hours per week. They were 6% more likely to pursue education or training. They did not stop working. They redirected effort.</p>

        <p>Finland's experiment gave 2,000 unemployed people €560 per month for two years. Employment effects were minimal. Well-being improved measurably. GiveDirectly's program in Kenya, 200 villages receiving $22.50 per month for 12 years, found no work disincentives and improvements in health and education spending.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">The pattern across every pilot is the same. People do not stop. They redirect. The floor does not create idleness. It creates optionality. The 1.3 hours per week that OpenResearch participants stopped working were not hours of laziness. They were hours that shifted toward education, care, creative projects. Things that do not show up in employment statistics but show up in what people build next.</p>
        </div>

        <p>But the floor is also not generous. It is system maintenance. <a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> described it directly: UBI in this context is not about making lives better. It is about keeping the system stable. The displaced population is not being served. It is being managed.</p>

        <p>Above the floor, the stratification holds. Sensors compound. Nodes participate. The floor catches everyone else. And from every tier, fiat erosion pushes capital into the one place that has no gatekeeper: the market.</p>
      `,
    },
    {
      id: 'belief-as-signal',
      title: 'Belief as Signal',
      content: `
        <p>George Soros described reflexivity in the 1980s. The idea is simple: in markets, beliefs do not just predict outcomes. They shape them. If enough people believe an asset will rise, they buy it. The buying makes it rise. The rise validates the belief. The validation attracts more buyers. The feedback loop runs until something breaks it.</p>

        <p>That was a theory about institutional markets and currencies. It is now the operating system of retail investing.</p>

        <figure class="my-8">
          <img src="/images/research/reflexivity-loop.svg" alt="The Reflexivity Loop: Conviction drives capital flow, which moves price, which generates narrative, which reinforces conviction" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>Retail investors now account for roughly 20% of daily US equity volume, up from low single digits before 2020. That is not casual participation. That is a structural shift in who moves markets. And the way retail invests is fundamentally different from institutional investing. Retail does not run discounted cash flow models. Retail invests in what it believes.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">Bitcoin is the anchor case. No cash flows. No earnings. No physical backing. But a US Strategic Bitcoin Reserve now exists. Corporate treasuries held over 196,000 BTC as of early 2025 and growing. The price is not determined by fundamentals in any traditional sense. It is determined by the feedback loop: enough people believe Bitcoin stores value, so they buy it, so it stores value, so more people believe it. The belief is the fundamental.</p>
        </div>

        <p>This is not irrational behavior. It is a different pricing mechanism. When fiat erodes and everyone is pushed into markets, the criteria for choosing assets shifts. Analysis requires training that most people do not have. Conviction does not. You do not need a finance degree to believe that Bitcoin is a hedge against inflation, or that a company you use every day will grow, or that a community token represents something you want to be part of. Belief is accessible. Analysis is gated.</p>

        <p>The reflexivity loop runs on accessibility. Fractional shares. Zero-commission trading. Social platforms where conviction spreads faster than analysis. The infrastructure of belief-based investing is already built. It is a phone.</p>
      `,
    },
    {
      id: 'resistance-assets',
      title: 'Resistance Assets',
      content: `
        <p>When the official system feels extractive or closed, people build their own.</p>

        <p><a href="/writing/honest-gambling" class="underline hover:opacity-60">Honest Gambling</a> documented this pattern: people prefer legible risk over hidden extraction. A meme coin that might go to zero but tells you upfront is chosen over a pension system that extracts fees for decades without transparency. The risk is not lower. It is chosen. And chosen risk creates loyalty that managed risk never does.</p>

        <p>The creator economy hit $254 billion in 2025 with 245 to 275 million creators globally. That is not a niche. It is a parallel economy. And 91% of those creators report using AI tools in their workflow. The creator economy is not separate from the AI sensor layer. It is the sensor layer's output channel.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">Resistance assets are not anti-system. They are parallel-system. Bitcoin is not trying to destroy the dollar. It is providing an alternative for people who do not trust the dollar's trajectory. Meme coins are not trying to replace equities. They are providing community ownership for people who feel excluded from traditional markets. Community tokens are not trying to replicate venture capital. They are creating a different kind of equity, one where participation is the investment thesis.</p>
        </div>

        <p><a href="/writing/the-gameable-society" class="underline hover:opacity-60">The Gameable Society</a> described a spectator class watching optimization from the sidelines. Resistance assets are the opposite: participation without gatekeeping. You do not need accreditation to hold Bitcoin. You do not need a Series A to own a community token. You need conviction.</p>

        <p>That is what makes resistance assets structurally durable. They are not priced by cash flow analysis. They are priced by the density of belief in their community. And belief, once formed, does not disperse on a bad earnings call. It disperses on a broken narrative. The narratives that tap into genuine resistance, the ones that say "this system does not work for us, so we built our own," hold for a long time. The speculative energy in these assets cannot be manufactured. It has a pulse that data cannot capture.</p>
      `,
    },
    {
      id: 'the-recycling-loop',
      title: 'The Recycling Loop',
      content: `
        <p><a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> described how AI turned idle time into productive output. Idea to product. Curiosity to published research. The dopamine hit that builds instead of drains.</p>

        <p>Apply that same loop to capital and you get the recycling mechanism that connects everything in this system.</p>

        <figure class="my-8">
          <img src="/images/research/capital-stack.svg" alt="The Capital Recycling Loop: Create with AI, distribute, monetize, invest in belief assets, appreciation funds more creation" class="w-full rounded-lg border border-[var(--border)]" />
        </figure>

        <p>The cycle works like this. A sensor uses AI to create something: a product, a piece of content, a tool. The creation generates revenue. The revenue enters a financial system where fiat erodes. So the revenue flows into belief assets: Bitcoin, community tokens, creator platforms, anything that prices conviction over cash flow. The belief assets appreciate through the reflexivity loop. The appreciation funds more creation. The cycle compounds.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">This is not theoretical. The infrastructure exists. A creator can build a product with AI in an afternoon, distribute it through platforms that reach millions, monetize through subscriptions or one-time purchases, and move the proceeds into Bitcoin or a community token in the same week. Each step has near-zero friction. The cycle time from creation to reinvestment used to be months or years. Now it is days.</p>
        </div>

        <p>The compression matters. Faster cycles mean faster compounding. The sensor layer does not just earn more. It recycles capital faster. Each loop through the system adds value: the creation improves the portfolio, the portfolio funds the next creation. The gap between the sensor layer and the floor is not just income. It is cycle speed.</p>

        <p>The 245 million creators are not all running this loop at full speed. Most are not. But the ones who are, the ones operating at the intersection of the sensor layer and belief-based investing, are compounding at a rate that the traditional employment economy cannot match. Not because they work harder. Because the loop is tighter.</p>
      `,
    },
    {
      id: 'the-new-equilibrium',
      title: 'The New Equilibrium',
      content: `
        <p>The economy is not collapsing. It is restructuring around a new equilibrium.</p>

        <p>AI absorbs execution and stratifies people into sensors, nodes, and floor. Fiat erosion pushes capital out of cash and into markets. The floor gets built because the alternative is instability. Belief-based investing becomes the default because it is accessible and reflexivity rewards conviction. Resistance assets provide parallel systems for people who opt out. Content creation recycles capital through the sensor layer faster than any previous mechanism.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">None of these forces are independent. They reinforce each other. AI displacement increases the population that needs the floor. The floor puts money in people's hands. That money erodes in fiat. So it flows into belief assets. Belief assets fund creator economies. Creator economies run on AI tools. The loop closes.</p>
        </div>

        <p>The sensor layer sits at the center of this. Not as the top of a hierarchy, but as the detection mechanism that routes resources through the system. Sensors detect which products to build, which assets carry genuine conviction, which directions the system should take. They do not execute. They sense. And in an economy where execution is automated and capital follows belief, sensing is the scarcest function.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed mb-4">The traditional path was: learn a skill, apply it, earn income, save in fiat, retire. Every step of that path is breaking. The skill gets absorbed by AI. The income gets compressed. The savings erode in fiat. Retirement assumes a stability that the restructuring does not guarantee. The new path is: develop sensory capacity, direct AI, earn through creation, invest in belief assets, recycle through the loop. It does not have an endpoint. It compounds.</p>
        </div>

        <p>The effort still matters. It always does. But only when pointed at what the system still needs a human for. Sensing. Detecting. Choosing. Believing. Not executing. Not processing. Not analyzing what AI analyzes better. The question is not whether you work hard. It is whether what you work hard at is something the system still needs a human to do.</p>

        <p class="text-lg leading-relaxed text-[var(--fg)] font-medium mt-8">The sensor detects. The system executes. The floor catches. Markets price belief. Capital recycles through the loop. That is the new equilibrium. And it is already running.</p>
      `,
    },
  ],

  references: [
    { text: 'International Monetary Fund. (2024). "Gen-AI: Artificial Intelligence and the Future of Work." IMF Staff Discussion Note.', url: 'https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379' },
    { text: 'McKinsey Global Institute. (2023). "The Economic Potential of Generative AI: The Next Productivity Frontier."', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier' },
    { text: 'OpenResearch. (2025). "Unconditional Cash Study: Results from a Three-Year Universal Basic Income Experiment."', url: 'https://www.openresearch.com' },
    { text: 'Soros, G. (1987). <em>The Alchemy of Finance: Reading the Mind of the Market</em>. Simon & Schuster.' },
    { text: 'Mangtani, R. (2026). <em>The Human Yield: What happens when showing up is the whole job</em>.', url: '/writing/the-human-yield' },
    { text: 'Mangtani, R. (2026). <em>The Positive Loop: How AI Broke the Doom Scroll</em>.', url: '/writing/the-positive-loop' },
    { text: 'Mangtani, R. (2026). <em>The Future of PM</em>.', url: '/writing/the-future-of-pm' },
    { text: 'Mangtani, R. (2024). <em>Preference for Legible Risk</em>.', url: '/writing/honest-gambling' },
    { text: 'Mangtani, R. (2025). <em>The Gameable Society</em>.', url: '/writing/the-gameable-society' },
  ],

  relatedWork: [
    { title: 'The Human Yield', href: '/writing/the-human-yield' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'Preference for Legible Risk', href: '/writing/honest-gambling' },
    { title: 'The Gameable Society', href: '/writing/the-gameable-society' },
  ],

  footerVersion: 'February 2026 . Rohit Mangtani',
};
