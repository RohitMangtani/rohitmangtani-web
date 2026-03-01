import type { ResearchData } from '@/types/research';

export const theFiveInputsData: ResearchData = {
  slug: 'the-five-inputs',
  date: '2026',
  title: 'The Five Inputs',
  subtitle: 'What humans are still for when everything else is automated',

  onRamp: {
    description: 'AI can automate 57% of US work hours right now. Not in five years. Right now. McKinsey published the number. The question everyone asks next is wrong. They ask what jobs survive. The right question is what inputs survive. Five of them. They explain everything that is happening in the economy and everything that is about to happen.',
    whatItDoes: 'Identifies the five residual human inputs that survive AI displacement, shows each one already operating in the economy, and explains why the stratification that follows is not about intelligence or effort but about which inputs you are providing.',
    whatItDoesNot: 'Predict timelines, argue for or against UBI, or claim that AI makes humans irrelevant.',
  },

  claim: 'The economy does not stratify around intelligence, education, or effort. It stratifies around five residual human inputs that AI cannot replicate: taste, direction, judgment, presence, and context-holding. Everyone still has economic function. But the function changes depending on which inputs you provide.',

  sections: [
    {
      id: 'fifty-seven-percent',
      title: 'Fifty-Seven Percent',
      content: `
        <p>Watch someone use AI for the first time. They type a question. They get an answer. They think: this is a better search engine. Then watch someone who has been building with it for six months. They have four agents running in parallel. One is researching. One is writing. One is building. One is testing what the others produced. They are not typing questions. They are directing a system. The output difference between these two people is not 2x. It is not 10x. It is a category difference so large that comparing them is like comparing someone who walks to work with someone who flies.</p>

        <p>McKinsey's Global Institute published the number in late 2025: AI agents and robots can already automate over 57% of US work hours. Not could. Can. The technology exists today to handle more than half of what the American workforce does every day. The World Economic Forum projects 92 million jobs displaced by 2030, offset by 170 million new ones created. Net positive. But the WEF buries the important part in the methodology: the 170 million new jobs require skills that the 92 million displaced workers do not currently have. The gap between jobs created and workers who can fill them is not a rounding error. It is the fault line.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The question is not whether AI replaces jobs. That question was settled. The question is what human inputs remain valuable once the execution layer is automated. Not what jobs. What inputs. The distinction matters because jobs are bundles of many inputs, and AI does not replace the bundle. It replaces some inputs and makes others more valuable. The bundle gets reorganized. The person gets reorganized with it.</p>
        </div>

        <p>Five inputs survive. They show up in every article in this series, in every economic trend that is emerging, and in every person who is compounding faster than the people around them. They are not skills you learn in school. They are not certifications. They are capacities that AI structurally cannot provide, because providing them would require the thing that AI does not have: a continuous, embodied perspective that persists across contexts and cares about the outcome.</p>
      `,
    },
    {
      id: 'taste',
      title: 'Taste',
      content: `
        <p>Open any AI tool and ask it to build you a landing page. It will build one. The colors will be reasonable. The layout will follow conventions. The copy will be grammatically correct. It will look like everything else. That is the problem. Not that it is bad. That it is indistinguishable. The output has no point of view. No opinion about what should be emphasized, what should be removed, what should feel different from every other landing page in the category.</p>

        <p>Taste is the input that determines whether AI output is generic or good. It is not aesthetic preference. It is the capacity to look at something and know, before you can articulate the full technical reason, that it is right or wrong. A creative director does not need to use Photoshop. They need to know when something looks off. A product person does not need to write code. They need to know when the experience feels wrong. The knowing is the input. The system executes on it.</p>

        <p>This is already visible in who is shipping the most. The people producing the best work with AI tools are not the most technical. They are the ones with the strongest opinions about what good looks like. They describe what they want with specificity. They reject output that is merely acceptable. They iterate until the result matches something in their head that they can feel but not always explain. The AI handles the execution. The taste determines whether the execution produces anything worth looking at.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">The premium on taste increases as AI gets better at execution. When production is free, the bottleneck shifts entirely to curation. What to build, what to keep, what to throw away. These decisions cannot be automated because automating them would require the AI to have a perspective about what matters. Perspective requires continuity. Continuity requires a self that persists. AI does not have that. So taste remains human.</p>
        </div>
      `,
    },
    {
      id: 'direction',
      title: 'Direction',
      content: `
        <p>Picture four AI agents running in parallel. One is researching market data. One is building a feature. One is deploying infrastructure. One is debugging a system. They are all executing. None of them know why. Each agent operates inside a context window, a fixed frame of reference that contains its task, its history, and its instructions. It cannot see the other agents. It does not know how its work connects to theirs. It finishes its task and waits. It does not know what comes next.</p>

        <p>Direction is the input that connects isolated executions into a coherent outcome. It is not project management in the traditional sense. It is not scheduling sprints or writing Jira tickets. It is the capacity to see the whole system from above and know which agent should work on what, in what order, and why. When one agent finishes, direction decides what it does next. When two agents produce conflicting output, direction decides which one is right. When the whole system stalls, direction identifies which single input will unblock everything.</p>

        <p>Deloitte's 2026 State of AI report describes the shift: advanced organizations streamline workflows that AI can execute end-to-end, while humans focus on strategic oversight. The word "strategic" does a lot of work in that sentence. What it actually means is: someone decides what to build. Not how. What. The how is automated. The what remains human because it requires understanding the goal behind the project, which requires understanding the world outside the terminal, which requires being a person who lives in it.</p>
      `,
    },
    {
      id: 'judgment',
      title: 'Judgment',
      content: `
        <p>An AI agent analyzing a TikTok video frame by frame can identify composition, text placement, pacing, hook timing. It can compare your video against ten viral references and list every structural difference. What it cannot do is tell you which differences matter. It will list twenty discrepancies with equal weight. Three of them are critical. Seventeen are noise. Knowing which is which is judgment.</p>

        <p>Judgment is not analysis. AI does analysis better than any human. Judgment is the layer above analysis: deciding what the analysis means, which findings require action, and which ones to ignore. A doctor does not become obsolete when AI can read scans faster. The doctor becomes the person who decides what to do about the scan. The reading is automated. The deciding is not. That gap is permanent because decisions require accountability, and accountability requires a person who bears consequences.</p>

        <p>You can see this operating in every domain where AI is deployed. The agent writes the code. The human decides whether to ship it. The agent generates the research. The human decides whether to publish it. The agent proposes three approaches. The human picks one. At every junction, the system stops and asks: is this right? That question cannot be answered by the system asking it. It requires someone outside the system, with their own context, their own values, their own sense of what matters, to say yes or no.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">McKinsey frames it as "skill partnerships": people shifting from producing first drafts to framing questions, validating outputs, and applying judgment. The framing is clinical but the observation is right. The human is no longer the producer. They are the judge. And the judge's value increases as production gets cheaper, because more output means more decisions, and more decisions means more demand for the person qualified to make them.</p>
        </div>
      `,
    },
    {
      id: 'presence',
      title: 'Presence',
      content: `
        <p>Walk into any hospital and count the jobs that exist solely because a regulation says a human must be present. A nurse supervising an automated medication dispenser. An anesthesiologist monitoring a procedure that the machine is executing. A compliance officer reviewing documents that AI already flagged. These are not jobs where the human does the work. They are jobs where the human exists in the room, providing a legal, regulatory, or social guarantee that a person was there.</p>

        <p><a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> described this as the economy that forms around presence. When AI handles execution, the residual human function for a large share of the workforce becomes showing up. Being the signature on the form. Being the face on the screen. Being the node in the network that regulators and customers and institutions require to be human. This is not a degrading future. It is an honest description of what is already happening, and an economy is building around it.</p>

        <p>Forty percent of workers will require significant upskilling by 2030 just to stay relevant. That number comes from the WEF, and it implies that 40% of the current workforce is doing work that AI can handle better. What upskilling actually means for most of them is not learning to code or building AI products. It means learning to exist productively inside AI-augmented systems. Supervising. Verifying. Being present in the loop that the system needs a human to close. Presence is the floor. It is not glamorous. But it is stable, compensated, and structurally necessary for as long as institutions require humans in the chain.</p>
      `,
    },
    {
      id: 'context-holding',
      title: 'Context-Holding',
      content: `
        <p>The most technically interesting limitation of AI is not intelligence. It is memory. Every agent operates inside a context window, a fixed-size frame that contains everything it knows about the current task. When the window fills up, the agent compresses its memory and loses detail. Chroma's research measured this across 18 models and found that performance degrades predictably as input length grows. The agent does not get dumber. Its frame of reference gets narrower. Context rot, they call it.</p>

        <p>Now run four agents in parallel on the same project. Each one has its own context window. None of them can see what the others are doing. Agent one discovers a bug in the authentication layer. Agent three is building a feature that depends on authentication working correctly. Neither knows about the other. The project will break unless someone holds the thread across both contexts and routes the information where it needs to go.</p>

        <p>That someone is human. Not because humans are smarter than agents. Because humans persist across context windows. You do not compress your memory when a conversation ends. You do not lose the thread when you switch from one agent's output to another's. You are the continuous entity that remembers what agent one found, understands why it matters to agent three, and knows when to connect them. <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> described this as the manager layer. The context holder. The person who watches the dashboard showing four dots, green and red, and knows exactly what each color means because they are the only entity in the system who has seen all four agents work across all four contexts.</p>

        <div class="border-l-2 border-[var(--border)] pl-6 my-10">
          <p class="leading-relaxed">Context-holding is the input that scales. Every other input, taste, direction, judgment, presence, is valuable but linear. You apply taste to one project at a time. You direct one swarm at a time. Context-holding compounds. The more agents you run, the more valuable the person who holds the thread across all of them. Adding a tenth agent to a nine-agent swarm adds zero coordination overhead for the human. It adds one more dot to glance at. The marginal cost is negligible. The marginal output is a full additional context window producing work. This is why context-holding is the most leveraged of the five inputs. It scales with the system instead of against it.</p>
        </div>
      `,
    },
    {
      id: 'the-stratification',
      title: 'The Stratification',
      content: `
        <p>These five inputs are not a checklist. They are a spectrum. Everyone provides at least one. Most people provide two or three. The economy is stratifying around where you sit on this spectrum, and the stratification is already visible.</p>

        <p>At one end, you have people providing all five. They direct agent swarms with taste, judge their output, hold context across isolated windows, and their presence in the loop is what makes the whole system coherent. These are the people shipping products in an afternoon that used to take teams of twelve a quarter. They are not more intelligent. They are providing more inputs. Their output compounds because every cycle of the system makes the next cycle faster. Better checklists, better pipelines, better infrastructure, all accumulated through use.</p>

        <p>At the other end, you have people providing one: presence. They show up. They supervise. They close the loop that regulations or institutions require a human to close. They are compensated and stable. But they are not compounding. Their output tomorrow looks the same as their output today because presence does not accumulate. It resets every shift.</p>

        <p>The middle is where the tension lives. People providing two or three inputs, judgment and direction but not taste, or taste and presence but not context-holding, occupy roles that are valuable but bounded. They are not replaceable, but they are not multiplying either. They are the analyst who validates AI output but does not direct the system that produces it. The designer who has taste but works inside someone else's context. The manager who holds context for one team but cannot scale to four parallel workstreams.</p>

        <div class="p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)] my-6">
          <p class="text-sm text-[var(--fg-muted)]">The gap is not about working harder. Someone providing maximum effort on tasks that agents handle better hits a wall. Someone providing the same effort on direction, on building the context layer, on developing the taste that makes agent output actually good, compounds past it. The inputs determine the trajectory. Not the effort.</p>
        </div>

        <p>This is not a prediction about the future. It is a description of now. The 56% salary premium for workers with AI skills that the data shows is not paying for technical knowledge. It is paying for the capacity to provide more inputs. The person who can direct agents, judge their output, and hold context across sessions commands a premium because they are providing three inputs that the person who only supervises is not. The premium will widen because the supply of people who can provide all five is small, and the demand for them scales with every agent deployed.</p>

        <p>Every article in this series described one piece of this. <a href="/writing/the-human-yield" class="underline hover:opacity-60">The Human Yield</a> mapped the economy forming around presence. <a href="/writing/the-human-sensor-layer" class="underline hover:opacity-60">The Human Sensor Layer</a> described judgment as the capacity to detect what matters in systems too fast for traditional analysis. <a href="/writing/the-human-bridge" class="underline hover:opacity-60">The Human Bridge</a> identified the coordination roles that require all five inputs simultaneously. <a href="/writing/the-positive-loop" class="underline hover:opacity-60">The Positive Loop</a> showed what happens when taste and direction plug into the production cycle that AI enables. <a href="/writing/honest-gambling" class="underline hover:opacity-60">Honest Gambling</a> explained why people gravitate toward systems where they can exercise judgment instead of trusting opaque ones. <a href="/writing/the-future-of-pm" class="underline hover:opacity-60">The Future of PM</a> operationalized context-holding as the management layer for agent swarms.</p>

        <p>The five inputs are the thread connecting all of them. The economy is not dividing into people who use AI and people who do not. It is dividing into people who provide one input and people who provide five. The distance between them compounds every day the system runs.</p>
      `,
    },
  ],

  relatedWork: [
    { title: 'The Human Yield', href: '/writing/the-human-yield' },
    { title: 'The Human Sensor Layer', href: '/writing/the-human-sensor-layer' },
    { title: 'The Human Bridge', href: '/writing/the-human-bridge' },
    { title: 'The Positive Loop', href: '/writing/the-positive-loop' },
    { title: 'The Future of PM', href: '/writing/the-future-of-pm' },
    { title: 'Honest Gambling', href: '/writing/honest-gambling' },
  ],

  footerVersion: 'March 2026 . Rohit Mangtani',
};
