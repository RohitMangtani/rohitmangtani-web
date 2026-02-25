import type { ThesisArticleData } from '@/types/theses';

export const beliefEscalationInCoordinationSystemsData: ThesisArticleData = {
  slug: 'belief-escalation-in-coordination-systems',
  date: '2025',
  title: 'Belief Escalation in Coordination Systems',
  subtitle: 'Why destiny narratives emerge under unresolved coordination',
  onRamp: {
    description: 'This thesis explains why participants in coordination systems reliably escalate toward destiny narratives: numeric ceilings, inevitability claims, and moral framing. It treats these patterns as structural phenomena, not as evidence of truth.',
    whatItDoes: 'Explains the mechanism behind belief escalation and its function as a coordination stabilizer.',
    whatItDoesNot: 'Validate any destiny narrative, predict outcomes, or claim that escalated beliefs are true.',
    howToRead: 'This builds on the Coordination-Dominant Assets thesis. Read Section 1 (Definition) and Section 2 (Mechanism) first.',
  },
  intro: 'The argument is developed conceptually rather than empirically; examples are illustrative, not predictive.',
  sections: [
    {
      id: 'abstract',
      title: 'Abstract',
      content: `
        <p class="leading-relaxed mb-6">
          This thesis examines why participants in coordination-dominant systems reliably escalate belief toward destiny narratives: claims of inevitability, numeric targets, historical importance, or moral necessity, when coordination persists under unresolved ambiguity.
        </p>

        <p class="leading-relaxed mb-6">
          <strong class="text-[var(--fg)]">Core Claim:</strong> When coordination persists under unresolved ambiguity, participants escalate belief toward destiny narratives as a stabilizing response to coordination stress, not as evidence of future outcomes.
        </p>
        
        <p class="leading-relaxed mb-6">
          The thesis explains the <strong>mechanism</strong> by which such claims emerge, classifies their <strong>function</strong> within coordination systems, and distinguishes <strong>mechanism from truth</strong>. It does not evaluate whether any destiny narrative is correct, endorse any target or outcome, or predict which coordination-dominant assets will persist.
        </p>

        <p class="leading-relaxed mb-6">
          Belief escalation is treated as observable behavior requiring explanation, not as authority, evidence, or endorsement.
        </p>
      `,
    },
    {
      id: 'definition',
      title: '1. Definition: Belief Escalation',
      content: ``,
      subsections: [
        {
          id: 'what-belief-escalation-is',
          title: '1.1 What Belief Escalation Is',
          content: `<p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Belief escalation</strong> is the systematic intensification of conviction and narrative scope that occurs when coordination-dominant assets persist under conditions of ambiguity and threat.</p>`,
          table: {
            headers: ['Component', 'Description'],
            rows: [
              { 'Component': 'Intensification', 'Description': 'Claims become stronger over time (possible → likely → inevitable)' },
              { 'Component': 'Scope expansion', 'Description': 'Claims expand from local (price target) to universal (historic importance)' },
              { 'Component': 'Hardening', 'Description': 'Beliefs become more resistant to contrary evidence' },
              { 'Component': 'Systematicity', 'Description': 'Pattern recurs across different coordination-dominant assets' },
            ],
          },
        },
        {
          id: 'belief-escalation-manifests',
          title: '1.1.1 How It Manifests',
          content: `<p class="leading-relaxed mb-4">Belief escalation manifests in specific linguistic and behavioral markers:</p>`,
          table: {
            headers: ['Marker Type', 'Examples'],
            rows: [
              { 'Marker Type': 'Numeric targets', 'Examples': '"589", "$1M", "100x floor"' },
              { 'Marker Type': 'Inevitability language', 'Examples': '"It\'s happening", "Just a matter of time", "Nothing can stop it"' },
              { 'Marker Type': 'Historic framing', 'Examples': '"Generational wealth", "Once in history", "The great transfer"' },
              { 'Marker Type': 'Moral framing', 'Examples': '"Deserving", "Justice", "The people vs. the system"' },
              { 'Marker Type': 'Destiny language', 'Examples': '"Chosen", "Destined", "Written in the code"' },
            ],
          },
        },
        {
          id: 'what-belief-escalation-is-not',
          title: '1.2 What Belief Escalation Is NOT',
          content: `<p class="leading-relaxed mb-4">Belief escalation is <strong class="text-[var(--fg)]">not</strong>:</p>`,
          table: {
            headers: ['Misinterpretation', 'Clarification'],
            rows: [
              { 'Misinterpretation': 'Prediction', 'Clarification': 'Escalated beliefs are not forecasts; their function is coordination maintenance, not accuracy' },
              { 'Misinterpretation': 'Evidence', 'Clarification': 'The existence of strong belief does not validate the belief\'s content' },
              { 'Misinterpretation': 'Consensus', 'Clarification': 'Belief escalation within a coordination system does not reflect broader market consensus' },
              { 'Misinterpretation': 'Irrationality', 'Clarification': 'Escalation may be locally rational as coordination maintenance even if content is false' },
              { 'Misinterpretation': 'Manipulation proof', 'Clarification': 'Escalated narratives can be organic or manufactured; the framework cannot distinguish' },
            ],
          },
        },
        {
          id: 'necessary-conditions-for-emergence',
          title: '1.3 Necessary Conditions for Emergence',
          content: `<p class="leading-relaxed mb-4">Belief escalation emerges when <strong class="text-[var(--fg)]">all</strong> of the following conditions are present:</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Condition</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Description</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Why Necessary</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">C1: Coordination persistence</td><td class="p-3">Asset has survived >6 months with active participant base</td><td class="p-3">Escalation requires time to develop</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">C2: Unresolved ambiguity</td><td class="p-3">No external authority can validate or invalidate claims</td><td class="p-3">Ambiguity creates space for narrative</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">C3: Perceived threat</td><td class="p-3">Drawdowns, criticism, or competing narratives create stress</td><td class="p-3">Threat triggers defensive response</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">C4: Community infrastructure</td><td class="p-3">Communication channels exist (Telegram, Twitter, Discord)</td><td class="p-3">Beliefs require transmission medium</td></tr>
                <tr><td class="p-3 font-medium">C5: Sunk participation</td><td class="p-3">Participants have invested time, capital, or identity</td><td class="p-3">Sunk costs create escalation incentive</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">Implication:</strong> Belief escalation is not random. It emerges predictably under specific structural conditions.</p>`,
        },
      ],
    },
    {
      id: 'mechanism',
      title: '2. Mechanism',
      content: ``,
      subsections: [
        {
          id: 'escalation-dynamic',
          title: '2.1 The Escalation Dynamic',
          content: `<p class="leading-relaxed mb-4">Belief escalation follows a characteristic progression:</p>
          <div class="bg-[var(--bg-secondary)] p-4 rounded-lg mb-6 font-mono text-sm">PERSISTENCE + AMBIGUITY + THREAT → ESCALATION</div>
          
          <p class="leading-relaxed mb-2"><strong class="text-[var(--fg)]">Stage 1: Initial Coordination</strong></p>
          <p class="leading-relaxed mb-4">Participants coordinate around an asset. Early narratives are modest: speculation, entertainment, community.</p>
          
          <p class="leading-relaxed mb-2"><strong class="text-[var(--fg)]">Stage 2: Ambiguity Accumulation</strong></p>
          <p class="leading-relaxed mb-4">The asset survives without external validation. No authority can confirm or deny its "real" value. Ambiguity accumulates.</p>
          
          <p class="leading-relaxed mb-2"><strong class="text-[var(--fg)]">Stage 3: Threat Introduction</strong></p>
          <p class="leading-relaxed mb-4">Price drawdowns, external criticism, or competing narratives threaten coordination stability.</p>
          
          <p class="leading-relaxed mb-2"><strong class="text-[var(--fg)]">Stage 4: Escalation Response</strong></p>
          <p class="leading-relaxed mb-4">Participants respond to threat by escalating belief. Stronger claims serve as coordination anchors under stress.</p>
          
          <p class="leading-relaxed mb-2"><strong class="text-[var(--fg)]">Stage 5: Hardening</strong></p>
          <p class="leading-relaxed mb-6">Escalated beliefs become resistant to contrary evidence. Disconfirmation is reinterpreted as confirmation ("they're scared," "manipulation proves we're right").</p>`,
        },
        {
          id: 'why-numeric-targets-recur',
          title: '2.2 Why Numeric Targets Recur',
          content: `<p class="leading-relaxed mb-4">Numeric targets (e.g., "589", "$1,000,000", "ceiling of $X") recur across coordination-dominant systems because they serve specific coordination functions:</p>`,
          table: {
            headers: ['Function', 'Mechanism'],
            rows: [
              { 'Function': 'Focal point', 'Mechanism': 'A specific number creates a Schelling point for coordination' },
              { 'Function': 'Commitment device', 'Mechanism': 'Stating a target signals commitment to hold' },
              { 'Function': 'Social proof', 'Mechanism': 'Shared targets demonstrate group alignment' },
              { 'Function': 'Narrative anchor', 'Mechanism': 'Numbers provide concrete content for belief transmission' },
              { 'Function': 'Unfalsifiability', 'Mechanism': 'Future-dated targets cannot be disproven in the present' },
            ],
          },
        },
        {
          id: 'why-moral-framing-appears',
          title: '2.3 Why Moral Framing Appears Under Pressure',
          content: `<p class="leading-relaxed mb-4">Moral language ("we deserve this," "justice," "the people's money") intensifies when coordination faces pressure. This occurs because:</p>`,
          table: {
            headers: ['Mechanism', 'Description'],
            rows: [
              { 'Mechanism': 'Stakes elevation', 'Description': 'Moral framing transforms speculation into a cause, increasing commitment' },
              { 'Mechanism': 'Criticism deflection', 'Description': 'Moral frames recast critics as enemies rather than analysts' },
              { 'Mechanism': 'Identity binding', 'Description': 'Moral stakes bind participant identity to asset, increasing sunk costs' },
              { 'Mechanism': 'Persistence justification', 'Description': 'Moral frames justify holding through losses ("this is bigger than money")' },
            ],
          },
        },
        {
          id: 'reflexive-loop',
          title: '2.4 The Reflexive Loop',
          content: `<p class="leading-relaxed mb-4">Belief escalation creates a reflexive loop:</p>
          <div class="bg-[var(--bg-secondary)] p-4 rounded-lg mb-4 font-mono text-sm">BELIEF → BEHAVIOR → OBSERVATION → BELIEF (intensified)</div>
          <ol class="list-decimal list-inside mb-4 space-y-2">
            <li>Participants express escalated beliefs</li>
            <li>Beliefs shape behavior (holding, promoting, recruiting)</li>
            <li>Behavior creates observable patterns (price stability, community activity)</li>
            <li>Observations are interpreted as confirming beliefs</li>
            <li>Confirmed beliefs escalate further</li>
          </ol>
          <p class="leading-relaxed mb-6">This loop is <strong class="text-[var(--fg)]">self-reinforcing but not self-validating</strong>. The loop can persist indefinitely without the underlying belief being true. It can also collapse suddenly when a disconfirming shock exceeds the system's capacity to reinterpret.</p>`,
        },
      ],
    },
    {
      id: 'case-illustrations',
      title: '3. Case Illustrations',
      content: `<p class="leading-relaxed mb-6">The following cases illustrate belief escalation patterns. They are <strong class="text-[var(--fg)]">illustrations, not proof</strong>. The framework cannot determine whether any specific case reflects organic coordination or manufactured activity.</p>`,
      subsections: [
        {
          id: 'xrp-589',
          title: '3.1 XRP "589"',
          content: `<p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Context:</strong> XRP is a cryptocurrency associated with Ripple Labs. The "589" meme refers to a price target that has circulated in XRP communities for years.</p>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Observable Patterns:</strong></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Pattern</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Observation</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Numeric target</td><td class="p-3">"589" repeated across social media, merchandise, community signals</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Persistence</td><td class="p-3">Target has circulated for years despite price remaining far below</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Unfalsifiability</td><td class="p-3">Target is future-dated; disconfirmation always deferred</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Intensification</td><td class="p-3">Narratives around 589 have expanded to include global financial reset</td></tr>
                <tr><td class="p-3">Moral framing</td><td class="p-3">"XRP Army," references to justice and deserving wealth</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Framework Interpretation:</strong> "589" functions as a coordination anchor. Its persistence demonstrates that numeric targets need not be achieved to serve coordination purposes. The number's function is social (focal point), not predictive (forecast).</p>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">What This Does NOT Establish:</strong> That 589 is correct, incorrect, or that XRP coordination is organic.</p>`,
        },
        {
          id: 'gme-destiny-narratives',
          title: '3.2 GME Destiny Narratives',
          content: `<p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Context:</strong> GameStop (GME) experienced a coordination event in January 2021. Subsequent holding behavior has been accompanied by escalating narrative claims.</p>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Observable Patterns:</strong></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Pattern</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Observation</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Numeric targets</td><td class="p-3">"MOASS" (Mother of All Short Squeezes), "phone number prices"</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Inevitability</td><td class="p-3">"Hedgies are fukd," "Just a matter of time"</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Historic framing</td><td class="p-3">"Biggest wealth transfer in history," "Financial revolution"</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Moral framing</td><td class="p-3">"Diamond hands," "Apes together strong," retail vs. hedge funds</td></tr>
                <tr><td class="p-3">Expansion</td><td class="p-3">Narratives expanded to include market structure, systemic fraud, global finance</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Framework Interpretation:</strong> GME belief escalation follows the predicted pattern: persistence + ambiguity + threat → escalation. The original squeeze catalyst has been replaced by escalated narratives that serve ongoing coordination.</p>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">What This Does NOT Establish:</strong> That MOASS will occur, that GME coordination is organic, or that participants will profit.</p>`,
        },
        {
          id: 'spx6900-belief-language',
          title: '3.3 SPX6900 Belief Language',
          content: `<p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Context:</strong> SPX6900 is a coordination-dominant token examined in the parent framework document.</p>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Observable Patterns:</strong></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Pattern</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Observation</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Numeric reference</td><td class="p-3">"6900" embedded in name; implicit ceiling reference</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Persistence language</td><td class="p-3">"SPX to the moon," "We're early," community permanence claims</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Identity binding</td><td class="p-3">"SPX maxi," community identity formation</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Drawdown response</td><td class="p-3">Community narratives intensified during 84% decline from ATH</td></tr>
                <tr><td class="p-3">Moral undertones</td><td class="p-3">Framing around persistence, belief, community over profit</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">Framework Interpretation:</strong> SPX6900 exhibits belief escalation patterns consistent with coordination stress response. The 84% drawdown from ATH represents a significant threat that would be expected to trigger escalation under the framework.</p>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">What This Does NOT Establish:</strong> That SPX6900 belief content is true, that coordination is organic, or that the asset will recover.</p>`,
        },
        {
          id: 'cross-case-pattern',
          title: '3.4 Cross-Case Pattern',
          content: `<div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Feature</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">XRP 589</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">GME</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">SPX6900</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Numeric anchor</td><td class="p-3">Yes (589)</td><td class="p-3">Yes (MOASS)</td><td class="p-3">Yes (6900)</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Inevitability language</td><td class="p-3">Yes</td><td class="p-3">Yes</td><td class="p-3">Moderate</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Moral framing</td><td class="p-3">Yes</td><td class="p-3">Strong</td><td class="p-3">Moderate</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Persistence despite disconfirmation</td><td class="p-3">Yes</td><td class="p-3">Yes</td><td class="p-3">Yes</td></tr>
                <tr><td class="p-3">Hardening under criticism</td><td class="p-3">Yes</td><td class="p-3">Yes</td><td class="p-3">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">Interpretation:</strong> The pattern recurrence across different assets, time periods, and participant bases suggests a structural phenomenon rather than coincidence. Belief escalation appears to be a general feature of coordination-dominant systems under stress.</p>`,
        },
      ],
    },
    {
      id: 'function-within-coordination-systems',
      title: '4. Function Within Coordination Systems',
      content: ``,
      subsections: [
        {
          id: 'how-escalation-sustains-participation',
          title: '4.1 How Escalation Sustains Participation',
          content: `<p class="leading-relaxed mb-4">Escalated beliefs serve specific functions that sustain coordination:</p>`,
          table: {
            headers: ['Function', 'Mechanism', 'Effect'],
            rows: [
              { 'Function': 'Exit prevention', 'Mechanism': 'Higher stakes ("this is historic") raise the cost of abandoning position', 'Effect': 'Reduces sell pressure' },
              { 'Function': 'Commitment signaling', 'Mechanism': 'Expressing escalated beliefs signals commitment to other participants', 'Effect': 'Strengthens coordination' },
              { 'Function': 'Narrative ammunition', 'Mechanism': 'Escalated claims provide content for recruitment and defense', 'Effect': 'Expands participant base' },
              { 'Function': 'Ambiguity management', 'Mechanism': 'Strong beliefs fill the void left by absent fundamentals', 'Effect': 'Provides psychological anchor' },
              { 'Function': 'Identity binding', 'Mechanism': 'Escalated narratives bind identity to asset', 'Effect': 'Increases switching costs' },
            ],
          },
        },
        {
          id: 'why-belief-hardens-under-critique',
          title: '4.2 Why Belief Hardens Under Critique',
          content: `<p class="leading-relaxed mb-4">Criticism of escalated beliefs typically <strong class="text-[var(--fg)]">strengthens</strong> rather than weakens them. This occurs through several mechanisms:</p>`,
          table: {
            headers: ['Mechanism', 'Description'],
            rows: [
              { 'Mechanism': 'In-group/out-group', 'Description': 'Critics are categorized as enemies, validating belief' },
              { 'Mechanism': 'Confirmation reframe', 'Description': 'Criticism is interpreted as evidence of threat ("they\'re scared")' },
              { 'Mechanism': 'Commitment escalation', 'Description': 'Defending against criticism deepens investment in belief' },
              { 'Mechanism': 'Sunk cost protection', 'Description': 'Abandoning belief after public commitment is costly' },
              { 'Mechanism': 'Social proof inversion', 'Description': '"Everyone\'s against us" becomes evidence of importance' },
            ],
          },
        },
        {
          id: 'why-escalation-accelerates-near-shocks',
          title: '4.3 Why Escalation Accelerates Near Shocks',
          content: `<p class="leading-relaxed mb-4">Belief escalation intensifies during:</p>`,
          table: {
            headers: ['Shock Type', 'Escalation Response'],
            rows: [
              { 'Shock Type': 'Price drawdowns', 'Escalation Response': '"Discount," "accumulation opportunity," "shaking out weak hands"' },
              { 'Shock Type': 'Negative press', 'Escalation Response': '"They\'re afraid," "mainstream is threatened," "hit piece"' },
              { 'Shock Type': 'Regulatory attention', 'Escalation Response': '"They want to stop us," "proof we\'re winning"' },
              { 'Shock Type': 'Competing narratives', 'Escalation Response': '"FUD," "distraction," "they don\'t understand"' },
              { 'Shock Type': 'Internal conflict', 'Escalation Response': '"True believers" vs. "paper hands," purification narrative' },
            ],
          },
        },
        {
          id: 'stabilization-function',
          title: '4.4 The Stabilization Function',
          content: `<p class="leading-relaxed mb-4">Belief escalation serves as a <strong class="text-[var(--fg)]">stabilization mechanism</strong> for coordination under stress:</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Without Escalation</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">With Escalation</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Drawdown → panic → exit cascade</td><td class="p-3">Drawdown → narrative intensification → hold</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">Criticism → doubt → defection</td><td class="p-3">Criticism → enemy identification → cohesion</td></tr>
                <tr><td class="p-3">Ambiguity → uncertainty → paralysis</td><td class="p-3">Ambiguity → destiny narrative → action</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">Critical Distinction:</strong> Stabilization is a functional description, not a value judgment. The framework observes that escalation stabilizes coordination. It does not claim that stabilization is good, that participants benefit, or that the underlying beliefs are true.</p>`,
        },
      ],
    },
    {
      id: 'failure-modes',
      title: '5. Failure Modes',
      content: `<p class="leading-relaxed mb-6">Belief escalation is not infinitely sustainable. The following failure modes can collapse escalated systems:</p>`,
      subsections: [
        {
          id: 'when-escalation-collapses',
          title: '5.1 When Escalation Collapses',
          content: ``,
          table: {
            headers: ['Failure Mode', 'Mechanism', 'Indicator'],
            rows: [
              { 'Failure Mode': 'Narrative exhaustion', 'Mechanism': 'Escalation reaches maximum intensity with nowhere higher to go', 'Indicator': 'Repetition without innovation' },
              { 'Failure Mode': 'Reality intrusion', 'Mechanism': 'Event occurs that cannot be reinterpreted (e.g., bankruptcy, fraud proof)', 'Indicator': 'Unambiguous disconfirmation' },
              { 'Failure Mode': 'Coordination fracture', 'Mechanism': 'Internal conflict exceeds cohesion capacity', 'Indicator': 'Schisms, competing narratives' },
              { 'Failure Mode': 'Attention withdrawal', 'Mechanism': 'External attention moves elsewhere; no new participants', 'Indicator': 'Volume collapse without recovery' },
              { 'Failure Mode': 'Time decay', 'Mechanism': 'Deferred targets eventually come due', 'Indicator': 'Date-specific claims failing' },
            ],
          },
        },
        {
          id: 'when-escalation-turns-extractive',
          title: '5.2 When Escalation Turns Extractive',
          content: `<p class="leading-relaxed mb-4">Escalated beliefs can be weaponized for extraction:</p>`,
          table: {
            headers: ['Extractive Pattern', 'Mechanism'],
            rows: [
              { 'Extractive Pattern': 'Influencer pump', 'Mechanism': 'Influencers amplify destiny narratives, then exit on retail entry' },
              { 'Extractive Pattern': 'Narrative control', 'Mechanism': 'Insiders control escalation pace to optimize exit timing' },
              { 'Extractive Pattern': 'Belief arbitrage', 'Mechanism': 'Sophisticated actors profit from predictable belief-behavior patterns' },
              { 'Extractive Pattern': 'Community capture', 'Mechanism': 'Escalated community becomes exit liquidity for concentrated holders' },
            ],
          },
        },
        {
          id: 'when-escalation-detaches',
          title: '5.3 When Escalation Detaches from Coordination Utility',
          content: `<p class="leading-relaxed mb-4">Belief escalation can become dysfunctional when it:</p>`,
          table: {
            headers: ['Detachment Mode', 'Description', 'Outcome'],
            rows: [
              { 'Detachment Mode': 'Exceeds coordination needs', 'Description': 'Beliefs escalate beyond what coordination requires', 'Outcome': 'Recruitment becomes difficult (too extreme)' },
              { 'Detachment Mode': 'Becomes self-referential', 'Description': 'Beliefs about beliefs replace beliefs about asset', 'Outcome': 'Loss of connection to original coordination object' },
              { 'Detachment Mode': 'Fragments into factions', 'Description': 'Competing escalations create internal conflict', 'Outcome': 'Coordination collapse' },
              { 'Detachment Mode': 'Attracts hostile attention', 'Description': 'Extreme claims draw regulatory/legal/media scrutiny', 'Outcome': 'External intervention' },
            ],
          },
        },
        {
          id: 'boundary-condition',
          title: '5.4 Boundary Condition',
          content: `<p class="leading-relaxed mb-4">Belief escalation sustains coordination <strong class="text-[var(--fg)]">until it doesn't</strong>. The framework cannot predict when escalation will fail. It can only observe that:</p>
          <ol class="list-decimal list-inside mb-6 space-y-2">
            <li>Escalation serves a stabilization function</li>
            <li>Escalation has characteristic failure modes</li>
            <li>Failure timing is not predictable from belief content</li>
          </ol>`,
        },
      ],
    },
    {
      id: 'boundaries-and-falsification',
      title: '6. Boundaries and Falsification',
      content: ``,
      subsections: [
        {
          id: 'what-would-disprove',
          title: '6.1 What Would Disprove This Thesis',
          content: `<p class="leading-relaxed mb-4">This thesis would be <strong class="text-[var(--fg)]">falsified</strong> by:</p>`,
          table: {
            headers: ['Falsification Condition', 'Implication'],
            rows: [
              { 'Falsification Condition': 'Coordination-dominant assets persist without belief escalation', 'Implication': 'Escalation is not necessary for coordination' },
              { 'Falsification Condition': 'Belief escalation does not correlate with coordination stress', 'Implication': 'Escalation is not a stress response' },
              { 'Falsification Condition': 'Escalated beliefs consistently predict outcomes accurately', 'Implication': 'Escalation is evidence, not stabilization' },
              { 'Falsification Condition': 'Criticism reliably weakens rather than strengthens escalated beliefs', 'Implication': 'Hardening mechanism is incorrect' },
              { 'Falsification Condition': 'Escalation patterns do not recur across different coordination systems', 'Implication': 'Pattern is coincidence, not structure' },
            ],
          },
        },
        {
          id: 'what-would-weaken',
          title: '6.2 What Would Weaken This Thesis',
          content: ``,
          table: {
            headers: ['Weakening Evidence', 'Impact'],
            rows: [
              { 'Weakening Evidence': 'Cases where coordination persists through major drawdowns without escalation', 'Impact': 'Reduces necessity claim' },
              { 'Weakening Evidence': 'Cases where escalation collapses coordination rather than stabilizing it', 'Impact': 'Reduces function claim' },
              { 'Weakening Evidence': 'Evidence that escalation is purely manufactured in all cases', 'Impact': 'Shifts interpretation (still functional, but externally driven)' },
            ],
          },
        },
        {
          id: 'what-thesis-does-not-claim',
          title: '6.3 What This Thesis Does NOT Claim',
          content: ``,
          table: {
            headers: ['Non-Claim', 'Clarification'],
            rows: [
              { 'Non-Claim': 'Any destiny narrative is true', 'Clarification': 'Mechanism ≠ truth' },
              { 'Non-Claim': 'Any numeric target will be reached', 'Clarification': 'Targets are coordination devices, not forecasts' },
              { 'Non-Claim': 'Participants are irrational', 'Clarification': 'Escalation may be locally rational' },
              { 'Non-Claim': 'Participants are rational', 'Clarification': 'Rationality is not assessed' },
              { 'Non-Claim': 'Belief escalation is good', 'Clarification': 'Functional description, not value judgment' },
              { 'Non-Claim': 'Belief escalation is bad', 'Clarification': 'Functional description, not value judgment' },
              { 'Non-Claim': 'Specific assets will succeed', 'Clarification': 'No predictions' },
              { 'Non-Claim': 'Specific assets will fail', 'Clarification': 'No predictions' },
            ],
          },
        },
        {
          id: 'belief-truth-outcome',
          title: '6.4 Belief ≠ Truth ≠ Outcome',
          content: `<p class="leading-relaxed mb-4">The central epistemic boundary:</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Concept</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Belief</td><td class="p-3">What participants express and appear to hold</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Truth</td><td class="p-3">Whether belief content corresponds to reality</td></tr>
                <tr><td class="p-3 font-medium">Outcome</td><td class="p-3">What actually happens to the asset</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-4"><strong class="text-[var(--fg)]">These are independent.</strong> Belief can be strong while content is false. Truth cannot be determined from belief intensity. Outcome does not validate or invalidate the mechanism by which beliefs emerged.</p>
          <p class="leading-relaxed mb-6"><strong class="text-[var(--fg)]">Restatement:</strong> This thesis explains why destiny narratives emerge. It does not claim any destiny narrative is true, false, or predictive of outcomes.</p>`,
        },
      ],
    },
    {
      id: 'summary-of-claims',
      title: '7. Summary of Claims',
      content: ``,
      subsections: [
        {
          id: 'tier-1-definitional',
          title: '7.1 Tier 1: Definitional (High Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Belief escalation can be defined with observable markers</li>
            <li>Necessary conditions (C1-C5) can be specified</li>
            <li>The pattern recurs across different coordination-dominant assets</li>
          </ul>`,
        },
        {
          id: 'tier-2-mechanistic',
          title: '7.2 Tier 2: Mechanistic (Moderate Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Escalation follows a characteristic progression (persistence + ambiguity + threat)</li>
            <li>Numeric targets function as coordination anchors</li>
            <li>Moral framing intensifies under pressure</li>
            <li>Beliefs harden under criticism</li>
          </ul>`,
        },
        {
          id: 'tier-3-functional',
          title: '7.3 Tier 3: Functional (Moderate Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Escalation serves a coordination-stabilization function</li>
            <li>Escalation prevents exit cascades during drawdowns</li>
            <li>Escalation accelerates near shocks</li>
          </ul>`,
        },
        {
          id: 'tier-4-limits',
          title: '7.4 Tier 4: Limits (High Confidence on Limits)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Escalation has characteristic failure modes</li>
            <li>Escalation can be weaponized for extraction</li>
            <li>Belief content cannot be validated by belief intensity</li>
            <li>Organic vs. manufactured escalation cannot be distinguished</li>
          </ul>`,
        },
      ],
    },
    {
      id: 'conclusion',
      title: '8. Conclusion',
      content: ``,
      subsections: [
        {
          id: 'what-this-establishes',
          title: '8.1 What This Thesis Establishes',
          content: `<p class="leading-relaxed mb-4">When coordination-dominant assets persist under unresolved ambiguity, participants reliably escalate belief toward destiny narratives. This escalation:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Follows predictable patterns (numeric targets, inevitability, moral framing)</li>
            <li>Serves a stabilization function under coordination stress</li>
            <li>Hardens under criticism rather than weakening</li>
            <li>Accelerates near drawdowns and attention shocks</li>
          </ul>
          <p class="leading-relaxed mb-6">The mechanism is structural: escalation emerges from the combination of persistence, ambiguity, threat, and sunk participation. It recurs across different assets because it addresses a recurring problem: maintaining coordination without external validation.</p>`,
        },
        {
          id: 'what-this-does-not-establish',
          title: '8.2 What This Thesis Does Not Establish',
          content: ``,
          list: [
            'That any destiny narrative is true',
            'That any numeric target will be reached',
            'That belief escalation indicates organic coordination',
            'That participants will profit or lose',
            'That escalation is good, bad, rational, or irrational',
          ],
        },
        {
          id: 'operational-implication',
          title: '8.3 Operational Implication',
          content: `<p class="leading-relaxed mb-4">Observers of coordination-dominant systems should expect belief escalation to emerge under specific conditions. The presence of escalated beliefs should be interpreted as:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Evidence of coordination stress (threat + ambiguity)</li>
            <li>Stabilization response (not prediction)</li>
            <li>Input data for analysis (not authority)</li>
          </ul>
          <p class="leading-relaxed mb-6">Escalated beliefs tell us about coordination dynamics. They do not tell us about the future.</p>`,
        },
        {
          id: 'relationship-to-parent-framework',
          title: '8.4 Relationship to Parent Framework',
          content: `<p class="leading-relaxed mb-4">This thesis extends the coordination-dominant asset framework by explaining a specific phenomenon that emerges within such systems. It does not modify the parent framework's definitions, falsification criteria, or epistemic boundaries.</p>
          <p class="leading-relaxed mb-6">The parent framework classifies assets. This thesis explains participant behavior within classified assets. Both are descriptive, non-predictive, and subject to the falsification protocols specified in companion documentation.</p>`,
        },
      ],
    },
  ],
  references: [
    { text: 'RMGTNI (2025). "Coordination-Dominant Assets: A Structural Framework."' },
    { text: 'RMGTNI (2025). "SPX6900 Falsification & Boundaries."' },
    { text: 'Festinger, L. (1957). A Theory of Cognitive Dissonance. Stanford University Press.' },
    { text: 'Schelling, T. (1960). The Strategy of Conflict. Harvard University Press.' },
    { text: 'Cialdini, R. (1984). Influence: The Psychology of Persuasion. Harper Business.' },
    { text: 'Soros, G. (1987). The Alchemy of Finance. Simon & Schuster.' },
  ],
  dataAvailability: [
    'Case examples (XRP, GME, SPX6900): Public social media, market data',
    'This thesis is primarily conceptual; case studies are illustrative, not empirical validation.',
  ],
  footerText: 'RMGTNI | 2025',
};

export default beliefEscalationInCoordinationSystemsData;
