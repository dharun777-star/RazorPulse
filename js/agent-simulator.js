/**
 * RazorPulse: Agent-to-Agent (A2A) Negotiation & Checkout Simulator
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

window.AgentSimulator = {
  isRunning: false,
  currentScenario: 'gpu',
  currentDeal: null,

  scenarios: {
    gpu: {
      name: "Enterprise Cloud H100 GPU Cluster (4x 80GB)",
      buyerAgent: "TensorFlow-Scale Enterprise Bot (ID: agt_procure_99x)",
      merchantAgent: "RazorPulse Dynamic Cloud Merchant (ID: rzp_merch_apex)",
      basePrice: 185000,
      buyerTargetPrice: 155000,
      merchantFloorPrice: 162000,
      currency: "INR",
      mandateCap: 200000,
      category: "Cloud Compute & Infrastructure",
      steps: [
        {
          role: "buyer",
          thought: "Querying regional compute availability. Target is 4x H100 NVL nodes with <10ms interconnect. Delegated Razorpay B2B mandate active (Limit: ₹2,00,000). Initial offer anchored at ₹1,55,000 for 1-month reservation.",
          message: "INITIATE_RFQ: Requesting 4x NVIDIA H100 NVL cluster (1-month reserved). Verifiable Razorpay Mandate attached: `ap2_mnd_98f12a`. Proposed settlement: ₹1,55,000 with 99.99% uptime SLA.",
          type: "rfq"
        },
        {
          role: "merchant",
          thought: "RFQ received. Base list price is ₹1,85,000. Inventory utilization is 78%. Floor margin is ₹1,62,000. Countering with ₹1,72,000 with bundled 10TB NVMe storage to protect profit margin.",
          message: "COUNTER_OFFER_1: Verified buyer mandate token. Standard reservation is ₹1,85,000. We can provision at ₹1,72,000 including 10TB high-speed NVMe storage and dedicated peering.",
          type: "counter"
        },
        {
          role: "buyer",
          thought: "Evaluated counter-offer. Marginal utility of NVMe storage is high. Counter-proposing ₹1,66,500 with immediate automated Razorpay Instant Settlement and 30-day auto-renew commitment.",
          message: "COUNTER_OFFER_2: Utility model accepts bundled NVMe. Proposing compromise at ₹1,66,500. Can commit to autonomous auto-debit on Razorpay Subscriptions rail.",
          type: "counter"
        },
        {
          role: "merchant",
          thought: "Marginal profit analysis: ₹1,66,500 yields 22.4% gross margin (exceeds 18% floor). Recurring LTV projected +₹6.6L. Initiating contract consensus.",
          message: "DEAL_ACCEPTED: Margin validation passed (+22.4% net margin). Lock price: ₹1,66,500. Generating Razorpay Order ID `order_AP2_H100_8921` with tokenized zero-click settlement.",
          type: "agreement",
          finalAmount: 166500,
          savings: 18500 - (185000 - 166500)
        }
      ]
    },
    coffee: {
      name: "Single-Origin Specialty Arabica Beans (250 kg B2B)",
      buyerAgent: "RoastCraft Cafe Chain AI Buyer (ID: agt_bean_77a)",
      merchantAgent: "EstateDirect Merchant Agent (ID: rzp_merch_estate)",
      basePrice: 112500,
      buyerTargetPrice: 92000,
      merchantFloorPrice: 96000,
      currency: "INR",
      mandateCap: 120000,
      category: "Specialty Agricultural Commodities",
      steps: [
        {
          role: "buyer",
          thought: "Checking inventory replenishment trigger. Stock buffer at 3 days. Seeking 250kg Coorg Honey Sun-dried Arabica. Delegated Razorpay Smart Collect mandate verified.",
          message: "INITIATE_RFQ: Need 250kg Coorg Honey Sun-dried Arabica (Microlot #4). Delivery required within 48 hours. Target quote: ₹92,000 with nitrogen-flushed packaging.",
          type: "rfq"
        },
        {
          role: "merchant",
          thought: "Batch harvest inventory is 600kg. Wholesale standard is ₹1,12,500 (₹450/kg). 250kg qualifies for bulk dynamic tier. Offering ₹1,02,000.",
          message: "COUNTER_OFFER_1: Fresh roast batch available. Tier 1 volume discount applied. Counter-offer: ₹1,02,000 with cold-chain transit insurance included.",
          type: "counter"
        },
        {
          role: "buyer",
          thought: "Comparing spot market vs EstateDirect quality score. Offering ₹97,500 with instant escrow settlement via Razorpay Escrow API upon dispatch scan.",
          message: "COUNTER_OFFER_2: Market parity model suggests ₹97,500. Offering instant Razorpay Route payout release immediately upon dispatch barcode scan.",
          type: "counter"
        },
        {
          role: "merchant",
          thought: "Cash flow velocity benefit: Instant Razorpay settlement eliminates 30-day receivables cycle. Net margin is 21.1%. Accepting deal.",
          message: "DEAL_ACCEPTED: Instant liquidity accepted. Agreed price: ₹97,500 (Savings for buyer: ₹15,000). M2M checkout authorized.",
          type: "agreement",
          finalAmount: 97500,
          savings: 15000
        }
      ]
    },
    smarthome: {
      name: "Autonomous Smart-Pantry Restock (Household Essentials)",
      buyerAgent: "HomeOS Butler Agent (ID: agt_butler_v4)",
      merchantAgent: "FreshCart Autonomous Retail (ID: rzp_merch_fresh)",
      basePrice: 4200,
      buyerTargetPrice: 3400,
      merchantFloorPrice: 3650,
      currency: "INR",
      mandateCap: 5000,
      category: "Autonomous Consumer Replenishment",
      steps: [
        {
          role: "buyer",
          thought: "IoT load-cell detected olive oil, organic oats, and eco-detergent at <15% capacity. Razorpay UPI Delegated AutoPay mandate limit: ₹5,000.",
          message: "INITIATE_RESTOCK: IoT sensor trigger for 5 items (SKUs: 8812, 4421, 9901, 1204, 3311). Target bundled price: ₹3,400 with 6 PM delivery.",
          type: "rfq"
        },
        {
          role: "merchant",
          thought: "Basket total retail price: ₹4,200. Inventory surplus on organic oats. Dynamic margin model allows 10% bundle salvage. Offering ₹3,820.",
          message: "COUNTER_OFFER_1: Cart items available for slotted dispatch. Bundle optimization applied. Counter-offer: ₹3,820 with free eco-packaging.",
          type: "counter"
        },
        {
          role: "buyer",
          thought: "Checking user preferences: authorized 1-click autonomous purchase if within ₹3,750 threshold. Countering ₹3,700.",
          message: "COUNTER_OFFER_2: Delegated authorization threshold reached at ₹3,700. Immediate execution ready.",
          type: "counter"
        },
        {
          role: "merchant",
          thought: "Margin satisfies 16.5% gross threshold. Drop-off risk mitigated. Accepting.",
          message: "DEAL_ACCEPTED: Consensus reached at ₹3,700. Executing zero-click tokenized debit via Razorpay UPI AutoPay mandate.",
          type: "agreement",
          finalAmount: 3700,
          savings: 500
        }
      ]
    }
  },

  init() {
    this.bindEvents();
    this.selectScenario('gpu');
  },

  bindEvents() {
    // Scenario buttons
    document.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.isRunning) return;
        const scenarioKey = e.currentTarget.dataset.scenario;
        if (scenarioKey && this.scenarios[scenarioKey]) {
          this.selectScenario(scenarioKey);
        }
      });
    });

    // Run Simulation Button
    const runBtn = document.getElementById('runSimBtn');
    if (runBtn) {
      runBtn.addEventListener('click', () => {
        if (!this.isRunning) {
          this.startSimulation();
        }
      });
    }

    // Reset Simulation Button
    const resetBtn = document.getElementById('resetSimBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!this.isRunning) {
          this.resetTerminal();
        }
      });
    }
  },

  selectScenario(key) {
    if (window.SoundEffects) window.SoundEffects.play('click');
    this.currentScenario = key;
    const scenario = this.scenarios[key];

    // Highlight button
    document.querySelectorAll('.scenario-btn').forEach(btn => {
      if (btn.dataset.scenario === key) {
        btn.classList.add('border-sky-500', 'bg-sky-950/60', 'text-sky-300');
        btn.classList.remove('border-slate-800', 'bg-slate-900/40', 'text-slate-400');
      } else {
        btn.classList.remove('border-sky-500', 'bg-sky-950/60', 'text-sky-300');
        btn.classList.add('border-slate-800', 'bg-slate-900/40', 'text-slate-400');
      }
    });

    // Update info cards
    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
    
    document.getElementById('simItemName').innerText = scenario.name;
    document.getElementById('simBasePrice').innerText = formatINR(scenario.basePrice);
    document.getElementById('simTargetPrice').innerText = formatINR(scenario.buyerTargetPrice);
    document.getElementById('simFloorPrice').innerText = formatINR(scenario.merchantFloorPrice);
    document.getElementById('simMandateCap').innerText = formatINR(scenario.mandateCap);

    this.resetTerminal();
  },

  resetTerminal() {
    const terminal = document.getElementById('negotiationTerminal');
    if (!terminal) return;

    terminal.innerHTML = `
      <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
          AP2 (Agent Payment Protocol) v2.4 Channel Ready
        </span>
        <span>Razorpay Mandate Auth: ACTIVE</span>
      </div>
      <div class="text-center py-10 text-slate-500 text-sm font-mono" id="simPlaceholder">
        <i data-lucide="bot" class="w-10 h-10 mx-auto mb-2 text-slate-600 opacity-60"></i>
        Click <strong class="text-sky-400">"Execute Autonomous Negotiation"</strong> below to observe real-time AI Agent-to-Agent deal closure and Razorpay settlement.
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();

    const checkoutActionCard = document.getElementById('checkoutActionCard');
    if (checkoutActionCard) checkoutActionCard.classList.add('hidden');

    const statusBadge = document.getElementById('simStatusBadge');
    if (statusBadge) {
      statusBadge.className = "px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-400 border border-slate-700";
      statusBadge.innerText = "Status: STANDBY";
    }
  },

  async startSimulation() {
    const scenario = this.scenarios[this.currentScenario];
    if (!scenario) return;

    this.isRunning = true;
    const runBtn = document.getElementById('runSimBtn');
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.classList.add('opacity-50', 'cursor-not-allowed');
      runBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Negotiating...`;
    }

    const statusBadge = document.getElementById('simStatusBadge');
    if (statusBadge) {
      statusBadge.className = "px-3 py-1 rounded-full text-xs font-mono bg-sky-950 text-sky-400 border border-sky-500/40 animate-pulse";
      statusBadge.innerText = "Status: ACTIVE_NEGOTIATION";
    }

    const placeholder = document.getElementById('simPlaceholder');
    if (placeholder) placeholder.remove();

    const terminal = document.getElementById('negotiationTerminal');

    // Run through steps
    for (let i = 0; i < scenario.steps.length; i++) {
      const step = scenario.steps[i];
      await this.renderStep(terminal, step, i + 1, scenario);
      await new Promise(r => setTimeout(r, 1200));
    }

    // Finished
    this.isRunning = false;
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      runBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4"></i> Execute Autonomous Negotiation`;
    }

    if (statusBadge) {
      statusBadge.className = "px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/50";
      statusBadge.innerText = "Status: CONSENSUS_SEALED";
    }

    if (window.SoundEffects) window.SoundEffects.play('agree');
    if (window.fireConfetti) window.fireConfetti();

    // Show instant checkout CTA
    this.showCheckoutCard(scenario);
  },

  async renderStep(container, step, stepNum, scenario) {
    if (window.SoundEffects) window.SoundEffects.play('token');

    const bubble = document.createElement('div');
    const isBuyer = step.role === 'buyer';
    bubble.className = `agent-bubble mb-3.5 ${isBuyer ? 'agent-buyer' : 'agent-merchant'}`;

    const roleName = isBuyer ? scenario.buyerAgent : scenario.merchantAgent;
    const roleIcon = isBuyer ? 'bot' : 'sparkles';
    const roleColor = isBuyer ? 'text-sky-400' : 'text-emerald-400';
    const badgeText = isBuyer ? 'Buyer Agent' : 'RazorPulse Merchant AI';

    bubble.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-2 text-xs font-bold ${roleColor}">
          <i data-lucide="${roleIcon}" class="w-4 h-4"></i>
          <span>${roleName}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-900/80 border border-slate-700 text-slate-300">
            ${badgeText}
          </span>
        </div>
        <span class="text-[11px] text-slate-500 font-mono">Round ${stepNum} • latency: ${Math.floor(28 + Math.random() * 24)}ms</span>
      </div>

      <!-- Agent Reasoning Block (Chain-of-thought) -->
      <div class="mb-2 p-2 rounded-lg bg-black/40 border border-slate-800 text-[11px] text-slate-400 font-mono leading-relaxed">
        <span class="text-amber-400/90 font-semibold uppercase tracking-wider text-[10px] block mb-1">
          <i data-lucide="brain" class="w-3 h-3 inline mr-1"></i> Internal Reasoning Trace:
        </span>
        <span class="reasoning-text">${step.thought}</span>
      </div>

      <!-- Protocol Payload Message -->
      <div class="text-xs text-slate-200 font-mono bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
        <span class="text-slate-400 text-[10px] block mb-0.5 font-bold">AP2_PROTOCOL_PAYLOAD:</span>
        <span class="font-medium text-sky-200">${step.message}</span>
      </div>
    `;

    container.appendChild(bubble);
    if (window.lucide) window.lucide.createIcons();
    container.scrollTop = container.scrollHeight;
  },

  showCheckoutCard(scenario) {
    const lastStep = scenario.steps[scenario.steps.length - 1];
    const finalAmt = lastStep.finalAmount;
    const savings = scenario.basePrice - finalAmt;
    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    const card = document.getElementById('checkoutActionCard');
    if (!card) return;

    card.innerHTML = `
      <div class="glass-panel p-5 border-emerald-500/40 bg-emerald-950/20 glow-emerald">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>CONSENSUS ACHIEVED • READY FOR RAZORPAY SETTLEMENT</span>
            </div>
            <p class="text-xs text-slate-300">
              Agreed Amount: <strong class="text-white text-base font-mono">${formatINR(finalAmt)}</strong> 
              <span class="text-emerald-400 ml-2 font-mono">(${formatINR(savings)} saved via dynamic AI negotiation)</span>
            </p>
            <p class="text-[11px] text-slate-400 font-mono mt-1">
              Delegated Mandate Token: <code class="text-sky-300">ap2_mnd_98f12a</code> • Zero Human Intervention Required
            </p>
          </div>

          <button 
            id="triggerRazorpayCheckoutBtn"
            class="w-full md:w-auto px-6 py-3 rounded-xl btn-rzp-emerald flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer whitespace-nowrap shadow-lg">
            <i data-lucide="zap" class="w-4 h-4"></i>
            Execute Razorpay Agentic Mandate Debit
          </button>
        </div>
      </div>
    `;

    card.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();

    // Bind checkout trigger
    document.getElementById('triggerRazorpayCheckoutBtn').addEventListener('click', () => {
      if (window.RazorpayProtocol) {
        window.RazorpayProtocol.openCheckoutModal({
          itemName: scenario.name,
          amount: finalAmt,
          savings: savings,
          buyerAgent: scenario.buyerAgent,
          merchantAgent: scenario.merchantAgent,
          mandateToken: 'ap2_mnd_98f12a',
          category: scenario.category
        });
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.AgentSimulator.init();
});
