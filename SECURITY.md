# Security Policy

## Reporting Vulnerabilities
If you discover a potential vulnerability in **RazorPulse**, please report it immediately to Dharun K via GitHub security advisories or email `dharun404487@gmail.com`.

## Guardrails Implemented
- **Deterministic Server Caps**: Mandate caps are validated independently of client/agent inputs.
- **Anti-Prompt Injection**: Strict schema parsing prevents prompt injections into dynamic pricing algorithms.
- **Biometric Step-Up**: Transactions with significant budget deviations require WebAuthn / Passkey escalation.
