import hmac
import hashlib

def verify_razorpay_signature(payload_bytes, secret, signature):
    computed = hmac.new(secret.encode('utf-8'), payload_bytes, hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, signature)

if __name__ == '__main__':
    secret = "rzp_test_secret_key"
    payload = b'{"event":"payment.agentic.authorized","amount":16650000}'
    sig = hmac.new(secret.encode('utf-8'), payload, hashlib.sha256).hexdigest()
    assert verify_razorpay_signature(payload, secret, sig)
    print("Webhook HMAC-SHA256 signature verification: PASSED")
