import React from 'react';
import { SingleDatePicker } from 'react-dates';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: { value }
  });

  expect(wrapper.state('note')).toBe(value);
});

test('should set amount when input valid', () => {
  const value = '30.42';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount when input invalid', () => {
  const value = '30.422';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date when date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onDateChange')(now);

  expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set calendar focused on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });

  expect(wrapper.state('calendarFocused')).toBe(focused)
});
