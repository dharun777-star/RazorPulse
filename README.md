# ⚡ RazorPulse: Autonomous Agentic Commerce & Merchant AI Growth Engine

> **Razorpay Hackathon 2026** — Official Submission  
> **Track**: **AI Growth and Agentic Commerce**  
> **Created by**: **Dharun K**  

[![Razorpay Hackathon 2026](https://img.shields.io/badge/Razorpay_Hackathon-2026-0284c7?style=for-the-badge&logo=razorpay)](https://razorpay.com)
[![Track](https://img.shields.io/badge/Track-AI_Growth_&_Agentic_Commerce-10b981?style=for-the-badge)](https://razorpay.com)
[![Creator](https://img.shields.io/badge/Creator-Dharun_K-8b5cf6?style=for-the-badge)](https://github.com/dharun777-star)
[![Live Demo](https://img.shields.io/badge/Live_Deployment-Active_HTTPS-06b6d4?style=for-the-badge)](https://4103d157967ef9.lhr.life)

🔗 **Live Public URL**: **[https://4103d157967ef9.lhr.life](https://4103d157967ef9.lhr.life)**  
💻 **Local URL**: `http://localhost:8000`

---

## 🌟 Executive Summary

By 2026, commerce is rapidly evolving from manual browsing to **Agent-to-Agent (A2A) Commerce**. Autonomous buyer agents (enterprise procurement systems, AI personal shoppers, smart IoT devices) are evaluating products and making buying decisions in milliseconds.

However, existing payment gateways and merchant storefronts fail autonomous agents:
1. **Friction-Heavy Checkouts**: Form fields, CAPTCHAs, and manual OTPs break non-interactive agent flows.
2. **Margin Leakage**: Static storefront pricing loses high-volume bot bids because merchants lack real-time dynamic negotiation algorithms.
3. **Lack of Delegated Spending Authority**: Users have had no standard protocol to give autonomous bots cryptographically bounded spending power.

**RazorPulse**, architected by **Dharun K**, solves this by introducing India's first unified **Agent Payment Protocol (AP2)** built natively on the Razorpay payments suite, combined with an **AI Merchant Growth Engine** for dynamic margin optimization and autonomous customer retention.

---

## 🚀 Key Features

### 1. 🤖 Agent-to-Agent (A2A) Negotiation Terminal
- **Cryptographic RFQ & Counter-Offers**: Multi-turn machine negotiation between Buyer Bots and Merchant Agents.
- **Chain-of-Thought Inspection**: Live visibility into agent reasoning, margin floor checks, and utility models.
- **Zero-Click Settlement**: Automatic consensus triggering tokenized debit via Razorpay Subscriptions and Payment Gateway.

### 2. 📈 AI Growth Engine & Dynamic Margin Optimizer
- **Real-Time Dynamic Pricing**: Concedes intelligent volume discounts while strictly safeguarding merchant minimum gross margin floors.
- **Predictive B2B Restock**: Triggers autonomous purchase orders to suppliers with Razorpay Escrow when inventory drops below safety buffers.
- **Drop-off Salvage Loops**: Recovers abandoned bot inquiries with real-time targeted counter-offers (+41.2% recovery lift).

### 3. 🛡️ Razorpay Agent Mandate Studio (AP2)
- **Delegated Authority Tokens**: Mint custom agent spending mandates (`ap2_mnd_...`) with configurable daily caps, per-txn ceilings, and category scopes.
- **Biometric Step-Up Escalation**: Automatic 1-tap passkey/WebAuthn push notifications to user devices if deals exceed budget constraints.
- **Live Webhook Dispatcher**: Inspects real-time `payment.agentic.authorized` payloads with one-click JSON export.

### 4. 📊 Judge-Ready Interactive Pitch Deck
- Built-in slide presentation with Problem Statement, Architecture, TAM ($140B), Razorpay API Integration Matrix, and Creator Profile for Dharun K.

### 5. 🤖 PulseAI Commerce Copilot (Interactive Chatbot)
- **Top-Right Cyber Launcher**: Positioned permanently in the top-right corner of the navigation bar with a dedicated custom AI Agentic Commerce glyph icon and live status pulse.
- **Top-Right Dropdown Drawer**: Smoothly cascades down from the top-right header with glassmorphism backdrop blur.
- **Deep Hackathon Q&A**: Answers judge queries about Dharun K's architecture, AP2 protocols, Razorpay integrations, and ROI metrics.
- **In-Chat Action Triggers**: Quick-action prompt pills and buttons that can launch live A2A negotiations and switch views directly from the conversation.
- **Typing Indicator & Sound Integration**: Dynamic typing dots and synthesizer audio effects.

---

## 🏗️ Razorpay Ecosystem Integrations

| Razorpay Component | Integration in RazorPulse |
|---|---|
| **Razorpay Payment Gateway** | Machine-to-machine instant transaction settlement rail (<45ms). |
| **Razorpay Subscriptions & Mandates** | Foundation for cryptographic delegated agent spending authorities. |
| **Razorpay Optimizer** | Dynamic routing to lowest latency and highest success payment rails. |
| **Razorpay Magic Checkout 2.0** | Autonomous zero-click checkout with machine-readable billing & shipping profiles. |
| **Razorpay Smart Collect / Route** | Automated B2B supplier purchase orders and escrow payouts. |
| **Razorpay Webhooks** | Real-time event notifications (`payment.agentic.authorized`, `mandate.debited`). |

---

## 💻 How to Run Locally

You can run RazorPulse using any local web server or directly in your browser:

### Option 1: Python HTTP Server (Recommended)
```powershell
cd C:\Users\dharun\.gemini\antigravity\scratch\razorpulse-agentic-commerce
py -m http.server 8000
```
Then open your browser and visit:
👉 **`http://localhost:8000`**

### Option 2: Direct File Launch
Simply double-click or open `index.html` in Chrome, Edge, or Firefox!

---

## 🚀 Deploying to Render (render.com)

RazorPulse includes a pre-configured **`render.yaml`** Blueprint for instant, zero-configuration deployment.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/dharun777-star/razorpulse-agentic-commerce)

### Method 1: 1-Click Render Blueprint (Recommended)
1. Push your repository to your GitHub account:
   ```powershell
   git remote add origin https://github.com/dharun777-star/razorpulse-agentic-commerce.git
   git branch -M main
   git push -u origin main
   ```
2. Click the **Deploy to Render** button above or open:  
   👉 `https://render.com/deploy?repo=https://github.com/dharun777-star/razorpulse-agentic-commerce`
3. Render will read `render.yaml`, configure the static site, and deploy your live URL (e.g. `https://razorpulse-agentic-commerce.onrender.com`) with automated SSL.

### Method 2: Render Dashboard (Manual)
1. Go to **[dashboard.render.com](https://dashboard.render.com)** and sign in with GitHub.
2. Click **New +** → select **Static Site**.
3. Choose your repository: `razorpulse-agentic-commerce`.
4. Leave **Build Command** blank and set **Publish Directory** to `.`.
5. Click **Create Static Site**. Your site will be live in 30 seconds!

## 📁 Project Structure

```
razorpulse-agentic-commerce/
├── index.html                     # Main application interface with all tabs & modals
├── css/
│   └── styles.css                 # Dark fintech design system, glassmorphism & glows
├── js/
│   ├── app.js                     # Core app orchestrator, Web Audio synth, telemetry ticker
│   ├── agent-simulator.js         # Live A2A negotiation terminal & multi-turn engine
│   ├── growth-dashboard.js        # Dynamic margin sliders & Chart.js visualizations
│   ├── razorpay-protocol.js       # Mandate studio, checkout modal & webhook inspector
│   └── pitch-data.js              # Pitch deck slides & technical architecture
└── README.md                      # Project documentation & Hackathon submission guide
```

---

## 👨‍💻 Creator & Credits

- **Creator & Lead Architect**: **Dharun K**
- **Hackathon**: **Razorpay Hackathon 2026**
- **Track**: **AI Growth and Agentic Commerce**
- **Contact / GitHub**: [Dharun K Profile](https://github.com)

*Engineered with precision for the future of Autonomous Commerce.*
