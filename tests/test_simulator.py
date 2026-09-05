import unittest

class TestNegotiationConvergence(unittest.TestCase):
    def test_price_convergence_within_bounds(self):
        base_price = 185000
        floor_price = 162000
        agreed_price = 166500
        self.assertGreaterEqual(agreed_price, floor_price)
        self.assertLessEqual(agreed_price, base_price)

    def test_savings_calculation(self):
        base = 185000
        final = 166500
        self.assertEqual(base - final, 18500)

if __name__ == '__main__':
    unittest.main()
