import { USER_EMAIL, CURRENCIES, ADD_EXPENSE, DELETE_EXPENSE } from './actionsTypes';

export const getUserEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const getExpenseAddition = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,
});

export const deleteExpense = () => ({
  type: DELETE_EXPENSE,
  expense: '',
});
