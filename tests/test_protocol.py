import unittest

class TestMandateBoundaries(unittest.TestCase):
    def test_spending_within_daily_limit(self):
        daily_cap = 250000
        txn_amount = 166500
        self.assertLessEqual(txn_amount, daily_cap)

    def test_step_up_threshold_trigger(self):
        budget = 100000
        price = 112000
        exceeds_threshold = ((price - budget) / budget) * 100 > 10
        self.assertTrue(exceeds_threshold)

if __name__ == '__main__':
    unittest.main()
