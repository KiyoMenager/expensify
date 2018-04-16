import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should setup default filter values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: "-1"
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});


test('should add an expense', () => {
  const expense = { id: '123' };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});


test('should edit an expense', () => {
  const description = 'Updated description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test('should not edit an expense if id is not found', () => {
  const description = 'Updated description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  }

  const state = expensesReducer([expenses[2]], action);
  expect(state).toEqual(expenses);
});
