import type { ResearchData } from '@/types/research';

export const theReferencePointData: ResearchData = {
  slug: 'the-reference-point',
  date: '2026',
  title: 'The Reference Point',
  subtitle: 'Everything built, written, and proven, mapped to the next role',

  onRamp: {
    description:
      'This is the master reference document for refactoring a resume against the full body of work across rohitmangtani.com and rmgtni.xyz. It cross-references every article, product, and system, maps the demonstrated skills to market language, and provides a framework for tailoring the resume to specific roles in AI product management, enterprise AI leadership, and AI consulting.',
    whatItDoes:
      'Maps every piece of published work to demonstrable skills, translates those skills into industry language, and provides a resume architecture and tailoring framework for three career paths.',
    whatItDoesNot:
      'Write the final resume. This is the reference point. The actual resume tailoring happens per role, using this as the source of truth.',
  },

  claim:
    'The resume says operations analyst. The work says something else entirely. This document bridges the gap.',

  sections: [
    {
      id: 'the-current-resume',
      title: 'The Current Resume',
      content: `
<p>The resume opens with RBC Fixed Income Operations Analyst. Daily reconciliations, discrepancy isolation, root-cause analysis, automation scoping. Before that, Fidelity Technology Risk: data integrity across three platforms, PowerBI dashboards, audit processes. Before that, Carbix and Allegro: financial models, competitive analysis, FX reporting.</p>

<p>Skills listed: Financial Modeling, Excel, Python, R, SQL, PowerBI, Tableau, Snowflake. Education: MBA in Business Analytics, BS in Computer Information Systems, minor in Finance. Interests: Thematic Investing, Game Theory, Internet Culture.</p>

<p>Nothing on this resume indicates that the person behind it has built and shipped five consumer products, written a ten-article research series on AI labor economics, constructed a daemon that manages fleets of AI agents in real time, or runs four simultaneous Claude Code instances as daily infrastructure. The resume describes a finance and technology professional. The work describes someone operating at the intersection of AI product development, systems architecture, and original research on how AI restructures human economic value.</p>

<p>This gap is not unusual. Most resumes describe what someone was hired to do, not what they built outside those walls. But when the outside work is the more accurate signal of capability, the resume needs to be rebuilt around it.</p>
      `.trim(),
    },
    {
      id: 'the-body-of-work',
      title: 'The Body of Work',
      content: `
<p>Two websites, twelve articles, one thesis, five shipped products, one infrastructure system, and a daily operational workflow. Here is what each piece proves.</p>
      `.trim(),
      subsections: [
        {
          title: 'The Research (rohitmangtani.com/writing)',
          content: `
<p><strong><a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a></strong> described the three-layer architecture for agent management before the product existed. One person, a terminal, and a swarm of agents. The bottleneck is context, not intelligence. This article became the design spec for Hive. It demonstrates system thinking, product vision, and the ability to see architecture before it exists.</p>

<p><strong><a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a></strong> named the two coordination roles that emerge when AI deploys into real workflows: Technical Bridge and Human Extraction Layer. Written from direct experience running multi-agent systems. Proves the ability to observe operational patterns and formalize them into frameworks.</p>

<p><strong><a href="/writing/the-five-inputs" class="underline hover:opacity-60">The Five Inputs</a></strong> identified what humans are still for: taste, direction, judgment, presence, and context-holding. Backed by research (Microsoft/CMU studies, Gartner predictions), grounded in direct observation. Demonstrates analytical depth and the ability to name abstractions that others feel but cannot articulate.</p>

<p><strong><a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a></strong> made the case that the bottleneck was never code but seeing. The visualization loop (think, talk, see, understand, refine, ship) was the development methodology used to build every product in this portfolio. Proves understanding of human-AI interaction at the cognitive level.</p>

<p><strong><a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a></strong> identified the first productive dopamine cycle in internet history. AI tools collapsed the gap between idea and shipped product from months to hours. This is the foundational observation behind everything else: the reason all of this work was possible.</p>

<p><strong><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a></strong> and <strong><a href="/writing/the-human-sensor-layer" class="underline hover:opacity-60">The Human Sensor Layer</a></strong> extended the thesis into labor economics. Three-tier economy, node labor, belief-based investing, resistance assets. These demonstrate the ability to think at the macro level about how AI reshapes economic structures.</p>

<p><strong><a href="/writing/safe-mode" class="underline hover:opacity-60">Safe Mode</a></strong> named the skill behind every skill: regime detection. Knowing when conditions shifted and when to stop pushing. Applicable to markets, management, and AI operations equally.</p>

<p><strong><a href="/writing/honest-gambling" class="underline hover:opacity-60">Preference for Legible Risk</a></strong> (2024) was the earliest piece. Game theory applied to why people prefer transparent negative-sum games over opaque positive-sum systems. It establishes the analytical lens that runs through all subsequent work.</p>
          `.trim(),
        },
        {
          title: 'The Products',
          content: `
<p><strong><a href="/lab/hive" class="underline hover:opacity-60">Hive</a></strong> is the flagship. A daemon, dashboard, and coordination layer for running multiple Claude Code agents simultaneously. Auto-discovery, real-time status, auto-pilot, advisory locks, compound learning. Built using four agents iterating on each other's output while a human directed the architecture. This is the proof of concept for the entire thesis.</p>

<p><strong><a href="https://trycrawler.com" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Crawler</a></strong> takes any GitHub repository and produces flowcharts, layer breakdowns, and context blocks explaining how the project works. Reverse Figma for code. Demonstrates system thinking applied to developer tooling.</p>

<p><strong><a href="https://nudge-jade.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Nudge</a></strong> is life maintenance on autopilot. Smart reminders for health, car, home, finance. Demonstrates product direction: identifying a problem space and building the minimum viable solution.</p>

<p><strong><a href="https://booksby-ten.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Booksby</a></strong> is personalized book recommendations that learn reading taste over time. Demonstrates iterative product development and recommendation system design.</p>

<p><strong><a href="https://www.youtube.com/@TheSleeplessRishi" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">The Sleepless Rishi</a></strong> is a fully automated YouTube channel. AI-generated Hindu scripture narration, visuals, and content end to end. Nine deities, 59 planned videos, seven-step pipeline from script to upload. Demonstrates pipeline engineering, content automation, and the ability to build and operate complex multi-step AI workflows at scale.</p>

<p><strong><a href="https://stotram.vercel.app" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">Stotram</a></strong> is the web companion: sacred hymns of India, readable and downloadable. Built alongside the YouTube pipeline, sharing the same data layer.</p>
          `.trim(),
        },
        {
          title: 'The Websites',
          content: `
<p><strong>rohitmangtani.com</strong> is the public portfolio. Clean, light theme, curated. Houses the research articles, lab tools, and resume. Built with Next.js, Tailwind v4, deployed on Vercel.</p>

<p><strong>rmgtni.xyz</strong> is the sandbox. Dark theme, unfiltered. Houses the career audit, career playbook, and experimental tools. Both sites were built using AI agents directed through the same workflow the articles describe.</p>

<p>The sites themselves are evidence. They were not outsourced to a designer or a development team. They were built by one person directing multiple AI agents, iterating through the visualization loop, shipping production-quality web applications. The medium is the message.</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'the-skill-translation',
      title: 'The Skill Translation',
      content: `
<p>HBR published "To Thrive in the AI Era, Companies Need Agent Managers" in February 2026. The article names six capabilities required for the role that companies will need within twelve to eighteen months. Here is how the portfolio maps to each one.</p>
      `.trim(),
      subsections: [
        {
          title: 'AI Operational Literacy',
          content: `
<p><strong>HBR definition:</strong> Understanding how AI agents work, what they can and cannot do, how to evaluate their output.</p>

<p><strong>Evidence:</strong> Hive is a production system for managing AI agent fleets. The Sleepless Rishi pipeline runs seven AI-driven steps end to end. Every product in the portfolio was built by directing AI agents, not by writing code manually. The articles demonstrate deep understanding of agent capabilities, limitations (context degradation, hallucination, coordination gaps), and operational patterns.</p>

<p><strong>Resume language:</strong> "Built and operate production infrastructure for multi-agent AI systems. Daily operational experience directing four simultaneous Claude Code instances across independent projects."</p>
          `.trim(),
        },
        {
          title: 'Functional Depth',
          content: `
<p><strong>HBR definition:</strong> Deep domain knowledge that allows you to evaluate whether AI output is correct in your field.</p>

<p><strong>Evidence:</strong> MBA in Business Analytics provides the finance and operations foundation. RBC fixed income operations provides daily experience with reconciliation, risk controls, and settlement systems. The research articles demonstrate ability to evaluate AI output against economic theory, labor market data, and technology trends. The <a href="https://rmgtni.xyz/lab/career-audit" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">career audit</a> demonstrates the ability to apply analytical frameworks to your own credentials and products with honesty.</p>

<p><strong>Resume language:</strong> "Combine MBA-level business analytics with daily financial operations experience and independent research in AI labor economics."</p>
          `.trim(),
        },
        {
          title: 'Systems Thinking',
          content: `
<p><strong>HBR definition:</strong> Seeing how parts of a system interact and identifying leverage points.</p>

<p><strong>Evidence:</strong> Hive's architecture (daemon, dashboard, hooks, coordination API, learning system) was designed as a complete system before any piece was built. <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> described the three-layer stack. Crawler reverse-engineers system architecture from code. The article series itself is a system: each piece builds on previous ones, cross-references create a lattice, the writing and building compound into a single proof of concept.</p>

<p><strong>Resume language:</strong> "Designed and built multi-component system architecture including real-time daemon, WebSocket dashboard, coordination API, and compound learning layer for AI agent management."</p>
          `.trim(),
        },
        {
          title: 'Change Resilience',
          content: `
<p><strong>HBR definition:</strong> Ability to adapt as AI capabilities evolve rapidly.</p>

<p><strong>Evidence:</strong> The entire body of work was produced within twelve months using tools that did not exist eighteen months ago. Each quarter, the AI models improve. The workflow adapts. <a href="/writing/safe-mode" class="underline hover:opacity-60">Safe Mode</a> articulates the meta-skill: regime detection, knowing when conditions shifted. The <a href="https://rmgtni.xyz/lab/career-audit" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">career audit</a> honestly assessed which skills face commoditization and which compound. The portfolio itself is a demonstration of building in a rapidly shifting environment and adapting in real time.</p>

<p><strong>Resume language:</strong> "Produced twelve published research articles and five shipped products within twelve months by continuously adapting to evolving AI capabilities."</p>
          `.trim(),
        },
        {
          title: 'Prompt Craftsmanship',
          content: `
<p><strong>HBR definition:</strong> Ability to communicate intent to AI systems effectively.</p>

<p><strong>Evidence:</strong> Every product was built through iterative prompting across four simultaneous agent instances. The Sleepless Rishi pipeline generates scripts, audio, images, thumbnails, and video assembly through carefully tuned prompts at each step. The visualization loop described in <a href="/writing/close-your-eyes" class="underline hover:opacity-60">Close Your Eyes</a> is a prompt craftsmanship methodology: describe what you want, see the result, identify the gap, describe the correction. <a href="https://rmgtni.xyz/lab/how-hive-was-built" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-60">How Hive Was Built</a> names this as "iterative direction," the core operational skill.</p>

<p><strong>Resume language:</strong> "Developed and refined multi-step AI prompting pipelines for content generation, code development, and product iteration across five shipped products."</p>
          `.trim(),
        },
        {
          title: 'Hybrid Workflow Design',
          content: `
<p><strong>HBR definition:</strong> Designing workflows that combine human judgment with AI execution.</p>

<p><strong>Evidence:</strong> Hive is literally this. Auto-pilot handles routine decisions. The dashboard surfaces only what requires human judgment. The coordination layer prevents AI agent collisions while the human bridges context between independent agents. <a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a> formalized the two roles (Technical Bridge and Extraction Layer) that make hybrid workflows function. This is not a theoretical capability. It is daily practice.</p>

<p><strong>Resume language:</strong> "Designed and operate hybrid human-AI workflows where autonomous agents handle execution while human oversight focuses on context-holding, taste evaluation, and cross-system coordination."</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'resume-architecture',
      title: 'Resume Architecture',
      content: `
<p>The current resume is structured as: Education, Experience, Leadership, Skills. This is the default format for a recent graduate entering traditional finance or technology roles. It centers credentials and employment history. For roles in AI product management, enterprise AI leadership, or AI consulting, the structure needs to change.</p>
      `.trim(),
      subsections: [
        {
          title: 'The Positioning Statement',
          content: `
<p>Lead with a one-line positioning statement below the name. Not an "objective" or "summary." A declarative sentence that tells the reader what this person does.</p>

<p>From the <a href="https://rmgtni.xyz/lab/career-playbook" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">career playbook</a>: "I build the coordination layer between AI systems and business outcomes." This works for enterprise roles. For frontier AI PM roles: "I build infrastructure for directing AI agent fleets." For consulting: "I help companies turn deployed AI into measurable business value."</p>
          `.trim(),
        },
        {
          title: 'Reframe the Experience',
          content: `
<p>RBC is the strongest traditional credential. But "Fixed Income Operations Analyst" undersells the relevance. The actual work includes: identifying automation potential in reconciliation workflows, categorizing processes as rules-based vs. judgment-dependent, and evaluating where systematic reduction of manual overhead is possible. This is exactly the skill set required for AI deployment in financial operations.</p>

<p>Reframe: "Evaluate operational workflows for AI automation potential. Categorize processes as rules-based (automatable) vs. judgment-dependent (human-required). Scope systematic reduction of manual overhead across reconciliation, settlement, and reporting cycles."</p>

<p>Fidelity Technology Risk adds: data integrity across multiple platforms, dashboard creation, audit process improvement. Reframe through the AI lens: "Built cross-platform data integrity monitoring and visual dashboards for business unit audit visibility."</p>
          `.trim(),
        },
        {
          title: 'Add AI Products and Research',
          content: `
<p>The current resume has an empty projects section. This is the largest gap. Add a section titled "AI Products & Research" that includes:</p>

<ul>
<li><strong>Hive:</strong> Production daemon and dashboard for managing multi-agent AI fleets. Real-time status detection, auto-pilot for routine approvals, coordination API for cross-agent communication, compound learning system. Used daily to direct four simultaneous Claude Code instances.</li>
<li><strong>The Sleepless Rishi:</strong> Fully automated content pipeline. Seven-step AI workflow from script generation to YouTube upload. 59 planned videos across nine content categories.</li>
<li><strong>Crawler:</strong> Developer tool that reverse-engineers any GitHub repository into flowcharts, layer breakdowns, and architectural context blocks.</li>
<li><strong>Published Research:</strong> Ten-article series on AI labor economics, agent management, and human-AI coordination. Topics include agent fleet management, residual human inputs in automated systems, the visualization development loop, and hybrid workflow design.</li>
</ul>

<p>Each bullet should include a result or metric where possible. "Used daily" is a metric. "59 planned videos" is a metric. "Ten-article series" is a metric. "Four simultaneous agents" is a metric.</p>
          `.trim(),
        },
        {
          title: 'Restructure Skills',
          content: `
<p>The current skills section lists: Financial Modeling, Analytical Skills, Agile Methodologies, Strategic Thinking, Communication, Collaboration. These are generic. Every MBA resume lists these words.</p>

<p>Replace with skills that reflect actual demonstrated capability:</p>

<ul>
<li><strong>AI Operations:</strong> Multi-agent coordination, prompt engineering, AI output evaluation, pipeline design, compound learning systems</li>
<li><strong>Product:</strong> System architecture design, hybrid workflow design, product direction, user experience iteration</li>
<li><strong>Technical:</strong> Next.js, TypeScript, Python, Node.js, WebSockets, Express, Tailwind, Vercel, FFmpeg, edge-tts</li>
<li><strong>Business:</strong> Financial modeling, reconciliation and controls, data analytics, PowerBI, Tableau, SQL</li>
<li><strong>Research:</strong> Published AI labor economics research, cross-domain analysis, framework development</li>
</ul>
          `.trim(),
        },
      ],
    },
    {
      id: 'the-tailoring-framework',
      title: 'The Tailoring Framework',
      content: `
<p>The resume is not one document. It is a framework that gets tailored per role. Here is what to emphasize for each target path.</p>
      `.trim(),
      subsections: [
        {
          title: 'AI Product Manager at Frontier Lab',
          content: `
<p><strong>Target companies:</strong> Anthropic, OpenAI, Google DeepMind, Meta.</p>

<p><strong>Lead with:</strong> Hive as proof of product thinking in the agent space. The Future of PM as evidence of understanding the landscape. The visualization loop from Close Your Eyes as a development methodology. Shipped products as velocity evidence.</p>

<p><strong>De-emphasize:</strong> Finance operations details. Traditional business skills.</p>

<p><strong>Key language:</strong> "Designed and built agent management infrastructure." "Identified the coordination gap between agent capability and fleet operations." "Published research on the operational layer missing from current AI tooling."</p>

<p><strong>Portfolio link order:</strong> Hive, How Hive Was Built, The Future of PM, Crawler, The Five Inputs.</p>
          `.trim(),
        },
        {
          title: 'Enterprise AI Leadership',
          content: `
<p><strong>Target companies:</strong> Citi, JPMorgan, Goldman Sachs, Visa, Caterpillar, Salesforce.</p>

<p><strong>Lead with:</strong> The coordination layer between AI deployment and business outcomes. RBC experience reframed as automation potential evaluation. MBA as credibility signal. Research articles as thought leadership on enterprise AI adoption challenges.</p>

<p><strong>Key data point:</strong> "95% of enterprise AI pilots show zero P&L impact" (MIT). Position yourself as building the coordination layer that converts deployment to value.</p>

<p><strong>Key language:</strong> "Evaluate operational workflows for AI automation potential." "Built coordination infrastructure for multi-agent AI systems." "Research-backed understanding of why enterprise AI pilots fail and how to fix them."</p>

<p><strong>Portfolio link order:</strong> The Human Bridge, The Future of PM, Hive, Career Audit (on request), The Five Inputs.</p>
          `.trim(),
        },
        {
          title: 'AI Strategy Consulting',
          content: `
<p><strong>Market context:</strong> AI consulting market at $11B in 2025, growing 26% annually. GenAI specialists command $350-$700/hr.</p>

<p><strong>Lead with:</strong> The full portfolio as the pitch. Articles prove thinking. Products prove execution. The daily operation of Hive proves that the workflow works. The career audit proves you apply the same analytical rigor to yourself.</p>

<p><strong>Entry point:</strong> One company in your network with deployed AI that is not generating value. Two-week engagement at $150/hr ($12,000 plus a case study). The case study becomes the next article. The article becomes the next pitch. The compound keeps running.</p>

<p><strong>Key language:</strong> "I help companies close the gap between AI deployment and business outcomes." "Portfolio of shipped AI products, published research, and production agent management infrastructure." "Direct operational experience running multi-agent AI systems across independent projects."</p>

<p><strong>Portfolio link order:</strong> Career Playbook (as methodology sample), The Human Bridge, Hive, rohitmangtani.com/writing (full collection).</p>
          `.trim(),
        },
      ],
    },
    {
      id: 'the-compound-advantage',
      title: 'The Compound Advantage',
      content: `
<p>The <a href="https://rmgtni.xyz/lab/career-audit" class="underline hover:opacity-60" target="_blank" rel="noopener noreferrer">career audit</a> concluded: "Not safe. Not doomed. Defensible only if you keep compounding." Everything since that audit has compounded.</p>

<p>Hive did not exist when the career audit was written. The How Hive Was Built article did not exist. This reference point did not exist. Each piece added since the audit strengthens the portfolio, extends the research, and deepens the evidence stack. The products prove the articles. The articles describe the products. The workflow that produced both is the daily operational proof that the thesis works.</p>

<p>The resume refactoring is not about inflating credentials. It is about making the resume describe what actually happened. A person with an MBA and a CIS degree, working in fixed income operations, independently built production AI infrastructure, published original research on AI labor economics, shipped five consumer products, and operates a daily multi-agent workflow that most companies have not figured out how to run. The credentials open the door. The portfolio proves belonging. This document is the bridge between the two.</p>

<p>Use this as the reference point. For any specific role, pull the relevant evidence from the sections above, match it to the job description's language, and build the resume around what the work actually demonstrates. The proof is not in the bullet points. It is in the links.</p>
      `.trim(),
    },
  ],

  relatedWork: [
    { title: 'Hive', href: '/lab/hive' },
    { title: 'How Hive Was Built', href: 'https://rmgtni.xyz/lab/how-hive-was-built' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'Career Playbook', href: 'https://rmgtni.xyz/lab/career-playbook' },
    { title: 'Career Audit', href: 'https://rmgtni.xyz/lab/career-audit' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
