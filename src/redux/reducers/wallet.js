import { CURRENCIES, ADD_EXPENSE } from '../actions/actionsTypes';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: action.currencies };

  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenses] };

  default:
    return state;
  }
}

export default wallet;
