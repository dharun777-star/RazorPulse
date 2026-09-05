import urllib.request
import sys

def check_health(url="http://localhost:8000/index.html"):
    try:
        req = urllib.request.urlopen(url, timeout=3)
        if req.status == 200:
            print("[HEALTHCHECK] Server is healthy (HTTP 200)")
            return 0
    except Exception as e:
        print(f"[HEALTHCHECK] Probe failed: {e}")
        return 1

if __name__ == '__main__':
    sys.exit(check_health())
