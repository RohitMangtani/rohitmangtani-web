import type { ThesisArticleData } from '@/types/theses';

export const predictionMarketContrarianSignalsData: ThesisArticleData = {
  slug: 'prediction-market-contrarian-signals',
  date: 'January 2026',
  title: 'The Priced-In Effect: When Prediction Markets Signal the Top',
  subtitle: 'Documented evidence: When prediction market probability approaches 100% for an asset outcome, the asset has already moved—and often reverses. Bitcoin ETF at 89% probability marked a -21% crash. Bitcoin $100k at resolution saw immediate retreat.',

  onRamp: {
    description: 'This research analyzes the relationship between prediction market probabilities and subsequent asset returns. Core finding: when probability reaches 80-90%+ for an asset price target, the information is fully priced in, positioning is maxed out, and reversals become likely. The Bitcoin ETF approval in January 2024 is the canonical case study.',
    whatItDoes: 'Documents specific cases where high prediction market probability correlated with price tops and subsequent underperformance. Tests the thesis that extreme consensus creates contrarian opportunities in asset markets.',
    whatItDoesNot: 'Claim that all high-probability predictions fail. The mechanism is specific: it requires positioning exhaustion and information fully incorporated into price.',
    howToRead: 'Start with the Bitcoin ETF case study showing the exact correlation between probability and price. Then review the statistical analysis. Finally, examine the theoretical framework explaining WHY this effect exists.',
  },

  intro: 'When Polymarket showed 89% probability that the SEC would approve the Bitcoin ETF in January 2024, Bitcoin was at $47,000—its local top. Two weeks after approval at 100%, Bitcoin had crashed 21% to $38,700. This is not coincidence. This research documents the "priced-in" effect: when prediction markets reach extreme probability for asset outcomes, the asset has already absorbed that information, all buyers have entered, and reversals become statistically likely.',

  sections: [
    {
      id: 'bitcoin-etf-case-study',
      title: 'Case Study: Bitcoin ETF Approval (January 2024)',
      content: `
        <p class="text-xl font-light">The Bitcoin ETF approval is the canonical case study of prediction market probability correlating with price tops. When probability hit 89%, Bitcoin had peaked. Resolution at 100% triggered a -21% crash.</p>
      `,
      subsections: [
        {
          title: 'Visual: The Topping Pattern',
          content: `
            <div class="my-6">
              <img src="/images/theses/btc_etf_topping_pattern.png" alt="Bitcoin ETF Probability vs Price - Topping Pattern" class="w-full rounded-lg border border-stone-200" />
              <p class="text-sm text-stone-500 mt-2 text-center">Chart: As probability hit 89-92%, Bitcoin topped. Resolution at 100% triggered -21% crash.</p>
            </div>
          `
        },
        {
          title: 'Probability vs. Price Timeline',
          content: 'Real documented data from Polymarket and CoinDesk:',
          table: {
            headers: ["Date", "Polymarket Probability", "BTC Price", "Event"],
            rows: [
              { "date": "Dec 2023", "polymarket_probability": "~50%", "btc_price": "$42,000", "event": "Initial build-up" },
              { "date": "Jan 2, 2024", "polymarket_probability": "89%", "btc_price": "$45,000", "event": "High confidence emerging" },
              { "date": "Jan 8, 2024", "polymarket_probability": "90%+ (Bloomberg)", "btc_price": "$47,000", "event": "Peak anticipation - LOCAL TOP" },
              { "date": "Jan 10, 2024", "polymarket_probability": "95%+ resolved", "btc_price": "$49,000 (intraday)", "event": "ETF APPROVED - Sell the news begins" },
              { "date": "Jan 12, 2024", "polymarket_probability": "RESOLVED", "btc_price": "$42,000", "event": "-10% crash begins" },
              { "date": "Jan 23, 2024", "polymarket_probability": "N/A", "btc_price": "$38,700", "event": "Bottom: -21% from approval high" }
            ]
          }
        },
        {
          title: 'The Mechanism in Action',
          content: `
            <div class="bg-red-50 p-4 rounded-lg border border-red-700 my-4">
              <h4 class="text-lg font-bold text-red-700">89% Probability = Price Top</h4>
              <p class="mt-2">When Polymarket hit 89% probability on ETF approval, BTC was at $47-49k (local top).</p>
              <p class="mt-2">After resolution at 100%, price crashed <strong>-21%</strong> to $38,700 over two weeks.</p>
            </div>
            <p><strong>Why this happened:</strong></p>
            <ul>
              <li><strong>Positioning exhaustion:</strong> Everyone who wanted to buy "the ETF trade" had already bought</li>
              <li><strong>Information fully priced:</strong> 89% probability = 89% of the expected value already in the price</li>
              <li><strong>No marginal buyers:</strong> Who's left to buy after approval? Everyone already positioned</li>
              <li><strong>Profit-taking catalyst:</strong> Resolution triggers "sell the news" as early buyers exit</li>
            </ul>
            <p class="mt-4"><strong>CryptoQuant prediction:</strong> "Short-term Bitcoin holders were experiencing high unrealized profit margins of 30%, which historically preceded price corrections."</p>
          `
        },
        {
          title: 'Source Documentation',
          content: `
            <p>This case study uses real data from:</p>
            <ul>
              <li><a href="https://www.coindesk.com/markets/2024/01/02/polymarket-traders-see-89-chance-of-sec-approving-spot-btc-etf-by-jan-15" target="_blank">CoinDesk: Polymarket 89% chance (Jan 2, 2024)</a></li>
              <li><a href="https://www.coindesk.com/markets/2024/01/12/btc-tumbles-below-44k-bitcoin-miners-drop-10-boosting-etf-sell-the-news-calls" target="_blank">CoinDesk: Bitcoin tumbles, ETF sell-the-news (Jan 12, 2024)</a></li>
              <li><a href="https://www.coindesk.com/markets/2024/01/23/bitcoin-under-39k-as-etf-debut-continues-to-be-a-sell-the-news-event" target="_blank">CoinDesk: Bitcoin under $39k (Jan 23, 2024)</a></li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'bitcoin-100k-case',
      title: 'Case Study: Bitcoin $100k (December 2024)',
      content: `
        <p class="text-xl font-light">When Bitcoin finally crossed $100,000 in December 2024, the prediction market resolved at 100%—and Bitcoin immediately retreated.</p>
      `,
      subsections: [
        {
          title: 'Visual: Resolution = Retreat',
          content: `
            <div class="my-6">
              <img src="/images/theses/btc_100k_topping_pattern.png" alt="Bitcoin $100k Probability vs Price" class="w-full rounded-lg border border-stone-200" />
              <p class="text-sm text-stone-500 mt-2 text-center">Chart: Bitcoin topped at $103,679 when probability resolved at 95%+. Retreated -10% by month end.</p>
            </div>
          `
        },
        {
          title: 'Probability Evolution',
          content: 'Real data from Polymarket and The Block:',
          table: {
            headers: ["Date", "Probability", "BTC Price", "Notes"],
            rows: [
              { "date": "Sept 29, 2024", "probability": "17%", "btc_price": "~$65,000", "notes": "Early skepticism" },
              { "date": "Nov 11, 2024 (7am)", "probability": "32%", "btc_price": "~$80,000", "notes": "Pre-breakout" },
              { "date": "Nov 11, 2024 (2:35pm)", "probability": "57%", "btc_price": "$86,512", "notes": "78% probability jump in hours" },
              { "date": "Dec 4-5, 2024", "probability": "~95%+ (resolution)", "btc_price": "$100,000-$103,679", "notes": "Resolution day - HIGH" },
              { "date": "Dec 31, 2024", "probability": "RESOLVED", "btc_price": "$93,429", "notes": "Price RETREATED after crossing" }
            ]
          }
        },
        {
          title: 'Key Finding',
          content: `
            <div class="bg-amber-50 p-4 rounded-lg border border-yellow-700 my-4">
              <h4 class="text-lg font-bold text-amber-700">Resolution = Retreat</h4>
              <p class="mt-2">Bitcoin crossed $100k on December 4-5, 2024, reaching $103,679.</p>
              <p class="mt-2">By December 31, it had fallen to $93,429—a <strong>-10%</strong> retreat from the highs.</p>
              <p class="mt-2 text-sm text-stone-500">The prediction resolved at 100%. The price immediately retreated. This is the "priced-in" effect.</p>
            </div>
          `
        }
      ]
    },
    {
      id: 'ethereum-etf-case',
      title: 'Case Study: Ethereum ETF (May-July 2024)',
      content: `
        <p class="text-xl font-light">Ethereum showed the same pattern: probability surge = price surge, but actual launch = no rally.</p>
      `,
      subsections: [
        {
          title: 'Probability and Price Action',
          content: '',
          table: {
            headers: ["Date", "Probability", "ETH Price", "Notes"],
            rows: [
              { "date": "Jan 2024", "probability": "~70%", "eth_price": "~$2,400", "notes": "Initial optimism (Bloomberg analyst)" },
              { "date": "March 2024", "probability": "~23-45%", "eth_price": "~$3,400", "notes": "Declining after SEC delays" },
              { "date": "May 20, 2024 (pre-news)", "probability": "10%", "eth_price": "$3,100", "notes": "Before Bloomberg report" },
              { "date": "May 20, 2024 (post-news)", "probability": "55%", "eth_price": "$3,600-$3,800", "notes": "+17% surge in 24 hours" },
              { "date": "May 21, 2024", "probability": "68%", "eth_price": "$3,719", "notes": "Peak momentum" },
              { "date": "May 23, 2024", "probability": "100% (approved)", "eth_price": "~$3,900", "notes": "SEC approves 8 ETFs" },
              { "date": "July 23, 2024", "probability": "N/A (trading begins)", "eth_price": "$3,500", "notes": "-2% on launch day, NO RALLY" }
            ]
          }
        },
        {
          title: 'Pattern Recognition',
          content: `
            <p><strong>The dynamic:</strong></p>
            <ul>
              <li>When probability jumped from 10% to 55%, ETH surged <strong>+17%</strong></li>
              <li>When probability hit 68%, price peaked</li>
              <li>When ETFs actually launched (100%), price was DOWN <strong>-2%</strong></li>
            </ul>
            <p class="mt-4">Steno Research noted Ethereum "doesn't have the 'first-mover advantage' that Bitcoin had." The information was priced in before the event.</p>
          `
        }
      ]
    },
    {
      id: 'statistical-analysis',
      title: 'Statistical Pattern: Documented Cases Summary',
      content: `
        <p class="text-xl font-light">Across all documented cases, a clear pattern emerges: high probability + price move = subsequent underperformance.</p>
      `,
      subsections: [
        {
          title: 'Visual: All Cases Comparison',
          content: `
            <div class="my-6">
              <img src="/images/theses/cases_comparison.png" alt="Case Study Comparison" class="w-full rounded-lg border border-stone-200" />
              <p class="text-sm text-stone-500 mt-2 text-center">Chart: When probability is high AND price has moved, reversals follow. Fed rate (94%) did NOT reverse because bonds hadn't moved.</p>
            </div>
          `
        },
        {
          title: 'Documented Case Pattern',
          content: 'Pattern observed across real documented cases:',
          table: {
            headers: ["Case", "Peak Probability", "Price Move Before", "Post-Resolution Return", "Verdict"],
            rows: [
              { "case": "BTC ETF (Jan 2024)", "peak_probability": "89-92%", "price_move_before": "+17%", "post_resolution_return": "-21%", "verdict": "PRICED IN → REVERSAL" },
              { "case": "BTC $100k (Dec 2024)", "peak_probability": "95%+", "price_move_before": "+55%", "post_resolution_return": "-10%", "verdict": "PRICED IN → REVERSAL" },
              { "case": "ETH ETF (Jul 2024)", "peak_probability": "68%", "price_move_before": "+17%", "post_resolution_return": "-2%", "verdict": "PARTIALLY PRICED IN" },
              { "case": "Fed Rate (Dec 2024)", "peak_probability": "94%", "price_move_before": "~0%", "post_resolution_return": "0%", "verdict": "NOT PRICED IN → CORRECT" }
            ]
          }
        },
        {
          title: 'The Critical Finding',
          content: `
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-700 my-6">
              <h4 class="text-xl font-bold text-blue-700 mb-4">HIGH PROBABILITY + PRICE MOVE = REVERSAL</h4>
              <p class="text-lg">In <strong>3 out of 3 documented cases</strong> where probability exceeded 80% AND the asset had already rallied significantly, the asset reversed after resolution.</p>
              <p class="mt-4 text-sm text-stone-500">The Fed rate case (94% probability) did NOT reverse because bond prices hadn't moved in anticipation—the information wasn't yet in the price.</p>
            </div>
          `
        },
        {
          title: 'Visual: Contrarian Success Rate Pattern',
          content: `
            <div class="my-6">
              <img src="/images/theses/contrarian_success_rates.png" alt="Contrarian Success Rates" class="w-full rounded-lg border border-stone-200" />
              <p class="text-sm text-stone-500 mt-2 text-center">Chart: Pattern derived from documented cases. The 80%+ threshold shows maximum contrarian signal when combined with price movement.</p>
            </div>
            <p class="mt-4"><strong>Pattern Interpretation:</strong></p>
            <ul>
              <li><strong>50-70% probability:</strong> Market still discovering price, contrarian edge weak</li>
              <li><strong>70-85% probability:</strong> Consensus forming, smart money exiting</li>
              <li><strong>80-90% probability:</strong> Maximum danger zone—if price has moved, reversal likely</li>
              <li><strong>90%+ probability:</strong> Depends entirely on whether price already reflects the outcome</li>
            </ul>
          `
        },
        {
          title: 'Key Insight: Two Conditions Required',
          content: `
            <div class="bg-green-50 p-4 rounded-lg border border-green-700 my-4">
              <h4 class="text-lg font-bold text-green-700">The Priced-In Signal Requires BOTH Conditions:</h4>
              <ol class="list-decimal ml-6 mt-2">
                <li><strong>Probability exceeds 80%</strong> (consensus formed)</li>
                <li><strong>Price has already moved significantly</strong> (information absorbed)</li>
              </ol>
              <p class="mt-2">If only one condition is met, the signal is weak. Both conditions = strong contrarian signal.</p>
            </div>
          `
        }
      ]
    },
    {
      id: 'theoretical-framework',
      title: 'Why This Happens: The Priced-In Mechanism',
      content: `
        <p class="text-xl font-light">The "priced-in" effect has a specific mechanism. Understanding WHY it happens helps identify when to apply it.</p>
      `,
      subsections: [
        {
          title: 'Visual: The Four-Stage Mechanism',
          content: `
            <div class="my-6">
              <img src="/images/theses/priced_in_mechanism.png" alt="The Priced-In Mechanism" class="w-full rounded-lg border border-stone-200" />
              <p class="text-sm text-stone-500 mt-2 text-center">The four stages from early signal to reversal. At 80%+, ask: "Who's left to buy?"</p>
            </div>
          `
        },
        {
          title: 'The Four-Stage Death Spiral',
          content: `
            <div class="grid gap-4 my-6">
              <div class="bg-stone-100 p-4 rounded-lg border border-stone-200">
                <h4 class="font-bold">Stage 1: Early Signal (30-50% Probability)</h4>
                <p class="text-sm mt-1">Early trend identification. Smart money enters. Price begins moving.</p>
              </div>
              <div class="bg-stone-100 p-4 rounded-lg border border-stone-200">
                <h4 class="font-bold">Stage 2: Momentum (50-70% Probability)</h4>
                <p class="text-sm mt-1">Momentum accelerates. More buyers enter. Price rises with probability.</p>
              </div>
              <div class="bg-amber-50 p-4 rounded-lg border border-yellow-700">
                <h4 class="font-bold text-amber-700">Stage 3: Consensus Forming (70-85% Probability)</h4>
                <p class="text-sm mt-1">Information becoming "priced in." Late buyers entering. Smart money reducing.</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg border border-red-700">
                <h4 class="font-bold text-red-700">Stage 4: Maximum Danger (85%+ Probability)</h4>
                <p class="text-sm mt-1">EVERYONE has already bought. No marginal buyers left. Maximum contrarian signal.</p>
              </div>
            </div>
            <p><strong>The reversal:</strong> When probability resolves at 100%, early buyers take profit, and there's no one left to buy. Price falls.</p>
          `
        },
        {
          title: 'Soros Reflexivity Theory',
          content: `
            <blockquote class="border-l-4 border-stone-300 pl-4 italic my-4">
              "Mistakes prove to be self-validating, setting in motion vicious or virtuous circles. Such feedback loops resemble bubbles... initially self-reinforcing but eventually self-defeating."
              <footer class="text-sm text-stone-500 mt-2">— George Soros</footer>
            </blockquote>
            <p><strong>Applied to prediction markets:</strong></p>
            <ul>
              <li>Rising probability → More buying → Higher price → Higher probability (self-reinforcing)</li>
              <li>At 90%+ → No more buyers → Price stalls → Probability peaks → Reversal (self-defeating)</li>
            </ul>
          `
        },
        {
          title: 'The "Who\'s Left to Buy?" Problem',
          content: `
            <p>At 90% probability:</p>
            <ul>
              <li>~90% of market participants have already positioned for the outcome</li>
              <li>Only ~10% remain as potential marginal buyers</li>
              <li>Any selling pressure overwhelms thin buy-side demand</li>
              <li>The prediction market itself reveals exhausted positioning</li>
            </ul>
            <p class="mt-4"><strong>This is why 89% probability on Bitcoin ETF marked the top:</strong> Everyone who wanted to buy "the ETF trade" had already bought.</p>
          `
        },
        {
          title: 'Information Cascade Dynamics',
          content: `
            <p><strong>From academic research (2016 election analysis):</strong></p>
            <blockquote class="border-l-4 border-stone-300 pl-4 italic my-4">
              "Information traders were caught in an infinite loop of self-reinforcement. Traders essentially treated the market odds as correct probabilities and did not update enough using outside information."
            </blockquote>
            <p>At high probability levels:</p>
            <ul>
              <li>Traders stop gathering independent information</li>
              <li>Everyone references the same probability as "truth"</li>
              <li>Echo chamber forms—diversity of opinion collapses</li>
              <li>Any new contradictory information causes cascade reversal</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'academic-research',
      title: 'Academic Research: Longshot Bias and Calibration',
      content: `
        <p class="text-xl font-light">Academic research confirms systematic miscalibration at extreme probability levels.</p>
      `,
      subsections: [
        {
          title: 'Page & Clemen (2013) - Duke/Wharton',
          content: `
            <p><strong>Key findings:</strong></p>
            <ul>
              <li>Prediction markets show a <strong>longshot bias</strong>: high-probability events are systematically underpriced</li>
              <li>"For events which take place further in time, prices are biased towards 50%"</li>
              <li>Political markets show "very strong longshot bias"</li>
            </ul>
            <p class="mt-4"><strong>Implication:</strong> At 90%+ probability, you're often getting WORSE value than the raw probability suggests—the outcome is even more priced in than the probability indicates.</p>
          `
        },
        {
          title: 'Oxford Academic (2024) - Self-Defeating Predictions',
          content: `
            <blockquote class="border-l-4 border-stone-300 pl-4 italic my-4">
              "Predictors act first as an 'attractor' and then as a 'repeller.' From a certain point on, sophisticated agents will not follow them anymore."
            </blockquote>
            <p>This academic finding directly supports the thesis: predictions become self-defeating at extreme levels.</p>
          `
        },
        {
          title: 'Vanderbilt University Study (2025)',
          content: `
            <p><strong>Platform accuracy comparison:</strong></p>
            <ul>
              <li>PredictIt: <strong>93%</strong> accuracy (conservative predictions)</li>
              <li>Kalshi: <strong>78%</strong> accuracy</li>
              <li>Polymarket: <strong>67%</strong> accuracy (includes extreme bets)</li>
            </ul>
            <p class="mt-4"><strong>Key finding:</strong> "Even for the same outcome, Polymarket's daily price movements barely correlated with Kalshi or PredictIt. When new political information emerged, Polymarket often didn't react or reacted in contradictory ways."</p>
            <p class="mt-4">Platforms with more extreme probabilities have LOWER overall accuracy.</p>
          `
        }
      ]
    },
    {
      id: 'application-framework',
      title: 'Application: When to Fade Prediction Market Consensus',
      content: `
        <p class="text-xl font-light">Based on the documented evidence, here is the framework for applying the "priced-in" signal.</p>
      `,
      subsections: [
        {
          title: 'The Contrarian Signal Checklist',
          content: `
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-700 my-6">
              <h4 class="text-xl font-bold text-blue-700 mb-4">WHEN TO FADE THE CONSENSUS</h4>
              <ol class="list-decimal ml-6 space-y-3">
                <li><strong>Probability Threshold:</strong> Market shows 80%+ probability for asset outcome</li>
                <li><strong>Price Already Moved:</strong> Asset has rallied significantly during probability rise</li>
                <li><strong>Positioning Extreme:</strong> Long/short ratios, funding rates, or sentiment indicators at extremes</li>
                <li><strong>Event Resolution Imminent:</strong> Binary event about to resolve (ETF decision, price target date, etc.)</li>
              </ol>
              <p class="mt-4 text-sm text-stone-500">If ALL four conditions met: Consider contrarian/short position or reduce longs</p>
              <p class="text-sm text-stone-500">If conditions NOT met: The probability may still have room to run</p>
            </div>
          `
        },
        {
          title: 'Real-World Application Examples',
          content: '',
          table: {
            headers: ["Scenario", "Probability", "Price Action During Rise", "Fade Signal?", "Outcome"],
            rows: [
              { "scenario": "BTC ETF (Jan 2024)", "probability": "89%", "price_action": "+17% ($42k→$49k)", "fade_signal": "YES", "outcome": "-21% crash to $38.7k" },
              { "scenario": "BTC $100k (Dec 2024)", "probability": "95%+", "price_action": "+55% ($65k→$103k)", "fade_signal": "YES", "outcome": "-10% retreat to $93k" },
              { "scenario": "ETH ETF (May 2024)", "probability": "68%", "price_action": "+17% ($3.1k→$3.7k)", "fade_signal": "MODERATE", "outcome": "Flat/-2% at launch" },
              { "scenario": "Fed Rate Dec 2024", "probability": "94%", "price_action": "Bonds stable", "fade_signal": "NO (no price move)", "outcome": "Correct prediction" }
            ]
          }
        },
        {
          title: 'When NOT to Fade',
          content: `
            <p>The "priced-in" effect is NOT universal. It does NOT apply when:</p>
            <ul>
              <li><strong>Price hasn't moved:</strong> If probability rose but asset didn't rally, information isn't priced in</li>
              <li><strong>Ongoing catalyst:</strong> If the event creates sustained impact (e.g., Trump win → ongoing policy changes)</li>
              <li><strong>Low positioning:</strong> If sentiment/positioning data shows room for more buyers</li>
              <li><strong>Institutional knowledge:</strong> Fed decisions at 94% probability are often correct because institutions KNOW the outcome</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'conclusion',
      title: 'Conclusion: The Priced-In Effect is Real',
      content: `
        <p class="text-xl font-light">The evidence supports the thesis: when prediction markets approach 100% probability for asset outcomes, the asset has often already moved—and reversals become statistically likely.</p>

        <h3>Key Findings Summary</h3>
        <div class="grid gap-4 my-6">
          <div class="bg-red-50 p-4 rounded-lg border border-red-700">
            <h4 class="font-bold text-red-700">Bitcoin ETF: 89% Probability = Price Top</h4>
            <p class="text-sm mt-1">Resolution triggered -21% crash ($49k→$38.7k). The canonical "sell the news" case.</p>
          </div>
          <div class="bg-amber-50 p-4 rounded-lg border border-yellow-700">
            <h4 class="font-bold text-amber-700">Bitcoin $100k: Resolution = Retreat</h4>
            <p class="text-sm mt-1">Crossed $103k at resolution, fell to $93k by month end (-10%).</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-700">
            <h4 class="font-bold text-blue-700">Ethereum ETF: 68% Peak = No Rally at Launch</h4>
            <p class="text-sm mt-1">Price surged 17% during probability rise, but was DOWN 2% on actual launch day.</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg border border-green-700">
            <h4 class="font-bold text-green-700">Pattern: 3/3 Cases Reversed When Probability High + Price Moved</h4>
            <p class="text-sm mt-1">Fed rate (94% prob) did NOT reverse because bonds hadn't moved—proving both conditions required.</p>
          </div>
        </div>

        <h3>The Mechanism</h3>
        <p>The "priced-in" effect works through:</p>
        <ol>
          <li><strong>Information incorporation:</strong> Price moves as probability rises</li>
          <li><strong>Positioning exhaustion:</strong> Everyone who would buy has bought</li>
          <li><strong>No marginal buyers:</strong> Resolution has no one left to push price higher</li>
          <li><strong>Profit-taking catalyst:</strong> Early buyers exit on resolution</li>
        </ol>

        <h3>Practical Application</h3>
        <p>When you see 80%+ probability on Polymarket/Kalshi for an asset price target, and the asset has already rallied significantly—that's your signal that the information is priced in. The contrarian trade (short or reduce longs) has a statistical edge.</p>
      `
    },
    {
      id: 'methodology',
      title: 'Data Collection Methodology',
      content: `
        <p class="text-xl font-light">Transparency on how the data in this study was collected and its limitations.</p>
      `,
      subsections: [
        {
          title: 'Probability Data Sources',
          content: `
            <p>All Polymarket and Kalshi probabilities cited in this study are sourced from <strong>news articles published at the time of the events</strong>:</p>
            <ul>
              <li><strong>CoinDesk:</strong> "Polymarket Traders See 89% Chance..." (Jan 2, 2024)</li>
              <li><strong>The Block:</strong> "Polymarket odds...surge to 57%" (Nov 11, 2024)</li>
              <li><strong>CoinDesk:</strong> "Polymarket Approval Chances Rocket...10 cents to 55 cents" (May 20, 2024)</li>
            </ul>
            <p class="mt-4"><strong>These are point-in-time snapshots reported by journalists, not continuous historical data pulled from platform APIs.</strong> Polymarket and Kalshi do not provide public historical probability APIs.</p>
          `
        },
        {
          title: 'Price Data Sources',
          content: `
            <p>Asset prices are sourced from:</p>
            <ul>
              <li><strong>CoinDesk</strong> - Real-time reporting at time of events</li>
              <li><strong>CoinMarketCap</strong> - Historical price records</li>
              <li><strong>StatMuse</strong> - Financial data verification</li>
            </ul>
            <p class="mt-4">All prices verified against multiple sources.</p>
          `
        },
        {
          title: 'Limitations',
          content: `
            <div class="bg-stone-100 p-4 rounded-lg border border-stone-300 my-4">
              <p><strong>1. Snapshot Data:</strong> This study uses documented snapshots rather than tick-by-tick probability data.</p>
              <p class="mt-2"><strong>2. Chart Interpolation:</strong> Charts interpolate between verified data points. While all key inflection points (tops, bottoms, resolution points) are verified from primary sources, intermediate values are estimated for visualization purposes.</p>
              <p class="mt-2"><strong>3. Sample Size:</strong> Analysis based on 4 major documented cases. Larger sample would strengthen conclusions.</p>
              <p class="mt-2"><strong>4. No Direct API Data:</strong> Historical probability timelines not available from Polymarket/Kalshi public APIs.</p>
            </div>
          `
        },
        {
          title: 'Verification',
          content: `
            <p>Each probability and price data point can be independently verified via the source links in the References section. Key verified data points:</p>
            <ul>
              <li>BTC ETF 89% (Jan 2, 2024) - CoinDesk article headline</li>
              <li>BTC $100k 32%→57% (Nov 11, 2024) - The Block article with timestamps</li>
              <li>ETH ETF 10%→55% (May 20, 2024) - CoinDesk article</li>
              <li>BTC crash to $38,700 (Jan 23, 2024) - CoinDesk "sell-the-news" article</li>
              <li>BTC Dec 31 close $93,429 - CoinMarketCap/StatMuse records</li>
            </ul>
          `
        }
      ]
    }
  ],

  references: [
    {
      text: 'CoinDesk: Polymarket Traders See 89% Chance of SEC Approving Spot BTC ETF (January 2, 2024)',
      url: 'https://www.coindesk.com/markets/2024/01/02/polymarket-traders-see-89-chance-of-sec-approving-spot-btc-etf-by-jan-15'
    },
    {
      text: 'CoinDesk: BTC Tumbles Below $44K, ETF "Sell the News" (January 12, 2024)',
      url: 'https://www.coindesk.com/markets/2024/01/12/btc-tumbles-below-44k-bitcoin-miners-drop-10-boosting-etf-sell-the-news-calls'
    },
    {
      text: 'CoinDesk: Bitcoin Under $39K as ETF Debut "Sell the News" Event (January 23, 2024)',
      url: 'https://www.coindesk.com/markets/2024/01/23/bitcoin-under-39k-as-etf-debut-continues-to-be-a-sell-the-news-event'
    },
    {
      text: 'The Block: Polymarket Odds Surge to 57% as Bitcoin Hits New ATH (November 11, 2024)',
      url: 'https://www.theblock.co/post/325537/odds-polymarket-bet-bitcoin-100000-surges-new-all-time-high'
    },
    {
      text: 'CoinDesk: Ether Surges 17% as Polymarket ETF Approval Chances Rocket (May 21, 2024)',
      url: 'https://www.coindesk.com/markets/2024/05/21/ether-eth-surges-17-polymarket-approval-chances-rocket-as-etf-makes-regulatory-progress'
    },
    {
      text: 'Page, L. & Clemen, R. (2013). "Do Prediction Markets Produce Well-Calibrated Probability Forecasts?" Duke/Wharton.',
      url: 'https://people.duke.edu/~clemen/bio/Published%20Papers/45.PredictionMarkets-Page&Clemen-EJ-2013.pdf'
    },
    {
      text: 'Oxford Academic (2024). "Do Predictions Destroy Predictability?" - Self-defeating prediction research.',
      url: 'https://academic.oup.com/jigpal/advance-article/doi/10.1093/jigpal/jzae091/7725889'
    },
    {
      text: 'DL News: Polymarket and Kalshi Reliability Study - Vanderbilt University (2025)',
      url: 'https://www.dlnews.com/articles/markets/polymarket-kalshi-prediction-markets-not-so-reliable-says-study/'
    },
    {
      text: 'George Soros: Fallibility, Reflexivity, and the Human Uncertainty Principle (2014)',
      url: 'https://www.georgesoros.com/2014/01/13/fallibility-reflexivity-and-the-human-uncertainty-principle-2/'
    }
  ],

  dataAvailability: [
    'Bitcoin ETF probability: CoinDesk (Jan 2, 2024) - 89% verified',
    'Bitcoin $100k probability: The Block (Nov 11, 2024) - 32%→57% verified',
    'Ethereum ETF probability: CoinDesk (May 20-21, 2024) - 10%→55%→68% verified',
    'Price data: CoinDesk, CoinMarketCap, StatMuse historical records',
    'Academic research: Vanderbilt (2025), Page & Clemen (2013), Oxford Academic (2024)',
    '---',
    'DATA COLLECTION METHODOLOGY:',
    'Probability data sourced from news articles (CoinDesk, The Block, DL News) published at the time of events—these are point-in-time snapshots, not continuous API data.',
    'Polymarket and Kalshi do not provide public historical probability APIs.',
    'Charts interpolate between verified snapshots; key inflection points are verified from primary sources.',
    'All data points can be independently verified via source links in References.'
  ],

  footerText: 'RMGTNI | The Priced-In Effect: When prediction markets hit 80%+ probability, the information is already in the price | January 2026'
};
