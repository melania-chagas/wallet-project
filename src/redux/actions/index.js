import { USER_EMAIL, CURRENCIES, ADD_EXPENSES } from './actionsTypes';

export const getUserEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const getExpenseAddition = (expenses) => ({
  type: ADD_EXPENSES,
  expenses,
});
