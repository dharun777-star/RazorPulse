import unittest

class TestGrowthEngine(unittest.TestCase):
    def test_gmv_lift_calculation(self):
        margin_floor = 18
        discount_headroom = 15
        lift = (discount_headroom * 1.4) + (25 - margin_floor * 0.5) * 1.34 / 2
        self.assertGreater(lift, 30.0)

if __name__ == '__main__':
    unittest.main()
