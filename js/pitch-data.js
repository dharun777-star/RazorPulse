/**
 * RazorPulse: Hackathon Pitch Deck & Architecture Deep-Dive
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

window.PitchDeck = {
  currentSlide: 0,
  slides: [
    {
      title: "RazorPulse: The Autonomous Agentic Commerce & Growth Engine",
      subtitle: "Razorpay Hackathon 2026 • AI Growth and Agentic Commerce Track",
      tag: "Official Submission",
      content: `
        <div class="space-y-6">
          <div class="p-5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-slate-200">
            <h3 class="text-xl font-bold text-white mb-2 font-display">Executive Summary</h3>
            <p class="text-sm leading-relaxed text-slate-300">
              By 2026, more than 35% of all digital commerce queries originate from autonomous software agents (personal shopper bots, enterprise procurement systems, smart IoT appliances). Yet, modern payment gateways still demand human screens, OTPs, and manual friction. 
              <br><br>
              <strong>RazorPulse</strong>, built by <strong>Dharun K</strong>, is India's first unified <strong>Agentic Commerce Protocol (AP2) and AI Growth Engine</strong> built natively on the Razorpay payments infrastructure.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-sky-400 block text-lg font-bold">140 Billion $</span>
              <span class="text-slate-400">Projected Agentic Commerce TAM by 2030</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-emerald-400 block text-lg font-bold">+34.8% GMV</span>
              <span class="text-slate-400">Average merchant revenue lift via dynamic A2A negotiation</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span class="text-purple-400 block text-lg font-bold">&lt; 45ms</span>
              <span class="text-slate-400">Consensus to Tokenized Razorpay Settlement latency</span>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "The Friction: Why Existing Commerce Fails AI Agents",
      subtitle: "The 3 Critical Bottlenecks Crippling Agentic Commerce in 2026",
      tag: "Problem Statement",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30">
            <div class="w-10 h-10 rounded-lg bg-rose-900/40 text-rose-400 flex items-center justify-center font-bold mb-3">1</div>
            <h4 class="font-bold text-white mb-2 text-sm">Human-Centric Checkouts</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              OTPs, CAPTCHAs, and 3D-Secure redirects cause 100% failure rates for autonomous non-interactive buyer agents. Merchants lose high-intent bot purchases instantly.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30">
            <div class="w-10 h-10 rounded-lg bg-amber-900/40 text-amber-400 flex items-center justify-center font-bold mb-3">2</div>
            <h4 class="font-bold text-white mb-2 text-sm">Static Pricing & Leaked Margin</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Traditional e-commerce uses blunt static discounts. When an enterprise bot requests 500 units, standard web stores cannot negotiate margins dynamically, losing wholesale deals.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/30">
            <div class="w-10 h-10 rounded-lg bg-indigo-900/40 text-indigo-400 flex items-center justify-center font-bold mb-3">3</div>
            <h4 class="font-bold text-white mb-2 text-sm">No Delegated Authority Standards</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              Users are terrified of giving autonomous agents unrestricted credit card access. There has been no cryptographic spending mandate with granular category caps.
            </p>
          </div>
        </div>
      `
    },
    {
      title: "The RazorPulse Solution & Architecture",
      subtitle: "Bridging Autonomous AI Agents with Razorpay's Trusted Settlement Rails",
      tag: "Technical Architecture",
      content: `
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-slate-900/80 border border-sky-500/30 font-mono text-xs text-slate-300">
            <div class="flex items-center justify-between pb-2 border-b border-slate-800 text-sky-400 font-bold">
              <span>SYSTEM WORKFLOW ARCHITECTURE</span>
              <span>AP2 Protocol v2.4</span>
            </div>
            <div class="py-3 leading-relaxed">
              <span class="text-sky-300 font-bold">[1. Buyer Agent]</span> Emits Cryptographic RFQ with Delegated Razorpay Mandate Token (<code class="text-amber-300">ap2_mnd_...</code>)<br>
              <span class="text-slate-500">└── ➔</span> <span class="text-emerald-300 font-bold">[2. RazorPulse Merchant AI]</span> Evaluates Live Inventory + Margin Floor, computes dynamic counter-offer<br>
              <span class="text-slate-500">└── ➔</span> <span class="text-indigo-300 font-bold">[3. A2A Negotiation Loop]</span> Multi-turn JSON-RPC consensus reached in &lt;45ms<br>
              <span class="text-slate-500">└── ➔</span> <span class="text-cyan-300 font-bold">[4. Razorpay Agentic Mandate Debit]</span> Zero-click cryptographic capture via Razorpay Subscriptions/PG<br>
              <span class="text-slate-500">└── ➔</span> <span class="text-emerald-400 font-bold">[5. Real-Time Webhook & Escrow]</span> Instant fulfillment dispatch & merchant payout
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-sky-950/30 border border-sky-500/20 text-xs">
              <h5 class="font-bold text-sky-300 mb-1">Layer 1: Agentic Protocol (AP2)</h5>
              <p class="text-slate-300">Cryptographically signed RFQ/Counter/Accept schemas, anti-hallucination spending boundaries, and biometric passkey step-up escalation.</p>
            </div>
            <div class="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
              <h5 class="font-bold text-emerald-300 mb-1">Layer 2: AI Growth Engine</h5>
              <p class="text-slate-300">Autonomous dynamic margin optimizer, predictive restock B2B procurement, and real-time cart drop-off salvage agent.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "Deep Razorpay Ecosystem Integration",
      subtitle: "Leveraging the Full Breadth of Razorpay's Enterprise Fintech Stack",
      tag: "Fintech Synergy",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div class="flex items-center gap-2 text-sky-400 font-bold text-sm mb-1">
              <span class="w-2 h-2 rounded-full bg-sky-400"></span>
              Razorpay Payment Gateway & Optimizer
            </div>
            <p class="text-slate-300 leading-relaxed">
              Provides the high-availability settlement rails. Razorpay Optimizer dynamically chooses the lowest-latency, highest-success payment rail (UPI AutoPay, Card Tokenization, Netbanking) for sub-50ms machine execution.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              Razorpay Subscriptions & Mandates
            </div>
            <p class="text-slate-300 leading-relaxed">
              Powers the core security foundation of AP2: delegated spending authorities where the user authorizes an agent to spend up to ₹X daily, debited automatically without manual OTP friction.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div class="flex items-center gap-2 text-purple-400 font-bold text-sm mb-1">
              <span class="w-2 h-2 rounded-full bg-purple-400"></span>
              Razorpay Magic Checkout 2.0 (Agentic)
            </div>
            <p class="text-slate-300 leading-relaxed">
              Evolved from 1-click human checkout to 0-click autonomous agent checkout. Pre-verified addresses, tax identifiers (GSTIN), and delivery preferences parsed via machine schema.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
              <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              Razorpay Smart Collect & Route Escrow
            </div>
            <p class="text-slate-300 leading-relaxed">
              Enables autonomous B2B procurement: when merchant inventory runs low, RazorPulse triggers an automated PO with supplier agents and holds funds in escrow until dispatch confirmation.
            </p>
          </div>
        </div>
      `
    },
    {
      title: "Security, Guardrails & Anti-Hallucination Firewalls",
      subtitle: "Enterprise-Grade Safety for Autonomous Agentic Financial Transactions",
      tag: "Security Architecture",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-900/60 border border-sky-500/30">
            <h5 class="font-bold text-sky-300 mb-2">1. Deterministic Spending Limits</h5>
            <p class="text-slate-300 leading-relaxed">
              Hard mathematical constraints enforced on the Razorpay server side. Even if an LLM hallucinates an offer of ₹10,00,000, the payment gateway rejects any transaction exceeding the cryptographic mandate cap.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/30">
            <h5 class="font-bold text-emerald-300 mb-2">2. Biometric Step-Up Protocol</h5>
            <p class="text-slate-300 leading-relaxed">
              If an agent negotiates an extraordinary high-value opportunity exceeding normal limits, it triggers a 1-tap WebAuthn / Passkey push notification to the owner's phone for instant biometric confirmation.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-slate-900/60 border border-purple-500/30">
            <h5 class="font-bold text-purple-300 mb-2">3. Prompt Injection Defense</h5>
            <p class="text-slate-300 leading-relaxed">
              Strict JSON-RPC protocol parser with schema validation and adversarial payload sanitization. Ensures malicious buyer agents cannot inject system prompt overrides into merchant pricing algorithms.
            </p>
          </div>
        </div>
      `
    },
    {
      title: "Market Opportunity & Unit Economics",
      subtitle: "A High-Margin B2B FinTech Platform with Exponential Network Effects",
      tag: "Business Model",
      content: `
        <div class="space-y-4 text-xs">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span class="text-slate-400 block mb-1">Total Addressable Market</span>
              <span class="text-2xl font-bold font-mono text-sky-400">$140B</span>
              <span class="text-[10px] text-slate-500 block mt-1">Global Agentic Transactions by 2030</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span class="text-slate-400 block mb-1">RazorPulse Take Rate</span>
              <span class="text-2xl font-bold font-mono text-emerald-400">0.25%</span>
              <span class="text-[10px] text-slate-500 block mt-1">+ Standard Razorpay Gateway Fee</span>
            </div>
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span class="text-slate-400 block mb-1">Merchant ROI</span>
              <span class="text-2xl font-bold font-mono text-purple-400">8.4x</span>
              <span class="text-[10px] text-slate-500 block mt-1">Net profit generated vs protocol cost</span>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 text-slate-300">
            <h5 class="font-bold text-white mb-1">Monetization Pillars:</h5>
            <ul class="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Agentic Transaction Protocol Fee:</strong> 0.25% micro-fee on autonomous cleared volume.</li>
              <li><strong>Merchant AI Growth SaaS Tier:</strong> ₹4,999/mo for autonomous margin optimizer, drop-off salvage, and inventory prediction bots.</li>
              <li><strong>Enterprise Mandate Enclave:</strong> Custom private agent whitelisting for large B2B supply chains.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Project Creator & Hackathon Credits",
      subtitle: "Razorpay Hackathon 2026 • AI Growth and Agentic Commerce",
      tag: "Creator Spotlight",
      content: `
        <div class="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-sky-950/50 to-indigo-950/40 border border-sky-500/40">
          <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-3xl font-bold text-slate-950 shadow-xl flex-shrink-0">
            DK
          </div>

          <div class="space-y-2 text-left">
            <div class="flex items-center gap-3">
              <h3 class="text-2xl font-bold text-white font-display">Dharun K</h3>
              <span class="px-3 py-0.5 rounded-full text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-400/40">
                Lead Architect & Creator
              </span>
            </div>
            <p class="text-sm text-slate-300">
              Passionate developer specializing in Autonomous AI Agents, Financial Infrastructure, and Modern High-Velocity Systems.
            </p>
            <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span class="flex items-center gap-1.5"><i data-lucide="award" class="w-4 h-4 text-emerald-400"></i> Razorpay Hackathon 2026 Participant</span>
              <span class="flex items-center gap-1.5"><i data-lucide="sparkles" class="w-4 h-4 text-sky-400"></i> AI Growth and Agentic Commerce Track</span>
            </div>
          </div>
        </div>
      `
    }
  ],

  init() {
    this.renderSlide(0);
    this.bindControls();
  },

  bindControls() {
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentSlide > 0) {
          this.renderSlide(this.currentSlide - 1);
          if (window.SoundEffects) window.SoundEffects.play('click');
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentSlide < this.slides.length - 1) {
          this.renderSlide(this.currentSlide + 1);
          if (window.SoundEffects) window.SoundEffects.play('click');
        }
      });
    }
  },

  renderSlide(index) {
    this.currentSlide = index;
    const slide = this.slides[index];
    const container = document.getElementById('pitchSlideContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4 animate-fadeIn">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <span class="px-3 py-1 rounded-full text-xs font-mono bg-sky-950 text-sky-300 border border-sky-500/30">
            ${slide.tag}
          </span>
          <span class="text-xs font-mono text-slate-500">
            Slide ${index + 1} of ${this.slides.length}
          </span>
        </div>

        <div>
          <h2 class="text-xl md:text-2xl font-bold text-white font-display mb-1">${slide.title}</h2>
          <p class="text-xs md:text-sm text-slate-400">${slide.subtitle}</p>
        </div>

        <div class="pt-2">
          ${slide.content}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Update buttons
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');

    if (prevBtn) {
      prevBtn.disabled = index === 0;
      prevBtn.classList.toggle('opacity-40', index === 0);
    }
    if (nextBtn) {
      nextBtn.disabled = index === this.slides.length - 1;
      nextBtn.classList.toggle('opacity-40', index === this.slides.length - 1);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.PitchDeck.init();
});
