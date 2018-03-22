import { createStore, combineReducers } from 'redux'

// Expense Reducer

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoStore = {
  expenses: [{
    id: "CjndaJ",
    description: "KarnaSouk",
    note: "This was the final rent at this address",
    amount: 2000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date
    startDate: undefined,
    endDate: undefined
  }
};
