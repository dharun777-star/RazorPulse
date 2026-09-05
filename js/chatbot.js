/**
 * RazorPulse: AI Commerce Copilot Chatbot
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

window.RazorChatbot = {
  isOpen: false,
  messages: [],

  quickPrompts: [
    "⚡ Launch Live A2A Negotiation",
    "🛡️ How do Razorpay AP2 Mandates work?",
    "📈 What is the AI Growth Engine?",
    "💳 Which Razorpay APIs are used?",
    "👤 Tell me about Dharun K"
  ],

  init() {
    this.renderInitialUI();
    this.bindEvents();
    // Welcome message
    this.addBotMessage(
      "👋 Hello! I am **RazorPulse Copilot**, your autonomous commerce intelligence assistant.<br><br>" +
      "I can explain our **AP2 Protocol**, walk you through **Dharun K's** architecture for the **Razorpay Hackathon 2026**, or trigger live autonomous negotiations right here! What would you like to explore?"
    );
  },

  renderInitialUI() {
    // Quick prompt buttons
    const container = document.getElementById('chatQuickPrompts');
    if (container) {
      container.innerHTML = this.quickPrompts.map(p => `
        <button class="chat-quick-btn font-mono" data-prompt="${p}">${p}</button>
      `).join('');
    }
  },

  bindEvents() {
    // Toggle FAB
    const fab = document.getElementById('chatbotFab');
    if (fab) {
      fab.addEventListener('click', () => this.toggle());
    }

    // Close Button
    const closeBtn = document.getElementById('closeChatbotBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.toggle(false));
    }

    // Chat Form Submit
    const form = document.getElementById('chatbotForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chatbotInput');
        if (!input) return;
        const text = input.value.trim();
        if (text) {
          this.handleUserMessage(text);
          input.value = '';
        }
      });
    }

    // Quick Prompts Click Delegation
    const promptContainer = document.getElementById('chatQuickPrompts');
    if (promptContainer) {
      promptContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.chat-quick-btn');
        if (btn) {
          const prompt = btn.dataset.prompt;
          this.handleUserMessage(prompt);
        }
      });
    }
  },

  toggle(forceState) {
    this.isOpen = forceState !== undefined ? forceState : !this.isOpen;
    const windowEl = document.getElementById('chatbotWindow');
    const fab = document.getElementById('chatbotFab');
    const unreadDot = document.getElementById('chatUnreadBadge');

    if (window.SoundEffects) window.SoundEffects.play('click');

    if (this.isOpen) {
      if (windowEl) windowEl.classList.remove('hidden');
      if (fab) fab.classList.add('is-active');
      if (unreadDot) unreadDot.classList.add('hidden');
      // Scroll to bottom
      setTimeout(() => this.scrollToBottom(), 100);
    } else {
      if (windowEl) windowEl.classList.add('hidden');
      if (fab) fab.classList.remove('is-active');
    }
  },

  handleUserMessage(text) {
    if (window.SoundEffects) window.SoundEffects.play('token');
    this.addUserMessage(text);
    this.showTypingIndicator();

    setTimeout(() => {
      this.hideTypingIndicator();
      const response = this.generateResponse(text);
      this.addBotMessage(response.text, response.actions);
      if (window.SoundEffects) window.SoundEffects.play('agree');
    }, 650);
  },

  addUserMessage(text) {
    const list = document.getElementById('chatbotMessagesList');
    if (!list) return;

    const div = document.createElement('div');
    div.className = 'chat-bubble-user';
    div.innerText = text;
    list.appendChild(div);
    this.scrollToBottom();
  },

  addBotMessage(htmlText, actions = []) {
    const list = document.getElementById('chatbotMessagesList');
    if (!list) return;

    const div = document.createElement('div');
    div.className = 'chat-bubble-bot space-y-2';
    
    let actionsHtml = '';
    if (actions && actions.length > 0) {
      actionsHtml = `
        <div class="pt-2 flex flex-wrap gap-2 border-t border-slate-800/80">
          ${actions.map(act => `
            <button 
              class="chat-action-btn px-3 py-1.5 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-500/40 text-sky-300 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              onclick="${act.handler}">
              <i data-lucide="${act.icon || 'zap'}" class="w-3.5 h-3.5 text-sky-400"></i>
              ${act.label}
            </button>
          `).join('')}
        </div>
      `;
    }

    div.innerHTML = `
      <div>${htmlText}</div>
      ${actionsHtml}
    `;

    list.appendChild(div);
    if (window.lucide) window.lucide.createIcons();
    this.scrollToBottom();
  },

  showTypingIndicator() {
    const list = document.getElementById('chatbotMessagesList');
    if (!list) return;

    let typing = document.getElementById('chatTypingIndicator');
    if (!typing) {
      typing = document.createElement('div');
      typing.id = 'chatTypingIndicator';
      typing.className = 'chat-bubble-bot flex items-center gap-1.5 py-2.5 px-3.5 self-start';
      typing.innerHTML = `
        <span class="text-[11px] font-mono text-slate-400 mr-1.5">PulseAI thinking</span>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      `;
      list.appendChild(typing);
      this.scrollToBottom();
    }
  },

  hideTypingIndicator() {
    const typing = document.getElementById('chatTypingIndicator');
    if (typing) typing.remove();
  },

  scrollToBottom() {
    const list = document.getElementById('chatbotMessagesList');
    if (list) list.scrollTop = list.scrollHeight;
  },

  generateResponse(query) {
    const q = query.toLowerCase();

    // 1. Dharun K / Creator
    if (q.includes("dharun") || q.includes("creator") || q.includes("author") || q.includes("who made") || q.includes("who created")) {
      return {
        text: "👑 **Dharun K** is the Creator & Lead Architect of **RazorPulse** for the **Razorpay Hackathon 2026** (Track: *AI Growth and Agentic Commerce*).<br><br>Dharun engineered this platform to bridge the gap between autonomous LLM buyer agents and Razorpay's high-reliability payment infrastructure, unlocking sub-50ms machine-to-machine checkout.",
        actions: [
          { label: "View Dharun's Pitch Spotlight", icon: "award", handler: "window.switchTab('pitch');" }
        ]
      };
    }

    // 2. Launch / Start Negotiation
    if (q.includes("launch") || q.includes("start") || q.includes("negotiat") || q.includes("simulat") || q.includes("gpu") || q.includes("deal")) {
      return {
        text: "⚡ **Autonomous A2A Negotiation Ready!**<br><br>In our live simulator, an Enterprise AI Buyer Bot negotiates directly with the RazorPulse Merchant Agent. It exchanges cryptographic RFQs, evaluates margin floors, and triggers a tokenized Razorpay debit on consensus.<br><br>Click below to jump directly to the simulator and watch it negotiate live!",
        actions: [
          { 
            label: "Run Enterprise GPU Simulation", 
            icon: "play", 
            handler: "window.switchTab('simulator'); setTimeout(() => { window.AgentSimulator.selectScenario('gpu'); window.AgentSimulator.startSimulation(); }, 300);" 
          },
          { 
            label: "Run Commodity Coffee B2B", 
            icon: "coffee", 
            handler: "window.switchTab('simulator'); setTimeout(() => { window.AgentSimulator.selectScenario('coffee'); window.AgentSimulator.startSimulation(); }, 300);" 
          }
        ]
      };
    }

    // 3. AP2 Mandates / Security
    if (q.includes("ap2") || q.includes("mandate") || q.includes("security") || q.includes("auth") || q.includes("passkey") || q.includes("token")) {
      return {
        text: "🛡️ **Agent Payment Protocol (AP2) Overview**:<br><br>" +
              "• **Deterministic Spending Bounds**: Hard caps on daily and per-transaction limits enforced at the Razorpay Gateway level (anti-hallucination firewall).<br>" +
              "• **Category Whitelisting**: Agents can only spend within authorized industry domains.<br>" +
              "• **Biometric Step-Up**: If a transaction deviates >10% from the budget, it triggers a 1-tap Passkey/WebAuthn push to the owner's mobile device.<br>" +
              "• **Zero OTP Friction**: Autonomous capture via Razorpay Subscriptions/Mandates.",
        actions: [
          { label: "Open Mandate Studio", icon: "shield-check", handler: "window.switchTab('mandate');" }
        ]
      };
    }

    // 4. Growth Engine / GMV / Margin
    if (q.includes("growth") || q.includes("gmv") || q.includes("margin") || q.includes("pricing") || q.includes("discount") || q.includes("salvage")) {
      return {
        text: "📈 **AI Growth Engine & Dynamic Margin Optimizer**:<br><br>" +
              "• **+34.8% Projected GMV Lift**: Dynamic concession algorithms convert high-volume bots without price wars.<br>" +
              "• **Minimum Margin Guardrails**: Real-time safeguard guaranteeing the merchant's net profit floor.<br>" +
              "• **Cart Drop-off Salvage**: Detects stalled bot inquiries and injects real-time personalized salvage offers (+41.2% recovery).<br>" +
              "• **Predictive B2B Restock**: Autonomous replenishment POs via Razorpay Smart Collect & Escrow.",
        actions: [
          { label: "Open AI Growth Dashboard", icon: "trending-up", handler: "window.switchTab('growth');" }
        ]
      };
    }

    // 5. Razorpay APIs / Integration
    if (q.includes("razorpay") || q.includes("api") || q.includes("integration") || q.includes("webhook") || q.includes("optimizer") || q.includes("gateway")) {
      return {
        text: "💳 **Razorpay Fintech Ecosystem Integration**:<br><br>" +
              "1. **Razorpay Payment Gateway**: Low-latency sub-50ms tokenized capture rail.<br>" +
              "2. **Razorpay Subscriptions & Mandates**: Core security spine for cryptographic agent authority (`ap2_mnd_...`).<br>" +
              "3. **Razorpay Optimizer**: Dynamically routes machine transactions across highest-availability rails.<br>" +
              "4. **Razorpay Magic Checkout 2.0**: Machine-to-machine zero-click profile settlement.<br>" +
              "5. **Razorpay Webhooks**: Real-time dispatch of `payment.agentic.authorized` events.",
        actions: [
          { label: "Inspect Webhook Payload", icon: "webhook", handler: "window.switchTab('mandate');" },
          { label: "View Architecture Diagram", icon: "presentation", handler: "window.switchTab('pitch');" }
        ]
      };
    }

    // 6. Hackathon / Track / Pitch
    if (q.includes("hackathon") || q.includes("pitch") || q.includes("track") || q.includes("judges") || q.includes("tam")) {
      return {
        text: "🏆 **Razorpay Hackathon 2026 Pitch Summary**:<br><br>" +
              "• **Track**: AI Growth and Agentic Commerce<br>" +
              "• **Creator**: Dharun K<br>" +
              "• **Market Opportunity**: $140B Agentic Commerce TAM by 2030<br>" +
              "• **Core Innovation**: First unified machine-readable negotiation protocol (AP2) natively coupled with Razorpay's financial clearance rails.",
        actions: [
          { label: "Browse Full Pitch Deck", icon: "file-text", handler: "window.switchTab('pitch');" }
        ]
      };
    }

    // Default Fallback
    return {
      text: "🤖 That's a great question about Agentic Commerce! **RazorPulse** combines real-time AI negotiation with Razorpay's delegated payment mandates to eliminate human checkout bottlenecks.<br><br>Would you like to run a live autonomous negotiation, inspect the spending mandates, or explore the merchant growth engine?",
      actions: [
        { label: "Run Live Simulation", icon: "play", handler: "window.switchTab('simulator'); setTimeout(() => window.AgentSimulator.startSimulation(), 300);" },
        { label: "Explore Growth Dashboard", icon: "trending-up", handler: "window.switchTab('growth');" }
      ]
    };
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.RazorChatbot.init();
});
