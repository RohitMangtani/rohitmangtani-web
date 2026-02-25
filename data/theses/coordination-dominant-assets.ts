import type { ThesisArticleData } from '@/types/theses';

export const coordinationDominantAssetsData: ThesisArticleData = {
  slug: 'coordination-dominant-assets',
  date: '2025',
  title: 'Coordination-Dominant Assets',
  subtitle: 'How participants respond when systems become extractive or unwinnable',
  onRamp: {
    description: 'This thesis proposes a framework for understanding assets whose value derives from coordination rather than fundamentals. It defines the category, specifies necessary conditions, and examines what can and cannot be concluded from observable data.',
    whatItDoes: 'Defines a category, establishes falsification criteria, and preserves ambiguity where data cannot resolve it.',
    whatItDoesNot: 'Predict outcomes, recommend participation, or claim any asset will succeed.',
    howToRead: 'This is a conceptual framework, not a narrative essay. Skim the Abstract and Section 3 (Definitions) first.',
  },
  intro: 'This essay introduces a framework for classifying assets whose value derives from coordination rather than fundamentals.',
  sections: [
    {
      id: 'abstract',
      title: 'Abstract',
      content: `
        <p class="leading-relaxed mb-6">
          This paper presents a descriptive framework for understanding coordination-dominant assets. These are instruments whose value derives primarily from collective coordination rather than cash flows, utility, or external validation.
        </p>
        
        <p class="leading-relaxed mb-6">
          The framework addresses a specific phenomenon: when participants perceive formal systems as extractive or offering low agency, they predictably seek alternatives that shift the objective function from outcomes to participation and persistence. Coordination-dominant assets are one such alternative. They are not unique, inevitable, or superior to other responses.
        </p>

        <p class="leading-relaxed mb-6">
          The paper defines the category with necessary conditions, specifies falsification criteria, and treats manipulation as a confounder that limits but does not eliminate conclusions. It does not advocate participation, predict which assets will persist, or claim that coordination-dominant assets "beat" or "escape" the systems they respond to.
        </p>

        <p class="leading-relaxed mb-6">
          SPX6900 and the GME event (2021) are examined as illustrative cases. They are examples, not proof. The framework cannot distinguish organic coordination from manufactured activity in any specific instance. This ambiguity is preserved, not resolved.
        </p>

        <p class="leading-relaxed mb-6">
          A companion falsification document specifies conditions under which this framework should be considered invalidated, expired, or misapplied.
        </p>
      `,
    },
    {
      id: 'scope-and-limitations',
      title: '1. Scope and Limitations',
      content: ``,
      subsections: [
        {
          id: 'what-this-framework-claims',
          title: '1.1 What This Framework Claims',
          content: ``,
          list: [
            '<strong>Definitional:</strong> A category of "coordination-dominant assets" can be defined with necessary conditions.',
            '<strong>Descriptive:</strong> When formal systems are perceived as extractive, some participants seek coordination-based alternatives.',
            '<strong>Structural:</strong> Macro conditions (liquidity, permissionless infrastructure) are necessary but not sufficient for coordination-dominant asset emergence.',
            '<strong>Agnostic:</strong> The framework does not claim these assets are good, bad, rational, or irrational.',
          ],
        },
        {
          id: 'what-this-framework-does-not-claim',
          title: '1.2 What This Framework Does Not Claim',
          content: ``,
          list: [
            'Coordination-dominant assets "win" against extractive systems',
            'Participants "escape" extraction by participating',
            'Any specific asset will persist or succeed',
            'Organic coordination can be distinguished from manipulation',
            'Participant motivations are known',
            'This framework predicts which assets will emerge or persist',
          ],
        },
        {
          id: 'epistemic-status',
          title: '1.3 Epistemic Status',
          content: ``,
          table: {
            headers: ['Claim Type', 'Confidence'],
            rows: [
              { 'Claim Type': 'Definitions', 'Confidence': 'High (stipulative)' },
              { 'Claim Type': 'Structural descriptions', 'Confidence': 'Moderate (observable patterns)' },
              { 'Claim Type': 'Causal mechanisms', 'Confidence': 'Low (inferred, not demonstrated)' },
              { 'Claim Type': 'Participant motivations', 'Confidence': 'Low (unobservable)' },
              { 'Claim Type': 'Predictive claims', 'Confidence': 'None attempted' },
            ],
          },
        },
      ],
    },
    {
      id: 'responses-to-extractive-systems',
      title: '2. Responses to Extractive Systems: A Coordination Framework',
      content: ``,
      subsections: [
        {
          id: 'underlying-dynamic',
          title: '2.1 The Underlying Dynamic',
          content: `<p class="leading-relaxed mb-4">When participants perceive a system as extractive (characterized by information asymmetry, gated access, fee extraction, or outcome manipulation), they face constrained choices:</p>`,
          table: {
            headers: ['Response', 'Description'],
            rows: [
              { 'Response': 'Exit', 'Description': 'Leave the system entirely' },
              { 'Response': 'Voice', 'Description': 'Attempt to reform the system' },
              { 'Response': 'Loyalty', 'Description': 'Accept the system as given' },
              { 'Response': 'Coordination', 'Description': 'Seek alternatives that bypass system constraints' },
            ],
          },
        },
        {
          id: 'shift-in-objective-function',
          title: '2.2 Shift in Objective Function',
          content: `<p class="leading-relaxed mb-4">When formal systems appear unwinnable on their own terms, participants may shift their objective function:</p>
          <p class="leading-relaxed mb-6">This shift does not guarantee better outcomes. It represents a different optimization target.</p>`,
          table: {
            headers: ['Traditional Objective', 'Coordination Objective'],
            rows: [
              { 'Traditional Objective': 'Maximize expected return', 'Coordination Objective': 'Participate in collective action' },
              { 'Traditional Objective': 'Win within system rules', 'Coordination Objective': 'Persist outside system constraints' },
              { 'Traditional Objective': 'Outcome-oriented', 'Coordination Objective': 'Process-oriented' },
              { 'Traditional Objective': 'Individual optimization', 'Coordination Objective': 'Group coordination' },
            ],
          },
        },
        {
          id: 'two-response-patterns',
          title: '2.3 Two Response Patterns',
          content: `<p class="leading-relaxed mb-4">Not all coordination-based alternatives are equivalent. The framework distinguishes:</p>
          
          <h4 class="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3 mt-6">Extractive Throughput Games</h4>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Characteristic</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Structure</td><td class="p-3">Rapid entry/exit cycles</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Value source</td><td class="p-3">Late entrants fund early exits</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Time horizon</td><td class="p-3">Hours to days</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Objective</td><td class="p-3">Extract before collapse</td></tr>
                <tr><td class="p-3 font-medium">Sustainability</td><td class="p-3">None by design</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6 text-sm">Examples: Pump-and-dump schemes, short-cycle token launches, exit-liquidity operations.</p>

          <h4 class="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3">Coordination-Dominant Persistence Games</h4>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Characteristic</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Structure</td><td class="p-3">Emphasis on holding and community</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Value source</td><td class="p-3">Mutual expectation of continued coordination</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Time horizon</td><td class="p-3">Months to years</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">Objective</td><td class="p-3">Persist through participation</td></tr>
                <tr><td class="p-3 font-medium">Sustainability</td><td class="p-3">Indeterminate</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6 text-sm">Examples: Long-surviving meme tokens, some collective holding phenomena.</p>`,
        },
        {
          id: 'critical-distinction',
          title: '2.4 Critical Distinction',
          content: `<p class="leading-relaxed mb-4">The framework does not claim persistence games are "better" than throughput games. It observes that they optimize for different objectives:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Throughput games optimize for extraction speed</li>
            <li>Persistence games optimize for coordination duration</li>
          </ul>
          <p class="leading-relaxed mb-6">Both may result in participant losses. Neither guarantees positive outcomes. The distinction is structural, not normative.</p>`,
        },
        {
          id: 'why-this-pattern-recurs',
          title: '2.5 Why This Pattern Recurs',
          content: `<p class="leading-relaxed mb-4">The framework proposes that coordination-dominant responses recur when:</p>`,
          list: [
            '<strong>Perceived extraction:</strong> Participants believe formal systems extract value unfairly',
            '<strong>Low perceived agency:</strong> Participants believe they cannot win within formal rules',
            '<strong>Available infrastructure:</strong> Permissionless coordination mechanisms exist',
            '<strong>Sufficient liquidity:</strong> Capital is available for speculative allocation',
          ],
        },
        {
          id: 'what-framework-does-not-explain',
          title: '2.6 What the Framework Does Not Explain',
          content: ``,
          table: {
            headers: ['Phenomenon', 'Status'],
            rows: [
              { 'Phenomenon': 'Which specific assets emerge', 'Status': 'Not explained' },
              { 'Phenomenon': 'Which assets persist', 'Status': 'Not explained' },
              { 'Phenomenon': 'Timing of emergence', 'Status': 'Not explained' },
              { 'Phenomenon': 'Magnitude of participation', 'Status': 'Not explained' },
              { 'Phenomenon': 'Organic vs. manufactured activity', 'Status': 'Cannot distinguish' },
            ],
          },
        },
      ],
    },
    {
      id: 'defining-coordination-dominant-assets',
      title: '3. Defining Coordination-Dominant Assets',
      content: ``,
      subsections: [
        {
          id: 'necessary-conditions',
          title: '3.1 Necessary Conditions',
          content: `<p class="leading-relaxed mb-4">An asset qualifies as coordination-dominant if and only if ALL of the following hold:</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Condition</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">N1: No cash flows</td><td class="p-3">Asset generates no dividends, interest, or revenue share</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">N2: No utility function</td><td class="p-3">Asset provides no service, access, or governance rights</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">N3: No external validation</td><td class="p-3">Price is not anchored to external reality</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3 font-medium">N4: Positive market cap</td><td class="p-3">Asset trades above $0 with measurable liquidity</td></tr>
                <tr><td class="p-3 font-medium">N5: Multiple holders</td><td class="p-3">More than trivial holder count (>1,000 unique participants)</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6"><strong>Interpretation:</strong> If N1-N3 are satisfied and N4-N5 are satisfied, the asset's value must derive from something other than fundamentals, utility, or external anchors. That "something" is coordination.</p>`,
        },
        {
          id: 'sufficient-conditions',
          title: '3.2 Sufficient Conditions',
          content: `<p class="leading-relaxed mb-4 text-[var(--fg)] font-medium">There are no sufficient conditions.</p>
          <p class="leading-relaxed mb-4">Satisfying N1-N5 does not guarantee:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Asset survival</li>
            <li>Coordination success</li>
            <li>Any specific price level</li>
            <li>Any specific participant behavior</li>
          </ul>
          <p class="leading-relaxed mb-6">The category describes structure, not outcome.</p>`,
        },
        {
          id: 'what-does-not-qualify',
          title: '3.3 What Does NOT Qualify',
          content: ``,
          table: {
            headers: ['Asset Type', 'Why Excluded'],
            rows: [
              { 'Asset Type': 'Utility tokens', 'Why Excluded': 'Fail N2' },
              { 'Asset Type': 'Governance tokens', 'Why Excluded': 'Fail N2' },
              { 'Asset Type': 'Stablecoins', 'Why Excluded': 'Fail N3' },
              { 'Asset Type': 'Revenue-sharing tokens', 'Why Excluded': 'Fail N1' },
              { 'Asset Type': 'Dead tokens', 'Why Excluded': 'Fail N4' },
              { 'Asset Type': 'Single-holder tokens', 'Why Excluded': 'Fail N5' },
              { 'Asset Type': 'Equities with fundamentals', 'Why Excluded': 'Fail N1, N3' },
            ],
          },
        },
      ],
    },
    {
      id: 'case-study-spx6900',
      title: '4. Case Study: SPX6900',
      content: ``,
      subsections: [
        {
          id: 'role-in-framework',
          title: '4.1 Role in This Framework',
          content: `<p class="leading-relaxed mb-6">SPX6900 is examined as an illustrative case, not as proof of the framework. The case demonstrates how the framework categorizes an asset; it does not validate the framework's explanatory power.</p>`,
        },
        {
          id: 'necessary-condition-assessment',
          title: '4.2 Necessary Condition Assessment',
          content: `<div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border border-[var(--border)]">
              <thead>
                <tr class="border-b border-[var(--border)]">
                  <th class="text-left p-3 font-medium text-[var(--fg)]">Condition</th>
                  <th class="text-left p-3 font-medium text-[var(--fg)]">SPX6900 Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[var(--border)]"><td class="p-3">N1: No cash flows</td><td class="p-3">✓ Satisfied</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">N2: No utility function</td><td class="p-3">✓ Satisfied</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">N3: No external validation</td><td class="p-3">✓ Satisfied</td></tr>
                <tr class="border-b border-[var(--border)]"><td class="p-3">N4: Positive market cap</td><td class="p-3">✓ Satisfied ($336M)</td></tr>
                <tr><td class="p-3">N5: Multiple holders</td><td class="p-3">✓ Satisfied (49,101 Ethereum wallets)</td></tr>
              </tbody>
            </table>
          </div>
          <p class="leading-relaxed mb-6"><strong>Classification:</strong> SPX6900 satisfies the necessary conditions for a coordination-dominant asset.</p>`,
        },
        {
          id: 'observable-characteristics',
          title: '4.3 Observable Characteristics',
          content: ``,
          table: {
            headers: ['Metric', 'Value', 'Source'],
            rows: [
              { 'Metric': 'Deployment date', 'Value': 'August 16, 2023', 'Source': 'Etherscan' },
              { 'Metric': 'Age', 'Value': '29 months', 'Source': 'Calculated' },
              { 'Metric': 'ATH', 'Value': '$2.28 (July 2025)', 'Source': 'CoinMarketCap' },
              { 'Metric': 'Current drawdown', 'Value': '-84%', 'Source': 'Calculated' },
              { 'Metric': 'Contract ownership', 'Value': 'Renounced', 'Source': 'On-chain' },
              { 'Metric': 'Buy/sell tax', 'Value': '0% / 0%', 'Source': 'On-chain' },
            ],
          },
        },
        {
          id: 'what-cannot-be-determined',
          title: '4.4 What Cannot Be Determined',
          content: ``,
          list: [
            'Whether survival reflects organic coordination or manipulation',
            'Why SPX6900 persisted when similar tokens failed',
            'Participant motivations',
            'Future trajectory',
          ],
        },
        {
          id: 'confounder-exposure',
          title: '4.5 Confounder Exposure',
          content: `<p class="leading-relaxed mb-4">SPX6900's observed metrics are vulnerable to confounders:</p>`,
          table: {
            headers: ['Claim', 'Status if Manipulation Dominates'],
            rows: [
              { 'Claim': '225K holders', 'Status if Manipulation Dominates': 'Collapses (may be 10-50K)' },
              { 'Claim': 'Organic coordination occurred', 'Status if Manipulation Dominates': 'Collapses' },
              { 'Claim': 'Community is genuine', 'Status if Manipulation Dominates': 'Collapses' },
              { 'Claim': '29-month survival', 'Status if Manipulation Dominates': 'Survives (observation)' },
              { 'Claim': 'Contract structure', 'Status if Manipulation Dominates': 'Survives (on-chain)' },
            ],
          },
        },
      ],
    },
    {
      id: 'case-study-gme',
      title: '5. Case Study: GME (2021)',
      content: ``,
      subsections: [
        {
          id: 'gme-role-in-framework',
          title: '5.1 Role in This Framework',
          content: `<p class="leading-relaxed mb-6">The GME event is examined as a comparative case. It illustrates coordination dynamics in a different asset class (equities) with different infrastructure (centralized exchanges).</p>`,
        },
        {
          id: 'variable-comparison',
          title: '5.2 Variable Comparison',
          content: ``,
          table: {
            headers: ['Variable', 'GME', 'Coordination-Dominant Tokens'],
            rows: [
              { 'Variable': 'Asset type', 'GME': 'Equity', 'Coordination-Dominant Tokens': 'Token' },
              { 'Variable': 'Infrastructure', 'GME': 'Centralized', 'Coordination-Dominant Tokens': 'Permissionless' },
              { 'Variable': 'Cash flows', 'GME': 'Present (company)', 'Coordination-Dominant Tokens': 'Absent' },
              { 'Variable': 'Mechanism', 'GME': 'Short squeeze + coordination', 'Coordination-Dominant Tokens': 'Pure coordination' },
              { 'Variable': 'Interruptibility', 'GME': 'High (trading halts)', 'Coordination-Dominant Tokens': 'Low' },
              { 'Variable': 'Adversary', 'GME': 'Identifiable (hedge funds)', 'Coordination-Dominant Tokens': 'Absent' },
            ],
          },
        },
        {
          id: 'what-comparison-establishes',
          title: '5.3 What the Comparison Establishes',
          content: `<p class="leading-relaxed mb-4">Both GME and coordination-dominant tokens involve:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Participants holding through severe drawdowns</li>
            <li>Community dynamics playing a visible role</li>
            <li>Narrative framing around "fairness" or "resistance"</li>
          </ul>`,
        },
        {
          id: 'what-comparison-does-not-establish',
          title: '5.4 What the Comparison Does Not Establish',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Common causal mechanism</li>
            <li>GME as "precedent" for token behavior</li>
            <li>Structural inheritance between phenomena</li>
          </ul>
          <p class="leading-relaxed mb-6"><strong>The comparison is illustrative.</strong> It shows that coordination dynamics can emerge across asset classes. It does not demonstrate that token coordination inherits GME's meaning or mechanics.</p>`,
        },
      ],
    },
    {
      id: 'survivorship-bias',
      title: '6. Survivorship Bias and Prediction Limits',
      content: ``,
      subsections: [
        {
          id: 'the-problem',
          title: '6.1 The Problem',
          content: `<p class="leading-relaxed mb-6">Analyzing assets that survived (SPX6900, GME, Dogecoin) selects on the dependent variable. Conclusions apply only to the survivor set.</p>`,
        },
        {
          id: 'what-framework-cannot-predict',
          title: '6.2 What the Framework Cannot Predict',
          content: ``,
          table: {
            headers: ['Question', 'Status'],
            rows: [
              { 'Question': 'Which assets will achieve coordination', 'Status': 'Cannot predict' },
              { 'Question': 'Which assets will persist', 'Status': 'Cannot predict' },
              { 'Question': 'When coordination will emerge', 'Status': 'Cannot predict' },
              { 'Question': 'Magnitude of participation', 'Status': 'Cannot predict' },
            ],
          },
        },
        {
          id: 'explicit-limitation',
          title: '6.3 Explicit Limitation',
          content: `<p class="leading-relaxed mb-6">This framework describes a pattern of response to perceived extraction. It does not identify which specific responses will succeed. The framework is classificatory, not predictive.</p>`,
        },
      ],
    },
    {
      id: 'confounders-and-ambiguity',
      title: '7. Confounders and Ambiguity',
      content: ``,
      subsections: [
        {
          id: 'defining-confounders',
          title: '7.1 Defining Confounders',
          content: ``,
          table: {
            headers: ['Confounder', 'Impact'],
            rows: [
              { 'Confounder': 'Wash trading', 'Impact': 'Inflates volume' },
              { 'Confounder': 'Sybil wallets', 'Impact': 'Inflates holder count' },
              { 'Confounder': 'Coordinated manipulation', 'Impact': 'Undermines "organic coordination" claims' },
              { 'Confounder': 'Manufactured narrative', 'Impact': 'Undermines "community" claims' },
            ],
          },
        },
        {
          id: 'claims-that-survive-confounders',
          title: '7.2 Claims That Survive Confounders',
          content: ``,
          list: [
            'The asset exists and trades',
            'Contract structure is permissionless',
            'The asset has persisted for a measurable duration',
            'Some nonzero humans participated',
          ],
        },
        {
          id: 'claims-that-collapse-under-confounders',
          title: '7.3 Claims That Collapse Under Confounders',
          content: ``,
          list: [
            'Large-scale organic coordination occurred',
            'Participants value participation over return',
            'Community is genuine',
            'Asset represents collective expression',
          ],
        },
        {
          id: 'preserved-ambiguity',
          title: '7.4 Preserved Ambiguity',
          content: `<p class="leading-relaxed mb-6 text-[var(--fg)] font-medium">This framework cannot determine whether any specific coordination-dominant asset reflects organic coordination or manufactured activity. Both explanations fit observed data. The ambiguity is inherent and preserved.</p>`,
        },
      ],
    },
    {
      id: 'macro-conditions',
      title: '8. Macro Conditions',
      content: ``,
      subsections: [
        {
          id: 'necessary-background',
          title: '8.1 Necessary Background',
          content: `<p class="leading-relaxed mb-4">Coordination-dominant assets are more likely to emerge when:</p>`,
          table: {
            headers: ['Condition', 'Role'],
            rows: [
              { 'Condition': 'Liquidity cycles', 'Role': 'Provides speculative capital' },
              { 'Condition': 'Permissionless infrastructure', 'Role': 'Enables uninterrupted coordination' },
              { 'Condition': 'Low barriers to entry', 'Role': 'Allows many attempts' },
              { 'Condition': 'Perceived system extraction', 'Role': 'Motivates alternative-seeking' },
            ],
          },
        },
        {
          id: 'not-sufficient',
          title: '8.2 Not Sufficient',
          content: `<p class="leading-relaxed mb-4">These conditions do not predict:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Which specific assets emerge</li>
            <li>When emergence occurs</li>
            <li>Whether coordination persists</li>
          </ul>
          <p class="leading-relaxed mb-6 text-[var(--fg)] font-medium">Macro conditions are background, not cause.</p>`,
        },
      ],
    },
    {
      id: 'falsification-and-boundaries',
      title: '9. Falsification and Boundaries',
      content: ``,
      subsections: [
        {
          id: 'framework-falsification',
          title: '9.1 Framework Falsification',
          content: `<p class="leading-relaxed mb-4">The coordination-dominant asset framework would be falsified by:</p>`,
          list: [
            'Discovery that N1-N5 tokens cannot persist (all fail within 12 months)',
            'Evidence that all persisting tokens involve manipulation (no organic coordination exists)',
            'Evidence that participation/persistence framing never applies (participants universally seek outcome maximization)',
          ],
        },
        {
          id: 'case-level-falsification',
          title: '9.2 Case-Level Falsification',
          content: `<p class="leading-relaxed mb-4">A specific asset's classification as coordination-dominant is falsified by:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Discovery of hidden utility/governance functions</li>
            <li>Discovery of cash flow mechanisms</li>
            <li>Evidence of <1,000 unique human holders</li>
            <li>Price collapse to $0 with no trading</li>
          </ul>`,
        },
        {
          id: 'scope-boundaries',
          title: '9.3 Scope Boundaries',
          content: `<p class="leading-relaxed mb-4">This framework should NOT be applied to:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Utility tokens</li>
            <li>Governance tokens</li>
            <li>Revenue-sharing instruments</li>
            <li>Assets with fundamental valuation anchors</li>
            <li>Price predictions</li>
            <li>Investment recommendations</li>
            <li>Moral judgments</li>
          </ul>`,
        },
        {
          id: 'reference-document',
          title: '9.4 Reference Document',
          content: `<p class="leading-relaxed mb-6">Full falsification criteria, expiration conditions, and monitoring signals are specified in a companion document. That document takes precedence for operational invalidation conditions.</p>`,
        },
      ],
    },
    {
      id: 'summary-of-defensible-claims',
      title: '10. Summary of Defensible Claims',
      content: ``,
      subsections: [
        {
          id: 'tier-1-definitional',
          title: '10.1 Tier 1: Definitional (High Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Coordination-dominant assets can be defined by necessary conditions N1-N5</li>
            <li>Assets satisfying N1-N5 derive value from coordination, not fundamentals</li>
          </ul>`,
        },
        {
          id: 'tier-2-descriptive',
          title: '10.2 Tier 2: Descriptive (Moderate Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>When systems are perceived as extractive, some participants seek coordination-based alternatives</li>
            <li>Permissionless infrastructure enables coordination that cannot be interrupted</li>
            <li>Coordination-dominant assets have emerged under specific macro conditions</li>
          </ul>`,
        },
        {
          id: 'tier-3-uncertain',
          title: '10.3 Tier 3: Uncertain (Low Confidence)',
          content: `<ul class="list-disc pl-6 mb-4">
            <li>Participants shift objective from outcomes to participation</li>
            <li>Trust collapse drives alternative-seeking behavior</li>
            <li>Coordination-dominant dynamics differ from manipulation dynamics</li>
          </ul>`,
        },
      ],
    },
    {
      id: 'conclusion',
      title: '11. Conclusion',
      content: ``,
      subsections: [
        {
          id: 'what-this-establishes',
          title: '11.1 What This Framework Establishes',
          content: `<p class="leading-relaxed mb-6">When participants perceive formal systems as extractive or offering low agency, they predictably seek alternatives. Coordination-dominant assets are one such alternative: instruments whose value derives from collective coordination rather than fundamentals.</p>
          <p class="leading-relaxed mb-6">The framework defines this category, specifies necessary conditions, and describes the structural context in which such assets emerge. It treats SPX6900 and GME as illustrative cases, not proof.</p>`,
        },
        {
          id: 'what-this-does-not-establish',
          title: '11.2 What This Framework Does Not Establish',
          content: ``,
          list: [
            'That coordination-dominant assets "beat" extractive systems',
            'That participants "escape" or "win" through participation',
            'Which specific assets will emerge or persist',
            'Whether any specific asset reflects organic coordination or manipulation',
            'That participation is rational, irrational, or advisable',
          ],
        },
        {
          id: 'preserved-ambiguity-conclusion',
          title: '11.3 Preserved Ambiguity',
          content: `<p class="leading-relaxed mb-4">The framework organizes observations but does not resolve underlying ambiguity. Any coordination-dominant asset may be:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Organic collective coordination</li>
            <li>Manufactured manipulation</li>
            <li>Random survival</li>
          </ul>
          <p class="leading-relaxed mb-6">Available data cannot distinguish between these. The framework classifies; it does not adjudicate.</p>`,
        },
        {
          id: 'operational-status',
          title: '11.4 Operational Status',
          content: `<p class="leading-relaxed mb-4">This framework should be considered provisional. It is subject to:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Falsification conditions specified in companion documentation</li>
            <li>Expiration after 24 months without review (January 2028)</li>
            <li>Revision if new evidence changes the structural picture</li>
          </ul>
          <p class="leading-relaxed mb-6">The framework exists to describe a phenomenon, not to advocate for or against participation in it.</p>`,
        },
      ],
    },
  ],
  references: [
    { text: 'Etherscan. "SPX6900 Token." Accessed 2025.' },
    { text: 'CoinMarketCap. "SPX6900 (SPX)." Accessed 2025.' },
    { text: 'DexScreener. "SPX6900 Pairs." Accessed 2025.' },
    { text: 'CoinGecko. "Cryptocurrency Market Data." Accessed 2025.' },
    { text: 'Soros, G. (1987). The Alchemy of Finance. Simon & Schuster.' },
    { text: 'Schelling, T. (1960). The Strategy of Conflict. Harvard University Press.' },
    { text: 'Hirschman, A. (1970). Exit, Voice, and Loyalty. Harvard University Press.' },
  ],
  dataAvailability: [
    'SPX6900 metrics: Etherscan, Basescan, CoinMarketCap, DexScreener',
    'GME data: Public market data (Yahoo Finance, SEC filings)',
    'This thesis is primarily conceptual; empirical data is illustrative only.',
  ],
  footerText: 'RMGTNI | 2025',
};

export default coordinationDominantAssetsData;
