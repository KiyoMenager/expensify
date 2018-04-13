import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {formattedTotal}
      </h1>
    </div>
  );
};
