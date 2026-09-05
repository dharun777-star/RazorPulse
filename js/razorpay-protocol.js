/**
 * RazorPulse: Razorpay Agent Payment Protocol (AP2) & Checkout Controller
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

window.RazorpayProtocol = {
  activeMandates: [
    {
      id: "ap2_mnd_98f12a",
      agentName: "TensorFlow-Scale Enterprise Bot",
      dailyLimit: 250000,
      txnLimit: 200000,
      spentToday: 166500,
      categories: ["Cloud Infrastructure", "B2B SaaS"],
      status: "ACTIVE",
      stepUpThreshold: 10 // % above budget requiring user passkey
    },
    {
      id: "ap2_mnd_cafe04",
      agentName: "RoastCraft Cafe Chain AI Buyer",
      dailyLimit: 150000,
      txnLimit: 120000,
      spentToday: 97500,
      categories: ["Agricultural Commodities", "Packaging"],
      status: "ACTIVE",
      stepUpThreshold: 15
    },
    {
      id: "ap2_mnd_home77",
      agentName: "HomeOS Butler Agent",
      dailyLimit: 10000,
      txnLimit: 5000,
      spentToday: 3700,
      categories: ["Household Essentials", "Groceries"],
      status: "ACTIVE",
      stepUpThreshold: 5
    }
  ],

  init() {
    this.bindMandateStudio();
    this.renderMandateList();
  },

  bindMandateStudio() {
    // Mandate creation form
    const form = document.getElementById('createMandateForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateMandate();
      });
    }

    // Modal close buttons
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        this.closeCheckoutModal();
      });
    }

    const modalOverlay = document.getElementById('rzpCheckoutModal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          this.closeCheckoutModal();
        }
      });
    }

    // Copy Webhook Payload
    const copyPayloadBtn = document.getElementById('copyWebhookBtn');
    if (copyPayloadBtn) {
      copyPayloadBtn.addEventListener('click', () => {
        const payloadText = document.getElementById('webhookJsonPreview').innerText;
        navigator.clipboard.writeText(payloadText).then(() => {
          if (window.showToast) window.showToast("📋 Webhook JSON Copied to Clipboard!", "success");
        });
      });
    }
  },

  handleCreateMandate() {
    if (window.SoundEffects) window.SoundEffects.play('click');

    const nameInput = document.getElementById('mandateAgentName');
    const dailyInput = document.getElementById('mandateDailyLimit');
    const txnInput = document.getElementById('mandateTxnLimit');
    const catInput = document.getElementById('mandateCategory');

    const agentName = nameInput ? nameInput.value.trim() : "Custom Autonomous Agent";
    const dailyLimit = dailyInput ? parseInt(dailyInput.value, 10) : 50000;
    const txnLimit = txnInput ? parseInt(txnInput.value, 10) : 25000;
    const category = catInput ? catInput.value : "General E-commerce";

    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const newMandate = {
      id: `ap2_mnd_${randomSuffix}`,
      agentName: agentName,
      dailyLimit: dailyLimit,
      txnLimit: txnLimit,
      spentToday: 0,
      categories: [category],
      status: "ACTIVE",
      stepUpThreshold: 10
    };

    this.activeMandates.unshift(newMandate);
    this.renderMandateList();

    // Show generated credential modal/toast
    if (window.showToast) {
      window.showToast(`🛡️ Razorpay Agent Mandate Minted: ${newMandate.id}`, "success", 4000);
    }
    if (window.SoundEffects) window.SoundEffects.play('success');

    // Reset form
    if (nameInput) nameInput.value = '';
  },

  renderMandateList() {
    const container = document.getElementById('mandateListContainer');
    if (!container) return;

    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    container.innerHTML = this.activeMandates.map(m => `
      <div class="glass-panel p-4 border-slate-800 hover:border-sky-500/30 transition-all">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <h4 class="font-bold text-sm text-white">${m.agentName}</h4>
            </div>
            <p class="text-[11px] font-mono text-sky-400 mt-0.5">${m.id}</p>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/40">
            ${m.status}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs py-2 border-y border-slate-800/80 my-2 font-mono text-slate-300">
          <div>
            <span class="text-[10px] text-slate-500 block">Daily Limit:</span>
            <span>${formatINR(m.dailyLimit)}</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">Per-Txn Cap:</span>
            <span>${formatINR(m.txnLimit)}</span>
          </div>
        </div>

        <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Scope: <strong class="text-slate-200">${m.categories.join(', ')}</strong></span>
          <span class="text-emerald-400 font-semibold">Step-Up Auth: >${m.stepUpThreshold}%</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  openCheckoutModal(dealData) {
    if (window.SoundEffects) window.SoundEffects.play('token');
    const modal = document.getElementById('rzpCheckoutModal');
    if (!modal) return;

    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    // Populate modal data
    document.getElementById('rzpModalItem').innerText = dealData.itemName;
    document.getElementById('rzpModalAmount').innerText = formatINR(dealData.amount);
    document.getElementById('rzpModalSavings').innerText = `${formatINR(dealData.savings)} saved`;
    document.getElementById('rzpModalBuyerAgent').innerText = dealData.buyerAgent;
    document.getElementById('rzpModalMandateToken').innerText = dealData.mandateToken;

    // Reset view states
    document.getElementById('rzpSettlementProgress').classList.remove('hidden');
    document.getElementById('rzpSettlementSuccess').classList.add('hidden');
    modal.classList.remove('hidden');

    // Run simulated 3-step settlement
    this.executeAutonomousSettlement(dealData);
  },

  executeAutonomousSettlement(dealData) {
    const step1 = document.getElementById('settleStep1');
    const step2 = document.getElementById('settleStep2');
    const step3 = document.getElementById('settleStep3');

    // Step 1: Validate Mandate
    step1.className = "flex items-center gap-3 text-xs font-mono text-sky-400 animate-pulse";
    step1.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-sky-400"></i> Validating Cryptographic Mandate Signature & Limit...`;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      step1.className = "flex items-center gap-3 text-xs font-mono text-emerald-400";
      step1.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Mandate Validated: Under Cap (₹${dealData.amount.toLocaleString('en-IN')})`;

      // Step 2: Razorpay Optimizer
      step2.className = "flex items-center gap-3 text-xs font-mono text-sky-400 animate-pulse";
      step2.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-sky-400"></i> Razorpay Optimizer: Selecting zero-friction direct settlement rail...`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        step2.className = "flex items-center gap-3 text-xs font-mono text-emerald-400";
        step2.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Routed via Razorpay Instant Settlement Rail (38ms)`;

        // Step 3: Zero-Click Debit
        step3.className = "flex items-center gap-3 text-xs font-mono text-sky-400 animate-pulse";
        step3.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin text-sky-400"></i> Authorizing Zero-Click Tokenized Debit...`;
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          step3.className = "flex items-center gap-3 text-xs font-mono text-emerald-400";
          step3.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Funds Cleared: ₹${dealData.amount.toLocaleString('en-IN')} Settled to Merchant`;

          // Reveal receipt & success
          this.finalizeSettlement(dealData);
        }, 900);
      }, 900);
    }, 900);
  },

  finalizeSettlement(dealData) {
    const txnId = `pay_AP2_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    const hash = `0x${Array.from({length: 48}, () => Math.floor(Math.random()*16).toString(16)).join('')}`;

    document.getElementById('rzpReceiptTxnId').innerText = txnId;
    document.getElementById('rzpReceiptHash').innerText = `${hash.substring(0, 16)}...${hash.substring(hash.length - 8)}`;

    document.getElementById('rzpSettlementProgress').classList.add('hidden');
    document.getElementById('rzpSettlementSuccess').classList.remove('hidden');

    if (window.SoundEffects) window.SoundEffects.play('success');
    if (window.fireConfetti) window.fireConfetti();

    // Update Webhook Preview
    const webhookPayload = {
      entity: "event",
      account_id: "acc_RazorPulse_DharunK",
      event: "payment.agentic.authorized",
      contains: ["payment", "mandate", "agent"],
      payload: {
        payment: {
          entity: {
            id: txnId,
            amount: dealData.amount * 100, // paise
            currency: "INR",
            status: "captured",
            method: "agentic_mandate",
            description: `Autonomous A2A Settlement for ${dealData.itemName}`,
            agent: {
              protocol: "AP2_v2.4",
              buyer_agent_id: dealData.buyerAgent,
              mandate_id: dealData.mandateToken,
              negotiation_rounds: 4,
              savings_inr: dealData.savings,
              consensus_latency_ms: 42
            },
            settlement_hash: hash,
            created_at: Math.floor(Date.now() / 1000)
          }
        }
      }
    };

    const webhookEl = document.getElementById('webhookJsonPreview');
    if (webhookEl) {
      webhookEl.innerText = JSON.stringify(webhookPayload, null, 2);
    }

    if (window.showToast) {
      window.showToast(`✅ Payment Captured! Razorpay Order ${txnId} Cleared via AP2.`, "success", 4500);
    }
  },

  closeCheckoutModal() {
    const modal = document.getElementById('rzpCheckoutModal');
    if (modal) modal.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.RazorpayProtocol.init();
});
