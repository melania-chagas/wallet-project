export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCIES = 'CURRENCIES';

export const getUserEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});
