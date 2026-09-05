/**
 * RazorPulse: Core Application Orchestrator
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

// Global State
window.RazorPulse = {
  activeTab: 'simulator',
  audioEnabled: true,
  audioCtx: null,
  telemetry: {
    autonomousTxns: 14289,
    activeMandates: 3840,
    avgLatency: 41.8,
    gmvLift: 34.8,
    totalVolume: 8420650
  }
};

// Web Audio API Sound Synthesizer
const SoundEffects = {
  init() {
    if (!window.RazorPulse.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        window.RazorPulse.audioCtx = new AudioContext();
      }
    }
  },

  play(type) {
    if (!window.RazorPulse.audioEnabled) return;
    this.init();
    const ctx = window.RazorPulse.audioCtx;
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
        break;
      }
      case 'token': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(1800, now + 0.04);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
        break;
      }
      case 'agree': {
        // Futuristic chord on agreement
        const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);
          gain.gain.setValueAtTime(0.07, now + idx * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.04);
          osc.stop(now + 0.35);
        });
        break;
      }
      case 'success': {
        // Razorpay Payment Success Chime
        const notes = [659.25, 880.00, 1174.66]; // E5, A5, D6
        notes.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + (i * 0.1));
          gain.gain.setValueAtTime(0.12, now + (i * 0.1));
          gain.gain.exponentialRampToValueAtTime(0.0001, now + (i * 0.1) + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + (i * 0.1));
          osc.stop(now + (i * 0.1) + 0.55);
        });
        break;
      }
      case 'alert': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(440, now + 0.15);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
        break;
      }
    }
  }
};

// UI Notification Toast
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 z-50 text-sm font-medium ${
    type === 'success' 
      ? 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200' 
      : type === 'warning'
      ? 'bg-amber-950/90 border-amber-500/40 text-amber-200'
      : 'bg-sky-950/90 border-sky-500/40 text-sky-200'
  }`;

  const icon = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-triangle' : 'info';
  toast.innerHTML = `
    <i data-lucide="${icon}" class="w-5 h-5 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Tab Switching
function switchTab(tabId) {
  SoundEffects.play('click');
  window.RazorPulse.activeTab = tabId;

  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active', 'text-sky-400', 'bg-sky-950/40', 'border-sky-500/30');
      btn.classList.remove('text-slate-400', 'border-transparent');
    } else {
      btn.classList.remove('active', 'text-sky-400', 'bg-sky-950/40', 'border-sky-500/30');
      btn.classList.add('text-slate-400', 'border-transparent');
    }
  });

  // Toggle sections
  document.querySelectorAll('.app-section').forEach(sec => {
    if (sec.id === `section-${tabId}`) {
      sec.classList.remove('hidden');
      sec.classList.add('animate-fadeIn');
    } else {
      sec.classList.add('hidden');
      sec.classList.remove('animate-fadeIn');
    }
  });

  // Trigger charts resize if opening dashboard
  if (tabId === 'growth' && window.GrowthDashboard) {
    window.GrowthDashboard.renderCharts();
  }

  // Render pitch slides if opening pitch
  if (tabId === 'pitch' && window.PitchDeck) {
    window.PitchDeck.renderSlide(window.PitchDeck.currentSlide);
  }
}

// Live Telemetry simulation ticker
function initTelemetryTicker() {
  const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  setInterval(() => {
    // Subtle realistic fluctuations
    window.RazorPulse.telemetry.autonomousTxns += Math.floor(Math.random() * 3) + 1;
    window.RazorPulse.telemetry.totalVolume += Math.floor(Math.random() * 12000) + 1500;
    window.RazorPulse.telemetry.avgLatency = Number((41.0 + (Math.random() * 2.2)).toFixed(1));

    const txnEl = document.getElementById('tickerTxnCount');
    const volEl = document.getElementById('tickerVolume');
    const latEl = document.getElementById('tickerLatency');

    if (txnEl) txnEl.innerText = window.RazorPulse.telemetry.autonomousTxns.toLocaleString();
    if (volEl) volEl.innerText = formatINR(window.RazorPulse.telemetry.totalVolume);
    if (latEl) latEl.innerText = `${window.RazorPulse.telemetry.avgLatency}ms`;
  }, 2400);
}

// Audio toggle
function toggleAudio() {
  window.RazorPulse.audioEnabled = !window.RazorPulse.audioEnabled;
  SoundEffects.play('click');
  const btn = document.getElementById('audioToggleBtn');
  if (btn) {
    btn.innerHTML = window.RazorPulse.audioEnabled 
      ? '<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i>' 
      : '<i data-lucide="volume-x" class="w-4 h-4 text-slate-500"></i>';
    if (window.lucide) window.lucide.createIcons();
  }
  showToast(window.RazorPulse.audioEnabled ? "Audio Synthesizer: Enabled" : "Audio Synthesizer: Muted", "info", 1800);
}

// Launch confetti
function fireConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#0284c7', '#38bdf8', '#10b981', '#a855f7', '#fbbf24']
    });
  }
}

// Bootstrap on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();
  initTelemetryTicker();

  // Bind nav tabs
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // Bind audio button
  const audioBtn = document.getElementById('audioToggleBtn');
  if (audioBtn) {
    audioBtn.addEventListener('click', toggleAudio);
  }

  // Quick Action Buttons in Hero
  document.querySelectorAll('[data-quick-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-quick-tab');
      if (targetTab) switchTab(targetTab);
    });
  });

  console.log("🚀 RazorPulse initialized successfully. Built by Dharun K for Razorpay Hackathon 2026.");
});

window.SoundEffects = SoundEffects;
window.showToast = showToast;
window.switchTab = switchTab;
window.fireConfetti = fireConfetti;
