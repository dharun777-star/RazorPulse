/**
 * RazorPulse: Cryptographic Simulation Helpers
 * Creator: Dharun K
 */
window.CryptoUtils = {
  async generateSha256(str) {
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },
  generateToken(prefix = 'ap2_mnd') {
    return `${prefix}_${Math.random().toString(36).substring(2, 10)}`;
  }
};
