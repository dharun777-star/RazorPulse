import http.server
import socketserver
import os
import gzip

PORT = int(os.environ.get("PORT", 8000))

class RazorPulseHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def run():
    print(f"[RazorPulse] Starting server on port {PORT}...")
    with socketserver.TCPServer(("", PORT), RazorPulseHandler) as httpd:
        print(f"[RazorPulse] Live at http://0.0.0.0:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    run()
