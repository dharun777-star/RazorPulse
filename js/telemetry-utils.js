/**
 * RazorPulse: Telemetry Aggregator
 * Creator: Dharun K
 */
window.TelemetryUtils = {
  recordEvent(eventName, metadata = {}) {
    const eventObj = {
      event: eventName,
      timestamp: Date.now(),
      metadata: metadata
    };
    if (window.RazorPulse) {
      window.RazorPulse.telemetry.autonomousTxns += 1;
    }
    return eventObj;
  }
};
