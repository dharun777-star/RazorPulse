/**
 * RazorPulse: AI Growth Engine & Merchant Intelligence Dashboard
 * Razorpay Hackathon 2026 - AI Growth & Agentic Commerce
 * Creator: Dharun K
 */

window.GrowthDashboard = {
  charts: {},
  state: {
    marginFloor: 18,
    discountHeadroom: 15,
    salvageMode: 'balanced', // conservative, balanced, aggressive
    baseAnnualGMV: 125000000, // ₹12.5 Cr
    simulatedTrafficCount: 0
  },

  init() {
    this.bindControls();
    this.initCharts();
    this.updateCalculations();
  },

  bindControls() {
    const marginSlider = document.getElementById('marginFloorSlider');
    const discountSlider = document.getElementById('discountSlider');

    if (marginSlider) {
      marginSlider.addEventListener('input', (e) => {
        this.state.marginFloor = parseInt(e.target.value, 10);
        document.getElementById('marginFloorVal').innerText = `${this.state.marginFloor}%`;
        this.updateCalculations();
        this.updateCharts();
      });
    }

    if (discountSlider) {
      discountSlider.addEventListener('input', (e) => {
        this.state.discountHeadroom = parseInt(e.target.value, 10);
        document.getElementById('discountVal').innerText = `${this.state.discountHeadroom}%`;
        this.updateCalculations();
        this.updateCharts();
      });
    }

    // Salvage mode buttons
    document.querySelectorAll('.salvage-mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.SoundEffects) window.SoundEffects.play('click');
        const mode = e.currentTarget.dataset.mode;
        this.state.salvageMode = mode;

        document.querySelectorAll('.salvage-mode-btn').forEach(b => {
          if (b.dataset.mode === mode) {
            b.classList.add('bg-sky-500/20', 'border-sky-400', 'text-sky-300');
            b.classList.remove('bg-slate-900/60', 'border-slate-800', 'text-slate-400');
          } else {
            b.classList.remove('bg-sky-500/20', 'border-sky-400', 'text-sky-300');
            b.classList.add('bg-slate-900/60', 'border-slate-800', 'text-slate-400');
          }
        });

        this.updateCalculations();
        this.updateCharts();
      });
    });

    // Burst Simulation Button
    const burstBtn = document.getElementById('simulateBurstBtn');
    if (burstBtn) {
      burstBtn.addEventListener('click', () => {
        this.simulateTrafficBurst();
      });
    }

    // Trigger Restock Button
    const restockBtn = document.getElementById('triggerRestockBtn');
    if (restockBtn) {
      restockBtn.addEventListener('click', () => {
        this.triggerAutonomousRestock();
      });
    }
  },

  updateCalculations() {
    const margin = this.state.marginFloor;
    const discount = this.state.discountHeadroom;
    
    // Multiplier calculation based on parameters
    const modeMultiplier = this.state.salvageMode === 'aggressive' ? 1.45 : this.state.salvageMode === 'balanced' ? 1.34 : 1.22;
    const gmvLiftPercent = Number(((discount * 1.4) + (25 - margin * 0.5) * modeMultiplier / 2).toFixed(1));
    const projectedGMV = this.state.baseAnnualGMV * (1 + (gmvLiftPercent / 100));
    const addedProfit = projectedGMV * (margin / 100) - (this.state.baseAnnualGMV * 0.16);

    const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

    const gmvLiftEl = document.getElementById('statGmvLift');
    const projGmvEl = document.getElementById('statProjectedGMV');
    const addedProfitEl = document.getElementById('statAddedProfit');

    if (gmvLiftEl) gmvLiftEl.innerText = `+${gmvLiftPercent}%`;
    if (projGmvEl) projGmvEl.innerText = formatINR(projectedGMV);
    if (addedProfitEl) addedProfitEl.innerText = formatINR(addedProfit);
  },

  initCharts() {
    if (!window.Chart) return;

    // 1. Dynamic Margin vs Static Chart
    const marginCtx = document.getElementById('chartMarginOptimization');
    if (marginCtx) {
      this.charts.margin = new Chart(marginCtx, {
        type: 'line',
        data: {
          labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
          datasets: [
            {
              label: 'RazorPulse AI Dynamic Margin (₹ L)',
              data: [18.2, 23.5, 29.8, 38.4, 46.2, 54.1, 63.8],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              fill: true,
              tension: 0.35,
              borderWidth: 3,
              pointBackgroundColor: '#10b981',
              pointRadius: 4
            },
            {
              label: 'Traditional Static Pricing (₹ L)',
              data: [18.2, 19.4, 21.0, 22.8, 24.1, 25.9, 27.5],
              borderColor: '#64748b',
              backgroundColor: 'transparent',
              borderDash: [5, 5],
              borderWidth: 2,
              tension: 0.1,
              pointRadius: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: '#0a1729',
              borderColor: 'rgba(56, 189, 248, 0.3)',
              borderWidth: 1
            }
          },
          scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#64748b' } },
            y: { 
              grid: { color: 'rgba(255, 255, 255, 0.05)' }, 
              ticks: { color: '#64748b', callback: (v) => `₹${v}L` } 
            }
          }
        }
      });
    }

    // 2. Traffic Distribution (Agent vs Human)
    const trafficCtx = document.getElementById('chartTrafficDistribution');
    if (trafficCtx) {
      this.charts.traffic = new Chart(trafficCtx, {
        type: 'doughnut',
        data: {
          labels: ['Autonomous Buyer Agents', 'Human Browsers (Direct)', 'Assisted Hybrid Checkouts'],
          datasets: [{
            data: [64, 26, 10],
            backgroundColor: ['#0284c7', '#334155', '#8b5cf6'],
            borderColor: '#050b14',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 10 }, boxWidth: 12 }
            }
          },
          cutout: '70%'
        }
      });
    }

    // 3. Drop-off Salvage Rate
    const salvageCtx = document.getElementById('chartSalvageRecovery');
    if (salvageCtx) {
      this.charts.salvage = new Chart(salvageCtx, {
        type: 'bar',
        data: {
          labels: ['Pricing Friction', 'Out of Stock', 'SLA Uncertainty', 'Payment Gateway Hop'],
          datasets: [
            {
              label: 'Without RazorPulse (Baseline Recovery %)',
              data: [8, 4, 11, 14],
              backgroundColor: 'rgba(100, 116, 139, 0.6)',
              borderRadius: 6
            },
            {
              label: 'With RazorPulse AI Growth (% Recovered)',
              data: [44, 38, 52, 61],
              backgroundColor: '#38bdf8',
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 10 } }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#64748b' } },
            y: { 
              grid: { color: 'rgba(255, 255, 255, 0.05)' }, 
              ticks: { color: '#64748b', callback: (v) => `${v}%` } 
            }
          }
        }
      });
    }
  },

  updateCharts() {
    if (!this.charts.margin) return;
    const factor = (this.state.discountHeadroom / 15) * (this.state.marginFloor / 18);
    const updatedData = [18.2, 23.5 * factor, 29.8 * factor, 38.4 * factor, 46.2 * factor, 54.1 * factor, 63.8 * factor];
    this.charts.margin.data.datasets[0].data = updatedData.map(v => Number(v.toFixed(1)));
    this.charts.margin.update();
  },

  renderCharts() {
    setTimeout(() => {
      Object.values(this.charts).forEach(c => {
        if (c && typeof c.resize === 'function') c.resize();
      });
    }, 150);
  },

  simulateTrafficBurst() {
    if (window.SoundEffects) window.SoundEffects.play('token');
    const burstBtn = document.getElementById('simulateBurstBtn');
    if (burstBtn) {
      burstBtn.disabled = true;
      burstBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Injecting Agent Traffic...`;
      if (window.lucide) window.lucide.createIcons();
    }

    setTimeout(() => {
      this.state.simulatedTrafficCount += 1000;
      if (window.RazorPulse) {
        window.RazorPulse.telemetry.autonomousTxns += 482;
        window.RazorPulse.telemetry.totalVolume += 3420000;
      }

      if (this.charts.traffic) {
        this.charts.traffic.data.datasets[0].data = [72, 20, 8];
        this.charts.traffic.update();
      }

      if (window.showToast) {
        window.showToast("⚡ High-Velocity Influx: 1,000 Autonomous Buyer Agents Ingested! 482 Instant Mandate Debits Cleared.", "success", 4000);
      }
      if (window.SoundEffects) window.SoundEffects.play('agree');
      if (window.fireConfetti) window.fireConfetti();

      if (burstBtn) {
        burstBtn.disabled = false;
        burstBtn.innerHTML = `<i data-lucide="zap" class="w-4 h-4"></i> Simulate 1,000 Autonomous Agent Queries`;
        if (window.lucide) window.lucide.createIcons();
      }
    }, 1200);
  },

  triggerAutonomousRestock() {
    if (window.SoundEffects) window.SoundEffects.play('alert');
    const btn = document.getElementById('triggerRestockBtn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Evaluating Supply Chain...`;
      if (window.lucide) window.lucide.createIcons();
    }

    setTimeout(() => {
      if (window.showToast) {
        window.showToast("📦 RazorPulse B2B Restock: Autonomous PO #PO-9021 sent to Supplier Agent via Razorpay Escrow API (₹2,40,000).", "success", 4500);
      }
      if (window.SoundEffects) window.SoundEffects.play('success');

      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i data-lucide="refresh-cw" class="w-4 h-4"></i> Trigger Autonomous B2B Restock PO`;
        if (window.lucide) window.lucide.createIcons();
      }
    }, 1400);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.GrowthDashboard.init();
});
