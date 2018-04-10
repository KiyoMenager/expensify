import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit for edit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});

test('should handle onClick for remove', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({
    id: expenses[2].id
  })
});