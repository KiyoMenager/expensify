import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  expect(selectExpenseTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(selectExpenseTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  expect(selectExpenseTotal(expenses)).toBe(105166);
});
