# RazorPulse System Architecture

## Core Architectural Layers

1. **Agent Protocol Layer (AP2)**
   - Schema-validated JSON-RPC communication between Buyer Bot and Merchant Agent.
   - Deterministic budget bounding and category scoping.

2. **Merchant AI Growth Engine**
   - Dynamic margin floor evaluator preventing unprofitable automated concessions.
   - Cart drop-off salvage agent triggering real-time counter-offers.

3. **Settlement & Payment Rails**
   - Direct integration with Razorpay Subscriptions / Mandates for zero-click clearance.
   - Dynamic routing through Razorpay Optimizer.
